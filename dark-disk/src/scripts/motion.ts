/**
 * Motion runtime — Macedo Neto
 * - Revela elementos [data-reveal], [data-reveal-mask], [data-reveal-clip], .led-frame
 *   uma única vez quando entram na tela (IntersectionObserver).
 * - Compacta o header após 80px de rolagem.
 * - Marca a intro do hero como vista na sessão (M1 toca uma vez).
 * Sem dependências. Ver DESIGN.md §6.
 */

const REVEAL_SELECTOR = "[data-reveal], [data-reveal-mask], [data-reveal-clip], .led-frame, [data-draw]";
const HEADER_COMPACT_AT = 80;
const INTRO_KEY = "mn-intro";

function assignStaggerIndexes(root: ParentNode): void {
  root.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
    Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]")).forEach((el, index) => {
      if (!el.style.getPropertyValue("--i")) el.style.setProperty("--i", String(Math.min(index, 6)));
    });
  });
}

function revealAll(elements: Iterable<Element>): void {
  for (const el of elements) el.classList.add("is-in");
}

function initReveal(): void {
  const elements = document.querySelectorAll(REVEAL_SELECTOR);
  if (!("IntersectionObserver" in window)) {
    revealAll(elements);
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target); // anima uma vez só
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
  );
  elements.forEach((el) => observer.observe(el));
}

function initHeader(): void {
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  if (!header) return;
  let ticking = false;
  const update = () => {
    header.toggleAttribute("data-compact", window.scrollY > HEADER_COMPACT_AT);
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
  update();
}

function markIntroSeen(): void {
  try {
    sessionStorage.setItem(INTRO_KEY, "1");
  } catch {
    // sessionStorage indisponível (modo privado): a intro apenas toca de novo.
  }
}

function init(): void {
  try {
    assignStaggerIndexes(document);
    initReveal();
    initHeader();
    markIntroSeen();
    document.documentElement.classList.add("motion-ready");
  } catch (error) {
    // Falha no motion nunca pode esconder conteúdo.
    document.documentElement.classList.add("motion-fallback");
    console.error("[motion] falha ao iniciar; conteúdo exibido sem animação.", error);
  }
}

init();
