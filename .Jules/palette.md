## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-23 - [Fixed Header Skip Link Positioning]
**Learning:** Using `position: fixed` with a negative `top` offset (e.g., `-100px`) for skip links prevents offscreen links from intercepting pointer events or blocking clicks on fixed header elements when unfocused, while ensuring smooth focus visibility (`top: 15px`).
**Action:** Always style skip-to-content links with `position: fixed` and a negative top position when working with fixed or sticky top navigation bars.
