## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Secure Async Feedback and Concise Handlers]
**Learning:** When implementing asynchronous feedback (like form status messages), using `.textContent` for dynamic content is critical to prevent XSS vulnerabilities. Additionally, keeping micro-UX logic concise (under 50 lines) ensures maintainability and follows persona boundaries.
**Action:** Use a combination of `.innerHTML` for trusted layout/icons and `.textContent` for dynamic error or success messages. Ensure form handlers remain focused and leverage `try...catch...finally` for robust state management.
