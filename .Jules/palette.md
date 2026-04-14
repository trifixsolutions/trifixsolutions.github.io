## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-04-14 - [Constraint: No Custom CSS for Accessibility]
**Learning:** Implementing standard accessibility features like "Skip to Content" links is blocked by the repository's strict "no custom CSS" boundary when necessary utility classes (like `.sr-only` or `.visually-hidden`) are missing from the existing stylesheet.
**Action:** In repositories with strict CSS boundaries and missing accessibility utilities, prioritize non-visual UX improvements (like `autocomplete` or `aria` attributes) or request the addition of global utility classes before attempting features that require new styling.
