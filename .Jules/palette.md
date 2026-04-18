## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [AJAX Form Feedback with Focus Management]
**Learning:** For a truly accessible AJAX submission, merely updating a container with `aria-live` is sometimes not enough for complex state changes. Adding `tabindex="-1"` and programmatically calling `.focus()` on the status container ensures that the focus is moved to the relevant result, preventing the keyboard focus from getting "lost" when the form is hidden.
**Action:** When replacing a form with a success/error message, always move focus to the result container to guide the user's next interaction.
