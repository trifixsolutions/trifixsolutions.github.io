## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Seamless Form Reset Pattern]
**Learning:** When replacing a form with a success message in a single-page context, providing a "Send Another" button using `location.reload()` offers the most reliable way to reset the UI state and Lucide icons without complex manual DOM manipulation. Programmatically focusing the success container ensures that the update is immediately perceivable by assistive technologies.
**Action:** Implement a "Send Another" action using `location.reload()` for form success states to ensure a clean slate for the next interaction. Always manage focus when swapping major UI components.
