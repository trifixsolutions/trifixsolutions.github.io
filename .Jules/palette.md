## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-06-07 - [Comprehensive AJAX Form UX]
**Learning:** When implementing AJAX form submissions, it is critical to re-enable the submit button in the success path, not just the error path, to allow for subsequent submissions and provide clear "ready" feedback. Additionally, when utility classes for status feedback are unavailable, utilizing existing theme colors (like the WhatsApp green `#25d366` or footer heart red `#ef4444`) for inline-styled status messages ensures visual consistency.
**Action:** Always verify that interactive elements are restored to their actionable state in all completion paths of asynchronous operations. Maintain theme harmony by sampling existing brand colors for dynamic UI elements.
