## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-24 - [Programmatic Focus for Dynamic Feedback]
**Learning:** When replacing form content with an AJAX success message, using `setTimeout` for programmatic focus on the new container ensures that assistive technologies correctly transition focus after the DOM has been updated. Additionally, `autocomplete` attributes significantly reduce cognitive load and friction for returning users.
**Action:** Wrap `.focus()` calls in a short `setTimeout` (e.g., 100ms) when focusing elements that were just added to the DOM. Always include standard `autocomplete` values for identity and contact fields.
