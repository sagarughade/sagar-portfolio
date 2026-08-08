# Sagar Ughade — Portfolio

A premium, dark-themed personal portfolio built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Replace placeholder content before deploying

| What | Where |
|---|---|
| Resume file | Add `resume.pdf` to `public/`, path is already wired via `src/data/social.ts` |
| GitHub / LinkedIn / Email | `src/data/social.ts` |
| Work experience | `src/data/experience.ts` — replace every `[Add ...]` placeholder |
| Project GitHub/demo links | `src/data/projects.ts` |
| Favicon | `public/favicon.svg` |
| Open Graph image | Add `public/og-image.png` (1200×630 recommended) |
| Site URL for OG meta | `index.html` — `og:url` tag |

## Project structure

```
src/
  components/   Reusable UI (Navbar, Button, ProjectCard, ContactForm, CommandPalette, etc.)
  sections/     Page sections (Hero, About, Skills, Experience, Projects, Services, Philosophy, Contact, Footer)
  data/         Content — edit these files instead of the components
  hooks/        Shared animation variants
  pages/        Home and NotFound (404) route components
```

## Extras

- **Ctrl/Cmd + K** opens a command palette to jump to sections or download the resume
- Scroll progress bar, back-to-top button, and a desktop-only custom cursor are included
- Reduced-motion is respected automatically
