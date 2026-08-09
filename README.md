# Portfolio Website

Personal portfolio and blog for Sandaruwan Pathirana, built with Astro.

<a href="https://sandaruwanp.com" target="_blank">Live Website</a>

## Stack

- [Astro](https://astro.build) — static site generation, content collections, file-based routing
- Hand-built design system — three-font type system (Source Serif 4 / Inter / JetBrains Mono), fluid type and spacing scale via `clamp()`, light/dark theming
- Deployed on Cloudflare Pages

## Project structure

```text
/
├── public/               static assets, favicon
├── src/
│   ├── components/       ComponentName/ComponentName.astro pattern
│   ├── content/          blog posts and project write-ups (Markdown)
│   ├── content.config.ts content collection schemas
│   ├── layouts/          BaseLayout.astro (page shell, nav, footer)
│   ├── pages/             file-based routes
│   ├── scripts/          client-side scripts (code-copy, etc.)
│   └── styles/            design tokens, reset, global styles
└── package.json
```

## Commands

All commands run from the root of the project:

| Command                  | Action                                 |
| :----------------------- | :------------------------------------- |
| `npm install`            | Install dependencies                   |
| `astro dev --background` | Start the dev server in the background |
| `astro dev stop`         | Stop the background dev server         |
| `astro dev status`       | Check dev server status                |
| `astro dev logs`         | View dev server logs                   |
| `npm run build`          | Build the production site to `./dist/` |
| `npm run preview`        | Preview the production build locally   |
