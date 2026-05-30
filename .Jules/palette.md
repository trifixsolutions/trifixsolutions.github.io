## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Focus Management for Smooth Transitions]
**Learning:** For single-page applications using smooth scroll and dynamic content replacement (like form success messages), programmatic focus management is essential for accessibility. Adding `tabindex="-1"` to target sections and success containers allows them to receive focus via JavaScript without cluttering the natural tab order.
**Action:** When implementing smooth scroll or dynamic content updates, always move focus to the new content/section and ensure it's announced by screen readers using `aria-live` where appropriate.
