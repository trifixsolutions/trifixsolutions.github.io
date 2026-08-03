## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Containing Block Constraints with Backdrop-Filter]
**Learning:** When an ancestor element (like a scrolled fixed header) uses CSS `backdrop-filter`, it becomes a containing block for descendants with `position: fixed`. This can severely break the layout of full-screen mobile overlays that reside inside the navigation container.
**Action:** Disable the backdrop-filter on the ancestor header (e.g., set to `none !important`) whenever the mobile overlay menu is active to ensure the overlay displays correctly across the entire viewport.
