# Fitness App UX/UI Style Guide

## Pondering Analysis

This fitness application embodies a sophisticated neumorphic design philosophy that creates a tactile, almost physical interface experience. The designers have masterfully balanced minimalism with information density, creating screens that feel both calming and purposeful—essential for a wellness-focused application where user stress and cognitive load must remain low.

The aesthetic choices reveal a deliberate strategy: the soft, pillowy cards float against pastel backgrounds, creating depth without aggression. This isn't the harsh, dark neumorphism we sometimes see—it's a "light neumorphic" or "soft-contrast" approach that feels approachable and gentle, perfectly aligned with fitness and self-care contexts. The user should feel encouraged, not intimidated.

The monochrome base (grays, off-whites, and soft pastels) with selective accent usage is brilliant. Notice how the black elements (the pill-shaped stat cards, the selected round number, the floating action button, the bottom nav bar) create visual anchors—focal points that guide the eye without overwhelming the senses. The design uses black sparingly but strategically, creating hierarchy through contrast rather than color.

Typography demonstrates restraint and clarity. The sans-serif font family maintains consistency across all weights, with bold numbers drawing attention to key metrics (198 jumps, 6859 steps) while regular-weight body text recedes appropriately. The username "isabell_roberts" in a lighter weight shows how dynamic weight emphasis creates subtle hierarchies without shouting.

The glassmorphic bottom navigation bar is particularly noteworthy—it appears to float above the content, using transparency and blur to maintain spatial hierarchy while remaining accessible. Combined with the circular floating action button (likely for quick-start or recording), this creates a predictable navigation pattern that users can internalize quickly.

The data visualization is minimal but effective—the horizontal bar chart showing workout segments uses muted pastels (coral pink, mint green, gray-blue) that align with the overall palette. This isn't about flashy graphs; it's about glanceable information that respects the user's time and attention.

Icon usage is consistent: outline/stroke icons maintain the lightweight, approachable aesthetic. Filled icons appear only in the active navigation state, creating clear affordance without visual clutter.

The overall feeling this design creates is one of calm capability—the user feels they have a sophisticated, well-designed tool that won't overwhelm them, that will celebrate their progress quietly but meaningfully, and that respects their cognitive space. This is wellness design at its finest: form following emotional function.

---

## Color Palette

### Primary Colors

* **Primary Background** - `#E8ECEF` (Soft gray-blue for main app background)
* **Surface White** - `#F5F7F9` (For cards and elevated surfaces)
* **Pure White** - `#FFFFFF` (For highest elevation cards and highlights)

### Accent Colors

* **Primary Accent Black** - `#000000` (For key focal points, selected states, floating actions)
* **Secondary Accent Mint** - `#D4E8E3` (Soft mint for secondary buttons and highlights)
* **Tertiary Accent Blush** - `#F5DDDE` (Soft coral/blush for data visualization)
* **Tertiary Accent Sage** - `#E3ECE8` (Soft sage/mint for stats cards)

### Data Visualization Colors

* **Chart Coral** - `#F5C5C8` (For workout segment visualization)
* **Chart Mint** - `#C8E3DC` (For active/rest segment visualization)
* **Chart Blue-Gray** - `#CDD6DA` (For neutral segments)
* **Chart Purple-Gray** - `#D8D4DC` (For rest/recovery segments)

### Text Colors

* **Text Primary** - `#1A1C1E` (For headings and primary content)
* **Text Secondary** - `#5F6368` (For secondary information and labels)
* **Text Tertiary** - `#9AA0A6` (For de-emphasized text and placeholders)
* **Text On Dark** - `#FFFFFF` (For text on black accent backgrounds)

### Functional Colors

* **Success Green** - `#4CAF94` (For success states and achievements)
* **Warning Amber** - `#FFC107` (For warnings and attention states)
* **Error Red** - `#F44336` (For errors and critical actions)

## Typography

### Font Family

* **Primary Font:** SF Pro Display (iOS) / Roboto (Android)
* **Alternative Font:** Inter (Web fallback)
* **Monospace Font:** SF Mono (for numerical data display)

