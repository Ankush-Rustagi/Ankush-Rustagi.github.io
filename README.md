# ankush-rustagi.github.io

Landing page and hub for my prototypes, canvases, and experiments.

Live at https://ankush-rustagi.github.io/

## Stack

- Vite + React + TypeScript
- Plain CSS with light/dark mode via `prefers-color-scheme`
- Deployed to GitHub Pages via GitHub Actions on every push to `main`

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Adding a new entry

Each prototype is a row in `src/data/prototypes.ts`. To add one:

1. Build and publish the prototype as its own repo (e.g. `chart-demo`)
2. Enable GitHub Pages on that repo so it serves at `https://ankush-rustagi.github.io/chart-demo/`
3. Add an entry to `src/data/prototypes.ts`:

```ts
{
  slug: 'chart-demo',
  title: 'Command Chart Explorer',
  description: 'Interactive Highcharts gallery for Command analytics.',
  href: '/chart-demo/',
  category: 'canvas',
  status: 'live',
  date: '2026-05-16',
  tags: ['highcharts', 'analytics'],
}
```

4. Commit and push to `main`. The GitHub Actions workflow rebuilds and redeploys automatically.

## Field reference

- `slug` — unique key for the entry
- `title` — display name
- `description` — one-sentence summary, shown on the card
- `href` — relative path (`/chart-demo/`) for hosted prototypes, or a full URL for external links
- `category` — one of: `canvas`, `storybook`, `dashboard`, `prototype`, `tool`, `writeup`
- `status` — one of: `live`, `wip`, `archived`
- `date` — ISO date (`YYYY-MM-DD`) of last meaningful update
- `tags` — optional array of short labels
- `external` — set to `true` if `href` points off-site (opens in new tab)

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with Vite and publishes `dist/` to GitHub Pages.

To enable Pages on this repo (one-time):

1. Settings → Pages → Source: **GitHub Actions**
2. Push to `main`
3. First deploy takes 1-3 minutes
