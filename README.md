# Oscar Öjling — Portfolio

Personal portfolio site, rebuilt in React, TypeScript, and Tailwind CSS from
the original static HTML/CSS/JS version.

## Stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) for UI icons

## Design

A single deliberate direction rather than a template: a warm-stone /
charcoal / coral palette, Bricolage Grotesque for display type paired with
Inter for body copy and JetBrains Mono for section labels and tags, and a
connector-line "spine" running down the page — a nod to the thing Oscar
says he enjoys most about development: figuring out how pieces fit
together.

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
  components/   section components (Hero, Skills, Projects, Contact, ...)
  assets/       optimized project images
  index.css     design tokens (Tailwind @theme) + base styles
```

The Projects section fetches `Improved-penalty-game`'s live homepage URL
from the GitHub API at runtime, the same trick the original site used,
falling back to a GitHub-only link if the request fails.