### Font Weights

* **Light:** 300 (for usernames and de-emphasized text)
* **Regular:** 400 (for body text)
* **Medium:** 500 (for labels and secondary headings)
* **Semibold:** 600 (for emphasis and card headers)
* **Bold:** 700 (for numbers, metrics, and primary headings)

### Text Styles

#### Headings

* **H1 (Screen Title):** 20px/24px, Semibold (600), Letter spacing -0.2px
  * Used for main screen titles like "Timer", "Profile"
* **H2 (Section Header):** 16px/20px, Medium (500), Letter spacing -0.1px
  * Used for section labels like "Rounds", "Rounds time"
* **H3 (Card Title):** 14px/18px, Medium (500), Letter spacing 0px
  * Used for list item labels like "Friends", "Statistics"

#### Body Text

* **Body Large:** 16px/22px, Regular (400), Letter spacing 0px
  * Used for primary content and descriptions
* **Body:** 14px/20px, Regular (400), Letter spacing 0.1px
  * Standard text for most UI elements and list items
* **Body Small:** 12px/16px, Regular (400), Letter spacing 0.2px
  * Supporting text and metadata

#### Numerical Display

* **Metric Large:** 48px/56px, Bold (700), Letter spacing -1px
  * Used for primary stats like round numbers (25, 30, 35)
* **Metric Medium:** 32px/40px, Bold (700), Letter spacing -0.5px
  * Used for secondary metrics like "198" jumps
* **Metric Small:** 24px/28px, Semibold (600), Letter spacing -0.2px
  * Used for stats display like "6 859" steps

#### Special Text

* **Caption:** 11px/14px, Medium (500), Letter spacing 0.3px, Text Secondary
  * Used for timestamps, helper text, and micro-labels
* **Label:** 13px/16px, Medium (500), Letter spacing 0.2px
  * Used for form labels and category names
* **Username:** 14px/18px, Light (300), Letter spacing 0.1px, Text Secondary
  * Used specifically for user handles like "isabell_roberts"

## Component Styling

### Cards (Neumorphic Design)

#### Elevated Card (Primary)

* **Background:** Surface White (`#F5F7F9`)
* **Shadow (Top-Left):** X: -4dp, Y: -4dp, Blur: 12dp, Color: `#FFFFFF` at 70%
* **Shadow (Bottom-Right):** X: 4dp, Y: 4dp, Blur: 12dp, Color: `#B8BFC5` at 30%
* **Corner Radius:** 24dp
* **Padding:** 24dp vertical, 20dp horizontal
* **Border:** None (depth created through shadows)

#### Floating Card (Profile/Content)

* **Background:** Pure White (`#FFFFFF`)
* **Shadow:** Y-offset: 8dp, Blur: 24dp, Opacity: 12%, Color: `#000000`
* **Corner Radius:** 32dp (extra rounded for floating effect)
* **Padding:** 32dp

#### Stat Card (Mini)

* **Background:** Tertiary Accent Sage (`#E3ECE8`)
* **Shadow:** Subtle inset effect with 2dp inner shadow
* **Corner Radius:** 16dp
* **Padding:** 12dp
* **Size:** Variable width, 56dp height

### Buttons

#### Primary Action Button (Black Accent)

* **Background:** Primary Accent Black (`#000000`)
* **Text:** Text On Dark (`#FFFFFF`)
* **Height:** 52dp
* **Corner Radius:** 26dp (fully rounded pill shape)
* **Padding:** 24dp horizontal
* **Typography:** 16px, Medium (500)
* **Shadow:** Y: 4dp, Blur: 12dp, Opacity: 20%

#### Secondary Button (Soft Mint)

* **Background:** Secondary Accent Mint (`#D4E8E3`)
* **Text:** Text Primary (`#1A1C1E`)
* **Height:** 52dp
* **Corner Radius:** 26dp
* **Padding:** 24dp horizontal
* **Typography:** 16px, Medium (500)
* **Shadow:** Subtle neumorphic (2dp offset)

#### Floating Action Button (FAB)

