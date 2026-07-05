# Matthew Nocera-Iozzo Portfolio

Static portfolio website for Matthew Nocera-Iozzo, positioned around data engineering, analytics engineering, AI/ML, GenAI/RAG workflows, APIs, dashboards, and cloud-backed analytics applications.

Built with Vite, React, TypeScript, and Tailwind CSS. The site is fully static and does not use a backend, authentication, or a database.

## Sections

- Hero
- About
- Featured Projects
- Experience
- Skills
- Resume
- Contact

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages Deployment

This project is configured for a GitHub Pages user site. Create a repository named after your GitHub Pages user site, for example:

```text
mniozzo.github.io
```

For another GitHub username, replace `mniozzo` with that username.

Push this project to that repository, then enable GitHub Pages from the repository settings. The site will be available at:

```text
https://mniozzo.github.io
```

Vite is configured for the root URL:

```ts
base: "/"
```

GitHub Pages deployment support is included through `gh-pages`. To build the site and publish the `dist` folder:

```bash
npm run deploy
```

The deploy script runs the production build and publishes the `dist` folder.

## Static Assets

Project screenshot placeholders live in:

```text
public/screenshots/
public/screenshots/retail-returns/
public/screenshots/frauds/
public/videos/
```

Replace the placeholder screenshots and demo video placeholders when final assets are available.

The resume button expects a PDF at:

```text
public/resume.pdf
```

Add the final resume file there before deploying.
