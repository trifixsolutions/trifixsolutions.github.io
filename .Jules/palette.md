## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-04-24 - [Mobile Menu Accessibility and Focus Management]
**Learning:** Implementing `aria-expanded`, `aria-controls`, and `Escape` key support with focus restoration on mobile navigation menus provides a much more robust experience for keyboard and screen reader users. Centralizing toggle logic in a single function ensures that these accessibility states stay in sync across different interaction methods (button click, link click, keyboard).
**Action:** Always include `aria-expanded` and `aria-controls` for mobile toggles, and implement a dedicated keyboard listener for `Escape` that restores focus to the trigger element. Use a centralized state management function for UI toggles to prevent out-of-sync accessibility attributes.
