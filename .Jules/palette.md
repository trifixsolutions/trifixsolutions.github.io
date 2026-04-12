## 2026-03-20 - [Accessible Form Feedback and Micro-UX]
**Learning:** Replacing blocking browser `alert()` calls with in-page, asynchronous feedback using `aria-live="polite"` significantly improves the user experience for both sighted and screen-reader users. Additionally, combining a button loading state ("Sending...") with an immediate success message provides a responsive and satisfying micro-UX.
**Action:** Always prefer in-page status messages with `aria-live` and use button loading states for async actions. Link labels explicitly using `id`/`for` and provide `autocomplete` hints for common fields like `name` and `email`.

## 2026-03-21 - [Lucide Icon Lifecycle in AJAX UI]
**Learning:** When dynamically updating UI elements (like buttons) via JavaScript in a Lucide-powered site, any new <i> tags with data-lucide attributes must be manually re-processed using lucide.createIcons() to ensure they are replaced by SVGs.
**Action:** Always call lucide.createIcons() after updating innerHTML of elements that contain icons to maintain visual consistency.
