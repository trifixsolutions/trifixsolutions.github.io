## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [AJAX Form Submission and ARIA Focus Management]
**Learning:** Implementing AJAX form submission with FormSubmit.co requires dynamic URL construction (replacing `formsubmit.co/` with `formsubmit.co/ajax/`) and specific headers (`Accept: application/json`). For accessibility, when replacing the entire form with a success message, the container should have `role="status"` and `tabindex="-1"` and be programmatically focused to ensure immediate screen reader announcement.
**Action:** Use `fetch` for form submissions with appropriate AJAX endpoints and headers. Manage focus programmatically after major DOM updates to guide assistive technology.
