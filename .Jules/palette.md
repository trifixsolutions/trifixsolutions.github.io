## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-04-29 - [Accessible Mobile Navigation]
**Learning:** Mobile overlays often lack proper state communication to assistive technologies and critical keyboard shortcuts like `Escape` to close. Additionally, when using icon libraries like Lucide that replace DOM elements with SVGs, attribute selectors (e.g., `[data-lucide]`) are more robust than tag selectors for dynamic updates.
**Action:** Always include `aria-expanded` and `aria-controls` for toggleable UI. Implement `Escape` key handlers for overlays and return focus to the trigger element to preserve keyboard context.
