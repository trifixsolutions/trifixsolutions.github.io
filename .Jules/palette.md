## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Mobile Navigation ARIA States]
**Learning:** Mobile navigation toggles that only visually change (e.g., hamburger to 'X') are invisible to screen readers unless the state is explicitly communicated via `aria-expanded`. When testing these interactions in automated environments (like Playwright) with fixed-position overlays, standard pointer clicks may be intercepted; using `dispatch_event('click')` ensures the interaction is triggered for state verification.
**Action:** Always include `aria-expanded` and `aria-controls` on mobile menu toggles and synchronize them via JavaScript. In tests, use dispatch events if physical pointer events are blocked by full-screen overlays.
