## 2025-03-10 - [In-page Form Feedback & Loading States]
**Learning:** Replacing disruptive browser `alert()` calls with in-page feedback containers (using `aria-live="polite"`) significantly improves the flow of user interactions. Additionally, using the `:empty { display: none; }` selector on these containers prevents unwanted whitespace or layout shifts when no message is present.
**Action:** Always prefer in-page status elements for form submission feedback. Implement a "Sending..." loading state by disabling the submit button to provide immediate visual confirmation of the action.