* **Background:** Primary Accent Black (`#000000`)
* **Icon Color:** Pure White (`#FFFFFF`)
* **Size:** 56dp x 56dp (circular)
* **Icon Size:** 24dp x 24dp
* **Shadow:** Y: 6dp, Blur: 16dp, Opacity: 30%
* **Position:** Bottom-right, 16dp margin

#### Selector Button (Round Number)

* **Default State:**
  * Background: Transparent
  * Text: Text Tertiary (`#9AA0A6`)
  * Typography: 20px, Regular (400)
* **Selected State:**
  * Background: Primary Accent Black (`#000000`)
  * Text: Text On Dark (`#FFFFFF`)
  * Typography: 24px, Bold (700)
  * Corner Radius: 16dp
  * Padding: 16dp horizontal, 12dp vertical
  * Shadow: Y: 2dp, Blur: 8dp, Opacity: 25%

### Input Fields

* **Height:** 48dp
* **Corner Radius:** 24dp (pill-shaped)
* **Border:** None (neumorphic shadow instead)
* **Background:** Surface White (`#F5F7F9`)
* **Shadow (Inset):** Inner shadow 2dp, Blur: 4dp
* **Text:** Text Primary (`#1A1C1E`)
* **Placeholder Text:** Text Tertiary (`#9AA0A6`)
* **Padding:** 16dp horizontal

### Navigation

#### Bottom Navigation Bar (Glassmorphic)

* **Background:** `#000000` at 85% opacity with blur
* **Backdrop Filter:** Blur 20px
* **Height:** 64dp + safe area
* **Corner Radius:** 24dp top corners only
* **Shadow:** Y: -2dp, Blur: 16dp, Opacity: 15%
* **Icon Size:** 24dp x 24dp
* **Active Icon:** Filled with dot indicator
* **Inactive Icon:** Outline stroke at 60% opacity
* **Spacing:** Evenly distributed with 8dp padding

#### Navigation Icons

* **Home:** House outline icon
* **Workouts:** Dumbbell outline icon
* **Activity:** Heart rate outline icon
* **Statistics:** Chart outline icon
* **Profile:** User outline icon with "Profile" label when active

### Icons

* **Primary Icons:** 24dp x 24dp (navigation, actions)
* **Small Icons:** 20dp x 20dp (inline with text, list items)
* **Micro Icons:** 16dp x 16dp (chevrons, status indicators)
* **Large Icons:** 32dp x 32dp (feature illustrations)
* **Style:** Outline/Stroke with 1.5px weight
* **Color (Active):** Text Primary (`#1A1C1E`) or Primary Accent Black
* **Color (Inactive):** Text Tertiary (`#9AA0A6`)

### Data Visualization

#### Horizontal Bar Chart

* **Height:** 48dp
* **Segment Spacing:** 4dp gaps between segments
* **Corner Radius:** 8dp on bar ends
* **Background:** Chart colors as listed in palette
* **Axis Labels:** 11px, Medium (500), Text Secondary
* **Axis Position:** Below chart with 8dp spacing
* **Label Values:** Evenly distributed numerical indicators

### List Items

#### Navigation List Item (Profile Screen)

* **Background:** Pure White (`#FFFFFF`)
* **Height:** 56dp
* **Padding:** 16dp horizontal
* **Corner Radius:** 16dp
* **Spacing Between Items:** 8dp
* **Icon:** 20dp, Text Primary color
* **Label:** 15px, Regular (400), Text Primary
* **Chevron:** 16dp, Text Tertiary, right-aligned
* **Hover/Press State:** Background shifts to `#F5F7F9`

#### Toggle List Item

* **Same as Navigation List Item, but with:**
* **Toggle Switch:** 44dp x 24dp track, 20dp thumb
* **Toggle Color (On):** Primary Accent Black
* **Toggle Color (Off):** Text Tertiary at 30%

### Profile Components

#### Profile Header

