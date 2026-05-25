# chidozieportfolio

A single-page developer portfolio and link-in-bio hub — black & white, quiet, fast. Built with Next.js (App Router) and Tailwind CSS v4, deployed on Vercel.

## Live

https://chidozieportfolio.vercel.app

## Tech stack

- **Next.js 16** (App Router, React 19) — JavaScript, no TypeScript
- **Tailwind CSS v4** (CSS-first `@theme`, no config file)
- **next/font** (Inter + JetBrains Mono, self-hosted)
- **lucide-react** (icons)
- **next/og** (dynamic Open Graph / Twitter image)
- **@vercel/analytics**
- **pnpm** + **ESLint**

## Sections

A single page: hero (avatar, name, links), **My Work**, **Tech Stack**, and **About**.

## Quickstart

```bash
pnpm install
pnpm dev
# open http://localhost:3000
```

## Updating content

Everything lives in **`lib/content.js`** — the single source of truth for all text, links, projects, and tech stack. Edit that one file to update the site.

- Drop your photo at `public/avatar.jpg` (square, min 200×200).
- Drop your CV at `public/cv.pdf`.

## Build & deploy

```bash
pnpm build   # production build
pnpm lint    # eslint
```

Deployed on Vercel and connected to this GitHub repo — every push to `main` auto-deploys. No environment variables required.

## Build spec

See [`MASTER_PROMPT.md`](./MASTER_PROMPT.md) for the original design + build specification and the changes made since.
