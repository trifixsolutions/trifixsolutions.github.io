## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Synchronized Mobile Navigation States]
**Learning:** Centralizing mobile menu state transitions in a single `toggleMenu(isOpen)` function ensures that ARIA attributes (`aria-expanded`, `aria-label`), visual classes, body scroll locking, and icon transformations remain perfectly synchronized. This prevents accessibility "drift" where the visual state doesn't match the screen reader's state.
**Action:** Use a centralized toggle function for complex UI components like mobile menus or modals to maintain accessibility and visual consistency.
