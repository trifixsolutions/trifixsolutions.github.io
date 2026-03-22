## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-22 - [Complete Keyboard and Screen Reader Continuity]
**Learning:** Smooth scrolling interactions must be paired with focus management to ensure that keyboard and screen-reader users are properly navigated to the target section. Without calling `target.focus()`, the focus remains at the starting anchor, breaking the user's navigational flow.
**Action:** After implementing smooth scrolling, always programmatically move focus to the destination element, ensuring it has a `tabindex="-1"` if it is not naturally focusable.
