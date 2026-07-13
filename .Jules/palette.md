## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-07-13 - [Accessible Mobile Navigation and Form Polish]
**Learning:** Centralizing mobile menu state management in a `toggleMenu` function ensures that all interactive triggers (toggle button, links, keyboard Escape) stay synchronized with ARIA states (`aria-expanded`, `aria-label`). Additionally, implementing a "Skip to main content" link and form `autocomplete` attributes significantly lowers friction for keyboard and assistive technology users.
**Action:** Use a unified state handler for complex UI components to maintain accessibility attributes. Always include a skip-link in the boilerplate for better WCAG compliance.
