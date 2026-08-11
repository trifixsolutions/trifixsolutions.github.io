## 2026-03-21 - [Backdrop-Filter Containing Block Bug in Mobile Overlays]
**Learning:** An ancestor element with a CSS `backdrop-filter` (such as `.navbar.scrolled`) acts as a containing block for descendants with `position: fixed` (such as the mobile `.nav-links` navigation overlay), confining them to the ancestor's bounds. To resolve this, disable the `backdrop-filter` (e.g., set to `none !important`) on the ancestor when the mobile overlay is active.
**Action:** When implementing full-screen mobile menu overlays nested inside headers with backdrop-filters, always disable the parent's backdrop-filter using a state-tracking utility class.

## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.
