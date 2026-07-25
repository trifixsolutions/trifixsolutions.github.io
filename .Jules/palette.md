## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Backdrop-filter and Fixed Positioning Containment]
**Learning:** CSS `backdrop-filter` on an ancestor element (like `.navbar.scrolled`) creates a new containing block. This restricts any `position: fixed` descendant (such as the mobile overlay) to the ancestor's bounding box instead of the viewport.
**Action:** Disable the `backdrop-filter` (e.g., set `backdrop-filter: none !important`) on the ancestor element when the fixed mobile menu overlay is active.
