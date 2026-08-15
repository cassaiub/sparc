# CLAUDE.md

This file guides Claude Code when working in this repository.

## What this is

`sparc-site` — the public landing site of **IUB-SPARC** (IUB Space and
Astronomy Club) at **sparc.cassa.bd**. One static Astro page: a coming-soon
hero plus the founding **Expression of Interest** call. The EOI form is NOT
here — it lives in the separate `inside` project at
`https://inside.cassa.bd/forms/general/2026-08-15-a` (IUB-email-only, filed
under the IUB-SPARC program there).

## Status honesty (important)

IUB-SPARC is **not yet a registered club**. It is applying for official
recognition under IUB's Division of Student Activities (DoSA), with CASSA as
academic authority; recognition needs 150 documented founding members (the
purpose of the EOI form). Never write copy implying the club is already
official until the user says recognition is granted.

## Commands

```bash
npm install
npm run dev      # dev server on http://localhost:2029 (pinned in astro.config.mjs)
npm run build    # → dist/
```

Port scheme across sibling repos: cassa 2026 · ast100 2027 · durbin 2028 ·
**sparc 2029**.

## Deploy — push to main IS production

`.github/workflows/deploy.yml` builds and rsyncs `dist/` (with `--delete`) to
`~/sparc.cassa.bd/` on Bluehost — the subdomain's document root, kept OUTSIDE
`public_html` (durbin.cc pattern) so the `cassa` root deploy and this one can
never touch each other's files. Secrets are the shared `BLUEHOST_*` set used
by cassa/ast100/durbin. **Never push to `main` without an explicit request.**

## Conventions

- Astro 6, static output, `base: '/'` (own subdomain — no base-path helpers
  needed, unlike ast100).
- Design: CASSA family palette (deep night `#0b1026`, warm gold `#ecb45a`,
  cyan `#5ec8d6`), Space Grotesk display + Space Mono utility type, CSS-only
  starfield. Respect `prefers-reduced-motion`.
- English only. Keep the page self-contained; the only external requests are
  Google Fonts.
