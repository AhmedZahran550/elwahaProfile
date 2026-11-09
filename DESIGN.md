# DESIGN.md — Alwaha "Quiet Luxury" Design System

## Visual World & Aesthetic Philosophy
The visual identity of Alwaha Development reflects **Quiet Luxury Real Estate**: an architectural, spacious, and dignified editorial medium that mirrors high-end developer monographs rather than commoditized software templates.

- **Primary Canvas**: Deep Midnight Navy (`#0E1A2A`) providing infinite depth and optical calm.
- **Elevated Surfaces**: Card Navy (`#16263F`) and Hover Navy (`#1C3050`).
- **Signature Accent**: Antique Gold (`#C9A24B`, with luminous highlight `#E6CB82`) strictly limited to ~10% of surface area (hairlines, badges, active states, architectural wireframes).
- **Text Hierarchy**: Warm Ivory (`#F3EEDF`) for titles and high contrast body; Muted Steel Navy (`#A9B4C8`) for secondary labels and metadata (never dead gray).

## Design Tokens

```css
:root {
  /* Surface Colors */
  --color-bg-deep: #0E1A2A;
  --color-bg-card: #16263F;
  --color-bg-card-hover: #1C3050;
  --color-bg-elevated: #223758;

  /* Accent & Metallic Palette */
  --color-gold: #C9A24B;
  --color-gold-light: #E6CB82;
  --color-gold-dark: #9A7828;
  --color-gold-muted: rgba(201, 162, 75, 0.22);
  --color-gold-glow: rgba(201, 162, 75, 0.12);

  /* Typography Colors */
  --color-ivory: #F3EEDF;
  --color-steel: #A9B4C8;
  --color-steel-muted: rgba(169, 180, 200, 0.65);

  /* Browser Surface Tokens */
  --color-selection: rgba(201, 162, 75, 0.35);
  --color-focus-ring: #C9A24B;

  /* Spacing Scale */
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4.5rem;
  --space-4xl: 6rem;

  /* Typography Scales */
  --font-family-ar: 'Cairo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-en-display: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
  --font-family-en-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Easing & Timing */
  --ease-luxury: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 250ms;
  --duration-medium: 450ms;
  --duration-slow: 850ms;

  /* Container */
  --container-max: 1320px;
  --container-pad: clamp(1.25rem, 4vw, 3rem);
}
```

## Craft Floor & Rules of Engagement
1. **Contrast Compliance**: Body copy on navy passes WCAG AA at $\ge 4.5:1$; headlines pass at $\ge 3:1$.
2. **Logical Properties Only**: Always write `margin-inline-start`, `padding-inline`, `inset-inline-end`, and `text-align: start` so the entire site flips between Arabic (RTL) and English (LTR) automatically without directional hacks.
3. **Restraint Over Cliché**:
   - No gradient text fills.
   - No generic card kits with uniform soft drop shadows.
   - No all-caps tracked-out kickers/eyebrows above titles.
   - No emoji icons.
   - No meaningless numbered step badges.
4. **Browser Theming**:
   - Styled text selection (`::selection`)
   - Custom gold-tinted scrollbars
   - Styled focus rings (`:focus-visible`)
   - Golden input caret (`caret-color`)

