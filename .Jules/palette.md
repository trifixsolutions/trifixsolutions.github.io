## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Mobile Navigation Patterns]
**Learning:** Accessible mobile menus should synchronize the 'aria-expanded' state with visibility, update 'aria-label' dynamically (e.g., "Open menu" to "Close menu"), return focus to the toggle button when closed via keyboard (Escape), and lock background scrolling to prevent user disorientation.
**Action:** Implement a centralized `toggleMenu` function to ensure all state changes (ARIA, CSS classes, icons, scroll lock) are synchronized across all interaction methods (click, link click, keyboard).
