---
name: Sacred Nocturne
colors:
  surface: '#0a1612'
  surface-dim: '#0a1612'
  surface-bright: '#2f3c37'
  surface-container-lowest: '#05100d'
  surface-container-low: '#121e1a'
  surface-container: '#16221e'
  surface-container-high: '#202c28'
  surface-container-highest: '#2b3733'
  on-surface: '#d8e6df'
  on-surface-variant: '#c1c8c2'
  inverse-surface: '#d8e6df'
  inverse-on-surface: '#27332e'
  outline: '#8b928d'
  outline-variant: '#414844'
  surface-tint: '#a9cfbb'
  primary: '#a9cfbb'
  on-primary: '#143728'
  primary-container: '#113426'
  on-primary-container: '#799d8b'
  inverse-primary: '#436555'
  secondary: '#eec063'
  on-secondary: '#402d00'
  secondary-container: '#7d5b00'
  on-secondary-container: '#ffd78a'
  tertiary: '#afcebd'
  on-tertiary: '#1a362a'
  tertiary-container: '#183328'
  on-tertiary-container: '#7e9c8d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c5ebd6'
  primary-fixed-dim: '#a9cfbb'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#2b4d3e'
  secondary-fixed: '#ffdea3'
  secondary-fixed-dim: '#eec063'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5c4200'
  tertiary-fixed: '#caead8'
  tertiary-fixed-dim: '#afcebd'
  on-tertiary-fixed: '#042016'
  on-tertiary-fixed-variant: '#314c40'
  background: '#0a1612'
  on-background: '#d8e6df'
  surface-variant: '#2b3733'
  surface-base: '#0a1612'
  surface-raised: '#0d1e18'
  surface-overlay: '#132a22'
  surface-highlight: '#19382d'
  accent-gold: '#e5b85c'
  accent-gold-deep: '#d4af37'
  accent-gold-subtle: '#8a6e30'
  text-primary: '#f5f1e8'
  text-secondary: '#c8c2b5'
  text-muted: '#7e8881'
  outline-subtle: rgba(229, 184, 92, 0.12)
  outline-strong: rgba(229, 184, 92, 0.28)
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 38px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: Newsreader
    fontSize: 30px
    fontWeight: '500'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  lyric-display:
    fontFamily: Newsreader
    fontSize: 22px
    fontWeight: '400'
    lineHeight: 36px
  lyric-display-mobile:
    fontFamily: Newsreader
    fontSize: 19px
    fontWeight: '400'
    lineHeight: 31px
  body-lg:
    fontFamily: Newsreader
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Montserrat
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  margin: 1.25rem
  margin-tablet: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

This design system crafts a sanctuary-grade, contemplative dark mode tailored for congregational singing, dimly lit cathedral environments, choir lofts, and late-night personal reflection. The visual atmosphere evokes quiet solemnity, monastic warmth, and enduring reverence, moving far beyond utilitarian night modes into the tactile beauty of illuminated manuscripts viewed by candlelight.

The aesthetic fuses **Liturgical Organic Minimalism** with subtle **Tonal Depth**. Rich, near-black sacred forest greens replace clinical grays, grounding the user in an organic, peaceful space. Warm amber golds emerge as refined accents—reminiscent of gilded book bindings, brass lecterns, and chalices—while luminous, warm off-white typography preserves reading comfort without eye-strain or harsh glare.

## Colors

The color palette is built around deep botanical shadows and warm metallic illumination, strictly avoiding cold, desaturated grays.

- **Primary (`#113426`)**: Deep sacred dark forest green. Deployed across active structural containers, primary button fills, and prominent navigation headers.
- **Secondary (`#e5b85c`)**: Warm amber gold. Reserved for liturgical focus points, playback cursors, active audio scrubbers, hymn number pills, and key musical metrics.
- **Tertiary (`#0d291e`)**: Mid-ground cypress shade serving as an intermediate layer for grouped cards, modal surfaces, and subtle interactive states.
- **Neutral (`#0a1612`)**: Deepest forest noir. Serves as the overarching canvas and viewport backdrop, giving the visual sensation of a quiet sanctuary hall.

### Hierarchy & Text Legibility
- **Text Primary (`#f5f1e8`)**: Luminous warm ivory delivering maximum clarity for hymn titles, active verse lyrics, and primary controls without blinding high-contrast white.
- **Text Secondary (`#c8c2b5`)**: Soft parchment tone for composer attributions, scripture footnotes, and secondary lists.
- **Borders & Partitions**: Built exclusively with low-opacity amber gold (`outline-subtle`) or soft muted pines to maintain visual structure without creating harsh barriers.

## Typography

The typography balances architectural precision with sacred literary grace.

- **Newsreader** commands the contemplative lyrical plane. Its refined transitional serifs provide comfortable reading flow during vocal recitation. The `lyric-display` level utilizes an expanded line height ratio (over 1.6x) to allow performers and congregants to instantly track verse sequences under low-light conditions.
- **Montserrat** anchors navigational, metadata, and liturgical categorization roles. Capitalized labels (e.g., hymn numbers, psalm references, liturgical seasons) adopt expanded letter-spacing (`0.04em`–`0.06em`), imbuing the UI with an authoritative, engraved finish.
- Stanza markers and meter tags rely on tabular figures in Montserrat SemiBold to align precisely against the Newsreader text column.

