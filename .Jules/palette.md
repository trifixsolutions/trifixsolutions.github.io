## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Smooth Scrolling and Focus Management]
**Learning:** Smooth scroll implementations often leave keyboard focus and screen reader context at the top of the page, even as the viewport moves. Programmatically moving focus to the target element (using `tabindex="-1"` and `.focus({ preventScroll: true })`) ensures that keyboard users and assistive technology are correctly synced with the visual state.
**Action:** When implementing smooth scroll for in-page navigation, always manage focus by moving it to the target section and updating the URL hash using `history.pushState`.
