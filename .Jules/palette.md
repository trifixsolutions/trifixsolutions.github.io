## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Mobile Navigation]
**Learning:** For static sites using vanilla JS, a centralized `toggleMenu` function ensures that ARIA states (`aria-expanded`), CSS classes (`active`), and icon states are always in sync. Handling the `Escape` key and restoring focus to the trigger button is critical for keyboard accessibility in modal-like overlays.
**Action:** Use a centralized function for UI toggles that manages both visual and semantic state, and always implement keyboard exit paths with focus restoration for overlays.
