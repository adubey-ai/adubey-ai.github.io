# adarshdubey.github.io

Personal portfolio site for Adarsh Dubey — M.Tech ML & Computing (IIST), AI Framework Intern @ Intel.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages user site)

1. Create a public repo on GitHub named exactly **`adarshdubey.github.io`** (must match your username).
2. Push this folder to that repo:

   ```bash
   cd adarshdubey.github.io
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/adarshdubey/adarshdubey.github.io.git
   git push -u origin main
   ```

3. In the repo → **Settings → Pages**, set source to `main` branch, `/ (root)`.
4. Site will be live at `https://adarshdubey.github.io` within ~1 minute.

## Structure

```
index.html     # all content & sections
style.css      # dark theme, responsive layout
script.js      # tiny helper (footer year)
```

Edit `index.html` directly to update content. No build step.
