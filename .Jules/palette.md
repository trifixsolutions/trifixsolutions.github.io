## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-24 - [AJAX Form Submission and Accessible Feedback]
**Learning:** Transitioning from standard page-redirect form submissions to AJAX-based submissions with immediate feedback (loading states and inline success/error messages) significantly enhances the micro-UX. Using `aria-live="polite"` ensures that these status updates are accessible to screen reader users without being intrusive.
**Action:** Always implement AJAX-based form submission when possible to keep users on the page. Use `aria-live` for asynchronous feedback and provide clear visual loading indicators (like spinning icons) to confirm the action is in progress.
