## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Mobile Navigation]
**Learning:** For mobile navigation menus, merely toggling a CSS class is insufficient for accessibility. Synchronizing `aria-expanded` and `aria-label` on the toggle button, along with implementing 'Escape' key support and focus restoration, ensures that keyboard and screen-reader users can navigate the site reliably.
**Action:** Always refactor mobile menu logic to include ARIA attribute updates and explicit focus management (e.g., returning focus to the trigger after closing via keyboard).
