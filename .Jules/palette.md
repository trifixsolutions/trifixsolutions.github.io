## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-22 - [Accessible Mobile Menu Patterns]
**Learning:** Accessible mobile menus require more than just a visual toggle; they must synchronize `aria-expanded` states for screen readers and handle keyboard expectations like the `Escape` key for closure and focus restoration to the trigger button.
**Action:** Always implement a central state management function for mobile menus to keep ARIA attributes and visual states in sync, and include an `Escape` key listener that restores focus to the trigger.