* **Avatar Size:** 96dp x 96dp (circular)
* **Avatar Border:** 4dp Pure White border with subtle shadow
* **Name:** 20px, Semibold (600), Text Primary
* **Username:** 14px, Light (300), Text Secondary
* **Spacing:** 12dp between avatar and name, 4dp between name and username

#### Stat Display (Steps Today)

* **Background:** Secondary Accent Mint (`#D4E8E3`)
* **Corner Radius:** 16dp
* **Padding:** 16dp horizontal, 12dp vertical
* **Icon:** 20dp, Text Primary
* **Metric:** 24px, Bold (700), Text Primary
* **Label:** 13px, Medium (500), Text Secondary
* **Layout:** Horizontal with icon left, text right-aligned

## Spacing System

### Base Unit: 4dp

* **4dp** - Micro spacing (between icon and text, segment gaps)
* **8dp** - Small spacing (list item gaps, inline elements)
* **12dp** - Compact spacing (internal card padding for compact elements)
* **16dp** - Standard spacing (default margins, list padding, FAB margin)
* **20dp** - Medium-small spacing (card horizontal padding)
* **24dp** - Medium spacing (card vertical padding, section spacing)
* **32dp** - Large spacing (major section separation, floating card padding)
* **48dp** - Extra large spacing (top/bottom screen padding)

### Responsive Breakpoints

* **Small phones:** 16dp horizontal margins
* **Standard phones:** 20dp horizontal margins
* **Tablets:** 32dp horizontal margins with max content width of 600dp

## Motion & Animation

### Transition Timing

* **Micro-interaction:** 100ms, Linear
  * Used for: Button press feedback, toggle switches
* **Standard Transition:** 250ms, Ease-out cubic-bezier(0.2, 0, 0, 1)
  * Used for: Card appearances, list item selections, navigation
* **Emphasis Transition:** 350ms, Spring curve (damping: 0.8, stiffness: 150)
  * Used for: Round number selection, FAB press, modal presentations
* **Page Transitions:** 400ms, Custom cubic-bezier(0.4, 0, 0.2, 1)
  * Used for: Screen changes, navigation transitions

### Animation Behaviors

#### Card Hover/Press (Neumorphic Feedback)

* **Press:** Reduce shadow blur by 50%, shift shadow offset to 1dp
* **Duration:** 100ms ease-in
* **Release:** Return to original state over 200ms ease-out

#### Round Number Selection

* **Scale In:** From 100% to 110% over 150ms
* **Background Fade:** From transparent to black over 150ms
* **Font Weight Transition:** From 400 to 700 with cross-fade
* **Spring Effect:** Slight overshoot (105% → 110% → 108% → 110%)

#### Bottom Nav Icon Transition

* **Active State:**
  * Scale icon from 100% to 115% over 200ms
  * Morph from outline to filled version
  * Fade in dot indicator below icon over 150ms
* **Inactive State:**
  * Scale to 100% over 200ms
  * Morph to outline version
  * Fade out dot indicator over 100ms

#### FAB Interaction

* **Press:** Scale down to 90% over 100ms with ease-in
* **Release:** Spring back to 100% with bounce (overshoot to 105%)
* **Rotation:** Rotate icon 90° if state changes (e.g., pause ↔ play)

#### List Item Press

* **Immediate:** Background color shift over 50ms
* **Release:** Return over 150ms with ease-out
* **Chevron:** Subtle translation right by 2dp during press

### Loading States

* **Skeleton Screen:** Subtle shimmer effect moving left-to-right
  * Shimmer gradient: `#E8ECEF` → `#F5F7F9` → `#E8ECEF`
  * Duration: 1500ms, ease-in-out, infinite loop
* **Spinner:** Circular, 32dp, Primary Accent Black, 2dp stroke
  * Rotation: 360° over 800ms, linear, infinite

## Elevation System

### Shadow Hierarchy (Z-axis)

#### Level 0 - Flat/Inset

* No elevation shadow
* May have subtle inset shadow for pressed states
* Used for: Background, inactive states

#### Level 1 - Resting (4dp)

