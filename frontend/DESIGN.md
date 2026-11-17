# Design system

The portfolio keeps the industrial language of the previous version (Quantico caps, cyan accent, cut corners) and
formalises it into tokens. Source of truth: `src/styles/tokens.css`. Tailwind reads those tokens in
`tailwind.config.js`; motion values live in `src/lib/motion.ts`.

## Token layers

| Layer | Prefix | Used by | Example |
|-------|--------|---------|---------|
| Primitive | `--p-*` | Semantic tokens only | `--p-cyan-500: 21 188 223` |
| Semantic | `--c-*`, `--font-*`, `--text-*`, `--space-*` | Tailwind theme, CSS | `--c-accent: var(--p-cyan-500)` |
| Component | `--btn-*`, `--nav-*`, `--frame-*` | One component each | `--btn-primary-bg` |

Colours are stored as RGB channels so opacity modifiers work: `bg-ink/10`, `text-paper/60`.

## Colour

| Tailwind | Token | Use |
|----------|-------|-----|
| `paper` | `--c-bg` | Default page background |
| `surface` | `--c-surface` | Raised cards on paper |
| `sunken` | `--c-sunken` | Recessed section background |
| `ink` | `--c-fg` | Text, dark sections |
| `graphite` | `--c-raised-dark` | Hover surface on ink |
| `muted` | `--c-fg-muted` | Secondary text on paper (6.3:1) |
| `accent` | `--c-accent` | Fills, large type on ink, active states |
| `accent-deep` | `--c-accent-text` | Accent for text on paper. Plain `accent` fails contrast there |
| `signal` | `--c-signal` | The "now / live" dot. Nothing else |

Project panels in the web gallery take their colours from the site they show (`theme` in
`src/data/portfolio.ts`). Those are content, not system tokens.

## Type

| Role | Class | Font |
|------|-------|------|
| Display | `.display` + `text-display-xl / lg / md` | Quantico 700, uppercase |
| Body | default, `text-body-lg` | Inter |
| Label | `.label` | IBM Plex Mono, uppercase, 0.14em tracking |

## Shape

The cut corner is the signature. Use `.chamfer-sm` (buttons, icon tiles), `.chamfer` and `.chamfer-lg` (cards,
panels). Browser frames are the one rounded element (`rounded-frame`) because they depict real windows.

## Components

| Component | File | Variants / states |
|-----------|------|-------------------|
| Button | `.btn` in `index.css` | `btn-primary`, `btn-dark`; hover inverts, active scales to 0.97 |
| Chip | `.chip` | Inherits text colour; border is 24% of it |
| SectionLabel | `ui/SectionLabel.tsx` | `index` + title |
| RevealText | `ui/RevealText.tsx` | In-view or controlled by `start`; `*word*` marks accent words |
| Reveal | `ui/Reveal.tsx` | Fade-up on enter; `delay`, `y` |
| Counter | `ui/Counter.tsx` | Counts up once in view |
| Magnetic | `ui/Magnetic.tsx` | Pointer pull; `strength` |
| BrowserFrame | `ui/BrowserFrame.tsx` | Parent `.frame-pan` pans the screenshot on hover |

## Motion

| Token | Value | Use |
|-------|-------|-----|
| `ease.out` | `[0.22, 1, 0.36, 1]` | Entrances, reveals |
| `ease.inOut` | `[0.65, 0, 0.35, 1]` | Preloader, menu wipe |
| `duration.fast / base / slow` | 0.25 / 0.6 / 0.95s | Feedback / default / hero |

Scroll-linked pieces: hero parallax stack, velocity marquee, word-by-word story, pinned horizontal gallery,
stacking app cards, experience progress line, footer name slide. `MotionConfig reducedMotion="user"` and the
CSS media query switch transforms off for people who ask for less motion.
