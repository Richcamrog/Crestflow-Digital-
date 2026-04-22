# CrestFlow Digital — Site Reference

**Status: LIVE** at https://crestflow.io
**Deploy: Cloudflare Pages** (GitHub push → auto-deploy, ~30 seconds)
**Repo:** https://github.com/Richcamrog/Crestflow-Digital-

---

## Stack

Pure static HTML/CSS/JS. No framework, no build step, no npm.
Preview locally via VS Code Live Server.

---

## File Structure

```
crestflow-site/
├── index.html              Homepage
├── services.html           Services (GEO Audit, AI Deployment, Chatbots)
├── about.html              Founder story
├── contact.html            Contact form (posts to n8n webhook)
├── privacy.html            Privacy policy
├── sample-report.html      Demo GEO report (noindex — not in nav)
├── seo-vs-geo.html         Blog post (April 2026)
├── 404.html                404 page
├── _headers                Cloudflare Pages security headers
├── BingSiteAuth.xml        Bing Webmaster Tools verification
├── robots.txt              Allow all crawlers, sitemap reference
├── sitemap.xml             6 pages (excludes sample-report.html)
├── llms.txt                AI system guide
├── .gitignore
├── README.md
├── Crestflow-deployment.md (this file)
└── assets/
    ├── style.css
    ├── script.js           Mobile nav toggle only
    ├── logo.png
    ├── logo-transparent.png
    ├── richard.jpg
    └── og-image.png
```

---

## Design Tokens

| Token | Value |
|---|---|
| `--bg` | `#0f172a` |
| `--bg-card` | `#1a2540` |
| `--bg-alt` | `#131e35` |
| `--accent` | `#0096ff` |
| `--text` | `#e5e7eb` |
| `--text-muted` | `#94a3b8` |
| `--border` | `rgba(148,163,184,0.12)` |

System font stack. No CDNs. Mobile-first, hamburger nav below 768px.

---

## Services (live pricing)

| Service | Type | Price |
|---|---|---|
| Full GEO Audit | One-time | $500 |
| Audit + Growth Track | Package | $1,000 |
| Monthly GEO Monitoring | Recurring | Quote |
| AI Deployment | Project-based | Quote |
| Custom AI Chatbots | Project-based | Quote |

---

## Contact Form

- **Webhook:** `https://n8n.srv1480153.hstgr.cloud/webhook/crestflow-contact`
- **n8n workflow:** `PxVkbteTq2zeKvu6` (Crestflow mailer-N8N)
- **Sends to:** crestflowdigital@gmail.com
- **From address:** Richard@crestflow.io
- Honeypot field: `website_url_confirm` (bots fill it, n8n rejects)
- HTML5 validation on required fields

---

## Schema Markup

| Page | Schema Types |
|---|---|
| index.html | Organization, ProfessionalService, WebSite |
| services.html | FAQPage (5 Q&As), Service with Offers |
| about.html | Person |
| contact.html | ContactPage |
| seo-vs-geo.html | BlogPosting |
| sample-report.html | None (noindex) |

---

## SEO / GEO Infrastructure

| Item | Status |
|---|---|
| robots.txt | Allow all (including GPTBot, ClaudeBot, PerplexityBot) |
| sitemap.xml | Live — 6 pages |
| llms.txt | Live — includes blog post |
| _headers | Live — CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy |
| Bing Webmaster Tools | Verified (BingSiteAuth.xml), sitemap submitted |
| Google Search Console | Not yet registered |
| LinkedIn company page | Not yet created |
| Cloudflare Email Routing | Richard@crestflow.io → crestflowdigital@gmail.com |

---

## GEO Audit History

| Version | Date | Score | Report |
|---|---|---|---|
| v1 | Early 2026 | ~42/100 | Internal |
| v2 | ~April 2026 | 51/100 | Internal |
| v3 | April 20, 2026 | 55/100 | https://aivision.srv1480153.hstgr.cloud/reports/a11d28b8/GEO-REPORT.html |

---

## Pending

- Create LinkedIn company page → add URL to Organization + Person sameAs schemas
- Register Google Search Console → submit sitemap
- Add homepage "Latest from the blog" section (once second post exists)
- Add BreadcrumbList schema to inner pages
- Testimonials section after first client engagement
