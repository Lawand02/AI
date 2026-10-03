---
name: Lawand Yousef — Portfolio
description: An engineer's workbench on the web — measured surfaces, one accent, monospace annotations.
colors:
  bench-indigo: "oklch(0.45 0.2 280)"
  bench-indigo-bright: "oklch(0.6 0.25 280)"
  probe-cyan: "oklch(0.7 0.15 200)"
  probe-cyan-bright: "oklch(0.55 0.2 200)"
  orchid-magenta: "oklch(0.6 0.18 320)"
  orchid-magenta-bright: "oklch(0.5 0.22 320)"
  fault-red: "oklch(0.577 0.245 27.325)"
  fault-red-bright: "oklch(0.704 0.191 22.216)"
  workbench: "oklch(0.98 0 0)"
  cold-cathode: "oklch(0.11 0.01 260)"
  panel-light: "oklch(1 0 0)"
  panel-dark: "oklch(0.16 0.02 260)"
  trace: "oklch(0.145 0 0)"
  trace-bright: "oklch(0.985 0 0)"
  graphite: "oklch(0.556 0 0)"
  graphite-cool: "oklch(0.65 0.02 260)"
  hairline: "oklch(0.922 0 0)"
  hairline-dark: "oklch(1 0 0 / 10%)"
typography:
  display:
    fontFamily: "var(--font-geist-sans, \"Geist\"), system-ui, sans-serif"
    fontSize: "3rem → 4.5rem (text-5xl → md:text-7xl)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "var(--font-geist-sans, \"Geist\"), system-ui, sans-serif"
    fontSize: "2.25rem → 3rem (text-4xl → md:text-5xl)"
    fontWeight: 700
    lineHeight: 1.11
    letterSpacing: "normal"
  title:
    fontFamily: "var(--font-geist-sans, \"Geist\"), system-ui, sans-serif"
    fontSize: "1.125rem (text-lg)"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "var(--font-geist-sans, \"Geist\"), system-ui, sans-serif"
    fontSize: "1.125rem (text-lg)"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  ui:
    fontFamily: "var(--font-geist-sans, \"Geist\"), system-ui, sans-serif"
    fontSize: "0.875rem (text-sm)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-geist-sans, \"Geist\"), system-ui, sans-serif"
    fontSize: "0.75rem (text-xs)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "normal"
  eyebrow:
    fontFamily: "var(--font-geist-mono, \"Geist Mono\"), ui-monospace, monospace"
    fontSize: "0.875rem (text-sm)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  2xl: "18px"
  3xl: "22px"
  4xl: "26px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "32px"
  3xl: "40px"
  4xl: "48px"
  nav-height: "64px"
  section: "96px"
  shell-wide: "1152px"
  shell-prose: "896px"
  shell-form: "576px"
components:
  button-primary:
    backgroundColor: "{colors.bench-indigo}"
    textColor: "{colors.trace-bright}"
    typography: "{typography.ui}"
    rounded: "{rounded.lg}"
    padding: "10px"
    height: "32px"
  button-primary-hover:
    backgroundColor: "oklch(0.45 0.2 280 / 80%)"
  button-outline:
    backgroundColor: "{colors.workbench}"
    textColor: "{colors.trace}"
    typography: "{typography.ui}"
    rounded: "{rounded.lg}"
    padding: "10px"
    height: "32px"
  button-outline-hover:
    backgroundColor: "{colors.workbench}"
    textColor: "{colors.trace}"
  button-secondary:
    backgroundColor: "{colors.probe-cyan}"
    textColor: "{colors.trace}"
    typography: "{typography.ui}"
    rounded: "{rounded.lg}"
    padding: "10px"
    height: "32px"
  card:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.trace}"
    typography: "{typography.ui}"
    rounded: "{rounded.xl}"
    padding: "20px"
  badge-secondary:
    backgroundColor: "{colors.probe-cyan}"
    textColor: "{colors.trace}"
    typography: "{typography.label}"
    rounded: "{rounded.4xl}"
    padding: "2px 8px"
    height: "20px"
  input-field:
    backgroundColor: "{colors.workbench}"
    textColor: "{colors.trace}"
    typography: "{typography.ui}"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
    height: "42px"
  navbar:
    backgroundColor: "oklch(0.98 0 0 / 80%)"
    textColor: "{colors.graphite}"
    typography: "{typography.ui}"
    height: "64px"
  terminal-window:
    backgroundColor: "#09090b"
    textColor: "#d4d4d8"
    typography: "{typography.ui}"
    rounded: "{rounded.xl}"
    padding: "16px"
  timeline-node:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.bench-indigo}"
    rounded: "{rounded.lg}"
    size: "48px"
