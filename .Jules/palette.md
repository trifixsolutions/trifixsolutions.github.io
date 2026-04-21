## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-04-21 - [Accessible Navigation and Focus Management]
**Learning:** Proper keyboard navigation goes beyond simple tab order; it requires synchronizing ARIA states (`aria-expanded`), handling common keys like `Escape` for closing overlays, and programmatically managing focus after animations (like smooth scrolling) to ensure a seamless experience for assistive technology and keyboard users.
**Action:** Always synchronize `aria-expanded` and `aria-controls` for toggleable components. Implement focus management for scroll targets and modal/overlay dismissals to maintain a logical focus flow.
