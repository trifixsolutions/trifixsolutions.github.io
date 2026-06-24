## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Robust Mobile Navigation Accessibility]
**Learning:** For mobile menus, a centralized `toggleMenu` function is essential to synchronize CSS classes, ARIA states (`aria-expanded`, `aria-label`), body scroll locking, and icon states. When using Lucide, targeting `[data-lucide]` rather than the `i` tag is necessary because the library replaces the tag with an `<svg>` after the first render.
**Action:** Use a single `toggleMenu` handler for clicks, link selections, and keyboard events (like `Escape`). Always pair menu visibility with `aria-expanded` and `document.body.style.overflow = 'hidden'`.
