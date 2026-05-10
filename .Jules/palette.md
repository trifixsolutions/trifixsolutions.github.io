## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-24 - [Accessible AJAX Form Submission]
**Learning:** Implementing AJAX form submission with immediate, in-page feedback significantly improves user flow by avoiding full-page reloads and providing clear, accessible status updates. Using `role="status"`, `tabindex="-1"`, and programmatically focusing the success message ensures that screen reader users are immediately aware of the outcome and can easily navigate from the new content.
**Action:** Replace standard form submissions with AJAX flows using `fetch`. Ensure the success view reuses design system classes for consistency and includes a clear "reset" or "send another" action to maintain usability.
