# Madeeha Haider — The Interactive Archive

A premium, responsive game developer portfolio combining a **futuristic interactive digital museum** with the **clear case studies, filtered project gallery, and experience timeline** of a conventional developer portfolio.

## What's included

- Animated, accessible hero art installation, scrolling marquee and reveal transitions
- Four interactive museum galleries: Games, AR / VR, Systems, Products
- Project library with filterable cards and detailed, keyboard-operable case study dialogs
- Verified Madeeha Haider experience, skills, education and projects based on her CV
- Real Virtual Science Lab footage and locally hosted demo video
- Illustrative Mello Games Studios showcase images **clearly labeled as concept/showcase artwork** — these are not presented as actual gameplay screenshots or independently verified Madeeha project credits
- Responsive mobile navigation; reduced-motion preference and an on-page toggle
- Pure HTML/CSS/JS — **no build step required** and relative asset URLs work on GitHub Pages project repositories

## Run locally

```bash
python -m http.server 8000
# Open http://localhost:8000/
```

## Deploy to GitHub Pages

### Option A: Repository Settings (simple)

Upload all files to a GitHub repository. In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, branch `main`, folder `/(root)`.

### Option B: GitHub Actions

The repo includes `.github/workflows/pages.yml`. Go to **Settings → Pages**, select **GitHub Actions** as the publishing source. The workflow publishes the static site on pushes to `main`.

A project repository publishes at `https://USERNAME.github.io/REPOSITORY/`.

## Updating projects

Open `main.js` and edit `archiveProjects`. Each project includes `title`, `description`, `category`, `contributions`, `image`, `tags`, and optional `video`/`links`. The archive and modal automatically update from this data.

## Before public launch

Confirm the final public branding (Madeeha portfolio vs Mello Games Studios), validate legal rights to screenshots and footage, review project descriptions and personal email, and replace illustrative showcase art with actual project screenshots wherever available. This first version intentionally avoids claiming unverified individual credits.
