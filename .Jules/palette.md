## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Mobile Navigation]
**Learning:** A truly accessible mobile menu requires more than just a visual toggle. Synchronizing `aria-expanded` and `aria-label` states, preventing background scrolling with `body { overflow: hidden }`, and implementing keyboard closure (Escape key) with focus restoration are essential for a polished micro-UX that serves all users.
**Action:** Always centralize mobile menu state management in a helper function to ensure all accessibility attributes and side effects (like scroll locking) are consistently applied.
