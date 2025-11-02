# Svelte port of claybeabout.com

## Scripts (using Bun)
- dev: `bun run dev`
- build: `bun run build`
- preview: `bun run preview`

## Notes
- Theme switching, routes (`/`, `/discography`, `/films`, `/catalog`) and core UI are ported.
- Icons are simplified (emoji/text) to avoid extra deps; you can swap in a Svelte icon lib later.
- Styles are based on your compiled CSS so the look remains close.

## Data
- This project includes small sample files in `src/data/`:
  - `Reviews.sample.json`
  - `Spotify.sample.json`
- To use your full datasets, copy these into `public/` with the exact names below and update imports or switch components to fetch at runtime:
  - `public/Reviews.json`
  - `public/Spotify.json`
- Or update the imports in `routes/Letterbox.svelte` and `routes/Spotify.svelte` to point to your files.

## Assets
- For the resume link to work in dev, place `claybeabout.pdf` in `public/`.
- You can also copy favicon and any images to `public/`.

## Router
- A minimal History API router is implemented inside `App.svelte` (no extra deps).

## Bun quickstart
- Install Bun and use `bun run` / `bunx` as described in the Bun Quickstart guide: [https://bun.com/docs/quickstart](https://bun.com/docs/quickstart)


