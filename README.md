# Shopify Landing Page Clone

A pixel-faithful recreation of the Shopify landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✅ Shopify header with responsive CTA
- ✅ Hero section with floating label email form
- ✅ Infinite brand logo marquee animation
- ✅ Fully responsive (mobile + desktop)
- ✅ Ready to deploy on Vercel

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)

```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**

No environment variables are needed.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles + Tailwind base
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page
├── components/
│   └── ui/
│       ├── shopify-header.tsx
│       └── shopify-hero.tsx
└── lib/
    └── utils.ts          # cn() helper
```

## Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) — Class merging
