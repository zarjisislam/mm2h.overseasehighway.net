# Overseas Highway MM2H website

A responsive, nine-page static website built with HTML, CSS and JavaScript. No database, framework, package manager or build step is required.

## Pages

- `index.html` — home
- `about-mm2h.html` — programme overview
- `programmes.html` — Silver, Gold, Platinum and SEZ/SFZ
- `eligibility.html` — eligibility overview
- `process.html` — consultation process
- `why-malaysia.html` — lifestyle overview
- `about-us.html` — company
- `faq.html` — common questions
- `contact.html` — WhatsApp inquiry

Shared styling is in `assets/css/style.css`; mobile navigation and the contact form are in `assets/js/main.js`. Contact details appear in multiple HTML pages, so search for the existing phone number or domain to update all copies.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000/`.

## GitHub Pages

Push all files to the repository's main branch. In repository **Settings → Pages**, select **Deploy from a branch**, branch **main**, folder **/(root)**, then save. After deployment, the site should be at `https://zarjisislam.github.io/mm2h.overseasehighway.net/`. The repository is public; check the Pages deployment status in GitHub after enabling it.

Relative URLs throughout the site work both under the `/MM2H/` project path and at a domain root. Add `sitemap.xml` and a `robots.txt` Sitemap entry only after the final domain is known.

## Custom domain

The repository name alone does not configure a domain. Only add a GitHub Pages custom domain and `CNAME` file after verifying the actual domain spelling and DNS ownership. The company website in the site copy is `overseashighway.net`, while this repository name uses `overseasehighway.net`; confirm which hostname is intended.

## cPanel deployment

For a first deployment, copy the nine `.html` pages, `assets/`, `robots.txt` and any verified `sitemap.xml` into your domain's document root (commonly `public_html`). For Git-based updates, use **cPanel → Git Version Control** to clone the repository into a directory outside `public_html`. Enable cPanel's deployment feature and add a `.cpanel.yml` with the account-specific document root. cPanel does not automatically publish a pulled repository without that configuration. An example is below; replace `CPANEL_USERNAME` and verify your document root before using it.

```yaml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home/CPANEL_USERNAME/public_html/
    - /bin/cp -R assets "$DEPLOYPATH"
    - /bin/cp -f *.html robots.txt "$DEPLOYPATH"
```

Do not run this sample unchanged. If the actual document root is for an addon domain, use its path instead. Once configured, `git push` updates GitHub; then pull and deploy in cPanel (or configure supported server-side automation). GitHub Pages and cPanel are separate deployments.

## Before public launch

1. Replace the typographic OH mark with the company's approved logo if available.
2. Verify the published business contact details and any MM2H service/agent authorization wording.
3. Recheck category terms against the [official MM2H overview](https://www.mm2h.gov.my/category/overview) and [application guidelines](https://www.mm2h.gov.my/apply/guidelines).
4. Set the final domain, then add canonical URLs and an accurate XML sitemap.

The contact form opens a prefilled WhatsApp message. It stores and sends nothing to a website database. The visitor must press Send inside WhatsApp.
