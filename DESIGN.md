---
version: alpha
name: IntellAgent
description: >-
  Brand-first, single-screen landing page for IntellAgent (intellagent.us), an
  AI-adoption advisory. Strict monochrome, brutalist-lite system: pure-black
  cinematic canvas, uppercase monospace display (IBM Plex Mono), light humanist
  sans body (IBM Plex Sans), square corners, generous negative space. Static
  GitHub Pages build; intake form posts client-side to Web3Forms via fetch().
  Canonical build is pure monochrome; an optional opt-in deep-azure accent is
  documented for the primary CTA and focus ring.
colors:
  background: "#000000"
  surface: "#FFFFFF"
  primary: "#FFFFFF"
  inkOnDark: "#F2F2F2"
  inkOnLight: "#262626"
  muted: "#919191"
  accent: "#0B5FD8"
typography:
  wordmark:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: 2rem
    fontWeight: 300
    lineHeight: 1
    letterSpacing: 0.04em
  eyebrow:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.12em
  headline:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: 2rem
    fontWeight: 300
    lineHeight: 1
    letterSpacing: 0.01em
  lead:
    fontFamily: "'IBM Plex Sans', sans-serif"
    fontSize: 1.375rem
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: 0.01em
  body:
    fontFamily: "'IBM Plex Sans', sans-serif"
    fontSize: 1rem
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0.02em
  label:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.08em
  button:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.08em
  caption:
    fontFamily: "'IBM Plex Sans', sans-serif"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.01em
rounded:
  none: 0px
spacing:
  "0": 0rem
  xs: 0.5rem
  sm: 0.75rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  "2xl": 3rem
  "3xl": 4rem
  "4xl": 6rem
  "5xl": 8rem
  pageMaxWidth: 34rem
  inputHeight: 3rem
components:
  wordmark:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
    typography: "{typography.wordmark}"
    rounded: "{rounded.none}"
    padding: "{spacing.0} {spacing.0}"
  eyebrow:
    backgroundColor: "{colors.background}"
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.0} {spacing.0}"
  headline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "{spacing.0} {spacing.0}"
  lead:
    backgroundColor: "{colors.background}"
    textColor: "{colors.inkOnDark}"
    typography: "{typography.lead}"
    rounded: "{rounded.none}"
    padding: "{spacing.0} {spacing.0}"
  body:
    backgroundColor: "{colors.background}"
    textColor: "{colors.inkOnDark}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.0} {spacing.0}"
  label:
    backgroundColor: "{colors.background}"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.0}"
  input:
    backgroundColor: "{colors.inkOnLight}"
    textColor: "{colors.inkOnDark}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    height: "{spacing.inputHeight}"
    width: "100%"
  inputFocus:
    backgroundColor: "{colors.inkOnLight}"
    textColor: "{colors.inkOnDark}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    height: "{spacing.inputHeight}"
    width: "100%"
  button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.inkOnLight}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.lg}"
  buttonHover:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.lg}"
  buttonAccent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.lg}"
  link:
    backgroundColor: "{colors.background}"
    textColor: "{colors.inkOnDark}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.0}"
  linkHover:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.0}"
  caption:
    backgroundColor: "{colors.background}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.0} {spacing.0}"
---

## Overview

IntellAgent helps companies adopt AI with intent - automations, workflows, and
agents, led by advisory. The site is one super-simple, single-screen page that
does exactly three things: state the brand, position it in a single short
paragraph, and capture a lead. No navigation, no header chrome, no footer, no
scrolling at common desktop and laptop heights. The negative space *is* the
design.

The visual language is strict monochrome and brutalist-lite: a pure-black,
cinematic canvas; uppercase monospace for the wordmark and any headline; a light
humanist sans for the one prose block and the form; square corners everywhere;
and structure built from hairlines and whitespace rather than cards, shadows, or
pills. The result reads technical, restrained, and credible - the posture of an
advisor, not a vendor.

