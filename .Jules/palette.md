## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Keyboard Accessibility and Skip Links]
**Learning:** For keyboard-only and screen-reader users, a "Skip to main content" link is essential for bypassing repetitive navigation. When implementing internal links or skip links on a site with a fixed header, it is critical to use `scroll-margin-top` in CSS to prevent the target element from being obscured by the header, and to manually manage focus in JavaScript (`element.focus()`) to ensure the focus ring moves to the correct section.
**Action:** Always include a skip link as the first focusable element. Use `scroll-margin-top` matching the header height for all targetable sections, and call `.focus()` on targets after smooth-scroll navigation.
