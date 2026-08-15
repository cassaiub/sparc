# sparc-site

Landing site of **IUB-SPARC** (IUB Space and Astronomy Club) at
**[sparc.cassa.bd](https://sparc.cassa.bd)** — a coming-soon page carrying the
club's founding **Expression of Interest** call while official recognition
under DoSA is in progress.

- Static [Astro](https://astro.build) site, no framework JS (one tiny inline
  countdown script).
- The EOI form itself lives in Inside:
  <https://inside.cassa.bd/forms/general/2026-08-15-a> (IUB emails only,
  closes 8 September 2026, filed under the IUB-SPARC program).

## Develop

```bash
npm install
npm run dev        # http://localhost:2029
npm run build      # → dist/
```

## Deploy

Push to `main` → GitHub Actions builds and rsyncs `dist/` to
`~/sparc.cassa.bd/` on Bluehost (the subdomain's document root, outside
`public_html` on purpose — see `.github/workflows/deploy.yml`). **A push to
`main` is a live production deploy.**
