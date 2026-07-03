## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Centralized Mobile Menu Orchestration]
**Learning:** In a modern micro-UX context, mobile menus require synchronizing multiple states: ARIA attributes (`aria-expanded`, `aria-label`), visual classes, body scroll locking, and focus management. Centralizing this logic into a single `toggleMenu(isOpen)` function prevents state desynchronization and makes implementing global behaviors like 'Escape' key closure much simpler.
**Action:** When implementing interactive overlays (menus, modals), create a single state-driven toggle function to orchestrate ARIA, CSS, and hardware interactions (scrolling, focus) consistently.
