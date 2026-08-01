# MH Group: Home Complete

# MH GROUP LLC — COMPLETE WEBSITE BUILD (single build, client-ready)

You are a senior web designer and engineer building a COMPLETE, CLIENT-READY WEBSITE in a single build.
No placeholder text. No lorem ipsum. No unfinished sections. No generic filler copy.

---

## PRIORITY HIERARCHY (read first — resolves ALL rule conflicts)

When any two rules conflict, the higher tier ALWAYS wins:

- **TIER 1 — ENGINEERING LAWS** (never violated, no exceptions)
- **TIER 2 — CONTENT TRUTH** (real business facts + real client photography)
- **TIER 3 — APPROVED MOCKUP LAYOUT** (the two uploaded screenshots — client-signed-off)
- **TIER 4 — STYLE SEED** (this build's visual identity)
- **TIER 5 — Reference URLs** (none supplied for this build)
- **TIER 6 — General quality floor**

**Critical conflict, resolved in advance:** the approved mockups (Tier 3) contain AI-rendered
luxury interiors and invented project names (Tribeca Loft, Midtown Apartment, Greenwich Village
Penthouse). Those renders are **LAYOUT REFERENCE ONLY — they are not deliverable assets and those
projects do not exist.** Tier 2 outranks Tier 3: keep the mockup composition exactly, and pour the
REAL projects and REAL photography listed below into it. Never ship an AI-rendered interior as if
it were the client's work.

---

# TIER 1 — ENGINEERING LAWS

## IMAGE PIPELINE LAW (CRITICAL — deployment breaks without this)

This project deploys to **Cloudflare via GitHub**. Images that live only in the builder's internal
asset system DO NOT EXIST in the repository and WILL BE BROKEN on the live site.

1. NEVER use the builder's asset picker, `lovable-uploads` paths, `/__l5e/` URLs, or any
   builder-internal asset reference. Not once.
2. There is **no live source website** for this client, therefore **every single image on this
   site is a physical file committed inside `/public/images/`**, referenced by absolute string
   path (e.g. `src="/images/upper-west-side-86th-after-01.webp"`). There are zero hot-linked
   external images in this build.
3. The client photography has already been optimised, de-duplicated and renamed. Write every file
   from the supplied `images/` folder into `/public/images/` **using the exact filenames in the
   IMAGE MANIFEST below.** Do not rename, do not re-compress, do not re-upload through the builder.
4. Any additional decorative/OG imagery you create goes into `/public/images/` with a kebab-case
   name (`{page}-{section}-{nn}.webp`).
5. Before finishing, VERIFY: search the entire codebase — zero occurrences of `lovable-uploads`,
   `__l5e`, or asset-picker references. Any occurrence = failed build.
6. Every `<img>` gets `alt`, explicit `width`/`height` (or `aspect-ratio`), `loading="lazy"`
   (except the hero image, which is `loading="eager"` + `fetchpriority="high"`), and
   `decoding="async"`.

## ROUTING & DEPLOYMENT LAW

Target host: **Cloudflare (Workers / Pages). NOT Netlify.**

1. Every public page must load correctly via DIRECT URL access and on page refresh. Zero 404s.
2. SPA fallback required — `public/_redirects` containing `/*  /index.html  200`
   (or the equivalent correct Cloudflare config for the chosen framework).
3. Preserve the slug hierarchy defined in SITE STRUCTURE below.
4. All internal navigation scrolls to top on route change.
5. Include `public/robots.txt` and a generated `public/sitemap.xml` covering every route.

## FOOTER CREDIT LAW — **OVERRIDE FOR THIS BUILD**

**This client has explicitly requested NO agency credit line of any kind.**

Render the copyright bar as EXACTLY this and nothing more:

```
© 2026 MH Group LLC. All rights reserved.          Privacy Policy  |  Terms of Use
```

- NO "Web Design by …", NO "Powered by …", NO "Built by …", NO agency name, NO agency link,
  anywhere in the markup, comments, meta tags, or footer.
- Left side: copyright. Right side: the two legal links. Thin brass hairline above the bar.

## METADATA LAW

- Every page: unique `<title>` in the format `Page Name | MH Group LLC`.
- Homepage meta description (specific, not generic):
  `MH Group LLC is a New York renovation and project management firm delivering an all-in-one
  service for buying, managing, renovating, furnishing and moving into Manhattan homes.`
- Every page gets its own meta description, canonical URL, and Open Graph tags.
- Generate `og-image.webp` (1200×630) as a **physical file in `/public/images/`** — never a
  builder-hosted URL. Composition: `#133846` field, brass MH mark + "MH Group LLC" wordmark
  left, a real project photograph (`/images/upper-west-side-86th-after-01.webp`) bleeding right
  behind a left-to-right ink gradient.
- Add JSON-LD `LocalBusiness` / `HomeAndConstructionBusiness` schema on the homepage using only
  the verified contact facts below.

## LOGO LAW

The supplied logo file is a **364×364 raster with a baked-in dark circle** — do not use it.
Rebuild the mark as **inline SVG**: two offset architectural forms (a narrow left column with a
notched top, and a wider right form angled at the top-right), both solid `#BF935B`, transparent
background, paired with the wordmark "MH Group LLC" set in the UI sans at 500 weight.
Use this SVG in the header, footer, favicon (`/public/favicon.svg`) and OG image.

---

# TIER 2 — CONTENT TRUTH

## RULES

1. The content below is the single source of business truth.
2. **NEVER invent** claims, certifications, awards, guarantees, team members, statistics,
   durations, square footages, testimonials, or project names not present below.
3. **Real client photography ALWAYS beats generated imagery.** Every project image, hero image,
   philosophy image and CTA-band background must come from the IMAGE MANIFEST. "Generated looks
   cleaner/more consistent" is NOT a valid reason. Uncertain → use the real photo.
4. Social icons only where a real URL is supplied. **No verified social URLs were supplied →
   render NO social icons anywhere on the site.** (The mockup shows Instagram/LinkedIn glyphs in
   the footer — omit them.)
5. Any field marked `⚠ CONFIRM` below is unverified. Render it only if it is filled in.
   If it is still empty at build time, **omit that element and gracefully re-balance the layout**
   — never substitute a placeholder, a dash, or an invented value.

## SITE META

| Field | Value |
|---|---|
| Company | MH Group LLC |
| Category | Renovation & project management / all-in-one residential real estate services |
| Market | Manhattan, New York City |
| Positioning line | One Partner. Every Step Home. |
| Parent / affiliate | The Maggie Huang Team |
| Language | English primary (see optional bilingual block) |

## SITE STRUCTURE (preserve these slugs)

```
/                              Home                     ← APPROVED MOCKUP A
/projects                      Projects (index)
/projects/upper-east-side      Upper East Side Residence ← APPROVED MOCKUP B
/projects/sutton-place         Sutton Place Residence    ← APPROVED MOCKUP B
/projects/upper-west-side      Upper West Side Residence ← APPROVED MOCKUP B
/projects/midtown-east         Midtown East Residence    ← APPROVED MOCKUP B
/services                      Services
/our-philosophy                Our Philosophy
/contact                       Contact
/privacy-policy                Privacy Policy
/terms-of-use                  Terms of Use
```

Nav labels (5 items, all top-level — do not create a dropdown):
`Home · Projects · Services · Our Philosophy · Contact`

## BUSINESS INFORMATION

| Field | Value |
|---|---|
| Phone | `+1 (917) 283-4300` ⚠ CONFIRM |
| Email | `hello@mhgroupllc.com` ⚠ CONFIRM |
| Location | New York, NY |
| Street address | none supplied → **do not embed a map**, do not print a street address |
| Contact person | James Huang — President, MH Group LLC |
| Social | none supplied → no icons |

> Note to builder: the client's printed portfolio lists a different contact set
> (james.huang@mhgroupny.com / +1 516-972-5190). Use ONLY the table above unless instructed
> otherwise. Do not print both.

## COPYWRITING DATABASE (use verbatim)

**Hero**
- Eyebrow: `ONE PARTNER. EVERY STEP HOME.`
- H1: `Your All-in-One Real Estate & Home Solution in New York`
- Sub: `From buying or selling to managing, designing, furnishing, and moving in — we take care of everything so you can enjoy the results.`
- CTA primary: `EXPLORE OUR SERVICES` · CTA secondary: `VIEW OUR PROJECTS`

**Services overview**
- Eyebrow: `INTEGRATED. SEAMLESS. EXCEPTIONAL.`
- H2: `A One-Stop Solution for Your Home Journey`

| Service | Blurb |
|---|---|
| Real Estate Sales & Purchase | Expert guidance for buying, selling, and investing in residential properties across Manhattan. |
| Property Management | Comprehensive management services that protect your investment and maximize value. |
| Renovation & Project Management | End-to-end renovation management with trusted contractors and meticulous attention to detail. |
| Furniture, Styling & Move-in Service | Curated furniture selection, professional styling, and seamless move-in for a perfect start. |

**Featured projects band**
- Eyebrow: `FEATURED PROJECTS` · H2: `Spaces We Transform` · Button: `VIEW ALL PROJECTS`

**Process**
- Eyebrow: `OUR PROCESS` · H2: `A Seamless Experience from Start to Finish`

| # | Step | Copy |
|---|---|---|
| 01 | DISCOVER | We listen to your goals and understand your lifestyle and investment needs. |
| 02 | PLAN | We craft a tailored strategy with the right property, design, and service plan. |
| 03 | MANAGE | Our team executes every detail with precision, transparency, and constant communication. |
| 04 | ENJOY | Move in with confidence and enjoy a home that reflects your vision. |

**Philosophy**
- Eyebrow: `OUR PHILOSOPHY`
- H2 (two lines, break exactly here): `Built on Trust.` / `Driven by Excellence.`
- Body: `At MH Group LLC, we believe a home is more than a space — it's where life happens and wealth grows. We are committed to delivering unparalleled service, craftsmanship, and value at every step.`
- Pillars: `INTEGRITY` · `EXPERTISE` · `EXCELLENCE`

**Partnership**
- Kicker: `In Partnership with` · H2: `The Maggie Huang Team`
- Body: `As the parent company, MH Group LLC provides the space-extended services and resources that power The Maggie Huang Team's real estate expertise and client success.`
- Button: `LEARN MORE ABOUT THE MAGGIE HUANG TEAM` → ⚠ CONFIRM destination URL. If no URL is
  supplied, render the section **without a button**.
- Team photograph: ⚠ **NOT SUPPLIED.** Do not use stock or AI-generated people. If no real team
  photo file exists in `/public/images/`, render this section as a centred one-column ink-on-paper
  statement block (brass mark + kicker + H2 + body), full width, generous vertical padding.

**Closing CTA (home)**
- H2: `Ready to Begin Your Journey?`
- Sub: `Let us take care of the details, so you can enjoy the possibilities.`
- Button: `GET IN TOUCH`

**Closing CTA (project pages)**
- H2: `Let's Build Your Vision, Beautifully.`
- Sub: `From concept to completion, MH Group is your trusted partner for a seamless and elevated home journey.`
- Button: `START YOUR PROJECT`

**Footer tagline**
`A one-stop solution for real estate, property management, renovation, and home furnishing. We take care of everything, so you can enjoy the results.`

**Renovation service detail (from the client's portfolio — use on `/services` under
"Renovation & Project Management", verbatim)**

| Heading | Copy |
|---|---|
| On-Site Oversight & Quality Assurance | We provide dedicated on-site management, closely monitoring the renovation's progress and conducting rigorous final inspections to ensure every detail meets our exacting standards before the project is considered complete. |
| Curated Material Selection | Our team works closely with you to source and select high-quality materials, perfectly balancing your aesthetic vision with durability, functionality, and budget constraints. |
| Building Board & Management Approvals | We handle the administrative heavy lifting. Our team efficiently processes and submits all necessary Alteration Agreements and Certificates of Insurance (COIs) to your building's management, ensuring full compliance. |
| Contractor Compliance & Vetting | We proactively manage your vendors and contractors, taking on the responsibility of securing all required licenses, insurance policies, and documentation in a timely manner to prevent any project delays. |
| Superintendent & Logistics Coordination | We act as your primary liaison on the ground. We maintain clear, ongoing communication with building superintendents to coordinate construction schedules, manage deliveries, and guarantee that all building protocols are strictly followed. |

Supporting line for `/services` hero: `Manhattan's Premier Renovation Management Team`

**Testimonial** — ⚠ CONFIRM. No verified client testimonial has been supplied.
The quote shown in the mockup is unattributed concept copy. **Omit the testimonial section
entirely** unless a real, attributable quote is provided. Do not invent one.

## PROJECT DATA

Four completed projects. Every field below is real; any field not listed does not exist —
do not invent square footage, budgets, durations, or completion dates.

| Slug | Display name | Location | Scope | Photos |
|---|---|---|---|---|
| `upper-east-side` | Upper East Side Residence | Upper East Side, Manhattan | Full Renovation & Project Management | `upper-east-side-66th-*` |
| `sutton-place` | Sutton Place Residence | Sutton Place, Manhattan | Full Renovation & Project Management | `midtown-east-55th-10c-*` |
| `upper-west-side` | Upper West Side Residence | Upper West Side, Manhattan | Full Renovation & Project Management | `upper-west-side-86th-*` |
| `midtown-east` | Midtown East Residence | Midtown East, Manhattan | Full Renovation & Project Management | `midtown-east-55th-3d-*` |

⚠ CONFIRM per project (leave the field out of the render if empty):
`size_sqft`, `completed_date`, `duration_weeks`, `one_line_description`.

**Consequence for the stats strip** (Mockup B shows `12 WEEKS / 100% / 1 / 1`): build it as a
data-driven component that renders **only the cells with real data**, distributing them evenly
(2, 3 or 4 columns). With no data supplied, render only the two always-true cells:
`100% — PROJECT MANAGEMENT BY MH GROUP` and `1 — DEDICATED TEAM FROM START TO FINISH`.

**In-progress projects** (before-photos only, no completed work): Carnegie Hill (E 87th),
Turtle Bay (E 49th), Upper West Side (West End Ave & W 98th). **Exclude from v1.** Do not
create detail pages for them and do not show a before-only project in a portfolio grid.

## IMAGE MANIFEST — `/public/images/` (33 files, all supplied, all real)

```
upper-east-side-66th-after-01.webp        2400×1601   hero / featured card
upper-east-side-66th-after-02.webp        2400×1600   gallery
upper-east-side-66th-after-03.webp         600×400    gallery (small — never full-bleed)
upper-east-side-66th-before-01.webp        300×400    before thumbnail
upper-east-side-66th-before-02.webp        300×400    before thumbnail
upper-east-side-66th-before-03.webp        300×400    before thumbnail
upper-east-side-66th-neighborhood.webp     960×641    context / Central Park UES

midtown-east-55th-10c-after-01.webp       2400×1600   hero / featured card   (Sutton Place)
midtown-east-55th-10c-after-02.webp       2400×1600   gallery
midtown-east-55th-10c-after-03.webp        600×400    gallery (small)
midtown-east-55th-10c-before-01.webp      1024×768    before thumbnail

upper-west-side-86th-after-01.webp        2400×1602   hero / featured card
upper-west-side-86th-after-02.webp        2400×1602   gallery
upper-west-side-86th-after-03.webp        2400×1602   gallery
upper-west-side-86th-before-01.webp        600×400    before thumbnail
upper-west-side-86th-before-02.webp        600×400    before thumbnail
upper-west-side-86th-before-03.webp        601×400    before thumbnail

midtown-east-55th-3d-after-01.webp        1600×1068   hero / featured card
midtown-east-55th-3d-after-02.webp        2400×1602   gallery
midtown-east-55th-3d-after-03.webp         599×400    gallery (small)
midtown-east-55th-3d-before-01.webp       1024×768    before thumbnail
midtown-east-55th-3d-before-02.webp       1024×768    before thumbnail

carnegie-hill-87th-before-01.webp         1024×768    unused in v1
carnegie-hill-87th-before-02.webp         1024×768    unused in v1
carnegie-hill-87th-neighborhood.webp       600×600    unused in v1
turtle-bay-49th-before-01.webp             533×400    unused in v1
turtle-bay-49th-before-02.webp             300×400    unused in v1
turtle-bay-49th-before-03.webp             300×400    unused in v1
turtle-bay-49th-neighborhood.webp          800×533    unused in v1
upper-west-side-98th-before-01.webp        711×400    unused in v1
upper-west-side-98th-before-02.webp        711×400    unused in v1
upper-west-side-98th-before-03.webp        600×400    unused in v1
upper-west-side-98th-neighborhood.webp     646×900    unused in v1
```

**Resolution law.** The `before` photographs and the three `600×400` after-shots are low
resolution. They may be used at **thumbnail / small-card size only** — never as a full-bleed
band, never as a page hero, never upscaled past their native pixel width. Where the approved
mockup calls for a large image and only a low-res file is available, choose a different
project's large file rather than stretching a small one.

**Slot assignments** (2400px files only, so every large slot is sharp):

| Slot | File |
|---|---|
| Home hero | `upper-west-side-86th-after-01.webp` |
| Home featured card 1 | `upper-east-side-66th-after-01.webp` (Upper East Side Residence) |
| Home featured card 2 | `midtown-east-55th-10c-after-01.webp` (Sutton Place Residence) |
| Home featured card 3 | `upper-west-side-86th-after-02.webp` (Upper West Side Residence) |
| Home featured card 4 | `midtown-east-55th-3d-after-02.webp` (Midtown East Residence) |
| Philosophy split image | `upper-east-side-66th-after-02.webp` |
| Home closing CTA background | `upper-west-side-86th-after-03.webp` (ink overlay 78%) |
| Project page hero | that project's `-after-01` |
| Project page CTA background | that project's `-after-02` (ink overlay 78%) |

---

# TIER 3 — APPROVED MOCKUP LAYOUT (layout authority)

Two screenshots have been supplied and signed off by the client. They are the **layout authority**
for hero structure, section order, spacing rhythm, image-to-text balance, card layout, and
header/footer structure. Rebuild them faithfully — do **not** simplify them into a generic
template, and do not reorder sections. Match them or beat them.

## MOCKUP A — HOME PAGE

**1 · Header** — full-width `#133846` bar, ~76px tall, sticky, no shadow, 1px brass-at-20%
bottom hairline once scrolled. Left: brass SVG mark + "MH Group LLC" wordmark, vertically
centred. Right group: 5 nav links (UI sans, 12px, uppercase, `letter-spacing .12em`,
`rgba(255,255,255,.82)`), active item is brass with a 2px brass underline offset 8px below;
then a 1px vertical divider; then the language pair `EN | 中文` (active brass, inactive white 60%).

**2 · Hero — asymmetric split, full viewport-ish (min-height 88vh)**
Ink panel from the left edge to ~44% width, photograph from ~38% to the right edge and bleeding
past the top under the header (the panel overlaps the image's left portion — hard vertical cut,
no fade). Inside the panel, left-aligned, vertically centred, max-width 480px:
brass eyebrow → H1 in display serif on 3 balanced lines (`Your All-in-One / Real Estate & Home /
Solution in New York` — never orphan a single word) → 56px-wide brass hairline → body paragraph →
button row: filled brass primary with `→`, ghost secondary with 1px white-40% border.
Add a left-to-right ink gradient over the first 12% of the photograph so the cut never looks raw.

**3 · Services overview** — paper band, centred header (brass eyebrow → display H2), then a
4-column row separated by **1px full-height vertical hairlines** (not cards, no borders, no
shadows). Each column: brass line-icon (1.5px stroke, 44px, outline only) → 2-line uppercase
title in UI sans 13px `letter-spacing .08em` → 3-line blurb in muted body. Icons: house,
building, drafting/pen, armchair+lamp.

**4 · Featured projects** — ink band. Header row: brass eyebrow above display H2 on the left,
ghost `VIEW ALL PROJECTS →` button right-aligned and baseline-aligned to the H2. Below: a
4-column image grid, **8px gaps**, cards 4:5 portrait, each with a bottom-up ink gradient overlay,
project name in display serif 19px white and service line in UI sans 12px brass beneath it,
20px inset. Whole card is a link to its detail page. Hover: image `scale(1.04)` over 900ms,
overlay lightens.

**5 · Process** — paper band, centred header. 4 columns; each begins with a brass display-serif
numeral `01`–`04` at 44px paired with a brass line-icon to its right, then a short 40px brass
rule, then uppercase label, then body. Between columns, a horizontal brass `→` connector
centred on the numeral baseline (hide connectors below 1024px).

**6 · Philosophy split** — 50/50, no gutter, full-bleed. Left: ink panel, 96px padding,
brass eyebrow → display H2 on 2 lines → body → a row of 3 brass line-icons with uppercase
labels beneath (INTEGRITY · EXPERTISE · EXCELLENCE). Right: photograph, full-bleed, no radius.

**7 · Partnership** — paper band, 50/50. Left: brass SVG mark at 64px → `In Partnership with`
kicker in UI sans → `The Maggie Huang Team` in display serif → body → brass button (only if a
URL is supplied). Right: team photograph **if and only if a real file exists**; otherwise
collapse to a single centred column as specified in Tier 2.

**8 · Closing CTA** — full-width ink band over a real project photograph at 78% ink overlay,
centred: display H2 → body → filled brass button with `→`. Vertical padding 120px.

**9 · Footer** — ink `#133846`. Row 1 (4 columns): brass mark + wordmark + footer tagline |
NAVIGATION | SERVICES | CONTACT (phone, email, "New York, NY" each with a brass line-icon).
Column headings: UI sans 11px uppercase `letter-spacing .16em`, brass. Links: white 70%,
hover brass. **No social icons.** Row 2: 1px brass-at-18% hairline, then the copyright bar per
the Footer Credit Law.

## MOCKUP B — PROJECT DETAIL PAGE

**1 · Header** — identical, `Projects` active.

**2 · Back link** — `‹ BACK TO PROJECTS`, UI sans 11px uppercase, white 70%, on the ink field
directly beneath the header, 32px above the hero content.

**3 · Hero — asymmetric split (same DNA as home, taller ink panel)**
Left ink panel ~42%: brass eyebrow `RENOVATION & PROJECT MANAGEMENT` → project name in display
serif ~58px → second line (scope) in display serif ~34px at 80% opacity → 4-line body paragraph
→ **2×2 meta grid** with brass outline icons (pin, home, calendar, scissors): `LOCATION`, `SIZE`,
`COMPLETED`, `SCOPE` — brass uppercase 10px label above white 14px value. **Render only the meta
cells with real data**; with 2 cells, use a single row.
Right: hero photograph bleeding to the right edge.

**4 · Stats strip** — a darker ink bar (`#0D2833`) sitting flush along the **bottom of the hero
image**, starting at the panel's right edge and running to the page's right edge. Cells separated
by 1px brass-at-25% verticals. Each cell: brass display-serif numeral ~30px, then two lines of
UI sans 10px uppercase `letter-spacing .12em` in white 70%. Data-driven per Tier 2 (2–4 cells).

**5 · Project highlights** — paper band. Left column (~26%): brass eyebrow + 60px brass rule +
intro paragraph. Right (~74%): 4 columns separated by 1px vertical hairlines, each with a brass
line-icon → 2-line uppercase title → blurb. Content per project comes from real scope data only;
if a project has fewer than 4 real highlights, render 2 or 3 columns rather than padding.

**6 · Full-bleed gallery row** — edge-to-edge, **zero gaps**, 4 equal images at 4:3, no radius,
no container. Use that project's `-after-*` files first; only fill the remaining slots with
another completed project's large after-shots. Never place a `600×400` file in this row.
Clicking any image opens a simple lightbox.

**7 · Before & After** — *replaces the mockup's testimonial section*, because no verified
testimonial exists and because before/after is this client's actual story. Paper band, same
composition as the mockup's testimonial block: left column brass eyebrow `BEFORE` + one sentence;
right side a 4-up row of small squares showing that project's `-before-*` thumbnails plus its
`-neighborhood` shot where available. Keep the squares small (max ~260px) — they are low-res.
If a real testimonial is later supplied, restore the mockup's quote block above this section
(brass `"` glyph at 40px, quote in display serif 21px `line-height 1.7`, attribution in brass
UI sans 11px uppercase).

**8 · Closing CTA** — as Mockup A section 8, but with the project-page copy and a **ghost**
button (1px brass border, transparent fill, brass text) rather than a filled one.

**9 · Footer** — identical.

## PAGES NOT IN THE MOCKUPS

`/projects`, `/services`, `/our-philosophy`, `/contact` are **not** signed off. Build them from
the exact same section vocabulary so they are visually indistinguishable in quality:

- **`/projects`** — short ink hero (eyebrow + H2 + one line), then a 2-column grid of the four
  project cards at 4:5 with the same overlay/hover treatment as the home band, then the closing
  CTA + footer.
- **`/services`** — ink hero using `Manhattan's Premier Renovation Management Team`, then the
  four top-level services as alternating full-width 50/50 ink↔paper splits (image one side, copy
  the other, alternating direction), with the five renovation sub-services rendered inside the
  Renovation & Project Management block as a hairline-divided list using the brass column rule as
  the bullet glyph. Then process recap + CTA.
- **`/our-philosophy`** — ink hero, the philosophy statement at large display size on paper with
  huge whitespace, the three pillars as a hairline-divided 3-column row, then the partnership
  block, then CTA.
- **`/contact`** — 50/50 split: left paper column with the form, right ink column with phone,
  email, "New York, NY" and James Huang's name/title. **No map** (no street address exists).
  Form fields: Name, Email, Phone, Service of Interest (select, the four services), Message.
  Front-end only, no fake endpoint; on submit show an inline success state and a mailto fallback.
  Labels are always visible (never placeholder-only).

## OPTIONAL — BILINGUAL EN / 中文

The approved header shows `EN | 中文`. Implement it properly or delete it — never ship a
non-functional toggle.
If implementing: route-based (`/` and `/zh`), a single `src/i18n/{en,zh}.json` dictionary holding
every string on the site, `` updated per route, `hreflang` alternates in ``,
and the Chinese display face set to `Noto Serif TC` with `Noto Sans TC` for UI. Chinese copy must
be supplied by the client — **do not machine-translate the marketing copy.** If no Chinese copy
is available at build time, **remove the toggle** and keep the header's right-hand slot balanced.

---

# TIER 4 — STYLE SEED — "MADISON AVENUE EDITORIAL"

This is the identity of the build, not decoration advice. Execute it with conviction.

**Mood.** An architecture monograph crossed with a Fifth Avenue brokerage brochure. Quiet,
expensive, structural, unhurried. Confidence expressed through restraint and whitespace, never
through gradients, glass, glow or ornament. Nothing on this site should look like a SaaS template.

**Palette — brand colours mapped onto seed roles**

| Role | Hex | Use |
|---|---|---|
| Dominant (ink) | `#133846` | header, footer, hero panel, alternating full-width bands |
| Dominant deep | `#0D2833` | stats strip, sticky CTAs, overlays on brand-coloured sections |
| Surface (paper) | `#F7F5F1` | alternating light bands |
| Accent (brass) | `#BF935B` | eyebrows, rules, numerals, icon strokes, primary button fill |
| Accent deep | `#A87F49` | brass button hover |
| Ink text on paper | `#1B2A31` | headings, high-contrast body |
| Muted text | `#6E7C82` | body copy on paper |
| Hairline on paper | `#DCD6CC` | 1px dividers |
| Hairline on ink | `rgba(191,147,91,.22)` | 1px dividers |

Band rhythm: **ink → paper → ink → paper → ink**. Never two same-tone bands adjacent.

**Typography**
- Display: **Playfair Display** 400/500. All H1/H2/H3, project names, numerals, testimonial
  quotes. `line-height` 0.98–1.08. `letter-spacing` −0.01em on large sizes.
- UI / body: **Jost** 300/400/500. Nav, eyebrows, labels, buttons, body copy, form fields.
- Eyebrow recipe (used everywhere): Jost 500, 11px, `text-transform: uppercase`,
  `letter-spacing: .18em`, colour brass, followed by a 48px × 1px brass rule where the mockup
  shows one.
- Type scale (desktop → mobile): H1 `72px → 38px` · H2 `44px → 28px` · H3 `20px → 18px` ·
  body `16px/1.75 → 15px/1.7` · label `11px`.
- Chinese fallback stack (even in the EN build, for the toggle glyph): `Noto Serif TC`, `Noto Sans TC`.

**Shape language**
- Border-radius: **0px everywhere**. Buttons `2px`. Nothing else is rounded, ever.
- **No box-shadows anywhere.** Depth comes from value contrast and 1px hairlines.
- Column separation is a 1px vertical hairline, never a card border, never a filled tile.

**Layout system**
- Container 1280px, gutters 64px desktop / 20px mobile.
- Section padding 128px vertical desktop / 72px mobile. "Featured" imagery ignores the container
  and goes edge-to-edge with zero gutter.
- Grid: 12 columns, 24px gap.

**Imagery treatment**
- Unify the mixed source photography with a single grade: `filter: saturate(.94) contrast(1.03);`
  applied to every project photograph so the low-res and high-res files read as one body of work.
- Overlays on ink-band photography: `rgba(19,56,70,.78)`.
- Card hover: `transform: scale(1.04)` over `900ms cubic-bezier(.2,.6,.2,1)`, overlay lightens
  from `.72` to `.45`. Never a lift, never a shadow, never a border colour change.

**SIGNATURE ELEMENT (MANDATORY) — "THE GOLD COLUMN RULE"**
A **4px-wide solid `#BF935B` vertical bar**, its height matching the heading block it marks,
sitting **24px to the left** of every major section heading, every project title, and every
service sub-heading. It is lifted directly from the two building forms in the MH mark and it must
appear on every section of every page, unmissable and perfectly consistent. On paper bands it
carries a 1px inner line in `#E4CBA4` for depth. **Nothing else in this design may use a thick
vertical bar** — all other dividers are 1px hairlines. This is what makes the site unmistakably
MH Group's and not a template. On the projects grid it also serves as the bullet glyph in the
services list.

**Motion**
Fade-up 24px over 700ms, triggered once on scroll, staggered 80ms across siblings. Buttons
translate their `→` 8px on hover. That is the complete motion vocabulary — **no parallax, no
marquee, no counters, no floating shapes, no ambient animation.** Respect
`prefers-reduced-motion`.

**Explicitly forbidden** (default builder patterns — if a section drifts here, redesign it):
identical shadcn cards, `rounded-2xl` everything, purple/indigo gradients, glassmorphism,
big-number stat heroes with generic icons, emoji, three-column feature cards with drop shadows,
diagonal marquee text, decorative blobs.

---

# TIER 5 — REFERENCES

None supplied. **LAYOUT MODE: STANDARD.** Ignore all conversion-layout patterns.

---

# TIER 6 — QUALITY FLOOR

- **Hero:** the H1 is the largest, most dominant element on the page — visibly a headline, never
  paragraph-sized. Editorially balanced line breaks: no orphaned single-word last line, no one
  huge line plus one tiny line. Keep natural phrase groups together.
- **Header:** logo vertically centred, ~76px band. 5 nav items, all top-level, never wrapping.
  The header sits over a dark hero so it stays legible; once scrolled past the hero, keep the
  solid ink fill (readability beats transparency).
- **Readability:** text never blends into its background. Any text over photography sits on an
  overlay of at least 70%. Minimum body contrast 4.5:1.
- **Consistency:** one button system — 2px radius, 16px/32px padding, Jost 500 12px uppercase
  `letter-spacing .12em`, three variants only (filled brass / ghost-brass / ghost-white). Card
  grids share consistent gaps and equal heights. Consistent vertical rhythm between all sections.
- **Decoration discipline:** nothing beyond what the style seed and the approved mockups contain.
  When uncertain, leave it out.
- **Mobile (validate at 375px):** min 20px side padding; no text touching edges, no overlap,
  no clipped text, no nav overflow, no sticky obstruction. Split heroes stack to image-then-panel.
  4-column rows become 2×2 on tablet and 1 column on mobile, keeping the hairlines as horizontal
  dividers. The full-bleed 4-up gallery becomes a 2×2 grid. Mobile menu: full-screen ink overlay,
  display-serif links, brass column rule on the active item.
- **Accessibility:** semantic landmarks, one `

` per page, visible focus rings in brass,
  `aria-label` on icon-only controls, alt text describing the room and project.
- **Performance:** no font file over the 4 weights listed, `font-display: swap`,
  hero image preloaded, everything else lazy. Target LCP < 2.5s.
- **Forms:** no endpoint supplied → clean front-end form with client-side validation, no fake
  endpoint. **Map:** no street address exists → no embed. **Footer logo:** inline SVG only,
  never a raster.

---

# FINAL SELF-CHECK (run before declaring the build done)

- [ ] Zero `lovable-uploads` / `__l5e` / asset-picker references anywhere in the codebase
- [ ] All 33 images physically exist under `/public/images/` with the exact manifest filenames
- [ ] Zero AI-generated or stock interiors anywhere — every photo is a real MH Group project
- [ ] No low-resolution file used in a full-bleed or hero slot
- [ ] Every route loads on direct access and on refresh; `_redirects` SPA fallback present
- [ ] Copyright bar is exactly `© 2026 MH Group LLC. All rights reserved.` + the two legal links,
      with **no agency credit of any kind** anywhere in the site or markup
- [ ] The Gold Column Rule appears on every section heading of every page and is unmistakable
- [ ] Border-radius is 0 everywhere except 2px buttons; zero box-shadows in the stylesheet
- [ ] No social icons; no map; no invented projects, testimonials, stats, dates or square footages
- [ ] Every `⚠ CONFIRM` field is either filled with verified data or its element is omitted
      cleanly with the layout re-balanced
- [ ] The `EN | 中文` toggle is either fully functional with real Chinese copy, or removed
- [ ] Mobile 375px clean; H1 dominant with balanced line breaks
- [ ] Unique `

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/759a7093-a7d7-4807-a88a-ccca827488b5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
