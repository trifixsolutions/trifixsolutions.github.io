## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Accessible Mobile Navigation & Smooth Scroll Focus Alignment]
**Learning:** Centralizing mobile menu state with a single `toggleMenu(isOpen)` function prevents mismatched ARIA roles, class structures, or icon designations. Managing keyboard `Escape` with automatic focus restoration to the trigger, and aligning landing page smooth scrolling with programmatic `.focus()` targeting on `tabindex="-1"` sections, prevents broken focus sequences and satisfies modern accessibility standards.
**Action:** Synchronize class states, dynamic `aria-label` tags, and body scroll-locking simultaneously inside a centralized toggle handler. Ensure all scroll anchors programmatically shift focus to their respective sections.
