## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-24 - [Accessible Form Submission with AJAX]
**Learning:** Implementing AJAX form submission with FormSubmit.co requires specific URL handling (`/ajax/` path) and manual focus management for the success state. Replacing the entire form with a success message is a clean UX pattern, but requires `tabindex="-1"` and `.focus()` on the new container to ensure screen readers announce the transition.
**Action:** Use `fetch` for form submissions to keep users in-context. Always pair DOM replacements with `aria-live="polite"` and programmatic focus management. Re-run `lucide.createIcons()` after dynamic DOM updates.
