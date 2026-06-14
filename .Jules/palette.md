## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-22 - [Accessible Mobile Navigation]
**Learning:** Synchronizing ARIA attributes (`aria-expanded`, `aria-label`) and implementing standard keyboard support (Escape key to close with focus restoration) in mobile menus significantly improves predictability and accessibility for assistive technology and keyboard-only users.
**Action:** Always centralize menu state logic to ensure all visual and accessible attributes remain in sync. Ensure focus is restored to the toggle button when the menu is closed via the keyboard.
