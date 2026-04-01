## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2024-05-22 - [Keyboard Focus Synchronization in Smooth Scrolling]
**Learning:** Visual smooth scrolling (via CSS `scroll-behavior: smooth` or JS `window.scrollTo`) does not update the browser's accessibility focus. To ensure a coherent experience for keyboard and screen-reader users, you must programmatically move focus to the target element (e.g., using `element.focus()`) after the scroll interaction begins. Non-interactive targets like `<section>` should have `tabindex="-1"` to allow focus without adding them to the natural tab order.
**Action:** When implementing anchor-link navigation, always synchronize the keyboard focus with the visual scroll position.
