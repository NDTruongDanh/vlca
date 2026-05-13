---
name: Logistics Carbon Intelligence System
colors:
  surface: "#f8f9fb"
  surface-dim: "#d9dadc"
  surface-bright: "#f8f9fb"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3f4f6"
  surface-container: "#edeef0"
  surface-container-high: "#e7e8ea"
  surface-container-highest: "#e1e2e4"
  on-surface: "#191c1e"
  on-surface-variant: "#444651"
  inverse-surface: "#2e3132"
  inverse-on-surface: "#f0f1f3"
  outline: "#757682"
  outline-variant: "#c5c5d2"
  surface-tint: "#445aa4"
  primary: "#000f3d"
  on-primary: "#ffffff"
  primary-container: "#00216b"
  on-primary-container: "#768cd9"
  inverse-primary: "#b6c4ff"
  secondary: "#3d6658"
  on-secondary: "#ffffff"
  secondary-container: "#bfecda"
  on-secondary-container: "#436c5e"
  tertiary: "#071800"
  on-tertiary: "#ffffff"
  tertiary-container: "#132f00"
  on-tertiary-container: "#659f39"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#dce1ff"
  primary-fixed-dim: "#b6c4ff"
  on-primary-fixed: "#00164e"
  on-primary-fixed-variant: "#2a428b"
  secondary-fixed: "#bfecda"
  secondary-fixed-dim: "#a4d0bf"
  on-secondary-fixed: "#002118"
  on-secondary-fixed-variant: "#254e41"
  tertiary-fixed: "#b4f483"
  tertiary-fixed-dim: "#99d76a"
  on-tertiary-fixed: "#0b2000"
  on-tertiary-fixed-variant: "#255100"
  background: "#f8f9fb"
  on-background: "#191c1e"
  surface-variant: "#e1e2e4"
typography:
  display:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: "600"
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  shell-height: 52px
  sidebar-width: 240px
  gutter: 1rem
  margin-desktop: 2rem
  margin-mobile: 1rem
  row-height: 40px
  base-unit: 4px
---

## Brand & Style

The design system is engineered for Vietnamese logistics SMEs, balancing the rigid efficiency of enterprise software with a modern environmental consciousness. It follows the **SAP Fiori 3 (Quartz)** evolution, emphasizing clarity, information density, and task-oriented workflows.

The brand personality is **Trustworthy, Ecological, and Disciplined**. It avoids the playful softness of consumer apps in favor of a "Corporate Modern" aesthetic that signals stability and compliance. The UI evokes a sense of "Clean Industry"—combining deep maritime navies (representing the logistics backbone) with forest-inspired greens (representing carbon stewardship).

## Colors

The color system utilizes a high-contrast palette to ensure legibility in high-utility data environments.

- **Primary Navy (#00216B)** serves as the anchor for all interactive elements and brand recognition.
- **Eco Tones** are stratified: **Forest Teal** for navigation, **Mid Green** for environmental UI accents, and **Brand Green** strictly for positive verification and "Success" states.
- **Neutrals** are cool-toned. The **Page Background (#F4F5F7)** provides a subtle contrast against the **White (#FFFFFF)** card surfaces to define the Fiori-style "layered" layout.
- **Text** uses a dark navy tint (#1A1A2E) instead of pure black to maintain a premium, cohesive look across all modules.

## Typography

This design system utilizes **IBM Plex Sans** for its structural, industrial character—fitting for a logistics-heavy enterprise environment. Its geometric yet humanistic curves ensure readability in dense data tables and complex forms.

**Inter** is utilized for functional labels and status badges, providing maximum legibility at micro-scales.

- **Headlines:** Use Semi-Bold (600) for all section headers.
- **Body Text:** Use Regular (400) for standard descriptions and data entries.
- **Labels:** Use Medium/Semi-Bold for metadata, badges, and table headers to create visual distinction from data.

## Layout & Spacing

This design system employs a **Fixed-Fluid Hybrid Grid**. The sidebar remains fixed at **240px**, while the main content area utilizes a fluid 12-column grid system that stretches to fill the viewport.

- **Vertical Rhythm:** A strict 4px/8px base unit is used for all internal component spacing.
- **Layout Structure:**
  - **Shell Bar:** 52px height, pinned to the top.
  - **Sidebar:** Left-aligned, collapsible on mobile.
  - **Content Margins:** 32px (2rem) on desktop; reduced to 16px (1rem) on mobile.
- **Responsiveness:** On tablet devices, the sidebar collapses into an icon-only "rail" (64px width). On mobile devices, the sidebar becomes a hidden drawer and cards stack vertically.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Tinted Shadows**.

- **Surface Tiers:** Background is #F4F5F7, Surface (Cards/Containers) is #FFFFFF.
- **Shadows:** Instead of neutral grays, this design system uses a **Navy-Tinted Shadow** (`0 2px 8px rgba(0, 33, 107, 0.08)`). This keeps the UI looking clean and prevents the "muddy" look typical of default gray shadows.
- **Interactive Depth:** Hovering over a card should increase the shadow spread slightly while maintaining the navy tint.
- **Shell Bar:** Remains flat but uses a **3px solid #00216B bottom border** to provide a sharp structural break from the content.

## Shapes

The shape language is **Rounded (Level 2)**, conveying modern professionalism without being overly casual.

- **Cards & Inputs:** Use a **0.5rem (8px)** corner radius.
- **Status Badges:** Use a smaller **4px** radius to maintain a compact, "pill-like" appearance while preserving the 4px grid alignment.
- **Buttons:** 8px radius for standard actions, matching the card language.
- **Visual Accents:** Cards must feature a **3px left-border accent** in the Primary Navy or a semantic color to indicate category or status.

## Components

### Buttons

- **Primary:** Filled #00216B with white text. Used for the final "Commit" action.
- **Secondary:** Outlined #00216B. Used for navigational or secondary actions.
- **Eco Action:** Filled #649E38 with white text. Used exclusively for "Calculate," "Verify," or "Export Sustainability Report."

### Sidebar & Shell Bar

- **Shell Bar:** White background with a 3px #00216B bottom border.
- **Active Nav:** 3px #00216B left border, #EEF2FA background, and #00216B text/icon.
- **Hover Nav:** #F0F5EE background and #4E8140 icon.

### Data Tables

- **Standardization:** 40px row height for high density.
- **Zebra Striping:** Alternating rows use #F8F9FB.
- **Sticky Headers:** Background #F4F5F7 with #5A5A72 (Secondary) text weight.

### Status Badges

Badges are pill-shaped (4px radius) with specific pairings:

- **Success/Verified:** Background #EBF3E6, Text #649E38.
- **Warning/Idling:** Background #FDF1E7, Text #E9730C.
- **Error/Risk:** Background #F8E6E6, Text #BB0000.
- **Offline/Inactive:** Background #F2F2F2, Text #8C8C8C.
- **In Transit:** Background #EEF2FA, Text #00216B.

### Cards

Cards are the primary container. They must include the 8px radius and the 0.08 opacity Navy shadow. Each card must have a 3px accent border on the left side to provide a vertical visual rhythm down the page.
