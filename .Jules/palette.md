## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Semantic and Robust Form AJAX]
**Learning:** When converting a standard form to AJAX, dynamically extracting the endpoint from the form's `action` attribute (and transforming it if necessary) ensures the logic remains robust even if the target email changes. Additionally, using existing layout classes (like `.channel-item`) for status messages maintains visual consistency without needing custom CSS.
**Action:** Always read form attributes (action, method) dynamically in JS handlers. Reuse existing design system classes for dynamic UI elements to ensure they match the app's visual language and respect the 'no custom CSS' boundary.
