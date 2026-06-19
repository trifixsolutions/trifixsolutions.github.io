## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Navigation and Form Focus Management]
**Learning:** For accessible interactive components, synchronizing ARIA states (aria-expanded, aria-label) with visual states is crucial for screen reader users. Furthermore, when replacing a form with a success message, using tabindex="-1" and programmatically calling .focus() ensures that the change is immediately announced and navigable.
**Action:** Always pair visual state changes in menus with ARIA attribute updates. In single-page applications or AJAX forms, manage focus explicitly when content is replaced to maintain a logical reading flow.
