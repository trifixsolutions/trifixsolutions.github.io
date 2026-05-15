## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-05-15 - [Accessible Mobile Navigation]
**Learning:** A truly accessible mobile menu requires more than just a visibility toggle. It must synchronize `aria-expanded` and `aria-label` on the trigger, implement keyboard shortcuts like `Escape` for closing, restore focus to the trigger upon closing, and manage `body` overflow to prevent background scrolling.
**Action:** Use a centralized state update function for mobile menus to keep ARIA attributes, icons, and layout styles (like scroll lock) in sync. Always include an `Escape` key listener for full-screen overlays.
