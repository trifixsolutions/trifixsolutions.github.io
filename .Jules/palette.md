## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Lucide Icon Selection Stability]
**Learning:** Lucide's `createIcons()` replaces `<i>` tags with `<svg>` elements. Standard tag selectors like `querySelector('i')` will fail after the first initialization.
**Action:** Use attribute selectors like `querySelector('[data-lucide]')` to target icons consistently across dynamic updates.
