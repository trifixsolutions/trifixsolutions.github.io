## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-06-03 - [Accessible Form Replacement Pattern]
**Learning:** When replacing a form with a success message, applying `tabindex="-1"` and `outline: none` to the new container and programmatically calling `.focus()` ensures that screen readers immediately announce the update without introducing a visible focus ring for sighted users.
**Action:** Use the `tabindex="-1"` + `.focus()` pattern whenever the primary content of a section is dynamically replaced to maintain context for assistive technology.
