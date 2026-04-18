# CrestFlow Digital — Website Build Spec

## Stack
Pure static HTML/CSS/JS. No framework, no build step, no npm.
Deploy: Cloudflare Pages (GitHub push → auto-deploy). Preview locally via VS Code Live Server.

## File Structure
```
crestflow-site/
├── index.html           Home
├── services.html        Services detail
├── about.html           Founder story / why veterans
├── contact.html         Contact form
├── 404.html             Simple 404
├── assets/
│   ├── style.css
│   ├── script.js        Mobile nav toggle only
│   └── logo.png         (placeholder)
├── robots.txt
├── sitemap.xml
├── llms.txt
├── .gitignore
└── README.md
```

## Design
- Background: `#0f172a` / `#1a1a2e` | Accent: `#0096FF` | Text: `#e5e7eb` | Muted: `#94a3b8`
- System font stack. No CDNs.
- Mobile-first. Hamburger nav below 768px.
- Subtle hover states only. No animations.

## Services Offered (on site)
| Service | Type |
|---|---|
| GEO Audit | One-time, price TBD |
| Monthly GEO Monitoring | Recurring |
| AI Deployment (n8n) | Project-based |
| Custom Chatbots | Project-based |

## Contact Form
- POST to n8n webhook (URL is a placeholder — user fills in)
- Honeypot field: `website_url_confirm` — n8n rejects non-empty
- HTML5 validation only

## Placeholders to fill in (grep "TODO")
- Founder bio / photo
- Logo image
- Sample audit PDF link
- n8n webhook URL
- GEO audit price

## Deploy Steps (when ready)
1. Push `crestflow-site/` to GitHub
2. Connect repo to Cloudflare Pages
3. Build command: none (static)
4. Output directory: `/` (root)
5. Done — auto-deploys on every push

## Future: Custom Domain
When free Hostinger domain is ready:
- Add domain in Cloudflare Pages settings
- Point DNS to Cloudflare nameservers
