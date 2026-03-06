## 2025-03-06 - [Contact Form Accessibility & Feedback]
**Learning:** Standardized an accessibility pattern for contact forms in static sites by using visually-hidden labels for screen readers and `aria-live="polite"` on a dedicated status container to announce submission results without using intrusive browser alerts.
**Action:** Always include a visually-hidden label and an ARIA live region for asynchronous feedback to ensure accessibility without affecting the visual design.
