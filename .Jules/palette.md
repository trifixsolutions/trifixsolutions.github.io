## 2025-05-14 - [Accessibility and Inline Feedback Enhancement]
**Learning:** For static sites using placeholders as labels, the `.visually-hidden` pattern is essential for screen-reader accessibility without disrupting the visual design. Replacing blocking `alert()` calls with `aria-live` status regions significantly improves the flow for all users.
**Action:** Always include a `.visually-hidden` utility in the CSS and ensure `aria-live` status elements are present for any form-based feedback.
