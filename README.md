# Kostas Fergadis — Portfolio

Personal portfolio site: [kostas-fergadis.netlify.app](https://kostas-fergadis.netlify.app/)

Built with Astro as a fully static page, styled with plain CSS (custom properties, light/dark theme). No UI framework, and the only client-side JavaScript is a few small inline scripts (theme toggle, active nav link, receipt tilt, copy-email button).

## Development

```bash
cd my-react-app
npm install
npm run dev     # local dev server
npm run lint    # ESLint
npm run build   # production build in dist/
```

## Updating content

All copy (about, experience, skills, projects, links) lives in
[`my-react-app/src/data/content.js`](my-react-app/src/data/content.js).
Components in `src/components/` (`.astro`) only handle layout, so most updates are a data edit.
Project screenshots in `src/assets/projects/` are converted to responsive WebP at build time.
