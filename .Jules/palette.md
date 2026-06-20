## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Inclusive Navigation and Focus Management]
**Learning:** Accessible mobile menus require more than just a visual toggle; they must synchronize `aria-expanded` states, manage body scroll locking to prevent background interaction, and handle the `Escape` key for easy keyboard exit. Focus must also be returned to the toggle button when the menu closes to maintain the user's navigational context.
**Action:** Implement `aria-expanded`, `aria-controls`, and `Escape` key handlers for all overlay-based navigation. Use `document.body.style.overflow = 'hidden'` to lock background scroll and ensure focus restoration on close.
