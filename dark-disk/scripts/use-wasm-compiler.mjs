// The native Astro compiler binary requires AVX2. On CPUs without it (e.g. Intel
// Sandy Bridge), loading it crashes Node with "Illegal instruction".
// On such machines this postinstall step installs the WebAssembly build of the
// compiler and removes the native one, so @astrojs/compiler-binding falls back
// to WASM automatically. On modern CPUs it does nothing.
import { readFileSync, rmSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const BINDING_PKG = 'node_modules/@astrojs/compiler-binding/package.json';
const NATIVE_DIR = 'node_modules/@astrojs/compiler-binding-linux-x64-gnu';
const WASM_NAME = '@astrojs/compiler-binding-wasm32-wasi';

function cpuHasAvx2() {
  try {
    return /\bavx2\b/.test(readFileSync('/proc/cpuinfo', 'utf8'));
  } catch {
    return true; // unreadable: assume a modern CPU and keep the native binary
  }
}

function installWasmCompiler() {
  const { version } = JSON.parse(readFileSync(BINDING_PKG, 'utf8'));
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  // --force bypasses the package's "cpu: wasm32" restriction;
  // --ignore-scripts keeps this postinstall from running recursively.
  execFileSync(
    npm,
    ['install', '--no-save', '--force', '--ignore-scripts', `${WASM_NAME}@${version}`],
    { stdio: 'inherit' }
  );
}

if (process.platform === 'linux' && existsSync(NATIVE_DIR) && !cpuHasAvx2()) {
  console.log('[use-wasm-compiler] CPU lacks AVX2: switching to the WebAssembly Astro compiler.');
  try {
    installWasmCompiler();
    rmSync(NATIVE_DIR, { recursive: true, force: true });
  } catch (err) {
    console.error('[use-wasm-compiler] Failed to install the WASM compiler:', err.message);
    process.exitCode = 1;
  }
}
