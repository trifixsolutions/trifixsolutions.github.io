## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Focus Management in Smooth-Scroll Layouts]
**Learning:** In Single-Page Applications (SPAs) or landing pages using smooth-scroll anchor links, visual scrolling is not enough for accessibility. Programmatic focus must follow the scroll so that the next Tab press starts from the new section, rather than the original navigation menu.
**Action:** When implementing smooth scroll for anchor links, always use `element.focus()` on the target section. Ensure target sections have `tabindex="-1"` so they can receive programmatic focus without interfering with the natural tab order.