The page is brand-first: it leads with the wordmark, not a person's name. It
carries no proof elements by default - no client logos, no named principal, no
credentials. This is an intentional posture decision: on this restrained single
screen, trust is carried entirely by copy and craft, and any proof lives
off-page. A single optional muted caption-scale credibility line (one clause,
e.g. a location or a one-line proof) is a permitted variant if the user wants a
trust anchor without breaking the three-block contract.

- **Wordmark:** `INTELLAGENT`
- **Eyebrow:** `AI ADOPTION, ADVISED.`
- **Headline:** `ADOPT AI WITH INTENT.`
- **Positioning paragraph:** *We help companies put AI to work - automations,
  workflows, and agents, grounded in advisory from the first line of code. We
  map where it pays off, build what proves out, and train your team to own it.*
- **Primary CTA label:** `START THE CONVERSATION` (fallback: `BOOK A BRIEFING`)

**Voice.** Terse, declarative, confident - written for decision-makers who need
to be oriented, not sold. Short sentences. Concrete claims. Maker-first framing.
No hype words, no exclamation points beyond the headline's period-stop, no
filler. Every line earns its place on a one-screen page.

**Build context.** A static site on GitHub Pages with plain HTML/CSS and tiny
vanilla JS. The intake form submits via a vanilla `fetch()` POST (JSON,
`Accept: application/json`) to `https://api.web3forms.com/submit`; on success the
form node is replaced in-place with the success message, on failure the error
fallback is shown - no page redirect, so the single-screen / no-second-page
constraint holds. Two hidden, zero-visual-footprint fields are required for a
clean, credible inbox: the Web3Forms `access_key` hidden input, and a
visually-hidden honeypot `botcheck` field (hidden via off-screen positioning, not
`display:none` alone, so bots still fill it); hCaptcha is a noted future add.

**Animated background.** A single full-bleed WebGL layer (`bg.js`, zero
dependencies, ~3KB of GLSL) renders an ordered Bayer-4x4 dither over a slow,
domain-warped fBM noise field - a monochrome halftone that flows behind the
content. It is art-directed to stay darkest in the centre (a baked-in vignette
plus a CSS radial scrim) so every line of text keeps its contrast. It animates
for all visitors by brand-owner choice; under `prefers-reduced-motion` it runs
at half speed rather than stopping. It degrades gracefully: no WebGL means the
solid black canvas shows and the page is unaffected. Performance: device-pixel
ratio is clamped to 2 and the loop pauses on a hidden tab.

**Public repo & privacy.** The GitHub Pages repo is **public**, so the page
contains no secrets and no contact email. Leads are routed by Web3Forms to a
private recipient that is configured server-side in the Web3Forms dashboard,
keyed to the `access_key` - the recipient address never appears in the page or
the repo. The `access_key` itself is public by design (it only permits
submitting this one form to that pre-configured address); abuse is mitigated by
the honeypot, by enabling Web3Forms' domain allowlist (restrict to
intellagent.us), and optionally hCaptcha. No email address is displayed anywhere
on the page.

All copy is original to IntellAgent; the reference informs the *design language*
only.

## Colors

IntellAgent runs on a strict monochrome ink system - no decorative color - so
the brand reads as technical, restrained, and credible. The page leans dark and
cinematic: pure black `#000000` (`colors.background`) is the dominant ground, and
white `#FFFFFF` (`colors.primary` / `colors.surface`) is the dominant mark laid
onto it. Two near-pure inks soften raw black/white without ever looking
gray-washed: `inkOnDark` `#F2F2F2` for body text on dark, and `inkOnLight`
`#262626` for near-black text on light surfaces (and as the recessed field
ground). A single `muted` step `#919191` carries secondary and label text.

Every pairing the components use was computed against the WCAG 2.1
relative-luminance formula:

