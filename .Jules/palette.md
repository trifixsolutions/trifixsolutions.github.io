## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Centralized Mobile Menu State Management]
**Learning:** An accessible mobile menu is best built with centralized state management (using a single `toggleMenu` function). This ensures that visual classes, scroll-locking on body, icon state transformations, and screen-reader state attributes (like `aria-expanded` and `aria-label`) remain perfectly in sync. Additionally, keyboard accessibility requires handling the `Escape` key and programmatically restoring focus to the trigger button upon closing.
**Action:** Always use a single state synchronization function for dynamic UI overlays and handle both mouse and keyboard exit paths (including Escape key and focus restoration).
