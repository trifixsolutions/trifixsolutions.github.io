## 2026-03-21 - [Fixing Container Confinement with Backdrop Filters]
**Learning:** An ancestor element with `backdrop-filter` (such as a scrolled `.navbar`) acts as a containing block for descendants with `position: fixed` (such as the mobile overlay menu), confining and cropping them to the ancestor's bounds. Disabling the `backdrop-filter` and supplying a fallback background color on the active ancestor resolves the confinement issue.
**Action:** When creating fixed mobile overlay menus that are children of scrolled headers, ensure you dynamically toggle the ancestor's `backdrop-filter` to `none` while the menu is active.

## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.