---

# Design System: Lawand Yousef — Portfolio

## Overview

**Creative North Star: "The Engineer's Workbench"**

This system treats the portfolio as a bench, not a brochure. The substrate is graph paper — a 40px grid (`bg-grid`) ruled in 5%-opacity indigo, faint enough to read as paper tooth rather than as a pattern. Everything placed on it is measured: containers snap to a fixed set of widths, sections are separated by exactly 96px of air, and the accent color appears where an instrument would put a needle — the eyebrow above a heading, the border of the hovered card, the fill of the active filter. The personality comes from precision and from the two places the system deliberately breaks its own restraint: a functional terminal the visitor can type into, and a signature indigo→purple→cyan gradient that marks the wordmark, the hero name, and the stat numerals. Nowhere else.

Density is a feature. Controls default to `h-8` (32px) rather than the 40–48px a marketing site would reach for, cards run at `text-sm`, and the mono face carries every machine-readable string — years, percentages, version-shaped metadata, terminal output. This is a site whose subject spends its days reading datasheets and waveforms, and the interface reads the same way. The result should feel like opening an instrument that is well made: quiet, legible, and more specific than it needed to be.

It is confirmed not to be the default AI-generated dark dashboard: no resting drop shadows on cards, no rainbow gradients sprayed across arbitrary surfaces, no neon-glow terminal cliché. The only shadow in the system belongs to floating popups; the only glow is a state response.

**Key Characteristics:**

- **Flat by default.** Hairline rings (`ring-foreground/10`) and tonal background shifts carry separation. Glow appears only as a reaction to hover or focus.
- **One accent does the work.** Bench Indigo is the only color that acts; Probe Cyan is instrumental, Orchid Magenta is nearly unused and reserved.
- **Monospace as annotation.** Geist Mono marks machine-readable content — never prose.
- **Compact instrument controls.** 32px defaults, 8px gaps, no decorative elevation.
- **The gradient is a signature, not a fill.** Three sanctioned locations, no others.
- **Dark mode is native.** The dark palette is a cool near-black (`oklch(0.11 0.01 260)`), not an inverted light theme.

## Colors

A cool neutral bench with one saturated indigo instrument light, a cyan readout, and a magenta held in reserve; the dark theme is a blue-cast near-black rather than a true black.

### Primary

- **Bench Indigo** (`oklch(0.45 0.2 280)` light / `oklch(0.6 0.25 280)` dark): the system's only action color. It fills primary buttons and default badges, tints section eyebrows, marks timeline and experience nodes, draws the left rule on the mission quote, and replaces the border on any hovered card. In dark mode it brightens and gains chroma so it holds against the cool black.
- **Bench Indigo Ring** (`oklch(0.45 0.2 280)` / `oklch(0.6 0.25 280)`, 50% at 3px): the focus treatment on every control — `focus-visible:ring-3 focus-visible:ring-ring/50`.

### Secondary

- **Probe Cyan** (`oklch(0.7 0.15 200)` light / `oklch(0.55 0.2 200)` dark): the readout color. Secondary buttons, technology badges on project cards, the terminal's second voice. Cyan marks information the visitor can act on secondarily — it never competes with Bench Indigo for hierarchy.
- **Orchid Magenta** (`oklch(0.6 0.18 320)` light / `oklch(0.5 0.22 320)` dark): the accent slot, and the system's most restrained color. It appears in the chart series and as the select/dropdown item focus fill. If a new surface needs a third voice, reach here last.

### Neutral

