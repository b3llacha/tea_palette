# Tea Palette
Bella Cha’s consumer product case study portfolio, presented as a single-screen tea cabinet. The supplied cabinet image provides the actual rack and vessels. Click the blue vase for Disney+, the teapot for Beli, the white cups for Duolingo, or the glass jars for TruFru. Product-colored labels identify each study.

## Run locally
Requires Node.js 18 or newer. No package installation needed.

```sh
npm run dev
```
Open http://localhost:5173.

## Build
```sh
npm run build
```
Deploy the contents of `dist/` to any static host. Google Fonts are optional; local serif and sans-serif fallbacks work offline.

## Interaction
Select a vessel to populate the adjacent panel with its case study. Previous/next controls move through the collection. “The cabinet” or Escape restores the introduction. “About Bella” opens her profile in the same panel. The cabinet remains visible throughout.

The page fits the viewport using dynamic viewport units. At portrait phone sizes, the cabinet sits above the panel and more room is allocated to the details when a study opens. For long case materials, small screens, or enlarged text, the details panel can scroll independently while the page remains in one screen. Buttons support keyboard activation, selected states, focus indicators, and screen reader announcements. Motion respects the reduced-motion preference.

## Case study materials
The supplied references informed the visual direction. All six supplied images are used directly as site components through CSS crops: the tea illustrations in the header and introduction, the actual cabinet and floral vase in the collection, the book-cover streetscape below it, the café and framed artwork in the introduction, and the landscape in the footer. No generated illustrations are used. The Disney+ and TruFru redesigns, Beli and Duolingo slide decks, and LinkedIn/email/résumé details are placeholders pending final assets. No scores, results, or external prototype links have been invented. Add final assets in `assets/` and update the study entries in `app.js` when available.
