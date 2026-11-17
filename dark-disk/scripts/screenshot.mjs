// Screenshot + checagem de overflow com Chrome headless via CDP (sem dependências).
// Uso: node scripts/screenshot.mjs <url> <largura> <altura> <saida.png> [espera_ms]
// Imprime {vw, sw, wide}: sw > vw indica rolagem horizontal; wide lista elementos que passam da tela.
import { spawn } from "node:child_process";
import { writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const [url, width, height, out, waitMs = "4500"] = process.argv.slice(2);
if (!url || !width || !height || !out) {
  console.error("Uso: node scripts/screenshot.mjs <url> <largura> <altura> <saida.png> [espera_ms]");
  process.exit(1);
}

const PORT = 9333;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const chrome = spawn(
  "google-chrome",
  ["--headless=new", "--no-sandbox", "--disable-gpu", `--remote-debugging-port=${PORT}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), "chrome-"))}`, "about:blank"],
  { stdio: "ignore" },
);

try {
  let wsUrl;
  for (let i = 0; i < 40 && !wsUrl; i++) {
    try {
      const targets = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json();
      wsUrl = targets.find((t) => t.type === "page")?.webSocketDebuggerUrl;
    } catch {
      // Chrome ainda iniciando
    }
    if (!wsUrl) await sleep(250);
  }
  if (!wsUrl) throw new Error("Chrome não abriu a porta de depuração.");

  const socket = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  let nextId = 0;
  const pending = new Map();
  socket.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (pending.has(msg.id)) { pending.get(msg.id)(msg.result); pending.delete(msg.id); }
  };
  const send = (method, params = {}) =>
    new Promise((resolve) => { const id = ++nextId; pending.set(id, resolve); socket.send(JSON.stringify({ id, method, params })); });

  await send("Emulation.setDeviceMetricsOverride", { width: +width, height: +height, deviceScaleFactor: 1, mobile: +width < 600 });
  await send("Page.enable");
  await send("Page.navigate", { url });
  await sleep(+waitMs);

  const metrics = await send("Runtime.evaluate", {
    returnByValue: true,
    expression: `JSON.stringify({ vw: innerWidth, sw: document.documentElement.scrollWidth,
      wide: [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1)
        .slice(0, 8).map(e => e.tagName + '.' + [...e.classList].join('.') + ' r=' + Math.round(e.getBoundingClientRect().right)) })`,
  });
  console.log(metrics.result.value);

  const shot = await send("Page.captureScreenshot", { format: "png" });
  writeFileSync(out, Buffer.from(shot.data, "base64"));
  socket.close();
} catch (error) {
  console.error("[screenshot]", error instanceof Error ? error.message : error);
  process.exitCode = 1;
} finally {
  chrome.kill();
}
