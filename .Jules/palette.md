## 2026-03-20 - [Accessible Mobile Navigation]
**Learning:** For a truly accessible mobile menu, `aria-expanded` and `aria-label` must stay synchronized with the menu state. Additionally, preventing background scrolling (`overflow: hidden`) and supporting the `Escape` key with focus restoration are essential micro-UX touches that make the interface feel robust and professional.
**Action:** Always implement a centralized `toggleMenu(isOpen)` function to handle all side effects (ARIA, body scroll, icons) consistently.