| Pairing | Ratio | Result |
| --- | --- | --- |
| `primary`/`surface` white on `background` black | 21.00:1 | AAA |
| `inkOnLight` `#262626` on `surface` white | 15.13:1 | AAA |
| `inkOnDark` `#F2F2F2` on `background` black | 18.76:1 | AAA |
| `inkOnLight` `#262626` typed on `inkOnDark` field plate | 13.52:1 | AAA |
| `inkOnDark` `#F2F2F2` typed on `inkOnLight` `#262626` field | 13.52:1 | AAA |
| `muted` `#919191` on `background` black | 6.66:1 | AA |
| `surface` white on `accent` `#0B5FD8` | 5.76:1 | AA |

**Constraint - `muted` is dark-only.** On white, `muted` `#919191` measures just
3.15:1 and fails AA, so it is confined to on-black use (eyebrow, labels,
captions). On the rare light surface, secondary text steps up to `inkOnLight`
`#262626`. This is a documented, intentional constraint, not an oversight.

**Optional signature accent (opt-in).** The canonical build is pure monochrome
and ships nothing chromatic. As an explicit, off-by-default deviation only - not
a co-equal option - `accent` deep azure `#0B5FD8` may be applied to exactly two
surfaces and nowhere else: the primary CTA fill (`buttonAccent`) and the focus
ring. Because a saturated CTA fill lands on the page's single focal point and
reads more conventional/marketing-y, the recommended "signature signal" within
strict monochrome is inversion (the white-plate `button`) or a hairline
treatment, not chroma. When azure is enabled, white CTA text on it measures
5.76:1 - a clean AA pass with margin, chosen over GitHub blue `#1F6FEB` (only
4.63:1) for a safer, more premium read. The `buttonAccent` token is retained in
the system so the palette has no orphan and the opt-in path is fully specified;
the default ship uses the inverted white-plate `button` (21:1 hover) and a white
focus ring, and the page stays fully monochrome. Note: the accent assumes
*white* text - black text on azure is only 3.64:1 and must never be used.

## Typography

The reference pairs a technical uppercase monospace for all display and headings
with a light humanist sans for body and UI. We reproduce this with the **IBM
Plex** superfamily - **IBM Plex Mono** (display) and **IBM Plex Sans** (body) -
both free on Google Fonts, both shipping a true 300 (Light) weight, and pairing
natively through shared metrics and x-height. Plex Mono reads engineered and
premium for uppercase headlines; Plex Sans is a genuine humanist grotesque with
open apertures that echoes the reference's warmth while staying
corporate-technical.

Weight follows the reference's restraint: everything lives at **Light (300)**,
except small UI text (eyebrow, label, button, caption) bumped to **400** so it
stays legible at small sizes without collapsing in the form chrome.

**Uppercase is a convention, applied in CSS.** The display roles (wordmark,
eyebrow, headline, label, button) are always rendered uppercase via
`text-transform: uppercase` in the stylesheet - never relied on from the source
casing of the copy. The typography tokens carry only type-scale properties
(`fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`), which is
the full set the format permits; casing is enforced at the CSS layer so a
lowercase string can never silently break the design language.

Token roles map directly to the single-screen page:

- **wordmark** - the `INTELLAGENT` lockup: mono, uppercase, 300, positive
  tracking (~0.04em) so it reads as a monolithic technical mark, not a logo with
  a swoosh. Loudest by position, not size.
- **eyebrow** - the kicker `AI ADOPTION, ADVISED.`: small mono uppercase, 400,
  wide 0.12em tracking, muted gray.
- **headline** - H1 equivalent for any short declarative statement, e.g.
  `ADOPT AI WITH INTENT.`: mono uppercase, 300, line-height 1.0, period-stopped.
- **lead** - the one positioning paragraph: humanist sans, 300, 1.375rem (22px),
  ~1.4 line-height for an airy feel. The only prose block on the page, tightened
  to land at three lines or fewer on the 34rem (544px) measure so the no-scroll
  budget holds: *We help companies put AI to work - automations, workflows, and
  agents, grounded in advisory from the first line of code. We map where it pays
  off, build what proves out, and train your team to own it.*
