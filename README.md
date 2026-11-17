# Madeeha Haider — Projects & Interactive Experiences

A responsive editorial game developer portfolio showcasing one published Android game (*Stack & Solve: Puzzle Games*) and 14 original video demonstrations from Madeeha Haider's Google Drive portfolio.

## What's included

- Warm obsidian & champagne gold editorial theme (`styles.css`, `premium.css`, `collection.css`, `refined.css`)
- **In the spotlight** showcase (*Stack & Solve: Puzzle Games* + *Virtual Science Lab*)
- **15-project filterable library** (`ALL`, `GAMES`, `AR / VR`, `PRODUCTS`) with real video stills in `assets/media/`
- Native `<dialog>` video player modal supporting local video playback (`assets/media/science-lab.mp4`) and embedded Google Drive previews for all 14 project demos, plus direct links to the originals on Google Drive
- Standalone *Stack & Solve* case study page at `projects/stack-solve/`
- Skills toolkit, career timeline, player profile, contact section, and downloadable CV (`assets/Madeeha_Haider_CV.pdf`)
- Pure HTML/CSS/JS — no build step required, with relative paths compatible with GitHub Pages project repositories

## Run locally

```bash
python -m http.server 8000
# Open http://localhost:8000/
```

## Deploy to GitHub Pages

Push to `main` — `.github/workflows/pages.yml` automatically deploys the static site to GitHub Pages.
