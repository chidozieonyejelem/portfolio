# chidozieportfolio

A single-page developer portfolio and link-in-bio hub — black & white, quiet, fast. Built with Next.js (App Router) and Tailwind CSS v4, deploying to Vercel.

## Live

https://chidozieportfolio.vercel.app <!-- update after deploy -->

## Tech stack

- **Next.js 16** (App Router, React 19) — JavaScript, no TypeScript
- **Tailwind CSS v4** (CSS-first `@theme`, no config file)
- **next/font** (Inter + JetBrains Mono, self-hosted)
- **lucide-react** (icons)
- **next/og** (dynamic Open Graph / Twitter image)
- **@vercel/analytics**
- **pnpm** + **ESLint**

## Quickstart

```bash
pnpm install
pnpm dev
# open http://localhost:3000
```

## Updating content

Everything lives in **`lib/content.js`** — the single source of truth for all text, links, and projects. Edit that one file to update the site.

- Drop your photo at `public/avatar.jpg` (square, min 200×200).
- Drop your CV at `public/resume.pdf`.

## GitHub token (optional)

The Repositories section pulls public repos from the GitHub API. Without a token you get 60 requests/hour; with one, 5000/hour.

1. Create a fine-grained PAT at https://github.com/settings/tokens?type=beta with public-repo read access.
2. Add it to `.env.local`: `GITHUB_TOKEN=...`
3. Add the same variable to your Vercel project's environment variables.

The section fails gracefully (shows an empty state) if the API is unreachable, so the build never breaks.

## Build & deploy

```bash
pnpm build   # production build
pnpm lint    # eslint
```

Deploy via the `vercel` CLI or by importing the repo on vercel.com. Remember to set `GITHUB_TOKEN` in the Vercel dashboard.

## Build spec

See [`MASTER_PROMPT.md`](./MASTER_PROMPT.md) for the full design + build specification this project was generated from.
