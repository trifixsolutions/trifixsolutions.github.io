## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [FormSubmit AJAX Endpoint Nuance]
**Learning:** FormSubmit.co requires the `/ajax/` path component in the URL for AJAX submissions to work correctly with JSON responses. Standard HTML form actions usually point to `https://formsubmit.co/email`, which must be programmatically updated to `https://formsubmit.co/ajax/email` in JavaScript.
**Action:** Always ensure the `/ajax/` prefix is present in the Fetch URL when implementing asynchronous FormSubmit integrations.
