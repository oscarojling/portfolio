# Oscar Öjling — Portfolio

Personal portfolio site, built with React, TypeScript, and Tailwind CSS.

## Stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) for UI icons

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Structure

```
src/
  components/   one folder per component, each with an index.tsx
  data/         static project data
  assets/       optimized project images
  index.css     design tokens (Tailwind @theme) + base styles
```

The Projects section pulls in any GitHub repo tagged with the `portfolio`
topic and lists it automatically, alongside a couple of projects defined
directly in `src/data/projects.ts`.
