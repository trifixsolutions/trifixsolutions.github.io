## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-04-25 - [Enhancing State Transitions with Focus Management]
**Learning:** When replacing a large UI component like a form with a success message, purely visual feedback is insufficient for accessibility. Programmatically moving focus to the new content using `tabindex="-1"` and `.focus()` ensures that screen readers immediately announce the change and keyboard users are correctly positioned in the document flow.
**Action:** Always manage focus programmatically when dynamically swapping major UI sections to provide a clear and accessible state transition.
