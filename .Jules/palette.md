## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Robust Mobile Navigation Accessibility]
**Learning:** A truly accessible mobile menu requires synchronizing ARIA states (`aria-expanded`, `aria-label`), managing background interaction via body scroll locking, and providing keyboard shortcuts (Escape key) with explicit focus restoration to the trigger element.
**Action:** Implement a centralized `toggleMenu` function to handle all state synchronization and focus management for overlays.