* **Shadow 1:** X: -2dp, Y: -2dp, Blur: 6dp, `#FFFFFF` at 60%
* **Shadow 2:** X: 2dp, Y: 2dp, Blur: 6dp, `#B8BFC5` at 25%
* Used for: Most cards, buttons in default state

#### Level 2 - Raised (8dp)

* **Shadow 1:** X: -4dp, Y: -4dp, Blur: 12dp, `#FFFFFF` at 70%
* **Shadow 2:** X: 4dp, Y: 4dp, Blur: 12dp, `#B8BFC5` at 30%
* Used for: Active cards, selected states, primary content cards

#### Level 3 - Floating (16dp)

* **Shadow:** X: 0dp, Y: 8dp, Blur: 24dp, `#000000` at 12%
* Used for: Floating profile card, modals, overlays

#### Level 4 - Navigation (24dp)

* **Shadow:** X: 0dp, Y: -2dp, Blur: 16dp, `#000000` at 15%
* Combined with glassmorphic blur
* Used for: Bottom navigation bar, floating action button

## Dark Mode Variants

### Color Adaptations

* **Primary Background** - `#1A1C1E` (Dark charcoal)
* **Surface Dark** - `#2C2E30` (For cards and elevated surfaces)
* **Pure Dark Surface** - `#3A3D40` (Highest elevation)

### Neumorphic Adjustments for Dark Mode

* **Shadow (Highlight):** X: -2dp, Y: -2dp, Blur: 8dp, `#3A3D40` at 40%
* **Shadow (Depth):** X: 2dp, Y: 2dp, Blur: 8dp, `#000000` at 50%
* **Accent Colors:** Remain the same (black becomes `#0A0A0A` for subtle distinction)

### Text Colors (Dark Mode)

* **Text Primary** - `#EAEEF2` (Light gray-white)
* **Text Secondary** - `#A8ADB3` (Medium gray)
* **Text Tertiary** - `#6F7479` (Dim gray)

### Accent Color Adjustments

* **Secondary Accent Mint** - `#3A4A45` (Darker mint for dark mode)
* **Tertiary Accent Blush** - `#4A3A3B` (Darker blush)
* **Tertiary Accent Sage** - `#3D4543` (Darker sage)

## Accessibility Guidelines

### Contrast Ratios

* **Primary Text on Background:** Minimum 7:1 (AAA)
* **Secondary Text on Background:** Minimum 4.5:1 (AA)
* **UI Elements on Background:** Minimum 3:1
* **Text on Black Accent:** 15:1+ (Pure white on black)

### Touch Targets

* **Minimum Size:** 44dp x 44dp for all interactive elements
* **Recommended Size:** 48dp x 48dp for primary actions
* **Spacing Between Targets:** Minimum 8dp

### Focus States

* **Keyboard Focus:** 3dp outline in Primary Accent Black with 2dp offset
* **Focus Ring:** Does not crop component corners, follows border radius + 4dp
* **Focus Transition:** Fade in over 100ms

### Motion Preferences

* **Respect `prefers-reduced-motion`:**
  * Disable spring animations, use linear transitions
  * Reduce transition durations by 50%
  * Remove decorative animations entirely
  * Keep functional animations (e.g., navigation feedback) but simplify

## Iconography System

### Icon Set

* **Primary Icon Library:** SF Symbols (iOS) / Material Symbols (Android)
* **Style:** Rounded, Outline/Stroke weight 1.5px
* **Custom Icons:** Match stroke weight and rounded style

### Icon Categories

#### Navigation Icons

* Home, Workouts, Activity, Statistics, Profile
* Size: 24dp, Stroke: 1.5px

#### Action Icons

* Play, Pause, Stop, Settings, Notifications, Menu
* Size: 24dp, Stroke: 1.5px

#### Status Icons

* Timer, Heart rate, Steps, Chevrons, Checkmarks
* Size: 16-20dp, Stroke: 1.5px

#### Decorative Icons

* Used sparingly for empty states or illustrations
* Size: 48-64dp, Stroke: 1px (thinner for larger sizes)

## Micro-interactions Catalog

### Button Press Feedback

