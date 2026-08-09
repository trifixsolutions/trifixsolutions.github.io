## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-26 - [Backdrop-Filter containing blocks, Lucide SVGs, and Smooth Scroll Focus Shifting]
**Learning:**
1. Elements with CSS `backdrop-filter` act as containing blocks for absolute/fixed positioned descendants. If `.navbar` has a backdrop blur, descendant mobile menus with `position: fixed` will be confined to `.navbar`'s visual height rather than overlaying the viewport.
2. Lucide dynamically replaces `<i>` tags with `<svg>` elements. Selecting elements using `querySelector('i')` after initialization will fail, making `querySelector('[data-lucide]')` the robust choice.
3. Smooth-scroll visual transitions must be accompanied by programmatic focus shifts using `.focus()` on target sections (`tabindex="-1"`) to synchronize keyboard navigation order with the screen.
**Action:** Disable `backdrop-filter` (set to `none !important`) on the containing header while the mobile menu overlay is active. Always select Lucide elements via `[data-lucide]`, and use a timeout to shift programmatic focus after smooth scrolling to keep keyboard and screen reader users in sync.
