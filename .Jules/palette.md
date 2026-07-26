## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Backdrop Filter Containing Block & Icon Mutation Fixes]
**Learning:** An ancestor element with a CSS `backdrop-filter` (such as `.navbar.scrolled`) acts as a containing block for descendants with `position: fixed` (such as the mobile `.nav-links` navigation overlay), confining them to the ancestor's bounds. Additionally, query selecting icons in mutated environments using `[data-lucide]` is far more robust than `i` selectors as icon frameworks like Lucide mutate the tags upon initialization.
**Action:** Always disable `backdrop-filter` (e.g. set to `none !important`) on scrolled navbars when mobile navigation is active, and use `[data-lucide]` queries to reference icons after rendering.
