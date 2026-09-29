## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-30 - [Skip Link and Focus Management in Smooth-Scrolling Landing Pages]
**Learning:** In single-page smooth-scrolling websites, custom anchor navigation handlers that call `preventDefault()` do not move DOM focus by default. Programmatically invoking `.focus()` on the target element (which has `tabindex="-1"`) ensures that keyboard focus matches visual position and skip links transition focus reliably.
**Action:** Always pair custom smooth-scroll event handlers with `target.focus()` on a `tabindex="-1"` element and ensure `.skip-link` styles are positioned off-screen until focused.
