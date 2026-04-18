# CrestFlow Digital — Website

Static marketing website for CrestFlow Digital.

---

## 1. Preview locally

**Option A — VS Code Live Server (recommended)**
1. Open the `crestflow-site/` folder in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Site opens at `http://127.0.0.1:5500/index.html`

**Option B — npx serve**
```bash
cd crestflow-site
npx serve .
```
Then open `http://localhost:3000` in your browser.

---

## 2. Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo (new or existing)
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/) → Create a project
3. Connect your GitHub repo
4. **Build settings:**
   - Framework preset: None
   - Build command: *(leave blank)*
   - Build output directory: `/` (root)
5. Click Deploy

Every `git push` to main will auto-deploy.

---

## 3. Connect your custom domain

Once you have your free Hostinger domain:
1. In Cloudflare Pages → your project → Custom domains → Add domain
2. Follow the DNS setup steps (add a CNAME record)
3. Cloudflare handles HTTPS automatically

---

## 4. Update the contact form webhook

The contact form POSTs to a placeholder URL. To wire it up:
1. Open `contact.html`
2. Find: `action="https://REPLACE-WITH-N8N-WEBHOOK-URL"`
3. Replace with your n8n webhook URL
4. In n8n: check that `website_url_confirm` is empty (honeypot spam filter)

---

## 5. TODO checklist — things that need your input

Run this to find all placeholders:
```bash
grep -rn "TODO" *.html
```

| Item | File | What to do |
|---|---|---|
| Founder photo | `index.html`, `about.html` | Replace `<div class="founder-photo">` with an `<img>` tag pointing to your photo |
| Founder bio (3 sections) | `about.html` | Replace the 3 `.todo-placeholder` divs with real content |
| Sample report link | `index.html`, `services.html` | Replace `href="#sample"` with your sample PDF URL |
| n8n webhook URL | `contact.html` | Replace `action="https://REPLACE-WITH-N8N-WEBHOOK-URL"` |
| GEO audit price | `services.html` | Replace `$___` with your price |
| Logo image | `assets/logo.png` | Replace the placeholder file with your real logo |
| Domain URLs | All `<link rel="canonical">` and JSON-LD `url` fields | Replace `https://crestflow.io` with your real domain once set |
| og:image | All pages | Add a real social share image at `assets/og-image.png` (1200×630px) |

---

## 6. File structure

```
crestflow-site/
├── index.html           Home page
├── services.html        Services detail
├── about.html           About / founder story
├── contact.html         Contact form
├── 404.html             404 error page
├── assets/
│   ├── style.css        All styles (edit colors in :root at the top)
│   ├── script.js        Mobile nav toggle only
│   └── logo.png         Replace with your real logo
├── robots.txt           Allows all crawlers, references sitemap
├── sitemap.xml          Update lastmod dates after content changes
├── llms.txt             Plain-text summary for AI crawlers
└── .gitignore
```

---

## 7. Changing colors

All colors are CSS custom properties in `assets/style.css` at the top:

```css
:root {
  --bg:          #0f172a;   /* page background */
  --bg-card:     #1a2540;   /* card backgrounds */
  --accent:      #0096ff;   /* blue accent / buttons */
  --text:        #e5e7eb;   /* primary text */
  --text-muted:  #94a3b8;   /* secondary text */
}
```

Change once here, updates everywhere.
