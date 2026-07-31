## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-22 - [Containing Blocks and Mobile Menu Overlay State]
**Learning:** An ancestor element with a CSS `backdrop-filter` (such as a scrolled fixed navbar) acts as a containing block for descendants with `position: fixed` (such as full-screen navigation overlays), confining and clipping them. Toggling a helper class to strip the `backdrop-filter` when the menu is active preserves full-screen layouts. Additionally, centralizing state transitions into a single function prevents mismatched ARIA and visual classes across multiple event listeners.
**Action:** Always strip backdrop filters from containing headers when showing fixed modal overlays. Centralize menu states into a single controller for reliable ARIA synchronizations.
