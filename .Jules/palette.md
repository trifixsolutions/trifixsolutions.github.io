## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-05-05 - [Robust Mobile Navigation Accessibility]
**Learning:** For mobile overlays that use external libraries like Lucide for icons, use attribute selectors like `[data-lucide]` in JavaScript to handle icon switching, as original `<i>` tags are often replaced by `<svg>` elements. Centralizing menu state (ARIA, scroll locking, class toggling) in a single function ensures a consistent and accessible experience across different closing triggers like link clicks or the 'Escape' key.
**Action:** Always implement body scroll locking for mobile menus and ensure focus management is handled when closing overlays via keyboard events.
