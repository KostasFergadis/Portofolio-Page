# Kostas Fergadis — Portfolio

Personal portfolio site: [kostas-fergadis.netlify.app](https://kostas-fergadis.netlify.app/)

Built with React 19 and Vite, styled with plain CSS (custom properties, light/dark theme). No UI framework.

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
Components in `src/components/` only handle layout, so most updates are a data edit.