- **body** - base UI/sans text at 1rem, 300, line-height 1.5.
- **label** - form field labels: mono uppercase, 0.8125rem, 400, 0.08em tracking
  so fields read as technical UI.
- **button** - submit CTA text (`START THE CONVERSATION`): mono uppercase, 400,
  0.08em tracking; rendered as text/hairline or an inverted plate, never a pill.
- **caption** - legal/footer microcopy and supporting links: sans, 400,
  0.75rem, slightly looser 1.6 line-height for small-size legibility.

All sizes are rem against a 16px root. Reference px letter-spacing is converted
to em so it scales: H1 0.32px @ 32px ≈ 0.01em (headline); body 0.32px @ 16px =
0.02em; lead ~0.2px @ 22px ≈ 0.01em; uppercase mono kickers and labels are opened
to 0.08-0.12em per all-caps convention. Both `fontFamily` stacks end in a generic
fallback (`monospace` / `sans-serif`) so the page degrades gracefully before web
fonts load. Typography tokens carry no color - color is applied at the component
layer so each token works on both black and white sections.

**Google Fonts load:** `family=IBM+Plex+Mono:wght@300;400` and
`family=IBM+Plex+Sans:wght@300;400`.

## Layout

The page is a single, vertically-centered screen. One centered content column
holds the wordmark, the positioning paragraph, and the intake form - nothing
else. The column is capped at `spacing.pageMaxWidth` (34rem / 544px); the hero
text and form share that same measure so fields align flush to the text edges
(left-aligned text within a centered column). The composition is vertically
centered with `min-height: 100vh` and symmetric vertical padding so the block
never touches the screen edges.

**Spacing scale.** A restrained 4px-based rhythm in rem, from `spacing.0` (0rem)
through `spacing.5xl` (8rem). Large steps carry the cinematic whitespace; small
steps tighten the form. To protect the no-scroll promise on short viewports,
block gaps and vertical padding are authored with `clamp()` so the column
compresses gracefully on short heights rather than forcing a scroll.

- Between the three major blocks (wordmark → paragraph → form):
  `spacing.2xl` (3rem) desktop, relaxing to `spacing.xl` (2rem) on mobile, via
  `clamp()`.
- Form intro (if any) to first field: `spacing.lg`.
- Field to field: `spacing.md`.
- Label to input: `spacing.xs`.
- Submit button below the last field: `spacing.lg`.
- Horizontal page gutters: `spacing.xl` (2rem) desktop, `spacing.lg` (1.5rem)
  mobile.
- Vertical page padding: clamps between `spacing.2xl` (3rem) and `spacing.3xl`
  (4rem) at ≥1024px - deliberately below the old fixed 6rem so a 1366×768 laptop
  (~660px usable) keeps the wordmark, lead, two fields, and submit on one screen
  without scrolling; `spacing.2xl` on mobile.

**No-scroll budget.** The single-screen contract is enforced, not assumed: the
visible form is capped at two to three fields (see Components), the lead is kept
to ≤3 lines at 22px, and the clamped padding/gaps shrink on short viewports.
This keeps the composition inside ~470px of usable content height on a common
laptop.

**Responsive behavior.** Single-column at every breakpoint - only the scale
changes. Mobile (base, ≤~640px): full-width column inside `spacing.lg` gutters,
block gaps at `spacing.xl`. At ≥640px the column locks to its 34rem max-width and
centers; gutters grow to `spacing.xl` and block gaps to `spacing.2xl`. At
≥1024px vertical padding opens (within the clamp) for the most cinematic
single-screen presentation. Inputs are always full-width of the column at
`spacing.inputHeight` (3rem) for generous touch targets. Nothing ever reflows
into multiple columns - simplicity is the point.

## Elevation & Depth

