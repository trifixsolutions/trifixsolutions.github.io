## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Mobile Navigation]
**Learning:** Implementing 'aria-expanded', 'aria-controls', and keyboard 'Escape' support for mobile navigation overlays, while ensuring focus returns to the toggle button on close, provides a consistent and accessible experience. Refactoring state management into a single 'setMenuState' function ensures all entry points (toggle, links, keyboard) behave identically.
**Action:** Use a centralized state management function for interactive overlays to synchronize ARIA attributes, visual states, and focus management across all interaction methods.
