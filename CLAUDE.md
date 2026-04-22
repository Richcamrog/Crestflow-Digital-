# CrestFlow Digital — Site Guide

**Status: LIVE** at https://crestflow.io
**Deploy:** Push to GitHub master → Cloudflare Pages auto-deploys in ~30 seconds
**Repo:** https://github.com/Richcamrog/Crestflow-Digital-

---

## Rules

- Pure static HTML/CSS/JS — no framework, no npm, no build step
- All pages share the same nav and footer — update both when changing either
- Footer nav appears on every page including sample-report.html and privacy.html
- `sample-report.html` is noindex — never add it to sitemap.xml or main nav
- After every change: `git add <files> && git commit && git push origin master`
- CSS custom properties are in `assets/style.css` — do not hardcode colors inline

---

## File Structure

```
crestflow-site/
├── index.html              Homepage
├── services.html           Services + pricing
├── about.html              Founder story
├── contact.html            Contact form
├── privacy.html            Privacy policy
├── sample-report.html      Demo report (noindex, footer only)
├── seo-vs-geo.html         Blog post (April 2026, in sitemap + llms.txt)
├── 404.html                404 page
├── _headers                Cloudflare Pages security headers
├── BingSiteAuth.xml        Bing Webmaster Tools verification file
├── robots.txt              Allow all crawlers
├── sitemap.xml             6 indexed pages
├── llms.txt                AI system guide (keep updated with new pages)
├── CLAUDE.md               This file
├── Crestflow-deployment.md Full deployment reference
└── assets/
    ├── style.css           All styles + CSS custom properties
    ├── script.js           Mobile nav toggle only
    ├── logo.png
    ├── logo-transparent.png
    ├── richard.jpg
    └── og-image.png
```

---

## Design

| Token | Value |
|---|---|
| Background | `#0f172a` |
| Card bg | `#1a2540` |
| Alt bg | `#131e35` |
| Accent | `#0096ff` |
| Text | `#e5e7eb` |
| Muted text | `#94a3b8` |
| Border | `rgba(148,163,184,0.12)` |

Mobile-first. Hamburger nav below 768px. No animations. No CDNs.

---

## Services and Pricing

| Service | Price |
|---|---|
| Full GEO Audit | $500 one-time |
| Audit + Growth Track | $1,000 |
| Monthly GEO Monitoring | Quote |
| AI Deployment | Quote |
| Custom AI Chatbots | Quote |

---

## Contact Form

- POST to `https://n8n.srv1480153.hstgr.cloud/webhook/crestflow-contact`
- n8n workflow: `PxVkbteTq2zeKvu6`
- Delivers to: crestflowdigital@gmail.com
- Honeypot field: `website_url_confirm` (bots fill it, n8n ignores submission)

---

## Schema Markup (per page)

| Page | Types |
|---|---|
| index.html | Organization, ProfessionalService, WebSite |
| services.html | FAQPage (5 Q&As), Service with Offers |
| about.html | Person |
| contact.html | ContactPage |
| seo-vs-geo.html | BlogPosting |

When adding new pages: add canonical URL, Open Graph tags, and relevant schema.

---

## When Adding a New Blog Post

1. Create `slug.html` matching the existing blog post structure
2. Add to `sitemap.xml`
3. Add to `llms.txt` Key Pages section
4. Add `BlogPosting` JSON-LD schema with datePublished, author, publisher
5. Link from homepage "Latest from the blog" section (build this once second post exists)

---

## Pending

- LinkedIn company page → add URL to sameAs in Organization (index.html) and Person (about.html) schemas
- Google Search Console registration
- Homepage "Latest from the blog" section (after second post)
- BreadcrumbList schema on inner pages
- Testimonials section after first client engagement
