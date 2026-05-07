## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Mobile Navigation]
**Learning:** The mobile navigation menu is a critical touchpoint where accessibility is often overlooked. Implementing 'aria-expanded' and 'aria-controls' attributes, combined with 'Escape' key support and body scroll locking, creates a robust and intuitive experience for all users, including those using assistive technologies.
**Action:** For mobile overlays and menus, always manage ARIA states, implement keyboard shortcuts (like Escape), and ensure body scroll is locked to maintain context and accessibility.
