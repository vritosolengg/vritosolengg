Vritosol homepage optimization package
======================================

Contents
- index.html: optimized homepage source based on the HTML you supplied.
- assets/: extracted and WebP-optimized hero, logo and product images.

What was changed
- Removed large base64 image payloads from HTML/CSS and moved images into separate WebP assets.
- Consolidated inline JavaScript into a deferred same-origin file and removed unused icon stylesheets.
- Deduplicated repeated hero background images.
- Added width/height, async decoding and lazy loading to product images.
- Added an image preload for the hero background.
- Added a main landmark and keyboard skip link.
- Improved several low-contrast text/button colors and visible keyboard focus.
- Guarded the enquiry form/year scripts against missing elements (the supplied HTML contains no enquiry form).
- Added canonical URL and theme-color metadata.
- Added noopener/noreferrer to external new-tab links.

Deployment safety
1. Back up the currently deployed homepage and its assets before replacing anything.
2. Upload index.html to the exact existing homepage document root and upload the assets folder beside it.
3. Do not delete or overwrite existing unrelated website files.
4. Purge the site's page/CDN cache only after verifying the new homepage loads correctly.
5. Test desktop/mobile navigation, product cards, contact links, footer map, and browser console.
6. Re-run PageSpeed Insights for mobile and desktop.

Important limitations
- A Lighthouse score of 100 in every category cannot be guaranteed. Server response time, cache/compression, response headers, third-party resources, and Lighthouse run variance also affect results.
- The supplied source already contains a charset meta tag in the first 1024 bytes. If PageSpeed still reports missing charset after deployment, verify the live response's Content-Type header and ensure the updated file is actually being served.
- Server compression, caching and security-header recommendations are in SERVER-HEADERS-AND-CACHE.txt. Merge carefully with existing CyberPanel rules; do not overwrite .htaccess.
