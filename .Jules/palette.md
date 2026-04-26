## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-22 - [Accessible Mobile Navigation]
**Learning:** Mobile menus must clearly communicate their state to assistive technologies using `aria-expanded` and `aria-controls`. Standard keyboard expectations include closing the menu with the `Escape` key and returning focus to the trigger button to maintain context.
**Action:** Centralize toggle logic to ensure ARIA attributes are synchronized with UI state, and always implement an `Escape` key listener for modal-like overlays.
