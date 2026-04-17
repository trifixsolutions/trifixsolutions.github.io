## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-04-17 - [Accessible AJAX Form Lifecycle]
**Learning:** Transitioning a form to an AJAX-based submission requires careful management of the entire UX lifecycle: adding `autocomplete` for input efficiency, providing a clear loading state (e.g., a spinner), using `aria-live` and programmatic focus for success message announcement, and ensuring a robust "Reset" state that restores focus to the first non-hidden input field.
**Action:** Always implement a complete "Success -> Reset" loop for AJAX forms, prioritizing focus management and semantic attributes (`autocomplete`, `aria-live`, `tabindex`) to maintain accessibility.
