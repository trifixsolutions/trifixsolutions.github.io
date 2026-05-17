## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-05-17 - [Accessible Mobile Navigation]
**Learning:** Accessible mobile menus require more than just a visibility toggle. Synchronizing `aria-expanded` and `aria-label` states, preventing background scrolling via `body { overflow: hidden }`, and supporting the `Escape` key for closure with focus restoration are critical for a polished and inclusive mobile experience.
**Action:** Use a centralized `toggleMenu(isOpen)` helper to manage all state transitions (ARIA, classes, scroll lock, icons) for mobile overlays to ensure consistency and accessibility.
