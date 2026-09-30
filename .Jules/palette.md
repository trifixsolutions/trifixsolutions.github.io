## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-30 - Skip-to-Content and Avoid Non-Interactive Tab Stops
**Learning:** Adding `tabindex="0"` to static informational cards is an accessibility anti-pattern because it creates redundant tab stops for keyboard users without providing interactivity. Skip-to-content links combined with programmatic `.focus()` management on target sections (`tabindex="-1"`) provide much better navigation efficiency.
**Action:** Do not make non-interactive content focusable with `tabindex="0"`. Implement WCAG 2.4.1 compliant "Skip to main content" links with proper focus styles and JS focus management for jump targets.
