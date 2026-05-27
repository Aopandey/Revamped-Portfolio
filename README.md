# Avinash Pandey Portfolio

Static interactive portfolio for Avinash Pandey, focused on AI/ML systems, LLM/RAG work, biomedical literature research, and data/ML pipelines.

## Local Preview

```bash
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`.

## Notes

- Built with HTML, CSS, and vanilla JavaScript.
- Uses a small vendored Motion runtime for subtle entrance, hover, scroll progress, theme, and ambient grid animations.
- The UI/UX Pro Max repository was used locally as design reference; it is intentionally excluded from git.

## 21st.dev Theme Toggler Note

The 21st.dev prompts target a React, TypeScript, Tailwind, and shadcn-style project with components in `/components/ui`. This portfolio is intentionally static, so the animated sun/moon theme toggle and infinite grid background were adapted into `index.html`, `styles.css`, `script.js`, and `motion-enhance.js` using the same Motion-inspired behavior.

To use the original React component verbatim in a future rebuild:

```bash
npm create vite@latest avinash-portfolio-react -- --template react-ts
cd avinash-portfolio-react
npm install tailwindcss @tailwindcss/vite motion framer-motion
npx shadcn@latest init
mkdir -p components/ui
```

Then copy components such as `animated-theme-toggler.tsx` or `the-infinite-grid.tsx` into `components/ui`. Keeping shared UI in `components/ui` matters because shadcn conventions, aliases like `@/components/ui/...`, and future generated components expect that folder structure.
