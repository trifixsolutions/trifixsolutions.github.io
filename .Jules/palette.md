## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-26 - [Robust Icon Querying & Mobile Nav Accessibility]
**Learning:** Icon libraries like Lucide replace `<i>` tags with `<svg>` elements during initialization. Querying `<i>` directly in toggle handlers causes runtime null errors when opening menus. Always use robust selectors like `[data-lucide]` or fallback selectors, and pair menu toggling with `aria-expanded`, dynamic `aria-label`, body scroll locking, and `Escape` key focus restoration.
**Action:** Use `querySelector('[data-lucide]')` for icon element lookup and manage mobile overlay state through a centralized `toggleMenu` helper function.
