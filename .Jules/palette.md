## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-24 - [Robust Mobile Navigation Accessibility]
**Learning:** A fully accessible mobile menu requires more than just a toggle. Implementing `aria-expanded` and `aria-controls` provides essential state information to screen readers, while body scroll locking and 'Escape' key support ensure the experience is intuitive and matches platform expectations for modal-like overlays.
**Action:** Centralize menu state management in a single function (e.g., `setMenuState`) to keep ARIA attributes, classes, and scroll locking in sync. Always include focus management to return focus to the trigger element when the menu is closed.
