## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [AJAX Form Conversion and Focus Management]
**Learning:** When converting standard forms to AJAX, replacing the form content with a success message requires explicit focus management. Applying `tabindex="-1"` and calling `.focus()` on the new content ensures screen readers announce the transition, preventing "silent" updates that leave users stranded.
**Action:** For AJAX success states, always move focus to the confirmation message. Use `location.reload()` as a simple reset pattern for "Send Another" actions in static sites.
