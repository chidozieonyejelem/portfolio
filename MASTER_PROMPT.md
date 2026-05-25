# Master Build Spec — chidozieportfolio

This is the design + build specification this project was generated from. It is a
personal portfolio + link-in-bio hub for Chidozie, deploying to the Vercel free tier.

> **Note on this copy.** The original prompt specified TypeScript. The project was
> built in **plain JavaScript** at the owner's request, so every reference below has
> been updated to JavaScript (`.js` files, `jsconfig.json`, no type annotations).
> A couple of other deviations were made to match **Next.js 16** conventions and are
> called out inline.

## Changes since initial build

The sections below describe the original spec. The live site has since diverged:

- **Hero** is centered; the avatar is large (~500px, responsive); the headline is
  three lines — name / field of study / role (`Chidozie Onyejelem` / `Computer Science`
  / `Student`). The "Open to opportunities" status pill was removed.
- **"Selected Work" renamed to "My Work"**, populated with real projects.
- **Repositories section removed.** The live GitHub API fetch (`lib/github.js`), the
  `github` config object, the `GITHUB_TOKEN` env var, and `.env.example`/`.env.local`
  are all gone. In its place is a static **Tech Stack** section driven by `techStack`
  in `lib/content.js`. The site now needs **no environment variables**.
- **Contact ("Get in touch") section removed** — all links live in the hero.
- **About** no longer repeats the stack inline (it has its own section now).
- Social links: order is LinkedIn → GitHub → Email → CV; all point to real URLs.

## 0. Stack

- **Next.js 16** (App Router, React 19) — **JavaScript** (the original spec said
  Next 15 + TypeScript; `create-next-app@latest` installs Next 16, and the language
  was switched to JavaScript).
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config` file — use `@theme` in `globals.css`).
- **lucide-react** for icons.
- **next/font** for typography — no external font CDN calls.
- **pnpm** as the package manager.

Created with:

```bash
pnpm create next-app@latest chidozieportfolio --js --tailwind --app --no-src-dir --import-alias "@/*" --turbopack --eslint
cd chidozieportfolio
pnpm add lucide-react @vercel/analytics clsx tailwind-merge
```

> **Deviation — OG images & shadcn.** The original spec installed `@vercel/og` and ran
> `shadcn init` + `shadcn add button`. Next 16 ships `ImageResponse` natively in
> `next/og`, so `@vercel/og` is unnecessary and was dropped. The shadcn Button was never
> used by the design (which is hand-built), so shadcn was skipped entirely; the only
> thing it would have provided — the `cn()` helper — is supplied by `lib/utils.js`
> (`clsx` + `tailwind-merge`).

## 1. Design system

**Colors — pure black and white only, no greys for chrome:**

- Page background: `#ffffff`
- Header / footer background: `#000000`, text `#ffffff`, muted `#a1a1a1`
- Body text: `#000000`
- Body muted text (descriptions, captions, metadata): `#737373` (and `#525252` for bio prose)
- Borders / dividers: `#e5e5e5` at `0.5px` width
- Pill buttons in hero: `#000000` bg, `#ffffff` text, fully rounded
- Focus ring: `2px solid #000000` with `2px` offset

No dark mode. No theme toggle. No `next-themes`.

**Typography:**

- Sans (everything visible): **Inter** via `next/font/google`, weights `400 500`,
  `display: 'swap'`, exposed as CSS variable `--font-inter`.
- Mono (metadata, timestamps, numbers, the location tag, section labels, numeric
  prefixes like `001`): **JetBrains Mono** via `next/font/google`, weights `400 500`,
  exposed as `--font-jetbrains-mono`.
- Both variables are mapped to Tailwind's `--font-sans` / `--font-mono` via
  `@theme inline` in `globals.css`. `font-sans` is applied to `<body>`.

**Type scale:**

- Hero name: `clamp(40px, 8vw, 72px)`, weight 500, line-height `0.95`, letter-spacing `-0.04em`
- Hero italic line: same size, italic, weight 400, color `#737373`
- Bio paragraph: `15px`, line-height `1.6`, color `#525252`, max-width `460px`
- Section labels (uppercase): `12px`, weight 500, letter-spacing `0.12em`, mono, color `#737373`
- Work row title: `17px`, weight 500, letter-spacing `-0.02em`
- Work row description: `13px`, color `#737373`
- Work row number/year: `11px`, mono, color `#737373`
- Nav links: `13px`, color `#a1a1a1`, hover `#ffffff`
- Pill button: `13px`, padding `8px 16px`

**Spacing rhythm:**

- Page horizontal padding: `clamp(20px, 5vw, 48px)`
- Section vertical padding: `clamp(48px, 8vw, 96px)`
- Hero top padding: `clamp(64px, 10vw, 120px)`
- Work rows: `18px` vertical padding, `0.5px solid #e5e5e5` top border, hover slides
  right `8px` via `padding-left` over `0.25s ease`

**Layout:**

- Single page, anchor-linked sections.
- Max content width: `880px`, centered.
- `scroll-behavior: smooth` + `scroll-padding-top: 80px` on `<html>` to offset the sticky header.
- Sticky black header; black footer in normal flow at the bottom.
- Fully responsive; the location tag hides below `480px` (`sm`).

**Motion:** hover slide on work rows, `opacity` fade on pills, CSS smooth scroll.
No animation libraries.

