## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-04-23 - [Focus Management for Async UI Transitions]
**Learning:** When replacing a form with a success message dynamically, programmatic focus management is critical. Applying `tabindex="-1"` to the new status container and calling `.focus()` ensures that keyboard users and screen readers are immediately directed to the result of their action, preventing focus from being lost or trapped in a deleted DOM element.
**Action:** Always pair `aria-live` updates with explicit focus management when the primary interaction target (like a form) is removed from the DOM.