There is no elevation system. The page is intentionally flat: no drop shadows,
no blurs, no layered cards, no raised surfaces. Depth is expressed only through
*tone* - the recessed dark field ground (`inkOnLight` `#262626`) sits visually
"into" the pure-black canvas, and the inverted white CTA plate reads as the one
element that comes "forward." Focus is communicated by a square focus ring (white
in the canonical monochrome build, or the opt-in `accent` azure) and by the
field's full width, never by a shadow.

The one z-axis layer is the animated WebGL dither background (see Build context),
which sits *behind* everything on a single plane; a radial scrim between it and
the content keeps the centre dark. It adds atmosphere, not stacked depth - the
content layer itself stays flat. Keeping the z-axis otherwise empty is part of
the brutalist-lite, cinematic restraint.

## Shapes

Every corner is square. `rounded.none` (0px) applies to inputs, the submit
control, the focus outline, and any other bordered element - the sharp,
technical, brutalist-lite feel from the reference. No cards, no pills, no rounded
chips. Structure comes from hairline borders and whitespace alone. CTAs are
minimal: an inverted text plate or a thin hairline/underline with tight padding
(`spacing.sm spacing.lg` ≈ 12px 24px), never a filled rounded pill.

## Components

Components inherit the page's monochrome, brutalist-lite system: every corner is
`{rounded.none}`, every label and heading is uppercase mono, and every body/UI
string is the light humanist sans. The palette is deliberately small, and every
color token is consumed by at least one component (no orphans).

**Display text - `wordmark`, `eyebrow`, `headline`, `lead`, `body`, `caption`.**
These sit on the black canvas. The wordmark and headline use `colors.primary`
white (21:1). The lead and body use `inkOnDark` `#F2F2F2` (18.76:1). The eyebrow
and caption use `muted` `#919191` (6.66:1) - confined to this on-black role.

**Primary CTA - `button` / `buttonHover` (monochrome) and `buttonAccent`
(opt-in).** The CTA is the one moment of inversion on an otherwise dark page. In
the canonical monochrome build it is a solid white plate (`colors.surface`)
carrying near-black uppercase mono type (`inkOnLight` `#262626`) at 15.13:1, far
above AA. Hover is a full, unambiguous inversion - the plate flips to the black
canvas (`colors.background`) with white mono type (`colors.primary`) at 21:1 and
a white hairline border - clear interactive feedback that stays strictly
monochrome, not a sub-threshold tonal nudge. If the opt-in signature accent is
enabled, swap in `buttonAccent`: white text on azure `#0B5FD8` at 5.76:1. No
filled pill; the contrast of a block on black is the emphasis.

**Form fields - `input` / `inputFocus`.** Inputs are recessed dark surfaces
(`inkOnLight` `#262626`) with off-white typed text (`inkOnDark` `#F2F2F2`,
13.52:1), square, full-width, `spacing.inputHeight` tall, with airy internal
padding (`spacing.sm spacing.md`). Focus keeps the same AA-safe pairing; it is
signalled by a square focus ring (white by default, or the opt-in `accent`)
handled in CSS outside token color scope, so `inputFocus` retains the field's
13.52:1 text pairing.

**Default intake fields.** The canonical, low-friction field set is exactly
three, with two required: **Name** (text, required), **Work email** (email,
required), and **What you want to explore** (a single-select segmented control,
optional). The third field is a native radio group (`name="interest"`) rendered
as a 3x2 grid of square uppercase-mono pills - **Advisory / Agents / Automations
/ Workflows / Training / Not sure** - so the menu of offerings is visible at a
glance and the field doubles as a quiet capability statement. The selected pill
uses the page's signature inversion (white plate, near-black text); the rest are
recessed `inkOnLight` plates separated by 1px hairline seams. It stays optional
(skippable), posts a single clean routing value to Web3Forms, and is built from
native inputs (free keyboard + screen-reader support, no JS, the standard white
focus ring). The legend carries a persistent muted "(optional)" rather than
relying on a placeholder. Anything beyond these three is opt-in and must be
justified against the no-scroll budget; required fields stay at two. Plus the two hidden fields described in
Build context (`access_key`, honeypot `botcheck`), which carry no visual or
layout cost. There is **no separate form heading by default** - the lead
paragraph flows straight into the fields, preserving the three-block contract
(wordmark, paragraph, form). If a label-scale cue is wanted, it is at most a
single `label`-token line on the first field, never a headline-scale block.

