# Riwayat Eventz

A lightweight, responsive static website built with plain HTML, CSS and vanilla JavaScript. It has no backend, database, customer accounts, admin panel, build step or required paid service.

## Project structure

```text
riwayat-eventz/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── _headers
├── _redirects
└── assets/
    ├── config.js
    ├── script.js
    ├── styles.css
    ├── favicon.svg
    └── social-preview.svg
```

## Before publishing

1. Open `assets/config.js` and replace `910000000000` with the business WhatsApp number in international format, digits only. For India, use `91` followed by the 10-digit mobile number.
2. In `index.html`, replace every `https://YOUR-DOMAIN.example/` with the final canonical website URL.
3. Make the same domain replacement in `robots.txt` and `sitemap.xml` after the domain is purchased.
4. Update the page title, description, services and copy to match the real business offering. Add real contact details and social links only after they are confirmed.
5. If the business serves a specific city or region, add that information naturally to the page title/description and visible copy.
6. If you add images, compress them to WebP/AVIF, use descriptive filenames and alt text, and keep them in `assets/` or another local folder.

## Local preview

No installation is needed. Open `index.html` in a browser, or run a local static server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub + Cloudflare Pages

1. Create a GitHub repository, for example `riwayat-eventz`.
2. Upload or push the contents of this folder to the repository root.
3. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
4. Select the GitHub repository and production branch (usually `main`).
5. Set **Framework preset** to `None`.
6. Leave **Build command** blank.
7. Set **Build output directory** to `/` (repository root).
8. Deploy. Cloudflare Pages will serve the static files directly.
9. Add a custom domain in the Pages project settings if required, then verify HTTPS.
10. After changing the domain, update canonical URLs, Open Graph URLs, sitemap and robots files, commit and push again.

There is no environment variable or build configuration required for this starter.

## WhatsApp booking enquiries

The button uses the official `https://wa.me/` click-to-chat URL. It opens a chat with a prefilled message. It does not send a message automatically. Visitors choose whether to send it.

## SEO checklist

- One descriptive page title and meta description are included.
- Canonical URL, Open Graph metadata and Twitter card metadata are included.
- `sitemap.xml` and `robots.txt` are included.
- The 404 page is `404.html`, which Cloudflare Pages serves for missing paths.
- Add real business details, service areas, original photos and genuine testimonials before launch.
- Submit the sitemap URL in Google Search Console after the site is live.
- Do not add fake ratings, reviews, addresses or structured data.

## Security notes

- No server-side code, database, login system, forms, secrets or API keys are used.
- External links opened in a new tab use `rel="noopener noreferrer"`.
- JavaScript uses text content rather than injecting user-provided HTML.
- Cloudflare `_headers` provides baseline browser security headers and a restrictive Content Security Policy.
- The CSS imports Google Fonts. If you want zero third-party requests, remove the `@import` line from `assets/styles.css`; the site will fall back to system fonts. If you add third-party widgets later, review and update the Content Security Policy deliberately.
- Keep dependencies at zero unless a real requirement justifies adding one.
- Use HTTPS and enable Cloudflare's standard security protections. No website can be guaranteed “unhackable”; reduce attack surface and keep the project simple.

## Important limitations

This is a front-end marketing and enquiry website. It does not store enquiries, process payments, manage bookings or provide an admin dashboard. The visitor starts a WhatsApp conversation and the business handles the enquiry there.
