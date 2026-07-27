## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-22 - [Centralized Mobile Menu State Management and Smooth Scroll Focus Pairing]
**Learning:** Pairing smooth scrolling with programmatic focus management (`.focus({ preventScroll: true })`) guarantees that keyboard visual context matches screen focus state. Additionally, avoiding `backdrop-filter` scrolling layout constraints on absolute/fixed menu systems while maintaining proper focus closure with 'Escape' provides perfect keyboard-navigable and screen-reader compliant interfaces.
**Action:** Ensure target elements are programmatically focused after smooth scrolling. Keep ARIA states synchronized with visibility changes and manage body scrolling lock safely.
