## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Navigation Focus Management]
**Learning:** Smooth-scrolling to internal section links only moves the visual viewport and does not update the browser's focus state. This creates a disconnect for keyboard and screen reader users who remain at the top of the page.
**Action:** Always use `target.focus()` after a smooth-scroll transition. Target elements should have `tabindex="-1"` if they are not naturally focusable to allow programmatic focus without adding them to the tab order.