* **Visual:** Scale to 97%, reduce shadow, darken background by 8%
* **Haptic:** Light impact (iOS) / Short vibration 10ms (Android)
* **Audio:** Subtle "tap" sound at 20% system volume (optional)

### Toggle Switch

* **Transition:** Thumb slides with 200ms spring animation
* **Track Color:** Fades from gray to black over 200ms
* **Haptic:** Medium impact on state change

### Round Number Selection

* **Visual:** Scale up, background fills, font weight increases
* **Haptic:** Selection feedback (medium impact)
* **Adjacent Numbers:** Subtle scale down to 95% to emphasize selection

### List Item Navigation

* **Press:** Background color shift + chevron translation
* **Release with Navigation:** Fade out entire screen over 250ms while new screen fades in
* **Haptic:** Light impact on press

### Floating Action Button

* **Long Press:** Scale to 95% and hold
* **Release after Long Press:** Show radial menu or action sheet with spring animation
* **Regular Press:** Scale animation + immediate action

### Profile Avatar

* **Press:** Scale to 98% with slight shadow reduction
* **Hold:** Show profile picture options overlay with blur background
* **Haptic:** Medium impact on long press recognition

## Implementation Notes

### Platform-Specific Considerations

#### iOS
* Use SF Pro Display for all text
* Implement using UIKit with custom shadow layers for neumorphism
* Leverage Core Animation for spring animations
* Use UIImpactFeedbackGenerator for haptics

#### Android
* Use Roboto as primary font
* Implement with Material Components, customize elevation system
* Use Physics-based animations from AndroidX
* Use VibrationEffect for haptic feedback

### Performance Optimization

* **Shadow Rendering:** Cache shadow layers where possible
* **Animation:** Use hardware acceleration for all transform animations
* **Glassmorphism:** Limit blur effects to < 3 simultaneous instances
* **Image Assets:** Use vector graphics (SVG) for icons, WebP for photos

### Design Token Export

```json
{
  "color": {
    "background": {
      "primary": "#E8ECEF",
      "surface": "#F5F7F9",
      "pure": "#FFFFFF"
    },
    "accent": {
      "primary": "#000000",
      "mint": "#D4E8E3",
      "blush": "#F5DDDE",
      "sage": "#E3ECE8"
    }
  },
  "typography": {
    "fontFamily": {
      "primary": "SF Pro Display",
      "monospace": "SF Mono"
    },
    "fontSize": {
      "h1": "20px",
      "body": "14px",
      "metricLarge": "48px"
    }
  },
  "spacing": {
    "xs": "4dp",
    "sm": "8dp",
    "md": "16dp",
    "lg": "24dp",
    "xl": "32dp"
  }
}
```

---

## Alternate Accent Variations

As requested, here are alternate accent color schemes that maintain the same design logic but with different hues:

### Blue Accent Variation

* **Primary Accent:** `#1E3A8A` (Deep Blue)
* **Secondary Accent:** `#DBEAFE` (Soft Sky Blue)
* **Tertiary Accent:** `#E0E7FF` (Soft Indigo)
* **Chart Accent:** `#93C5FD` (Light Blue)

### Teal Accent Variation

* **Primary Accent:** `#0F766E` (Deep Teal)
* **Secondary Accent:** `#CCFBF1` (Soft Cyan)
* **Tertiary Accent:** `#D1FAE5` (Soft Mint)
* **Chart Accent:** `#5EEAD4` (Light Teal)

### Gold Accent Variation

* **Primary Accent:** `#92400E` (Deep Gold/Bronze)
* **Secondary Accent:** `#FEF3C7` (Soft Yellow)
* **Tertiary Accent:** `#FEE2E2` (Soft Peach)
* **Chart Accent:** `#FBBF24` (Bright Gold)

### Coral Accent Variation

* **Primary Accent:** `#BE123C` (Deep Coral/Rose)
* **Secondary Accent:** `#FFE4E6` (Soft Pink)
* **Tertiary Accent:** `#FFEDD5` (Soft Peach)
* **Chart Accent:** `#FDA4AF` (Light Coral)

---

*End of Style Guide*
