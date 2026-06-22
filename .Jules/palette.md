## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Mobile Navigation]
**Learning:** Accessible mobile menus must communicate state via `aria-expanded` and `aria-label`, manage background scrolling with body scroll locking, and support keyboard 'Escape' closure with focus restoration to the trigger button for a complete and inclusive experience.
**Action:** Implement `toggleMenu` helpers to synchronize ARIA attributes, body scroll state, and visual icons. Always ensure keyboard focus is restored when a menu is closed via keyboard.
