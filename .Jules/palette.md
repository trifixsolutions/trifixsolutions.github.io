## 2026-06-21 - [Accessible Mobile Navigation Patterns]
**Learning:** A truly accessible mobile menu requires more than just toggling visibility. It must manage screen reader state via `aria-expanded`, provide descriptive `aria-label` updates, prevent background scroll interference with `overflow: hidden`, and support standard keyboard interactions like the `Escape` key with focus restoration.
**Action:** Implement a centralized `toggleMenu` function that handles all these state changes (ARIA, CSS, and Focus) to ensure consistency across different interaction points (clicks, link navigation, keyboard).

## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.
