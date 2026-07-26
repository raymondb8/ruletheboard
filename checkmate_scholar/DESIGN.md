---
name: Checkmate Scholar
colors:
  surface: '#fbf8ff'
  surface-dim: '#dbd9e1'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2fb'
  surface-container: '#efecf5'
  surface-container-high: '#eae7ef'
  surface-container-highest: '#e4e1ea'
  on-surface: '#1b1b21'
  on-surface-variant: '#454652'
  inverse-surface: '#303036'
  inverse-on-surface: '#f2eff8'
  outline: '#767683'
  outline-variant: '#c6c5d4'
  surface-tint: '#4c56af'
  primary: '#000666'
  on-primary: '#ffffff'
  primary-container: '#1a237e'
  on-primary-container: '#8690ee'
  inverse-primary: '#bdc2ff'
  secondary: '#ac332a'
  on-secondary: '#ffffff'
  secondary-container: '#fd6e60'
  on-secondary-container: '#6d0005'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cda721'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bdc2ff'
  on-primary-fixed: '#000767'
  on-primary-fixed-variant: '#343d96'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#8b1a16'
  tertiary-fixed: '#ffe087'
  tertiary-fixed-dim: '#ebc23e'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fbf8ff'
  on-background: '#1b1b21'
  surface-variant: '#e4e1ea'
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
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
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
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-gap: 12px
---

## Brand & Style

The design system is reimagined as a high-energy, gamified learning environment tailored for young strategists. It transitions from a traditional academic feel to a "Play-to-Win" atmosphere that balances the intellectual depth of chess with the vibrant dopamine hits of modern gaming interfaces. 

The aesthetic is **Playful Neo-Brutalism mixed with Tactile Pop**. It utilizes chunky strokes, "bouncy" 3D depth, and energetic offsets to create a UI that feels reactive and alive. The goal is to make learning chess feel less like a chore and more like leveling up in a favorite video game.

- **Target Audience:** Kids ages 8-14.
- **Emotional Response:** Excitement, confidence, whimsy, and competitive spirit.
- **Visual Style:** High-contrast elements, thick "ink" borders, and exaggerated tactile physics.

## Colors

The palette is anchored by the original Navy and Coral but energized with "Power-Up" accents. 

- **Primary (Grandmaster Navy):** Used for heavy borders, primary text, and deep shadows. It provides the "ink" that holds the whimsical shapes together.
- **Secondary (Action Coral):** Reserved for high-priority interactions and "Crush It" moments.
- **Tertiary (Sunny Gambit Yellow):** Used for achievements, stars, and highlighting "New" features.
- **Quaternary (Checkmate Green):** Used for "Correct" states and progress bars to evoke a sense of growth.
- **Background (Parchment Cream):** A soft, warm off-white that prevents eye strain while maintaining a friendly, non-corporate vibe.

## Typography

Typography is used as a graphic element. Headlines should be expressive and loud, while body text remains highly legible to ensure learning content is accessible.

- **Headlines:** Using Bricolage Grotesque for its "bouncy" and quirky terminal shapes. It mimics the energy of a comic book or game title.
- **Body & UI:** Plus Jakarta Sans provides a friendly, rounded geometric feel that complements the chunky UI without sacrificing readability.
- **Copy Tone:** Always enthusiastic! Use exclamation points and action-oriented verbs. Replace "Courses" with "Adventures," "Log In" with "Enter the Arena," and "Profile" with "Player Stats."

## Layout & Spacing

The layout philosophy is "The Playground Grid." It avoids rigid, thin lines in favor of chunky containers that stack and overlap.

- **The Bounce Factor:** Elements should not be perfectly aligned to a microscopic grid. Use slight rotations (1-2 degrees) on cards and decorative elements to create a sense of movement.
- **Mobile First:** Navigation moves to a "Game Bar" at the bottom of the screen with large, thumb-friendly icons.
- **Safe Zones:** Use generous internal padding (min 24px) within cards to allow the thick borders and shadows room to breathe without crowding the content.

## Elevation & Depth

This design system eschews soft, realistic shadows for **Hard 3D Offsets**. 

- **The "Slam" Effect:** Interactive elements feature a solid 4px offset shadow in Navy (#1A237E). 
- **Interaction Physics:** When a button is hovered, the offset shrinks to 2px. When pressed, the offset goes to 0px, "slamming" the button into the page for a highly tactile feel.
- **Layering:** Use high-contrast Navy outlines (3px width) on all containers to separate them from the background. No blurs or gradients are used for elevation; depth is purely structural and color-based.

## Shapes

The shape language is "Super-Rounded." Every corner is softened to be safe and inviting, mimicking the look of physical toy blocks or game tokens.

- **Stroke Weight:** A consistent 3px or 4px Navy border is applied to all primary UI components (cards, buttons, inputs).
- **Icons:** Use thick-stroke, rounded icon sets. Avoid thin, wiry lines.
- **Decorative:** Incorporate "Blob" shapes in the background using the secondary and tertiary colors to break up vertical sections.

## Components

### Buttons (The "Slam" Button)
Primary buttons are high-contrast Coral with a 4px Navy "hard shadow" offset. Text is uppercase Bold. On press, the button physically moves 4px down and to the right to meet its shadow.

### Cards (The "Adventure" Card)
Cards use a 3px Navy border and a slight (2-degree) rotation. On hover, the card "straightens" and its shadow grows, making it pop off the screen.

### Navigation (The "Game Menu")
Desktop navigation uses chunky, oversized tabs. Mobile navigation is a floating bottom bar with "bubble" indicators that grow when a section is active. Use icons like a Trophy for "Leaderboards" and a Knight piece for "My Lessons."

### Input Fields
Inputs are extra-large with a 3px border. The focus state changes the border color to Checkmate Green and increases the border weight to 5px, making it clear where the kid is typing.

### Progress Bars
Thick, rounded tracks in Navy with a "bubbly" fill in Green or Coral. Add a small "sparkle" or star icon at the end of the fill to reward progress.

### Chips & Tags
Pill-shaped with bright fills. Use them for difficulty levels: "Easy-Peasy" (Green), "Getting Tough" (Yellow), and "Boss Mode" (Coral).