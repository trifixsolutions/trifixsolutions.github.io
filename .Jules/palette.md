## 2026-03-09 - [Accessible Form Feedback Micro-UX]
**Learning:** Replacing disruptive `alert()` dialogs with in-page status messages improves the flow and accessibility of form submissions. Using `aria-live="polite"` ensures that screen readers announce the success message without interrupting the user.
**Action:** Always prefer in-page feedback with ARIA live regions over blocking modal alerts for non-critical notifications.
