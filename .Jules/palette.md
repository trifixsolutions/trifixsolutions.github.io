## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Focus Management in Single-Page Layouts]
**Learning:** In single-page websites with fixed headers, simply scrolling to a section is insufficient for keyboard and screen-reader users. Programmatic focus must be shifted to the target element using `.focus()` to ensure the next "Tab" press starts from the correct location.
**Action:** Add `tabindex="-1"` to section landmarks and `main` content areas. Use JavaScript to call `target.focus()` after smooth-scrolling to internal links. Include a "Skip to main content" link as the first focusable element.
