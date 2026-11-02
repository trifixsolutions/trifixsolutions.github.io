## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Fixed-Position Overlays and Backdrop Filters]
**Learning:** Applying CSS `backdrop-filter` on a sticky/fixed navbar establishes a new containing block, which unintentionally traps and clips child `position: fixed` fullscreen overlays (such as mobile menus) to the header bounds. In addition, when icon libraries (like Lucide) replace `<i>` tags with `<svg>`, query selectors matching only `i` will silently fail during toggle state updates.
**Action:** Ensure parent backdrop filters are toggled off when fullscreen descendant overlays are active, keep toggle buttons on a higher `z-index` layer than the overlay, and select replaced icon nodes using `[data-lucide]` rather than element tag names.
