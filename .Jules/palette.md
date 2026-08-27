## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-20 - [Mobile Navigation Overlay Accessibility]
**Learning:** When building responsive mobile navigation overlays, synchronizing `aria-expanded`, dynamic `aria-label` ("Open menu" / "Close menu"), and `aria-controls` on the toggle button ensures assistive technologies accurately communicate the menu's state. Combining this with body scroll locking (`overflow: hidden`) and Escape key focus management prevents disorienting background scrolls and lost keyboard focus.
**Action:** Centralize mobile menu state updates into a single `toggleMenu(isOpen)` helper function, query `[data-lucide]` or Lucide SVG elements safely, and listen for the Escape key to close the overlay and return focus to the toggle button.
