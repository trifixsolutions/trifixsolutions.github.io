## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-04-20 - [Semantic Landmarks and Accessible Navigation]
**Learning:** Adding a `<main>` landmark and `aria-expanded` attributes to navigation toggles drastically improves the screen reader experience. Furthermore, using attribute selectors (`[data-lucide]`) for icon replacement is more resilient than tag selectors when using libraries like Lucide that replace DOM elements.
**Action:** Always include a `<main>` landmark for core content. Ensure all interactive toggles have ARIA state attributes. Use resilient selectors for dynamic icon updates.