- **Workbench** (`oklch(0.98 0 0)` light / `oklch(0.11 0.01 260)` dark): the page. A near-white with a whisper of gray in light mode; a cool, faintly blue near-black in dark mode — a cathode, not ink.
- **Panel** (`oklch(1 0 0)` light / `oklch(0.16 0.02 260)` dark): the card and popover surface. In dark mode it is lifted only 5% lightness off the page — separation comes from the hairline, not the tone.
- **Trace** (`oklch(0.145 0 0)` light / `oklch(0.985 0 0)` dark): body and heading text.
- **Graphite** (`oklch(0.556 0 0)` light / `oklch(0.65 0.02 260)` dark): all secondary text — descriptions, metadata, stat captions, placeholder copy. This is the system's workhorse neutral; most body copy on the page is Graphite, not Trace.
- **Hairline** (`oklch(0.922 0 0)` light / `oklch(1 0 0 / 10%)` dark): dividers and field borders. In dark mode it is white at low alpha rather than a solid gray, which keeps it from reading as a hard line on near-black.
- **Fault Red** (`oklch(0.577 0.245 27.325)` light / `oklch(0.704 0.191 22.216)` dark): destructive actions and validation messages only. Never decorative.

### Named Rules

**The One Instrument Rule.** Bench Indigo marks the single most important element in a viewport. If two things on a screen are both indigo, one of them is wrong.

**The Cyan Is Readout Rule.** Probe Cyan labels information the visitor may act on secondarily — tags, secondary actions, terminal output. It is never the primary call to action on a screen that also has a Bench Indigo one.

**The Gradient Is a Signature Rule.** The `text-gradient` sweep (indigo-500 → purple-500 → cyan-500) is licensed in exactly three places: the `LY` wordmark in the navbar and footer, the hero name, and the About stat numerals. It is a signature, not a fill. Anywhere else it is decoration, and decoration is what this system refuses.

## Typography

**Display Font:** Geist Sans (via `next/font`, `--font-geist-sans`), fallback `system-ui, sans-serif`
**Body Font:** Geist Sans (same)
**Label/Mono Font:** Geist Mono (`--font-geist-mono`), fallback `ui-monospace, monospace`

**Character:** A single grotesque across five weights, with a monospace set alongside it as a second voice rather than a third style. The pairing is deliberately narrow — no serif, no display face, no optical sizing tricks. Character comes from weight contrast (700 against 400), from the mono/sans split, and from size jumps, not from novelty in the typeface itself.

### Hierarchy

- **Display** (700, `3rem` → `4.5rem` at `md`, line-height 1): the hero name and page titles only. One per viewport, always gradient-treated when it is the personal name.
- **Headline** (700, `2.25rem` → `3rem` at `md`, line-height ~1.11): every section title. Bold, centered, and always preceded by an eyebrow. This is the system's signature moment and it does not vary.
- **Title** (600, `1.125rem`, line-height ~1.4): card titles, project names, timeline and experience entries, and stat-adjacent subheads.
- **Body** (400, `1.125rem`, line-height 1.75): reading prose only — the About narrative, the hero description. Capped at `max-w-2xl` inside the section shell.
- **UI** (400, `0.875rem`, line-height 1.25): the workhorse step. Card descriptions, nav links, form fields, button labels, project summaries.
- **Label** (500, `0.75rem`, line-height 1): badges, stat captions, language levels, footer column headings. Not uppercase — the mono face supplies the technical register instead.
- **Eyebrow** (400, `0.875rem`, Geist Mono): the mono line above every section headline, colored Bench Indigo. Years, percentages, and terminal text use this same register.

### Named Rules

**The Mono Is Annotation Rule.** Geist Mono is for machine-readable content — eyebrows, years, percentages, terminal prompts and output, inline metadata. A paragraph in Geist Mono is a bug.

**The Eyebrow Rule.** Every section opens the same way: a Bench Indigo mono eyebrow at `0.875rem`, sitting 8px above a 700-weight centered headline. No section invents its own opening.

**The Two-Voice Rule.** `font-heading` is an alias of Geist Sans, not a third face. It exists so `Card` and `Dialog` titles can express intent; it deliberately resolves to the same font as `font-sans`. Adding a distinct display face would break the two-voice system.

## Layout

