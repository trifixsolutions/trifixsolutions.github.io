## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Dynamic Content Focus and State Reset]
**Learning:** When replacing a form with a success message, applying `tabindex="-1"` and programmatically focusing the new content ensures that screen readers immediately announce the transition. Additionally, clearing previous error messages at the start of a new submission attempt prevents "stale" feedback from lingering.
**Action:** Use `tabindex="-1"` on dynamic status/success containers and call `.focus()` after injection. Always clear feedback containers before starting new async operations.