## Layout & Spacing

The layout philosophy follows a disciplined fluid rhythm configured to preserve clean margins on music stands, podiums, and hand-held devices.

- **Mobile Viewports (< 640px)**: A 4-column fluid grid governed by `1.25rem` outer margins. Bottom viewports allocate a persistent clearance zone of `5rem` to accommodate the docked sacred audio controller and transpose widgets.
- **Tablet / Choir Stand (640px – 1024px)**: An 8-column layout with `2rem` margins. Hymn presentation unlocks side-by-side stanza columns or split sheet-music / lyric layouts.
- **Stanza Cadence**: Stanza groups are spaced precisely using `space-xl` (`2.25rem`) vertical gaps, ensuring choruses and strophes do not visually blend during performance.

## Elevation & Depth

Visual hierarchy does not use diffuse, artificial gray drop shadows. Depth is established through tonal layering of dark forest surfaces coupled with illuminated gold ambient glows.

- **Level 0 (Canvas Base)**: `#0a1612` acts as the receding ground plane.
- **Level 1 (Cards & Groups)**: `#0d1e18` layered over the base, bounded by a microscopic hairline border of `rgba(229, 184, 92, 0.08)`.
- **Level 2 (Active Hymn Sheets & Modals)**: `#132a22` complemented by an amber back-illumination: `0 4px 24px rgba(0, 0, 0, 0.5), 0 0 1px rgba(229, 184, 92, 0.25)`.
- **Level 3 (Floating Player & Controls)**: Translucent sacred forest blur (`rgba(13, 30, 24, 0.88)` with `backdrop-filter: blur(16px)`), topped with a refined amber crown line (`1px solid rgba(229, 184, 92, 0.2)`).

## Shapes

The design system maintains an intentional geometric discipline: structured yet warm. The canonical corner radius is **0.5rem (8px)**.

- **Panels, Cards, and Inputs**: Styled with standard roundedness (`0.5rem`), referencing the bound edges of physical hymnals.
- **Interactive Controls & Audio Bars**: Floating player docks, chip filters, and playback toggles utilize full pill styling (`9999px`) to distinguish fluid, touch-friendly interaction from static lyrical sheets.
- **Selection Highlights**: Active stanza indicators employ softly rounded vertical accent bars (`0.25rem` width, rounded ends).

## Components

### Buttons & Controls
- **Primary Buttons**: Solid warm amber gold `#e5b85c` fill with deep forest `#082017` typography in Montserrat SemiBold. Minimum 48px height for ergonomic tapping during services.
- **Secondary Buttons**: Transparent surface with a 1px border of `rgba(229, 184, 92, 0.35)`, housing `#f5f1e8` text. On hover or tap, surfaces fill with `rgba(229, 184, 92, 0.08)`.
- **Liturgical Icon Buttons**: Floating circular or pill containers in `#132a22`, framing `#e5b85c` vector glyphs (e.g., transpose, metronome, audio tempo).

### Audio Player & Scrubbers
- **Docked Nocturne Player**: Translucent forest container `#0d1e18` (88% opacity, 16px blur) suspended above the bottom safe area. Features amber track title in Montserrat, golden scrub progress bar (`#e5b85c`), and glowing play/pause circular trigger (`#e5b85c` background, `#082017` icon).
- **Track Progress**: Inactive track uses `#132a22` with a `1px` rim; active track fills in luminous `#e5b85c`.

### Chips & Badges
- **Hymn Number Tag**: Compact pill with `#113426` background, surrounded by `rgba(229, 184, 92, 0.2)` outline, displaying `#e5b85c` Montserrat Bold tabular numbers.
- **Topic & Season Chips**: Pill shapes with `#0d1e18` background, `#c8c2b5` text, and soft gold border for active seasons (e.g., *Advent*, *Lent*, *Epiphany*).

### Lists & Index Items
- **Hymn Index Row**: Divided by hairline `rgba(229, 184, 92, 0.08)` borders. Hymn number displayed on the left in gold tabular figures, hymn title in `#f5f1e8` Montserrat SemiBold, and tune/author metadata beneath in Newsreader Italic (`#c8c2b5`). Active state yields a `#132a22` wash.

### Form Inputs & Search
- **Search Bar**: 46px container in `#0d1e18` with a 1px `rgba(229, 184, 92, 0.15)` border. Placeholder text in `#7e8881`. Golden search magnifier icon leads the field. Focus state engages a subtle gold outer halo: `0 0 0 2px rgba(229, 184, 92, 0.25)`.

### Lyric Card & Stanza Presenter
- Set upon a reading container of `#0d1e18` or base `#0a1612`. Stanza numbers appear outside the margin in `#e5b85c` Montserrat SemiBold. Refrain or Chorus passages are offset by a left-hand decorative border in `#e5b85c` (2px width) with an indentation of `1rem`, instantly signaling communal responses.