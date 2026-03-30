## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Mobile Navigation Accessibility and Robustness]
**Learning:** Using `aria-expanded` and `aria-controls` on mobile menu toggles provides essential state information to assistive technology users. Coupling this with JS that updates the attribute ensures a synchronized accessible state. Additionally, robust JS that handles missing internal DOM elements (null checks) prevents UI-breaking errors during micro-UX transitions.
**Action:** Always include ARIA state attributes for interactive menu toggles and ensure JS updates them. Use defensive coding (null checks) when manipulating the DOM for visual feedback.
