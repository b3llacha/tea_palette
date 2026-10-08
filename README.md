# Tea Palette

Bella Cha’s consumer product case study portfolio. The latest owner-supplied reference determines the design: lightly folded paper, quiet text navigation, top-right Tea Palette branding, scattered tea objects, and bottom-right copyright.

## Run and build

Requires Node.js 18 or newer; no package installation needed.

```sh
npm run dev
npm test
npm run build
```

Open http://localhost:5173. Deploy dist/ to a static host. Artwork and fonts are self-hosted; no external runtime requests are required. The local server only serves site files and assets, rejects traversal and unsupported methods, and supports HEAD and conditional caching. Configure equivalent security headers at the deployment host.

## Navigation and materials

Select a study in the text index or through its branded cup. Both open the same inline reading panel. Previous/next navigate all four studies; Back to collection or Escape restores the originating focus. Hover/focus on an index entry cues its corresponding cup. About contains Bella’s introduction and the six earlier reference images. Email and LinkedIn open explicit contact placeholders until real destinations are supplied. Final Beli/Duolingo slides, Disney+/TruFru redesigns, and résumé also remain placeholders. No scores, results, or contact details have been invented.

## Artwork

Original supplied sheets remain in assets. Optimized crops are in assets/optimized. The paper texture is a clean patch of the latest supplied reference. Tea bags, leaves, the honey wand, strainer, and tin are from the earlier supplied green sheet. Company logos are integrated into finished vessel images in assets/components; the Disney+ cup was edited to remove its watermark and center the logo in a transparent WebP. The site icon remains the original blue porcelain bowl. See assets/logos/SOURCES.md and assets/optimized/PAPER-SOURCES.md for sources.

The layout adapts to a compact index and re-composed scattered table on mobile. It allows vertical scrolling where needed. Keyboard focus, reduced-motion preferences, long reading content, and missing materials are accounted for. Local desktop/mobile checks do not substitute for a physical-device or full cross-browser test.

Product facts, visual tokens, and the latest composition contract are recorded in PRODUCT.md, DESIGN.md, and .impeccable/direction.md.
