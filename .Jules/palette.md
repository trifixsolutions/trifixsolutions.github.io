## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Post-Submission Focus Management]
**Learning:** When replacing a form with a success message via AJAX, sighted users see the change, but keyboard and screen-reader users can be left in a "focus vacuum" if the focused element (the submit button) is removed.
**Action:** Apply `tabindex="-1"` to the success message container and programmatically call `.focus()` immediately after it appears. This ensures screen readers announce the content and keyboard users can continue navigating naturally.