Three fixed shells, all centered, all sharing a `px-4` (16px) gutter: `max-w-6xl` (1152px) for full-width section grids, `max-w-4xl` (896px) for prose and single-column sections, `max-w-xl` (576px) for the contact form. Section rhythm is a flat `py-24` (96px) top and bottom on every section — no exceptions, no alternation — and vertical separation inside a section comes from `mb-12` or `mb-16` under the section heading. Grid gaps are `gap-6` (24px) between cards, `gap-4` (16px) between related items, `gap-2` (8px) between controls.

Column counts collapse on Tailwind's default breakpoints — `sm` 640px, `md` 768px, `lg` 1024px. Single column below `md`; `md:grid-cols-2` for About, Now, and GitHub Activity; `md:grid-cols-2 lg:grid-cols-3` for projects; `lg:grid-cols-4` for skill categories. The navbar holds 64px (`h-16`), is fixed to the top with `backdrop-blur-lg`, and every anchor target carries `scroll-mt-20` (80px) so the fixed bar never covers a heading.

Three section-level treatments alternate for rhythm: a flat page background, a `bg-muted/30` wash (Skills, GitHub Activity, Contact), and the hero's ruled `bg-grid` substrate with a vertical fade to transparent. The hero is `min-h-screen`; everything else is content-height. The CareerTimeline is the one component that changes topology rather than just column count — a centered rail with alternating left/right cards above `md`, a stacked single column below it.

## Elevation & Depth

This system is flat at rest. Cards, dialogs, selects, and popovers separate from the page through a single hairline ring (`ring-1 ring-foreground/10`), never a shadow. Section-level depth comes from tonal shifts instead: cards sit at pure white against a `0.98` page in light mode and lift only 5% lightness off a cool near-black in dark mode. Hover is expressed by changing a border's color (`hover:border-primary/50`) or a fill's opacity — never by lifting, scaling, or adding shadow.

Two deliberate exceptions exist. `shadow-md` appears on `SelectContent` and nothing else, because a floating popup physically detaches from the page and needs to read as such. And the `.glow` utility (`0 0 30px rgba(99,102,241,0.3)`, widening to `0 0 40px` at 20% in dark mode) is available as an emission effect for accent elements under interaction — it is a state response, not a resting property. The navbar and mobile menu are the third case: `bg-background/80` with `backdrop-blur-lg` and a 40%-alpha bottom border, which is translucency rather than elevation.

### Shadow Vocabulary

- **Hairline Ring** (`box-shadow: 0 0 0 1px oklch(0.145 0 0 / 10%)`, applied as `ring-1 ring-foreground/10`): the system's primary separation device. Every ui primitive at rest.
- **Popover Lift** (`box-shadow` = Tailwind `shadow-md`): floating select and dropdown popups only.
- **Accent Glow** (`box-shadow: 0 0 30px rgba(99, 102, 241, 0.3)`; dark `0 0 40px rgba(99, 102, 241, 0.2)`): `.glow`, reserved for accent elements reacting to hover or focus.
- **Chip Drop** (`filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))`): keeps white text legible on the saturated gradient chips in the tech marquee.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Hairline rings and tonal shifts carry separation; glow and shadow appear only as a response to state, or on a surface that has physically detached from the page.

**The One Shadow Rule.** `shadow-md` is reserved for floating popups. A card never carries a resting shadow. If a design calls for one, the separation is being solved twice — pick the border or the tone, not both plus a shadow.

## Shapes

All radii derive from a single root, `--radius: 0.625rem` (10px), through a fixed multiplier scale: `sm` 0.6× (6px), `md` 0.8× (8px), `lg` 1× (10px), `xl` 1.4× (14px), `2xl` 1.8× (18px), `3xl` 2.2× (22px), `4xl` 2.6× (26px). Three forms carry the system. Controls — buttons, inputs, selects — are `rounded-lg` (10px); the two smallest button sizes clamp down to `min(var(--radius-md), 10px)` and `min(var(--radius-md), 12px)` so dense groups stay coherent. Containers — cards, dialogs, the terminal window — are `rounded-xl` (14px), and their header/footer sub-slots re-declare `rounded-t-xl` / `rounded-b-xl` so corners pair when a footer is present. Pills are fully round: badges at `rounded-4xl` (26px) on a 20px height, skill and language chips at `rounded-full`, timeline and experience nodes as true 48px and 36px circles with a 2px border.