## 2. Structure — single page with scroll-to-section nav

Everything renders on `app/page.js`. Section order:

1. **Sticky header** — monogram (`site.monogram`) left, nav (`work`, `repos`, `about`,
   `contact`) centered, `Dublin, Ireland` right (hidden `< 480px`).
2. **Hero** (`#top`) — circular avatar (80px), status pill, 3-line headline (with an
   italic muted middle line), bio paragraph, pill row of social links.
3. **Selected Work** (`#work`) — `SELECTED WORK` label + count, numbered rows.
4. **Repositories** (`#repos`) — `REPOSITORIES` label + `GitHub ↗` link, numbered rows
   in the same style, with `★ stars · language` metadata under each description.
5. **About** (`#about`) — long bio + dot-separated stack line.
6. **Contact** (`#contact`) — "Get in touch" heading, invitation, repeated pill row.
7. **Footer** — `STACK` label + stack list (left), `© {year} {fullName}` (right).

## 3. File structure

```
chidozieportfolio/
├── app/
│   ├── layout.js              # Root layout, fonts, metadata, Analytics, header/footer
│   ├── page.js                # The single-page site
│   ├── globals.css            # Tailwind v4 @theme + scroll/selection/focus styles
│   ├── opengraph-image.js     # Dynamic OG image via next/og
│   ├── twitter-image.js       # Re-export of the OG image for Twitter cards
│   ├── robots.js              # Static robots config
│   ├── sitemap.js             # Static sitemap
│   ├── uses/page.js           # Placeholder page
│   └── now/page.js            # Placeholder page
├── components/
│   ├── site-header.js
│   ├── site-footer.js
│   ├── hero.js
│   ├── pill-link.js
│   ├── status-pill.js
│   ├── section-header.js
│   ├── work-row.js
│   ├── selected-work.js
│   ├── repos-section.js
│   ├── about-section.js
│   └── contact-section.js
├── lib/
│   ├── content.js             # ALL content — single source of truth
│   ├── github.js              # GitHub API fetch with ISR caching
│   └── utils.js               # cn() helper
├── public/
│   ├── avatar.jpg             # Placeholder — drop the real square photo here
│   └── resume.pdf             # Empty placeholder — replace later
├── .env.example
├── .env.local                 # gitignored
├── next.config.mjs
├── jsconfig.json
├── README.md
└── MASTER_PROMPT.md           # this file
```

## 4. Content — `lib/content.js`

Single source of truth: `site`, `socialLinks`, `selectedWork`, and the `github` config
object. All placeholders are marked with `PLACEHOLDER`. The owner edits this one file to
update the site.

## 5. GitHub fetching — `lib/github.js`

- Server-side only, via `getRepos()`.
- `fetch` with `{ next: { revalidate: 21600 } }` (6 hours).
- Sends `Authorization: Bearer ${GITHUB_TOKEN}` when the env var is set (60 → 5000/hr).
- Endpoint: `https://api.github.com/users/{username}/repos?per_page=100&sort=updated`.
- Merges all `github.usernames`, de-dupes by id, applies `excludeForks`,
  `excludeArchived`, `minStars`, `hidden`; floats `pinned` to the top; sorts by
  `sortBy`; caps at `maxResults`.
- Robust: returns `[]` on any error so the section renders an empty state and the build
  never breaks. Each repo is mapped to `{ id, name, fullName, description, url, homepage,
  stars, language, updatedAt, year }`.

## 6–9. Components, styles, layout, page

Component contracts are implemented in `components/*`. `globals.css` holds the Tailwind v4
`@theme inline` font mapping plus the `html`/`body`/`::selection`/`:focus-visible` rules.
`app/layout.js` loads the fonts, sets metadata (OpenGraph + Twitter, `metadataBase`),
renders `<SiteHeader/> {children} <SiteFooter/> <Analytics/>`. `app/page.js` composes the
sections inside `<main className="mx-auto max-w-[880px] px-[clamp(20px,5vw,48px)]">`.

## 10. OG image — `app/opengraph-image.js`

Uses `ImageResponse` from **`next/og`** (Next 16's built-in; the original spec used
`@vercel/og` + `runtime = "edge"`, both now unnecessary). 1200×630, black background,
white name + "Software Engineer" + URL footer line. `next/og` ships a default font, so no
font loading is required for v1.

## 11. `/uses` and `/now`

Minimal placeholder pages that inherit the root layout's header/footer, each with a hero-
style H1, a placeholder paragraph, and a `Last updated:` line in mono.

## 12. `robots.js` and `sitemap.js`

`robots`: allow all, point to `${site.url}/sitemap.xml`. `sitemap`: lists `/`, `/uses`, `/now`.

## 13. Env

`.env.example` and `.env.local` both carry an empty `GITHUB_TOKEN=` with setup comments.
`.env.local` is gitignored; `.env.example` is committed.

## 14. `next.config.mjs`

Allows `avatars.githubusercontent.com` and `github.com` in `images.remotePatterns`.

## Final rules

- `const` + named exports throughout; default exports only where Next.js requires them
  (page, layout, OG image, robots, sitemap).
- No external image hosts beyond those in `next.config.mjs`.
- No dark mode. No Framer Motion / GSAP / animation libraries.
- Comments only where genuinely helpful.
