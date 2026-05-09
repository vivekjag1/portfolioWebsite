# Vivek's Portfolio — Editable Source

A single-page React portfolio. No build step required.

## Files

- **`portfolio.html`** — entry point. All CSS lives in here.
- **`data.jsx`** — your content. **Edit this file** for name, bio, news, projects, etc.
- **`app.jsx`** — React components, navbar, scroll-spy.

## Running locally

Browsers block `.jsx` files when you double-click `portfolio.html` directly. You need a tiny local server:

**Mac / Linux:**
```bash
cd portfolio-src
python3 -m http.server 8000
```
Open: http://localhost:8000/portfolio.html

**VS Code:** install **Live Server** extension → right-click `portfolio.html` → "Open with Live Server".

## Editing your info

Open **`data.jsx`** and replace the placeholder values. Each section is a JS array — copy/paste an entry to add more.

The JSX inside `bio` and `news[].body` lets you embed `<a>`, `<strong>`, `<em>` tags. Plain strings work too.

## Adding your headshot

Drop an image in the folder (e.g. `headshot.jpg`). In `app.jsx`, find the `<Hero />` component and replace the `.hero-photo` placeholder div with:

```jsx
<div className="hero-photo">
  <img src="headshot.jpg" alt="Vivek Jagadeesh"
       style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</div>
```

## Changing colors / fonts

In `portfolio.html`, near the top of the `<style>` block:
- `--accent: #7e8a3a` — accent color
- `data-fontpair="fraunces"` (on the `<body>` tag) — switch to `poppins`, `newsreader`, `crimson`, or `inter`

## Deploying

Drop the folder into Netlify, Vercel, or GitHub Pages — they'll serve it as-is. No build step.
