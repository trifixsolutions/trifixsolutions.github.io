## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Mobile Navigation]
**Learning:** Accessible mobile menus require three key technical elements beyond visual toggling: 1) Synchronized ARIA states (`aria-expanded`, `aria-label`) to inform screen readers of current status. 2) Background scroll locking (`body { overflow: hidden }`) to prevent content shifting behind the overlay. 3) Keyboard focus management, specifically closing the menu on 'Escape' and restoring focus to the toggle button.
**Action:** When implementing mobile navigation, use a centralized state management function to keep visual, ARIA, and behavioral (scroll lock) states in sync. Always add a 'keydown' listener for the Escape key and ensure the toggle button is re-focused upon closure.
