## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-06-17 - [Concise AJAX Form Implementation]
**Learning:** When implementing AJAX form submissions in micro-UX tasks, reading the `action` attribute from the DOM and dynamically modifying it (e.g., adding `/ajax/`) ensures the logic remains synchronized with the HTML structure. Using existing design system classes and CSS variables keeps the implementation concise and maintains visual consistency without exceeding line-count constraints.
**Action:** Dynamically derive submission endpoints from the form's `action` attribute and prioritize existing project classes for dynamic UI states.
