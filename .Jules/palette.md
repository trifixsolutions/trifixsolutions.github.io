## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-04-09 - [Enhanced Form Submission and Navigation Accessibility]
**Learning:** Moving from a placeholder timeout-based form submission to a real AJAX implementation using the Fetch API significantly improves micro-UX. Coupling this with  feedback and button loading states (using Lucide icons and CSS animations) ensures all users receive clear, immediate confirmation. Additionally, keeping  in sync with the mobile menu's state is essential for a fully accessible navigation experience.
**Action:** Use AJAX for form submissions with  and provide distinct success/error UI states. Always synchronize ARIA attributes like  with their corresponding visual states in JavaScript.

## 2026-04-09 - [Enhanced Form Submission and Navigation Accessibility]
**Learning:** Moving from a placeholder timeout-based form submission to a real AJAX implementation using the Fetch API significantly improves micro-UX. Coupling this with `aria-live="polite"` feedback and button loading states (using Lucide icons and CSS animations) ensures all users receive clear, immediate confirmation. Additionally, keeping `aria-expanded` in sync with the mobile menu's state is essential for a fully accessible navigation experience.
**Action:** Use AJAX for form submissions with `Accept: application/json` and provide distinct success/error UI states. Always synchronize ARIA attributes like `aria-expanded` with their corresponding visual states in JavaScript.
