# Purvika Jain — Portfolio

Personal developer portfolio built with React 19, Vite and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
npm run lint
```

## Editing content

All text, links, skills, experience, projects and achievements live in
`src/data/portfolio.js` — update that file instead of the components.

- There is intentionally no resume download on the site.
- Profile photo: `src/assets/profile.jpg`
- Theme colours & utilities: `src/index.css` (`@theme` block)

## Structure

```
src/
  App.jsx                 page layout
  data/portfolio.js       all portfolio content
  hooks/useReveal.js      scroll-reveal animations
  hooks/useActiveSection.js  navbar active-link tracking
  components/             Navbar, Hero, About, Skills, Experience,
                          Projects, Education, Contact, Footer, Icons
```
