# ReSpace Dashboard Design Concepts

Three unique dashboard designs for ReSpace, an AI-powered interior design app for homeowners and renters.

## Design Variations

### Version 1: Gallery-First Approach
**Philosophy:** Immediate visual inspiration

- **Focus:** Recent designs prominently displayed
- **Primary CTA:** Large "Upload Photo" button with AI sparkle indicator
- **Stats:** Quick metrics showing design and project counts
- **Navigation:** Standard bottom nav with center FAB for generation
- **Use Case:** Best for users who want immediate access to their visual library and quick iteration

### Version 2: Project-Focused Approach
**Philosophy:** Organization and progress tracking

- **Focus:** Active projects with detailed progress bars
- **Primary CTA:** "New Project" button with structured project cards
- **Stats:** Project-level details (room count, last updated, completion %)
- **Navigation:** Projects tab active, emphasizing structured workflow
- **Use Case:** Best for users managing multiple rooms or comprehensive home redesigns

### Version 3: AI-Guided Discovery
**Philosophy:** Intelligent, personalized recommendations

- **Focus:** AI-powered suggestions and trending styles
- **Primary CTA:** Large hero card with contextual AI recommendation
- **Stats:** Activity metrics with growth indicators
- **Navigation:** Home-focused with "For You" personalized section
- **Use Case:** Best for exploratory users who want guidance and inspiration

## Design System Adherence

All designs follow the ReSpace design system specified in `design-system/styles-new.md`:

### Color Palette
- **Warm cream base:** `#F8F6F3` (Primary Background)
- **Terracotta accent:** `#C1694F` (Primary actions, selections)
- **Warm neutrals:** Sage, amber, dusty blue for contextual accents
- **Text hierarchy:** Primary `#2C2520`, Secondary `#6B6157`, Tertiary `#A39990`

### Neumorphism (Warm-toned)
- **Highlight shadow:** Cream/warm white (`rgba(255,252,247,0.8)`)
- **Depth shadow:** Warm gray (`rgba(167,158,148,0.25)`)
- **Philosophy:** Cards feel like textured paper, matte ceramics, or fabric

### Typography
- **Line height:** 1.6-1.7 for body text (conversational feel)
- **Weight hierarchy:** Semibold for headings, Medium for labels, Bold for metrics
- **Letter spacing:** Slightly looser for approachability

### Motion
- **Weighted timing:** 300ms standard transitions (20-30% slower than fitness app)
- **Easing:** Deceleration curves for "settling" effect
- **Active states:** Scale to 95-98% with shadow compression

### Components

#### Glassmorphic Bottom Navigation
- Dark warm brown background (`rgba(44, 37, 32, 0.9)`)
- 24px backdrop blur
- 28dp icons with terracotta active state
- Center FAB (64dp) for primary "Generate" action

#### Neumorphic Cards
- 24-32dp border radius
- Dual-shadow system (highlight + depth)
- Surface Cream background (`#F5F3F0`)
- 20-24dp padding

#### Buttons
- **Primary:** Terracotta pill-shaped (52dp height, 26dp radius)
- **Secondary:** White/cream with subtle neumorphic shadow
- **FAB:** 64dp circular, terracotta, elevated shadow

## Installation & Running

```bash
cd respace-design
npm install
npm start
```

The app will open at `http://localhost:3000` showing all three dashboard concepts.

## Technologies

- **React 18.2**
- **Tailwind CSS 4.1**
- **Lucide React** (icons)
- **Create React App**

## Design Philosophy: Warm Clarity

ReSpace embodies "Thoughtful Transformation" - making professional interior design accessible through:

1. **Warmth over clinical calm:** Inviting, home-like interface
2. **Simplicity through progressive disclosure:** Complex features available, not overwhelming
3. **Material honesty:** UI hints at physicality (paper, fabric, ceramics)
4. **Content-first:** Images are heroes, UI is supporting cast
5. **AI transparency:** Show process, enable iteration, admit limitations

## File Structure

```
respace-design/
├── src/
│   ├── components/
│   │   ├── Dashboard1.jsx  (Gallery-First)
│   │   ├── Dashboard2.jsx  (Project-Focused)
│   │   └── Dashboard3.jsx  (AI-Guided)
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── public/
│   └── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## Design Decisions

### Why Terracotta?
Replaces black from fitness app. Warm, earthy, grounded—evokes clay, brick, sunset. Perfect for home/material design.

### Why Warmer Timing?
Interior design involves heavy, permanent objects. Animations feel weighted and deliberate (300ms vs 250ms) to match physicality.

### Why Glassmorphic Nav?
Persistent accessibility without blocking hero content (generated designs). Creates clear spatial hierarchy.

### Why Center FAB?
Generate/Upload is THE primary action. Center position emphasizes importance more than bottom-right.

---

*Design System: [styles-new.md](../design-system/styles-new.md)*
*Created: 2025-11-03*
