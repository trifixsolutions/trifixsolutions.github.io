## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [CSS backdrop-filter and Fixed Position Containment]
**Learning:** An ancestor with a CSS `backdrop-filter` (such as a scrolled navigation bar) acts as a containing block for descendants with `position: fixed` (such as a mobile overlay), confining them to the ancestor's bounding box and cutting off fullscreen display. Disabling `backdrop-filter` on the navbar when the overlay is active cleanly bypasses this containment issue.
**Action:** When using backdrop-filters on sticky/fixed navigation components with fixed overlay children, programmatically disable the backdrop filter on the container when the overlay is active.
