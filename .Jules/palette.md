## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Mobile Menu Accessibility and Scroll Locking]
**Learning:** A truly accessible mobile menu requires more than just toggling a class. It must synchronize ARIA states (`aria-expanded`, dynamic `aria-label`), lock background scrolling to prevent user disorientation, and support keyboard shortcuts like `Escape` with focus restoration. Refactoring these into a centralized `toggleMenu` function ensures all states stay in sync across different interaction triggers.
**Action:** When implementing mobile overlays, always synchronize ARIA attributes, implement body scroll locking, and ensure keyboard navigation (especially Escape key closure and focus restoration) is handled.
