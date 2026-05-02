## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Mobile Navigation]
**Learning:** Centralizing mobile menu state management allows for consistent ARIA attribute updates, body scroll locking, and robust focus management (e.g., returning focus to the toggle on 'Escape'). This significantly improves accessibility for keyboard and screen reader users while preventing background scrolling "jank".
**Action:** Use a dedicated `setMenuState` function for mobile overlays to manage all related side effects (ARIA, classes, scroll lock, focus) in one place.
