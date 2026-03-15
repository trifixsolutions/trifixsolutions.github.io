## 2025-05-15 - [Form Feedback & Accessibility]
**Learning:** Replacing native `alert()` with in-page `aria-live` feedback containers significantly improves UX by maintaining context and accessibility. Decorative elements like logo marks should be explicitly hidden with `aria-hidden="true"`.
**Action:** Always include a dedicated status element for async operations and audit decorative SVG/icons for screen reader impact.
