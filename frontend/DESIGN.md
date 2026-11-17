# Design system

A quiet gallery wall. The palette, the serif-and-Jost pairing, the hairline rules and the wide-tracked labels
come from the Lily Eve storefront; the soft wash and the overlapping framed plates come from the gallery hero
reference. The wall stays neutral so the screenshots carry the colour.

Source of truth: `src/styles/tokens.css`. Tailwind reads those tokens in `tailwind.config.js`; motion values
live in `src/lib/motion.ts`.

## Token layers

| Layer | Prefix | Used by | Example |
|-------|--------|---------|---------|
| Primitive | `--p-*` | Semantic tokens only | `--p-bronze-700: 111 85 64` |
| Semantic | `--c-*`, `--font-*`, `--text-*`, `--space-*` | Tailwind theme, CSS | `--c-accent: var(--p-bronze-700)` |
| Component | `--btn-*`, `--rule`, `--nav-bg`, `--plate-mat` | One component each | `--btn-fill` |

Colours are stored as RGB channels so opacity modifiers work: `border-ink/15`, `text-surface/70`.

## Colour

| Tailwind | Token | Hex | Use |
|----------|-------|-----|-----|
| `paper` | `--c-bg` | `#F6EFE7` | The wall. Default background |
| `surface` | `--c-surface` | `#FBF8F3` | Plate mats, the form card, text on dark |
| `band` | `--c-band` | `#EDE5D8` | One tan band (Experience), preloader, mobile menu |
| `ink` | `--c-fg` | `#262321` | Headings |
| `body` | `--c-body` | `#3A3836` | Running text |
| `muted` | `--c-muted` | `#6B645C` | Secondary text, labels (5.2:1 on paper) |
| `accent` | `--c-accent` | `#6F5540` | Buttons, italic emphasis, active states (6.4:1 on paper) |
| `gold` | `--c-accent-soft` | `#C9A780` | Accent on the dark band only |
| `night` | `--c-dark` | `#3A3836` | One dark band (App case studies) and the footer |
| `wash-a/b/c` | `--c-wash-*` | peach, sage, sky | The drifting wash behind the hero and contact. Nowhere else |

Why these: warm neutrals read as calm and careful, the near-black ink carries authority, and bronze is the one
colour that asks for action. Nothing on the wall competes with the work.

## Type

| Role | Class | Font |
|------|-------|------|
| Display | `.display` + `text-display-xl / lg / md` | Cormorant Garamond 500, lining figures |
| Emphasis | `italic text-accent` | Cormorant Garamond italic. One word or phrase per heading at most |
| Lead | `font-display text-lead` | The About paragraph |
| Body | default, `text-body-lg` | Jost 400 |
| Label | `.label` | Jost 500, uppercase, 0.22em tracking |

## Shape

Square corners (`rounded-plate` is 2px), 1px hairlines at 15% ink, and the double rule (`.rule-double`) under
section headings and above the footer line. Screenshots are hung as `.plate`: a cream mat, a hairline and a
soft shadow. The only circles are the accordion toggle and the cursor label.

## Components

| Component | Where | Variants / states |
|-----------|-------|-------------------|
| Button | `.btn` in `index.css` | Bronze block; an ink fill slides up on hover, press scales to 0.97. Inverts inside `.on-dark` |
| Text link | `.link` | Underline retracts on hover, arrow nudges |
| Plate | `.plate`, `.plate-view`, `.plate-pan` | Static, cycling (hero), stacked curtain (work). `.plate-pan` scrolls the tall screenshot on hover |
| SectionHead | `ui/SectionHead.tsx` | `align="left" \| "center"`; eyebrow, heading, double rule, optional lead |
| RevealText | `ui/RevealText.tsx` | In view, or controlled with `start`. `*word*` marks the italic emphasis |
| Reveal, DrawnRule | `ui/Reveal.tsx` | Fade-up; a hairline that draws from the left |
| Wash | `ui/Wash.tsx` | Decorative, `aria-hidden` |
| Cursor | `ui/Cursor.tsx` | Shows the `data-cursor="…"` label of the element under a fine pointer |

Dark sections add `.on-dark`; display text, rules and buttons pick up their dark values from it.

## Motion

| Token | Value | Use |
|-------|-------|-----|
| `ease.soft` | `[0.16, 1, 0.3, 1]` | Everything that enters or settles |
| `ease.inOut` | `[0.65, 0, 0.35, 1]` | Preloader and menu wipes |
| `duration.fast / base / slow` | 0.25 / 0.6 / 1.1s | Press / hover / reveals |
| `curtain.open / closed` | `inset(…)` clip-paths | Image reveals wipe upward |

What moves: the preloader writes the name; hero words rise and the two plates wipe in, cycle and shift with the
pointer; the About paragraph inks in with scroll; the work plate swaps by curtain as each project reaches the
middle of the screen; case-study rows open and close; rules draw themselves; scrolling is eased with Lenis.
`MotionConfig reducedMotion="user"`, the reduced-motion media query and a Lenis opt-out turn all of it down
for people who ask for less motion.

## Copy

Plain and specific. The h1 names what is built, headings name things, buttons are a verb and an object
("Start a project" is the one main action, worded the same in the nav, hero and contact form). No statistic
strips, no icon-tile feature cards, no numbered eyebrows.
