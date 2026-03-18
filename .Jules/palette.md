# Palette's Journal - Trifix Solutions

## 2025-05-14 - Accessible Feedback and Semantic Structure
**Learning:** Using `alert()` for form submission feedback is disruptive and inaccessible. In-page feedback using `aria-live="polite"` provides a much smoother micro-UX. Proper semantic structure with `<main>` and `aria-hidden` on decorative elements ensures a clear path for assistive technologies.
**Action:** Always prefer `#form-status` containers with `aria-live` over modal alerts for asynchronous success messages. Ensure decorative icons/marks are hidden from screen readers.
