---
name: Checkmate Scholar
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#45464d'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#a33d22'
  on-secondary: '#ffffff'
  secondary-container: '#fc7f5e'
  on-secondary-container: '#701801'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#07006c'
  on-tertiary-container: '#7073ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbd2'
  secondary-fixed-dim: '#ffb4a2'
  on-secondary-fixed: '#3c0800'
  on-secondary-fixed-variant: '#83260d'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  headline-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 36px
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The brand personality is "The Encouraging Grandmaster"—knowledgeable and strategic, yet warm, accessible, and deeply invested in the student's growth. The design system avoids the cold, analytical aesthetics of traditional chess platforms in favor of a playful, character-driven environment inspired by high-quality educational apps.

The design style is a blend of **Tactile Minimalism** and **Soft Modernism**. It uses high-contrast primary elements against a soft, creamy background to ensure readability and trust, while utilizing "squishy" tactile buttons and friendly geometry to keep the experience inviting for students in the grade 3-8 range. Every interaction should feel like a reward, utilizing physical metaphors (lifts, depth, and bounce) rather than flat, digital-only transitions.

## Colors
The palette is anchored by a deep **Navy** that provides the necessary authority and "scholarship" weight, preventing the UI from feeling too juvenile. This is contrasted sharply by **Accent Coral**, used exclusively for primary calls-to-action and "aha!" moments. 

The **Background Cream** (#FDFCF8) serves as the canvas, providing a much softer visual experience than pure white, which reduces eye strain during long study sessions. A tertiary **Indigo** is introduced for secondary interactive elements (like chess piece movement highlights) to maintain a cohesive, cool-toned professional foundation alongside the warm accents.

## Typography
The typography strategy creates a clear distinction between "Instruction" and "Content." 

**Headlines** use a bold, expressive grotesque font that feels hand-crafted and energetic. The tighter letter spacing in larger sizes adds a sense of impact and confidence. 

**Body and UI text** utilize a soft, rounded sans-serif. This ensures that even dense information (like scholarship requirements or chess rules) feels approachable and easy to digest. High-importance labels should use the bold weight of the sans-serif font to maintain hierarchy without needing to switch back to the display face.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous safe areas to maintain a "breathable" feel. On desktop, a 12-column grid is used with 24px gutters. On mobile, this collapses to a single column with 16px side margins.

Spacing is based on an 8px linear scale. Large-scale components (like scholarship application sections) should use wide padding (32px or 40px) to prevent the UI from feeling cramped. Content groups should be clearly separated by significant vertical whitespace to help students focus on one task at a time.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Tactile Lifts** rather than high-altitude shadows. 

1.  **Level 0 (Floor):** The Cream background.
2.  **Level 1 (Cards):** White surfaces with a very soft, low-opacity Navy shadow (4% opacity) and a 1px soft-grey border.
3.  **Level 2 (Interactive):** Buttons and active states use a "thick-border" bottom shadow (2px to 4px) in a darker shade of the element's color, simulating a physical button that can be pressed down.

Avoid traditional "blurred" shadows that suggest floating; prefer "solid" or very tight shadows that suggest the element is resting firmly on a surface.

## Shapes
Sharp corners are strictly prohibited in this design system. Standard elements (inputs, cards, small buttons) use a 0.5rem (8px) radius. Larger containers or featured cards should scale up to 1rem (16px). For high-engagement items like "Apply Now" buttons or progress chips, use fully rounded (pill-shaped) ends to maximize the friendly, organic feel.

## Components

### Buttons
Primary buttons use the Accent Coral with a 4px bottom "lift" (a darker coral border-bottom). On hover, the button should slightly compress; on click, the lift disappears to simulate a physical press. Use all-caps for button labels in the bold sans-serif face for clarity.

### Soft Cards
Cards should have a white background, the standard 16px corner radius, and a subtle 1px border (#E2E8F0). They should never feel "heavy"—if multiple cards are on a page, use the Cream background to separate them rather than intense shadows.

### Progress Indicators
Since this is a scholarship program, progress is key. Use thick, rounded progress bars with the Accent Coral for the "fill" and a muted version of the Navy for the "track."

### Inputs & Forms
Form fields should have a thick 2px border in a light Navy tint. When focused, the border should transition to the Primary Navy or Indigo, and the background should remain white to ensure text contrast for students.

### Friendly Iconography
Icons should have rounded terminals and a consistent 2px stroke weight. Avoid "sharp" or "technical" icons. If possible, enclose icons in soft-colored circles (e.g., a light Coral circle with a darker Coral icon) to create a sticker-like appearance.