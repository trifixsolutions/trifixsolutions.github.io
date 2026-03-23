## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Core Accessibility Infrastructure]
**Learning:** High-impact UX wins like AJAX form submission are best supported by solid accessibility infrastructure, including skip-to-content links, semantic `<main>` regions, and proper focus management during SPA-like transitions (e.g., smooth scrolling).
**Action:** Ensure every project includes a `.skip-link`, a `<main id="main-content">`, and that JavaScript-driven navigation or scrolling explicitly moves focus (using `target.focus()` and `tabindex="-1"` if necessary) to the destination.
