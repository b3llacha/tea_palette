# Tea Palette

Bella Cha’s consumer product case study portfolio. Cream paper, blue porcelain drawings, searchable studies, and an illustrated border follow the user-supplied visual reference. Supplied artwork defines the visual identity.

## Local preview and build

Requires Node.js 18 or newer. No dependencies to install.

```sh
npm run dev
npm test
npm run build
```

Open http://localhost:5173. Deploy the contents of `dist/` to a static host. Fonts and artwork are self-hosted; the page does not require external requests. The local preview only serves site files and assets, rejects traversal and unsupported methods, and supports HEAD and conditional caching. Configure equivalent security headers at the deployment host.

## Content and navigation

Search accepts product names and topics, including “Disney Plus,” punctuation and accented text. A clear button and “Show all four studies” recover from empty results. Opening a study focuses its heading. Previous/next navigation includes all four studies, even when the home collection was filtered; returning restores that filter. Back to studies or Escape returns focus to the originating control. About Bella contains the six earlier supplied reference images. Contact has explicit placeholders for LinkedIn, email, and résumé.

Beli and Duolingo slide decks and Disney+ and TruFru redesign prototypes remain placeholders until the user provides final materials. No scores, outcomes, or external links have been invented.

## Asset optimization

Original supplied images stay in `assets/`. Cropped WebP copies are in `assets/optimized/`: the porcelain reference provides three vessels, the mark, search ornament, and footer border; the tea illustration provides the fourth vessel. Gallery thumbnails retain all six earlier supplied references. The build copies only optimized images and fonts.

Home artwork decreased from 1,905,099 bytes of source screenshots to 80,150 bytes of derivatives: 95.8% fewer image bytes. This is an asset measurement, not a claim about network timing or Web Vitals. The static build is approximately 348KB including fonts, licenses, all gallery thumbnails, and code.

Impeccable’s optimize, clarify, colorize, animate, and harden guidance informed the refinement. See DESIGN.md for palette, motion, and the user-authorized cream background exception. Verified desktop and mobile layouts, search/recovery, focus return, study navigation, About/Contact panels, image loading, and server request handling. Reduced-motion behavior is implemented; physical-device and cross-browser testing remain outside this local pass.

## Branded vessels

Individual vessels use the newer owner-supplied green tea sheet and colorful cup sheet, with official company marks integrated on each ceramic face. The Disney+ cup was edited with the image-editing tool to clean the watermark and center the mark; its edited PNG source is retained in assets, and the transparent WebP ships from assets/components. Original sheets stay in assets; optimized crops and self-hosted logos ship in the build. The Disney+ porcelain bowl remains the site icon. Logo sources are recorded in assets/logos/SOURCES.md. Earlier asset measurements describe the initial porcelain version.
