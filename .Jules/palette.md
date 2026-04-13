## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Lucide Icon State Management]
**Learning:** When using Lucide icons in an interactive UI where icons change state (e.g., loading spinner to success icon), re-querying the icon element before modification is critical. Lucide replaces the original `<i>` placeholder with an `<svg>` element, making any stored references to the original node stale and ineffective for further DOM updates.
**Action:** Always use `parentElement.querySelector('i, svg')` immediately before updating an icon's `data-lucide` attribute or classes during asynchronous state transitions.
