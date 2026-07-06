## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Robust Mobile Navigation Accessibility]
**Learning:** Centralized `toggleMenu(isOpen)` functions are essential for synchronizing ARIA states (`aria-expanded`, `aria-label`), icon transformations, and body scroll locking in mobile navigation. Providing `Escape` key support with explicit focus restoration to the toggle button ensures a seamless experience for keyboard and screen-reader users.
**Action:** Use a single state management function for mobile menus to avoid synchronization bugs between visual and accessible states. Always return focus to the trigger element when closing an overlay via keyboard.
