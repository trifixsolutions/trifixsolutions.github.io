## 2025-05-15 - [Accessible Interactivity]
**Learning:** Browser alerts disrupt UX and aren't well-integrated with assistive technology feedback cycles. In-page status elements with `aria-live="polite"` provide a smoother, more accessible experience for form submissions.
**Action:** Use `#form-status` with `aria-live` instead of `alert()` for asynchronous feedback.

## 2025-05-15 - [Mobile Menu Accessibility]
**Learning:** Mobile toggles must use `aria-expanded` and `aria-controls` to communicate their state to screen readers, especially when they only contain visual icons (like hamburgers).
**Action:** Always sync `aria-expanded` state with the visibility of the controlled navigation menu.

## 2025-05-15 - [Form Field Accessibility]
**Learning:** Placeholders are not a substitute for labels. Explicit `<label>` elements associated with inputs via `for`/`id` are essential for accessibility and a better user experience, as they provide a larger click target and remain visible when the field is filled.
**Action:** Use proper `<label>` tags for all form inputs.
