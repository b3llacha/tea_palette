# Tea Palette design authority

The user’s porcelain recipe-page reference determines the visual world: warm cream paper, royal blue ink, supplied hand-drawn tea vessels, outlined pill controls, an open gallery, and an illustrated border. Preserve this identity when refining the portfolio. Do not generate replacement artwork.

## Palette and type

Paper #fcf4ed, primary ink #25268f, secondary ink #55579b, control borders #817a96. Category accents: Beli #49663c, Disney+ #314b84, Duolingo #426a22, TruFru #97524d. Selected studies use both a filled and underlined label; color is not the only indication. DM Serif Display supplies headings; DM Sans supplies reading text. Both are self-hosted with local fallbacks and font-display swap. Reading text is 16px; labels and supporting text are typically 14px, with compact mobile study navigation labels at 12px inside targets at least 44px tall.

## Motion

The one focal interaction is opening a study: its vessel settles slightly above the collection and the reading panel resolves over 280ms with exponential ease-out. Repeated selections cancel the prior panel animation. Reduced-motion preferences remove spatial transitions, preserving selection and focus feedback. No looping or ambient animation.

## Layout and states

Four open columns on desktop; a two-by-two vessel collection on phones. Study selection shows a desktop reading panel alongside the gallery, or four compact study selectors above a mobile reading panel. Constrained viewports scroll rather than clipping or shrinking reading text. Search has a persistent label, clear action, live count, and an empty-state reset. About and Contact have distinct panels. Missing case assets and contact links are stated plainly.

## Detector exception

The Impeccable manual detector reported one warning: cream/beige background. This is an intentional, narrowly documented exception: the user supplied and explicitly requested a cream porcelain reference. Changing the background would conflict with the brief. No other findings were reported.

The Disney+ study’s supplied porcelain bowl is also the site mark in the header, footer, and browser tab, as requested by the user.

The four study vessels now use individual crops from the user’s colorful cup sheet (Disney+, TruFru) and green tea sheet (Beli, Duolingo). Official company logo assets are positioned on the front of each vessel. The original Disney+ porcelain bowl remains the site icon. Source artwork is preserved without generated replacement illustrations.

Logos are transparent, unbacked marks with zero rotation, positioned at the center of each vessel’s front face. App-icon tiles and cream medallions have been removed.

Each branded vessel is now a self-contained SVG image in assets/components, with original cup artwork and company mark embedded. Mark placement is centered on the ceramic body (excluding its handle and spout), in the original image coordinates. There are no positioned logo elements in the page.
