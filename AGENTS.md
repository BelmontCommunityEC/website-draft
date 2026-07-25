# AGENTS Instructions

## Styling Guardrails

All styling and layout changes in this repository must be mobile-first.

### Required approach

1. Start with the smallest viewport first (approx 320px+), then enhance upward.
2. Use base classes for mobile defaults and add breakpoint-prefixed classes only for larger screens.
3. Avoid desktop-first overrides such as shrinking large defaults down for mobile.
4. Prefer fluid sizing and wrapping over fixed widths that can overflow.
5. Buttons and primary actions should stack or remain comfortably tappable on small screens.
6. Preserve readable spacing and line lengths on mobile before adding denser desktop layouts.

### Breakpoint usage

1. Base (no prefix) = mobile behavior.
2. `sm:` and above = progressive enhancement only.
3. If a layout feels crowded on mobile, simplify the base layout first instead of adding more desktop exceptions.

### Verification checklist for UI edits

1. Confirm no horizontal overflow at narrow widths.
2. Confirm navigation, CTA buttons, stats cards, and partner chips remain readable and tappable on mobile.
3. Confirm desktop and tablet still render correctly after mobile-first changes.

## Content Governance

1. Organisational objects, guiding principles, constitutional text, and other governance wording must be preserved exactly as approved.
2. Do not paraphrase, simplify, or "tighten" official object wording unless the user explicitly provides replacement text.
3. If asked to edit around these sections, update surrounding copy only and leave exact object wording untouched.