**Labels - `label`.** The smallest uppercase mono detail, rendered in `muted`
`#919191` directly on black (6.66:1, clears AA at the label size). Muted is never
placed on a lighter surface.

**Links - `link` / `linkHover`.** Reserved for any future supporting text link
(e.g. a privacy note); none is shown by default. When used, links use `inkOnDark`
`#F2F2F2` on the black canvas (18.76:1) and brighten to pure `colors.primary`
white (21:1) on hover - a quiet brightening, not a color shift. A single
caption-scale reassurance line sits under the submit (it uses the existing
`caption` token, so it adds no new structure): *We reply within one business day.
No spam, no list-selling.* No email address or `mailto:` link is displayed - the
form is the only contact path, and Web3Forms routes submissions privately to the
server-side recipient.

Collectively the components consume every color token - `background`, `surface`,
`primary`, `inkOnDark`, `inkOnLight`, `muted`, and `accent` - so there are no
orphans, and every `textColor`-on-`backgroundColor` pair clears WCAG AA. Every
pair clears AA; the lowest is the accent CTA (`buttonAccent`) at 5.76:1, followed
by the three `muted`-on-black components at 6.66:1.

**Copy carried by components:**

- Submit (`button` / `buttonAccent`): `START THE CONVERSATION`
  (fallback `BOOK A BRIEFING`); in-progress `SENDING…`.
- Success (replaces the form in-place): *Received. We'll be in touch within one
  business day.*
- Error fallback: *Something went wrong - please try again in a moment.*
- Reassurance (`caption`, under submit): *We reply within one business day. No
  spam, no list-selling.*

## Dos and Donts

**Do**

- Lead with the `INTELLAGENT` wordmark; keep the page brand-first.
- Keep the entire experience to one centered column on one screen - wordmark,
  one paragraph, one form - three blocks, no separate form heading.
- Set all display and headings in uppercase IBM Plex Mono at Light (300) with
  CSS `text-transform: uppercase`; set prose and the form in IBM Plex Sans at
  Light (300).
- Keep every corner square (`{rounded.none}`); build structure from hairlines
  and whitespace.
- Keep `muted` `#919191` on black surfaces only; use `inkOnLight` `#262626` for
  any secondary text on light.
- Default to pure monochrome; treat the azure `accent` as opt-in only, applied
  to exactly two places - the primary CTA fill and the focus ring - or omit it
  entirely.
- Make the monochrome CTA hover a full inversion (black fill, white text, white
  hairline), not a sub-threshold tonal nudge.
- Cap the visible form at three fields (Name, Work email, optional interest
  selector), two required; submit via `fetch()` so the page never redirects.
- Write terse, confident, concrete copy; close on credibility, not novelty.
- Keep the form low-friction: minimal required fields, no boxes or dividers.

**Don't**

- Don't add navigation, a header, a footer, hero imagery sliders, a separate
  form heading, or anything beyond the three blocks.
- Don't introduce a brand color beyond the single opt-in azure accent, and never
  place black text on that azure.
- Don't use filled pill buttons, rounded corners, drop shadows, or card
  elevation.
- Don't place `muted` gray on white or `#262626` (it fails/borderlines AA).
- Don't let the form grow past three visible fields or the lead past ~3 lines -
  the no-scroll budget is load-bearing.
- Don't wire the Web3Forms default redirect; always use the in-place
  `fetch()` swap so the single screen holds.
- Don't use hype words, exclamation points (beyond the headline period-stop), or
  emoji.
- Don't carry over any trademark, product name, or third-party phrasing - all
  copy is original to IntellAgent.
