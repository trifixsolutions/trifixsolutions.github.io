## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Mobile Navigation]
**Learning:** For mobile navigation menus, using a centralized toggle function ensures that 'aria-expanded', 'aria-label', and body scroll locking ('overflow: hidden') stay perfectly synchronized. Additionally, supporting the 'Escape' key for closure with focus restoration to the toggle button is critical for keyboard accessibility in overlays.
**Action:** Always implement a central 'toggleMenu(isOpen)' handler for mobile overlays and ensure it manages both ARIA states and focus restoration.
