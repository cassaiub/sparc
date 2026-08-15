import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sparc.cassa.bd",
  base: "/",
  // One port per CASSA repo so several dev servers coexist on this box:
  // cassa 2026 · ast100 2027 · durbin 2028 · sparc 2029.
  server: { port: 2029 },
});