Two border treatments coexist on purpose. Section-level cards use `border border-border/40`; ui primitives use `ring-1 ring-foreground/10` with no border. The first reads as a drawn panel on ruled paper, the second as a machined control.

## Components

Instrument-like and compact: 32px control heights, hairline separation, and state changes expressed through border and fill color. Nothing here lifts, and nothing here glows at rest.

### Buttons

- **Shape:** gently rounded (10px, `rounded-lg`), shrinking to 8–10px on the `xs` and `sm` sizes.
- **Sizes:** `xs` 24px · `sm` 28px · default 32px · `lg` 36px · `icon` 32px square (24/28/36 for the icon variants). Horizontal padding 10px, with 6px icon gap; inline icons shed 4px of padding on their own side.
- **Primary:** Bench Indigo fill with near-white text. Hover drops the fill to 80% opacity — no darkening, no lift.
- **Secondary:** Probe Cyan fill with dark text. Hover tints 5% toward the foreground rather than darkening, keeping the fill's identity intact.
- **Outline:** transparent-background with a full-strength hairline; hover fills `bg-muted` and returns text to full contrast. Carries the `border-border` / `dark:border-input dark:bg-input/30` treatment so it stays visible on both themes.
- **Ghost / Link:** no resting fill; hover fills `bg-muted`. `link` is Bench Indigo text with `underline-offset-4`.
- **Focus:** `focus-visible:border-ring` plus `focus-visible:ring-3 ring-ring/50` — a 3px indigo halo at half opacity. Keyboard focus is always visible; it is never removed.
- **States:** `active` translates down 1px (except when the button opens a popup). Disabled drops to 50% opacity with pointer events off. `aria-invalid` swaps both border and ring to Fault Red at reduced opacity.

### Chips / Badges

- **Style:** fully round pills (26px radius) on a 20px height, `text-xs` medium, with icons forced to 12px. Fully transparent border at rest.
- **Default:** Bench Indigo fill, near-white text. **Secondary:** Probe Cyan fill, dark text — this is the technology tag on project cards. **Outline:** hairline border with full-contrast text, used where a filled chip would be too loud.
- **State:** badges have no selected state; they are labels, not filters. Where a chip needs to behave as a filter, use a small outline button instead (as the project category row does).

### Cards / Containers

- **Corner Style:** 14px (`rounded-xl`), clipped with `overflow-hidden`.
- **Background:** Panel — pure white on the light page, +5% lightness on the dark page.
- **Shadow Strategy:** none. Separation is the `ring-1 ring-foreground/10` hairline (see Elevation & Depth).
- **Border:** `border border-border/40` on section-level marketing cards; the ui `Card` uses the hairline ring and no border.
- **Internal Padding:** `p-5` (20px) on section cards, `py-4` + `px-4` on the ui `Card`, with a `sm` size variant at 12px. Card gaps are 16px, dropping to 12px at `sm`.
- **Hover:** border shifts to `border-primary/50`; on project cards the title additionally shifts to Bench Indigo. No lift.

### Inputs / Fields

- **Style:** 1px `border-border` stroke on the page background, 10px radius, `px-4 py-2.5` (roughly 42px tall) — deliberately taller than a button, because a field is a target, not a control. Textareas are `resize-none`.
- **Focus:** border shifts to Bench Indigo with `focus:ring-1 focus:ring-primary`. The ui-level `Select` trigger instead uses the system standard `focus-visible:ring-3 ring-ring/50` at `h-8`.
- **Error:** the border and 1px ring shift to Fault Red on `aria-invalid`; page-level form validation renders a `text-xs` Fault Red line 4px beneath the field. Destructive and invalid states both dim toward the theme rather than jumping to full saturation.

### Navigation

- **Style:** fixed 64px bar, `bg-background/80` with `backdrop-blur-lg`, 40%-alpha bottom border. The `LY` wordmark is 20px bold with the signature gradient; links are `text-sm` in Graphite, shifting to full-contrast Trace on hover.
- **States:** there is no active-route treatment — the bar does not track scroll position or current page.
- **Mobile:** below `md` the links collapse into a hamburger that opens a full-width panel with `bg-background/95` and `backdrop-blur-lg`, animated open and closed on height and opacity (150ms). Language switcher and theme toggle remain visible in both layouts, always at the right edge.

