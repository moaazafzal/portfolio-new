# Moaaz Afzal Portfolio

Static portfolio website designed for GitHub Pages deployment.

## Files

- `index.html`: site structure and content
- `styles.css`: visual system, layout, and motion
- `script.js`: scroll progress, mobile nav, reveal effects, tilt interaction, and copy-email button
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow

## Local Preview

Run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Customize

Edit these values before or after publishing if needed:

- Name and hero copy in `index.html`
- Contact email in `index.html` and `script.js`
- GitHub profile link in `index.html`
- Project/service copy across the main sections

## Deploy To GitHub Pages

1. Create a GitHub repository.
2. Push this folder to the repository on the `main` branch.
3. In GitHub, open `Settings > Pages`.
4. Set the source to `GitHub Actions`.
5. Pushes to `main` will deploy automatically using the included workflow.

If you prefer branch-based Pages instead of Actions, you can also publish directly from the repository root.
