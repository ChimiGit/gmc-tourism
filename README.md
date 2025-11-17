# GMC Tourism · Astro + Tailwind Starter

Lightning-fast tourism starter built with Astro 5, Tailwind CSS 4, and MDX. Everything is preconfigured for high Core Web Vitals, modern SEO, and a clean authoring workflow.

## ✨ Highlights

- Astro islands with zero-JS by default and HTML compression enabled
- Tailwind 4 theme tokens, global typography, and gradient-rich hero sections
- MDX content collections with sample blog post and reusable callout components
- SEO-ready layout with structured data, canonical URLs, and social preview image
- Font Awesome icons, Google Fonts, sitemap, and robots configuration baked in

## 📁 Project Structure

```text
/
├── public/
│   ├── images/og-default.svg
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Seo.astro
│   │   └── mdx/
│   │       ├── Callout.astro
│   │       └── Prose.astro
│   ├── config/site.ts
│   ├── content/
│   │   ├── blog/
│   │   │   └── astro-starter.mdx
│   │   └── config.ts
│   ├── layouts/Layout.astro
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   └── index.astro
│   └── styles/global.css
├── astro.config.mjs
├── tailwind.config.ts
└── package.json
```

## 🚀 Getting Started

```sh
pnpm install
pnpm dev       # http://localhost:4321
```

### Useful Scripts

| Command        | Description                              |
| :------------- | :--------------------------------------- |
| `pnpm dev`     | Start the local development server       |
| `pnpm build`   | Build production assets to `dist/`       |
| `pnpm preview` | Preview the production build locally     |
| `pnpm check`   | Run `astro check` for diagnostics        |

## ✍️ Authoring Content

- Duplicate `src/content/blog/astro-starter.mdx` for new travel stories.
- Frontmatter is validated via `src/content/config.ts` for consistent metadata.
- Use MDX components like `<Callout />` and `<Prose />` to enrich storytelling.
- Blog pages are generated automatically through `src/pages/blog/[slug].astro`.

## 🌐 SEO & Performance

- `src/layouts/Layout.astro` centralizes metadata, Open Graph, and structured data.
- `astro.config.mjs` enables HTML compression, MDX, and automatic sitemap generation.
- `public/robots.txt` references the generated sitemap at build time.
- Shared typography, gradients, and utilities live in `src/styles/global.css`.

## 📦 Tech Stack

- Astro 5
- Tailwind CSS 4 (standalone config in `tailwind.config.ts`)
- MDX via `@astrojs/mdx`
- Font Awesome Free icons
- pnpm for package management

Deploy the `dist/` directory to your preferred static host (Vercel, Netlify, Cloudflare Pages, etc.) once you are ready to launch. Let’s build unforgettable journeys!*** End Patch
