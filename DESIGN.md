---
name: Tea Palette
description: refining product taste
colors:
  paper: "#efeeeb"
  ink: "#303732"
  muted: "#656b66"
  line: "#b9bcb6"
  accent: "#365a45"
  selection-bg: "#d6dfd3"
  selection-ink: "#273d2d"
typography:
  brand:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.4
  headline:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1.25
  title:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.4
  subtitle:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  reading:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
spacing:
  object-padding: "8px"
  small-gap: "12px"
  compact-gap: "18px"
  mobile-gutter: "20px"
  section-padding: "24px"
  desktop-gutter: "28px"
components:
  text-control:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "4px 0"
  study-index-active:
    textColor: "{colors.accent}"
  reading-copy:
    textColor: "{colors.muted}"
    typography: "{typography.reading}"
---

# Design System: Tea Palette

## Overview

**Creative North Star: "The Quiet Paper Collection"**

A quiet sheet of lightly folded paper holds restrained typography and supplied tea illustrations. The world stays sparse and tactile: text gives clear routes into the studies while integrated vessel artwork supplies its character.

The confirmed replacement world uses the owner's minimal paper reference and existing artwork. Product truth remains in PRODUCT.md; the first-viewport placement contract remains in .impeccable/direction.md.

**Key Characteristics:**
- Lightly folded paper with muted ink.
- Small identity typography and generous open space.
- Supplied illustrations with integrated company marks.
- Text and illustrated objects share accessible study navigation.

## Colors

The palette is softened paper, botanical ink, and quiet gray-green rules; illustration color comes from the supplied assets.

### Primary
- **Botanical Accent:** selected study-index text and visible keyboard outlines.

### Neutral
- **Paper:** fallback beneath the repeating supplied paper texture.
- **Ink:** identity, navigation, headings, and main text.
- **Muted Ink:** secondary labels, descriptions, footer, and missing-material notices.
- **Soft Rule:** reading-panel separators, contact rows, and scrollbar thumb.
- **Selection Paper / Selection Ink:** explicit text-selection treatment.

**The Paper Continuity Rule.** Keep the paper background present when the collection becomes a reading panel.

## Typography

**Display and Body Font:** self-hosted DM Sans with Arial and sans-serif fallbacks. The supplied font face is registered at weight 400; CSS requests 500 for the brand and placeholder emphasis without a separate 500 face.

**Character:** small, plain, sentence-case typography lets illustrated objects carry expression.

### Hierarchy
- **Brand:** compact identity; the exact subtitle is “refining product taste.”
- **Headline:** panel titles; adapts to 28px at the mobile breakpoint.
- **Title:** secondary panel headings.
- **Subtitle:** introductory study statement.
- **Body:** navigation and study facts.
- **Reading:** muted explanatory paragraphs, capped at 70ch.
- **Label:** topic labels, tagline, footer, toolbar, and fact labels. Vessel captions become 12px on mobile; this exception does not apply to index topic labels.

## Layout

Desktop uses a full-height paper shell with 100px header and 55px footer rows, minimum page height 705px. Main content has a 260px index column, a flexible studio, a 28px gap and gutters, and a maximum width of 1800px. The scattered table is relative-positioned, at least 550px tall and at most 1130px wide. Object placement and rotation are artwork-specific, not a reusable grid.

At 1400px and above, vessels grow, the table caps at 770px tall, and the index's larger separation grows from 55px to 80px. From 701–1000px the index shrinks to 200px with an 18px gap and smaller vessels. At 700px and below, the shell grows with content: 90px header, 48px footer, 20px gutters, horizontal personal links, a two-column study index, and a recomposed 480px table. At 380px and below, objects tighten and the toolbar may wrap. Preserve vertical scrolling rather than clipping.

The reading panel replaces the table, has a 690px maximum width, and scrolls internally on desktop within the viewport minus 155px. On mobile it becomes ordinary page flow with a top rule and no internal scroll. There is no overlay or modal.

## Elevation & Depth

No box shadows are used. Supplied paper texture, transparent illustration silhouettes, multiply blending, and generous whitespace provide depth. Decorative objects use brightness 1.25 and opacity 0.8; the bowl uses brightness 1.13. Thin rules distinguish reading content without raised containers.

## Shapes

Controls and reading containers have no capsule or card treatment. The only explicit rounded shape is the 4px circular missing-contact marker, outlined with a 1px muted stroke. Image silhouettes stay intact; reference-gallery crops use object-fit cover.

## Components

### Text navigation and study index

Unboxed text controls retain at least 44px touch height. Hover underlines sit 5px below text; active study underlines use 4px offset and accent ink. Keyboard focus uses a 2px accent outline with 5px offset. The index and vessels open the same panel, update pressed state, and share a preview cue.

### Tea vessels and found objects

Vessels are actual buttons with descriptive accessible names and image alternatives, 8px internal padding, and integrated company logos. Hover/focus straightens and lifts a vessel 3px over 220ms using cubic-bezier(.16,1,.3,1); its caption fades over 180ms. Index hover/focus cues the corresponding vessel. Five decorative images are pointer-inert and hidden from accessibility APIs.

### Reading panel

Study, About, and Contact views replace the table. Opening content animates from opacity 0.7 and translateY(10px) to its resting state over 280ms with the same easing. Heading focus and a polite live announcement communicate the change. Previous/Next wrap through four studies; Back and Escape restore originating focus. The bowl identity button returns home.

### Missing materials and contact

Email and LinkedIn open an honest contact panel rather than external destinations. A small outlined dot and accessible description mark the missing contact details. Missing decks and prototypes are separated by a thin top rule. About includes a three-column reference gallery with 12px gaps and 115px crops, reduced to 80px on mobile.

Reduced-motion preferences disable transitions and the panel entrance animation. Direct vessel hover/focus retains its resting tilt; index preview still applies an instantaneous straighten/lift through the shared preview state. This observed exception is documented, not promoted as a new motion rule.

## Do's and Don'ts

### Do:
- **Do** use supplied artwork and preserve the original bowl identity asset.
- **Do** keep secondary navigation and topic labels readable at 14px or larger.
- **Do** keep contact and deliverable placeholders explicit until real materials arrive.
- **Do** honor reduced motion and preserve keyboard access.

### Don't:
- **Don't** add the rejected hero, equal card grid, search box, pills, porcelain border, or ornamental footer to this collection.
- **Don't** invent contact destinations, results, scores, or deliverables.
- **Don't** treat decorative scattered objects as interactive controls.