### Section Heading (signature)

Every section uses the same two-part opener: a Bench Indigo mono eyebrow at `text-sm`, then a 700-weight `text-4xl md:text-5xl` headline, centered, with `mb-2` between them and `mb-12` or `mb-16` below. This pairing is the system's most repeated unit — About, Skills, Projects, Experience, Contact, GitHub Activity, and Now all use it verbatim. Deviating from it is the fastest way to make a new section look foreign.

### Terminal Window (signature)

A `rounded-xl` window at `bg-zinc-950` (`#09090b`) with `overflow-hidden`, capped at `max-w-4xl`. The titlebar is a `bg-zinc-900` strip with three 12px traffic-light circles in red, yellow, and green plus a `text-xs` Graphite `terminal` label. The body is a fixed 288px scroll area at `p-4`. Prompts are `text-green-400`; output is `text-zinc-300`; the input is borderless, transparent, and `text-green-400` with a `text-zinc-600` placeholder. This component is intentionally exempt from the token palette — it is a quotation of a tool, not a surface of the site, and it stays dark in both themes.

### Timeline Rail (signature)

Two implementations of the same idea. `CareerTimeline` uses a centered 1px rail (`w-px`) running a `bg-gradient-to-b` from Bench Indigo through purple to cyan, with 48px circular nodes (`rounded-full`, `bg-card`, 2px `border-primary`) and cards alternating left/right above `md`. `Experience` uses a left-aligned 1px `bg-border` rail with 36px nodes whose 2px border color encodes type (indigo professional, cyan freelance, purple open-source) while the icon stays Bench Indigo. Both pair a mono year or period in Bench Indigo with a 600-weight title and a Graphite description.

### Stat Tile (signature)

A 3-up grid of `bg-card` panels at `p-6`, centered. Each carries a 32px Bench Indigo lucide icon, a `text-3xl` bold numeral in the signature gradient, and a `text-sm` Graphite caption. Same hover as every card: `hover:border-primary/50`, no lift.

## Do's and Don'ts

### Do:

- **Do** mark exactly one element per viewport in Bench Indigo, and let everything else be Trace or Graphite.
- **Do** use `text-gradient` only on the wordmark, the hero name, and the stat numerals.
- **Do** open every section with the mono Bench Indigo eyebrow plus a 700-weight headline, in that order.
- **Do** separate surfaces with `ring-1 ring-foreground/10` or `border-border/40` before reaching for anything else.
- **Do** keep control heights at 32px by default and shrink to 28px or 24px in dense rows.
- **Do** reserve Geist Mono for machine-readable content — eyebrows, years, percentages, terminal text.
- **Do** express hover as a border-color or fill-opacity change on the surface itself.
- **Do** use the radius ladder as-is: 10px controls, 14px containers, fully round pills.
- **Do** let the Terminal window keep its hardcoded `zinc` palette; it is a quotation, not a surface.

### Don't:

- **Don't** put a drop shadow on a card, panel, or section. One hairline, or one tonal shift. `shadow-md` belongs to floating popups and nowhere else.
- **Don't** spray the indigo→purple→cyan gradient across arbitrary surfaces, buttons, borders, or backgrounds. Three sanctioned locations, no others.
- **Don't** reach for neon glow or terminal-green as a general aesthetic. Green exists only inside the Terminal window's prompt text.
- **Don't** add a third decorative color. Orchid Magenta is the accent slot and stays near-unused; new color needs a role, not variety.
- **Don't** write a paragraph, a card description, or a nav label in Geist Mono.
- **Don't** skip the section eyebrow, restyle section headings per-section, or vary the 96px section padding.
- **Don't** introduce a second sans or a display serif. The two-voice pairing — Geist Sans plus Geist Mono — is the whole typographic idea.
- **Don't** treat `font-heading` as a third face; it is an alias of Geist Sans by design.
- **Don't** scale button heights up to fill marketing instinct. Compactness is the signature; density is the point.