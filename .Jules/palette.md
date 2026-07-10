## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Mobile Navigation Patterns]
**Learning:** A centralized `toggleMenu` function that synchronizes visual state, ARIA attributes (`aria-expanded`, `aria-label`), and behavioral constraints (body scroll locking) ensures a consistent and accessible experience. Keyboard support for `Escape` with focus restoration is critical for low-vision and power users.
**Action:** Use a single source of truth for mobile menu state. Always pair `aria-expanded` updates with icon changes and implement `body { overflow: hidden }` to prevent context loss during scrolling in the overlay. Ensure focus returns to the toggle button on keyboard close.
