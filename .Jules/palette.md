## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-04-07 - [AJAX Form Submission with Inline Feedback]
**Learning:** Asynchronous form submission using `fetch` to an AJAX endpoint (e.g., FormSubmit's `/ajax/` path) eliminates jarring page redirects and allows for immediate, accessible UI feedback. Combining a spinning loading icon with clear success/error status messages creates a "micro-moment" of delight that feels more modern and responsive.
**Action:** Use `fetch` for form submissions where possible, providing clear loading states and ARIA-live announcements for results.
