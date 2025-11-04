# Interior Design App Comprehensive Design System

## Welcome Message from the Lead Designer

Welcome to our design team. This document is more than specifications—it's a philosophy about how we help people transform the most intimate spaces in their lives. Every color, every shadow, every interaction exists to inspire confidence without creating overwhelm. We're not just building a design tool; we're creating a space where imagination feels safe, where creativity feels accessible, and where home transformation feels achievable.

---

## Pontificating

### The Translation: From Fitness to Home

When we began adapting a fitness-focused design system for interior design, we discovered something profound: both domains share a fundamental challenge—**they ask users to envision transformation of something deeply personal.**

In fitness, users must imagine their body differently. In interior design, users must imagine their *home* differently. Both require vulnerability. Both can trigger anxiety about "getting it wrong." Both can feel overwhelming when confronted with infinite possibilities.

The fitness app we studied solved this through **Calm Capability**—sophisticated tools that never pressure, never judge, never overwhelm. This philosophy translates beautifully to interior design, but with critical adaptations.

### Warmth vs. Calm: The Emotional Shift

While the fitness app prioritized *calm* (reducing stress in wellness contexts), an interior design app must prioritize **warmth**. Why? Because home is inherently emotional. People don't just *use* their homes; they *feel* them. A cold, clinical interface—no matter how calm—would betray the very essence of what we're helping users create.

But warmth doesn't mean busy. It doesn't mean colorful explosions or cute illustrations everywhere. Instead, we achieve warmth through:

1. **Softer, warmer neutral tones** — Instead of cool gray-blues, we use warm beiges, soft taupes, and gentle creams. The entire palette shifts from "clinical calm" to "cozy invitation."

2. **Accent gradient colors** — Where the fitness app used black as a stark anchor, we use a **fade from aqua to deep navy** as our primary accent. It's fresh, modern, and evokes both water and depth—perfect for an app about physical spaces.

3. **Richer textures in neumorphism** — Our soft neumorphic shadows remain, but we've tuned them to feel like *fabric* or *plaster* rather than plastic or glass. Shadows are warmer, highlights are creamier.

4. **Typography that feels human** — We've maintained the single-font-family discipline, but we've increased line height slightly and loosened letter spacing. Text should feel like a conversation with a knowledgeable friend, not a technical manual.

### Simplicity: The Design Challenge

Interior design is inherently complex: styles, colors, materials, furniture, lighting, spatial planning. The temptation in design tools is to expose all this complexity—palettes, mood boards, 3D views, material libraries, measurement tools—all at once.

We reject this. Our interface philosophy is **progressive disclosure wrapped in simplicity**:

- **Primary screen shows one image at a time** — Your space, reimagined. That's it. No clutter.
- **Actions are minimal** — Upload. Regenerate. Style selector. Save. Everything else is hidden until needed.
- **AI does the heavy lifting** — Users don't select "mid-century modern with Scandinavian influences and a warm color palette." They tap "Cozy" or "Modern" or "Rustic," and the AI understands.

This simplicity isn't about limiting power users—it's about making the app feel achievable for everyone. Complexity is available (material details, measurements, shopping lists), but it's *optional* complexity that reveals itself contextually.

### Clarity: Information Architecture as Service

Despite the complexity of interior design, every screen in our app must answer these questions immediately:

1. **Where am I?** (Clear titles, subtle breadcrumbs)
2. **What can I do?** (Obvious primary actions, discoverable secondary actions)
3. **What am I looking at?** (Context about the generated design, style tags, room type)
4. **How do I get out?** (Clear navigation, no dead ends)

We achieve this through:

- **Visual hierarchy that teaches itself** — Bold text = important. Light text = optional. Black accent = action.
- **Consistent spatial relationships** — Primary content always center. Actions always bottom. Metadata always top-right.
- **Predictable navigation patterns** — Back arrow top-left. Menu top-right. Primary action bottom-center.

The user should never feel lost, never wonder "what happens if I tap this?" The interface should feel like a well-designed home itself: intuitive circulation, clear purpose for each space, welcoming throughout.

### The Image as Hero: Content-First Design

Unlike the fitness app (where metrics and stats were hero elements), in our interior design app, **the generated image is the hero.** Everything else is supporting cast.

This means:

- **Full-bleed imagery** — Images fill the screen edge-to-edge. No unnecessary frames or borders.
- **Glassmorphic overlays** — When we need UI elements over images (room labels, style tags), they float as subtle glassmorphic surfaces that don't compete with the image.
- **Minimal chrome** — No persistent headers or toolbars. UI appears contextually and disappears when not needed.
- **High-quality image presentation** — We optimize for color accuracy, proper contrast, smooth loading transitions. If the image looks bad, the entire app fails.

The fitness app used neumorphic cards to create tactile digital objects. We use them too, but primarily for *supporting content* (style selectors, project thumbnails, settings). The main canvas—where transformation happens—is clean, borderless, immersive.

### The AI Relationship: Trust Through Transparency

Our app uses LLMs to generate interior designs. This creates a design challenge the fitness app didn't face: **How do you make AI feel trustworthy, understandable, and collaborative rather than mysterious or dictatorial?**

We solve this through:

1. **Visible generation states** — Users see "Analyzing your space..." → "Generating design..." → "Refining details..." They're never staring at a blank screen wondering if anything is happening.

2. **Iteration, not prescription** — We never say "This is your design." We say "Here's an idea. Want to try another?" The regenerate button is always prominent, always available.

3. **Explainable choices** — Subtle text explains *why*: "We kept your natural light" or "We added vibrancy through aqua-navy accents." AI decisions are demystified.

4. **Human override** — Users can always refine: "Make it brighter," "More modern," "Add plants." The AI is a collaborator, not a dictator.

5. **Realistic expectations** — We never promise perfection. Subtle copy reminds users: "This is inspiration, not a blueprint" or "Render times vary based on room complexity."

This transparency builds trust. Users understand they're working *with* an intelligent tool, not being judged or replaced by it.

### Material Honesty: Neumorphism for Physical Spaces

The fitness app used neumorphism to create tactile digital experiences. We extend this concept with **material honesty**: our UI should hint at the materiality of the spaces we're helping design.

- **Card surfaces feel like matte paper or canvas** — Not glossy plastic. Shadows are soft and diffused, like paper under warm light.
- **Buttons feel like wood or ceramic** — Press states compress slightly, like pushing a physical button.
- **Color overlays feel like fabric swatches** — Semi-transparent layers that let you peek underneath.
- **Transitions feel like page turns** — Not digital wipes, but physical, weighty movements.

This isn't skeuomorphism (we're not literally making fake wood textures). It's about *feeling*. The UI should feel like you're working with *materials*, not pixels.

### Color Strategy: Warmth Within Restraint

The fitness app's monochrome-plus-black strategy was brilliant for reducing cognitive load. We keep this logic but adapt it:

**Base palette: Warm neutrals** — Cream, beige, soft taupe, warm white. These feel like the natural materials of interior design (linen, plaster, limestone).

**Primary accent: Aqua-Navy Gradient** — a fade from `#4CD0C8` (aqua) to `#0E1C2A` (deep navy) replaces black. It's vibrant, modern, and confident without being aggressive. It evokes water, clarity, and depth—universally calming associations.

**Secondary accents: Natural tones** — Sage green (plants), warm gray (stone), soft amber (light), dusty blue (textiles). These appear sparingly, mostly in style tags and category indicators.

**Functional colors remain familiar** — Success green, warning amber, error red. These are universal and shouldn't be reinvented.

The result: the interface feels like walking into a well-designed home—warm, cohesive, with intentional accent colors that enhance rather than distract.

### Typography: Conversational Confidence

The fitness app's typography was precise and metric-focused. Ours is *conversational*:

- **Larger line heights** — More breathing room. Text feels like it's having a conversation, not delivering data.
- **Slightly looser tracking on body text** — Improves readability and creates a more relaxed tone.
- **Softer weight hierarchy** — We use Medium and Semibold more than Bold. "Bold" feels too assertive for an app about personal spaces.
- **Thoughtful capitalization** — We use sentence case, not title case. "Your living room" feels friendlier than "Your Living Room."

Numbers (dimensions, costs, item counts) still use tabular figures and bold weights for clarity, but they're supporting actors, not the star.

### Motion: Weighted and Deliberate

Interior design involves heavy, permanent objects—furniture, walls, floors. Our animations should reflect this *weight*:

- **Slower, more deliberate timing** — We extend durations by 20-30%. A 250ms transition becomes 300ms. Things feel weighty, not zippy.
- **Easing that suggests mass** — We use cubic-bezier curves with heavier deceleration. Things "settle" into place.
- **Reduced spring animations** — Springs feel too bouncy for furniture. We use them only for lightweight interactions (tapping style chips).
- **Image crossfades, not wipes** — When changing designs, we crossfade between images over 400ms. It feels like lighting changing in a room, not a screen transition.

Motion should feel *substantial*, like you're manipulating real space, not shuffling digital cards.

### The Gallery vs. The Project: Information Architecture

We organize the app around two mental models:

1. **Gallery** — Inspiration, exploration, "What if?" This is where users browse generated designs, try different styles, get ideas. It's playful, low-commitment, high-variety.

2. **Projects** — Intent, planning, "Let's do this." This is where users save designs, add notes, create shopping lists, share with contractors. It's organized, purposeful, progress-oriented.

The UI reflects this distinction:
- **Gallery mode:** Full-bleed images, prominent regenerate button, style chips floating over images, swipe gestures for quick iteration
- **Project mode:** Card-based layouts, organizational tools, collaborative features, more detailed metadata

Users can move fluidly between modes ("Save to project" from Gallery, "Explore variations" from Project), but the UI clearly signals which mode you're in.

### Accessibility: Universal Design for Personal Spaces

Interior design is for everyone. Our accessibility approach:

1. **High contrast mode isn't just darker** — It's also higher saturation, bolder weights, larger touch targets. It doesn't just meet WCAG—it feels generous.

2. **Alt text for generated images is descriptive** — Not "Living room design" but "Modern living room with large gray sectional sofa, white walls, natural light from large windows, minimalist decor"

3. **Voice control for iteration** — "Make it cozier," "Add more plants," "Try Scandinavian style"

4. **Haptic feedback is meaningful** — Light tap for style selection, medium tap for generating, strong tap for saving to project. You can navigate by feel.

5. **Reduced motion is fully supported** — All animations become instant cuts or very fast fades. No spring animations.

Home transformation should be accessible to people of all abilities. The app should adapt to users, not the other way around.

### Platform Considerations: Mobile-First, But Not Mobile-Only

Unlike the fitness app (primarily mobile), interior design benefits from larger screens. But we start with mobile:

**Mobile (primary):**
- One image at a time, full screen
- Tap to reveal controls
- Swipe to iterate through styles
- Vertical scrolling for project lists

**Tablet:**
- Side-by-side comparisons (before/after, two style variations)
- Persistent toolbar (doesn't hide)
- Apple Pencil support for annotations
- Larger style selector chips

**Desktop:**
- Grid view for projects
- Drag-and-drop image upload
- Keyboard shortcuts (R for regenerate, S for save, arrows for navigation)
- Higher resolution image generation

The design system scales gracefully, but mobile constraints force simplicity that benefits all platforms.

### Trust Signals: Overcoming Skepticism

AI-generated interior design is new. Users will be skeptical: "Will it look fake?" "Can I actually do this?" "Is this just going to waste my time?"

We build trust through:

1. **Real photos, not renderings** — Our generation creates realistic images, not CGI. If it looks fake, we failed.

2. **Before and after, always accessible** — Users can toggle back to their original image instantly. No "you can't go back."

3. **Honest limitations** — We tell users what the AI *can't* do: "This works best with clear room photos" or "Generated designs are inspiration, not construction plans."

4. **Social proof** — "Thousands of homes redesigned" (but not aggressive "You're missing out!" marketing)

5. **No dark patterns** — No forced accounts to "see your design." No "only 3 free generations!" countdown timers. No upsell spam.

The app earns trust by being genuinely useful and respectful, not through manipulation.

---

# Part I: Philosophy & Core Principles

## Design Philosophy: Warm Clarity

### The Emotional Foundation

Our design system is built on a fundamental belief: **home transformation should feel inspiring and achievable, never overwhelming or intimidating.** In a world where interior design feels like a luxury for the wealthy or a mystery requiring expert knowledge, we've chosen a different path—one of accessible creativity and confident imagination.

This philosophy manifests in what we call **Warm Clarity**: the feeling that you have a sophisticated, intelligent tool that *wants* you to succeed, that speaks your language, and that makes the complex feel simple. Users should feel inspired, not inadequate. Empowered, not confused. Creative, not constrained.

### The Tactile Digital Experience

We've embraced **warm neumorphism** as our primary visual language because it creates something essential in a home design app: a sense of *materiality*. Our cards don't just appear on screen—they feel like textured paper, fabric swatches, or matte ceramics. The shadows aren't stark—they're soft and diffused, like objects resting on a sunlit table.

This matters because interior design is about *physical materials*. When a button feels like it has weight and texture, when a card feels like you could lift it off the surface, your brain processes this as more connected to the real, material world you're designing. The digital becomes an extension of the physical.

We've chosen the "warm-contrast" variant of neumorphism—soft shadows with warm tones rather than cool grays. Why? Because warmth creates welcome. Cool tones feel technical and distant; warm tones feel inviting and human. This is neumorphism for people creating homes, not operating machines.

### The Architecture of Attention

Every design system makes implicit decisions about what deserves attention. Ours is explicit: **we use an aqua-to-navy gradient as an attention anchor, and we use it sparingly.**

Look at any screen in our application and you'll notice: most of the interface lives in a warm, neutral world of creams, beiges, and soft taupes. Bright colors rarely appear. Instead, the aqua-to-navy gradient—`#4CD0C8` to `#0E1C2A`—marks the places we need you to look: the generate button, the selected style, the save icon, the primary call to action.

This creates immediate visual hierarchy without aggression. The aqua-to-navy gradient is vibrant and deep—it invites rather than demands. It evokes water and night sky. When something uses this gradient, your eye goes there naturally, without stress.

This approach also solves a common problem in design apps: the temptation to make everything colorful to show "creativity." But visual chaos undermines creativity—it creates decision paralysis. Our approach provides focus. The gradient anchors simply say: "This is where to start. This is what matters right now." No judgment. Just guidance.

### Typography as Conversation, Not Specification

We use a single font family across the entire application, but unlike the fitness app's metric-focused typography, ours feels *conversational*:

- **Larger line heights** create breathing room and approachability
- **Slightly looser letter spacing** on body text improves readability and feels less dense
- **Weight hierarchy is softer** — we rely on Medium (500) and Semibold (600) more than Bold (700)
- **Sentence case dominates** — "Your living room" not "Your Living Room"

We're not delivering data points; we're having a conversation about your home. The typography should feel like a knowledgeable, friendly designer is speaking with you, not at you.

Numbers (dimensions, counts, costs) still use Bold weights and tabular figures for clarity, but they're supporting information, not the hero content.

### Glassmorphism: UI That Doesn't Compete

In an app where images are heroes, UI elements must not compete. We use glassmorphism extensively:

- **Style selector chips** float over images with subtle blur and transparency
- **Room type labels** appear as frosted glass overlays
- **Control panels** slide up from the bottom as translucent surfaces
- **Navigation elements** hover above content without blocking it

Glassmorphism creates a spatial hierarchy: the image is your design (plane zero), content cards are solid (plane one), and UI controls are transparent overlays (plane two). Your eye always knows what's primary (the design) and what's secondary (the controls).

### Content-First: The Image Is Everything

Unlike the fitness app where metrics drove the interface, in our app **the generated image is the interface**. Everything else exists to support it:

- **Full-bleed imagery** — images fill the screen completely
- **Minimal persistent chrome** — no headers or toolbars when viewing designs
- **Contextual controls** — UI appears when needed and disappears when not
- **High-fidelity presentation** — color accuracy, proper contrast, smooth loading

If the image looks bad or feels like an afterthought, the entire app experience collapses. The image *is* the experience.

### Iconography: Outline as Invitation

We use outline/stroke icons exclusively (except in active navigation states). This choice reflects our philosophy of **approachability**.

Filled icons feel complete, finished, authoritative. Outline icons feel open, suggestive, inviting. In an application where we're inviting users to imagine and create, outline icons support that emotional tone. They say "explore" not "here's the answer."

Our icons are slightly rounded (not sharp geometric), with 1.5px stroke weight. They feel hand-drawn enough to be human, geometric enough to be clear.

### Motion: Weighted and Deliberate

Interior design involves heavy, substantial objects—furniture, materials, walls. Our animations reflect this weight:

- **Longer durations** — 20-30% slower than the fitness app (300ms standard vs. 250ms)
- **Easing with deceleration** — things settle into place with subtle weight
- **Crossfades over wipes** — image transitions feel like lighting changes, not screen swipes
- **Reduced bounce** — springs used only for lightweight chips and toggles, not major transitions

Motion should feel substantial and confident, not zippy and nervous. You're manipulating representations of *physical space*—it should feel weighty.

### Color Strategy: Warmth Within Discipline

The majority of our interface lives in a warm neutral world: soft creams, warm beiges, gentle taupes. This isn't minimalism for aesthetics—it's minimalism for **focus**.

When the background is warm and neutral, the *design* takes center stage. User-generated content (their photos, the AI-generated designs) becomes the color in the interface. We don't compete; we frame.

We introduce earthy accent colors sparingly:
- **Aqua-Navy Gradient** (`#4CD0C8` → `#0E1C2A`) for primary actions and selections
- **Sage green** for nature-related tags (plants, outdoor, natural)
- **Warm gray** for secondary information
- **Soft amber** for lighting-related features
- **Dusty blue** for textile/soft goods

These colors are so naturally harmonious they feel like they belong together in an actual interior space. The interface becomes a *sample* of good color coordination.

### The Trust Triangle: Transparency, Iteration, Honesty

AI-powered design tools face a trust problem. We solve it through three principles:

1. **Transparency** — Show the process: "Analyzing space..." → "Generating design..." → "Refining details..."
2. **Iteration** — Never say "This is THE design." Always say "Here's an idea. Want another?"
3. **Honesty** — Admit limitations: "Works best with well-lit photos" or "This is inspiration, not a construction plan"

The app is a collaborator, not an oracle. It makes suggestions; the user makes decisions. This builds trust.

---

# Part II: How To Leverage This Style Guide

## For Designers: Using This System

### Starting a New Screen

When you begin designing a new screen, follow this hierarchy:

1. **Identify the hero content.** In most cases, it's the generated design image. Design around it, not alongside it.

2. **Apply warm neutral backgrounds.** Start with Primary Background (warm cream). Only introduce color for specific accent purposes.

3. **Use the aqua-navy gradient for exactly 1-2 elements per screen.** What are the 1-2 most important actions? Those get the gradient. Everything else is neutral or secondary.

4. **Establish typography hierarchy in grayscale first.** If the hierarchy isn't clear in black-and-white wireframe, color won't fix it.

5. **Add glassmorphic overlays last.** These should feel like they're floating above, not integrated into, the base layout.

6. **Test with real images.** Never design with placeholder images. Use real room photos to ensure UI doesn't compete with content.

### Working with Warm Neumorphic Cards

Neumorphic design must feel *material*, not plastic:

**DO:**
- Use warm-toned shadows (slightly yellow/cream highlight, warm gray depth)
- Maintain consistent corner radius (16dp, 24dp, or 32dp—never arbitrary)
- Stack cards at different elevations to create clear hierarchy
- Use Surface Cream (`#F5F3F0`) for most cards

**DON'T:**
- Use cool-toned or blue-tinted shadows (feels clinical)
- Mix neumorphic and flat shadows in the same view
- Create overly dramatic depth (shadows should whisper, not shout)
- Stack more than 3 levels of neumorphic cards on a single screen

### Color Application Strategy for Interior Design

Follow this decision tree:

1. **Is this element the primary action?** → Use Primary Accent Aqua-Navy Gradient (`#4CD0C8` → `#0E1C2A`)
2. **Is this element showing user content (images)?** → Full-bleed, no additional color
3. **Is this element a style tag or category?** → Use contextual accent (Sage for natural, Amber for lighting, etc.)
4. **Is this element showing status?** → Use functional colors (success, warning, error)
5. **Is this element supporting information?** → Use warm grays or light neutrals
6. **Everything else?** → Keep it in the warm neutral base

### Typography in Practice for Conversational UI

**For headings and titles:**
- Use Semibold (600) for screen titles—feels confident without shouting
- Use Medium (500) for section headers—feels organized but approachable
- Never use Bold (700) for headings—reserve it for emphasis and numbers

**For body text and descriptions:**
- Use Regular (400) for most content
- Increase line height to 1.6-1.7 (more than fitness app's 1.4-1.5)
- Use sentence case: "Modern living room" not "Modern Living Room"
- Keep paragraph width under 70 characters for comfortable reading

**For numbers and dimensions:**
- Use Bold (700) or Semibold (600) for measurements, counts, prices
- Use tabular figures to prevent width shifting
- Include units: "12' × 15'" not "12 15"
- Pair with lighter-weight labels for hierarchy

### Animation Guidelines for Weighted Motion

When adding animations, ask:

1. **Does this animation feel weighty and deliberate?** (Good—keep it)
2. **Does this animation feel zippy or bouncy?** (Bad—slow it down or remove bounce)
3. **Does this animation respect the physicality of interior design?** (Good—keep it)

**Timing rules for interior design:**
- Micro-interactions (button press): 120-150ms (slightly slower than fitness app)
- Standard transitions (navigation): 300ms (vs. 250ms in fitness app)
- Emphasis interactions (generation start/complete): 400ms
- Image crossfades: 500ms (slow enough to feel smooth, fast enough to feel responsive)

**Easing for weighted feel:**
- Use `cubic-bezier(0.4, 0.0, 0.2, 1)` for most transitions (Material Design "standard easing")
- Add heavier deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)` for "settling" animations
- Minimize spring animations—use only for very lightweight elements

### Building Glassmorphic Overlays

Glassmorphism must not obstruct content:

**DO:**
- Use 15-20px blur on backdrop
- Keep overlay opacity between 70-85% (translucent, not transparent)
- Add subtle 1px border in semi-transparent white
- Test over varied image backgrounds (dark, light, busy, simple)
- Ensure text on glassmorphic surfaces maintains 4.5:1 contrast minimum

**DON'T:**
- Use glassmorphism for large surfaces (breaks performance on older devices)
- Stack multiple glassmorphic layers (compounds blur, kills readability)
- Use glassmorphism without blur (just transparency looks unfinished)
- Forget to test on low-end devices (blur is expensive)

### Responsive Design for Multiple Contexts

**Mobile (320-428dp width) — PRIMARY:**
- Full-screen images, one at a time
- Tap to reveal controls (they hide after 3 seconds)
- Swipe left/right to iterate styles
- Bottom sheet for settings and options
- Vertical scroll for project lists

**Tablet (744-1024dp width):**
- Side-by-side before/after view
- Persistent toolbar (doesn't auto-hide)
- Larger touch targets (56dp instead of 44dp)
- Apple Pencil support for annotations and measurements
- Split view: project list left, selected design right

**Desktop (1280dp+ width):**
- Grid view for project gallery (3-4 columns)
- Keyboard shortcuts visible on hover
- Drag-and-drop image upload
- Higher resolution image generation (2x or 3x)
- Multi-select for batch operations

---

## For Developers: Implementing This System

### File Organization

```
/design-system
  /tokens
  colors.json          // Warm neutrals + aqua-navy gradient accents
    typography.json      // Conversational spacing and weights
    spacing.json         // Same 4dp system
    shadows.json         // Warm-toned neumorphic shadows
    animation.json       // Weighted, slower timing
    blur.json            // Glassmorphic blur values
  /components
    ImageCard.tsx        // Full-bleed hero images
    GlassmorphicOverlay.tsx
    StyleChip.tsx        // Floating style selectors
  GenerateButton.tsx   // Primary aqua-navy gradient CTA
    ...
  /utils
    imageProcessing.ts   // Upload, resize, optimize
    aiGeneration.ts      // LLM integration
    elevation.ts         // Warm neumorphic shadows
```

### Design Tokens for Warm Interior Design System

```json
{
  "color": {
    "background": {
      "primary": "#F8F6F3",
      "surface": "#F5F3F0",
      "pure": "#FFFFFF"
    },
    "accent": {
  "primaryGradient": ["#4CD0C8", "#0E1C2A"],
      "sage": "#8B9D83",
      "amber": "#D4A574",
      "dustyBlue": "#9DAAB6",
      "warmGray": "#A79E94"
    },
    "text": {
      "primary": "#2C2520",
      "secondary": "#6B6157",
      "tertiary": "#A39990",
      "onDark": "#FFFFFF",
  "onAccentGradient": "#FFFFFF"
    },
    "functional": {
      "success": "#6B8E6F",
      "warning": "#D4A574",
      "error": "#C16B5E"
    }
  },
  "typography": {
    "lineHeight": {
      "body": 1.6,
      "bodyLarge": 1.7,
      "heading": 1.2
    }
  },
  "animation": {
    "duration": {
      "micro": "120ms",
      "standard": "300ms",
      "emphasis": "400ms",
      "imageCrossfade": "500ms"
    },
    "easing": {
      "standard": "cubic-bezier(0.4, 0.0, 0.2, 1)",
      "decelerate": "cubic-bezier(0.0, 0.0, 0.2, 1)",
      "accelerate": "cubic-bezier(0.4, 0.0, 1, 1)"
    }
  },
  "blur": {
    "glassmorphic": "20px",
    "subtle": "10px"
  }
}
```

### Implementing Warm Neumorphic Shadows

**CSS example with warm tones:**
```css
.card-elevated {
  background: #F5F3F0;
  box-shadow:
    -4px -4px 12px rgba(255, 252, 247, 0.8),  /* Warm cream highlight */
    4px 4px 12px rgba(167, 158, 148, 0.3);     /* Warm gray depth */
  border-radius: 24px;
}
```

**Flutter example:**
```dart
Container(
  decoration: BoxDecoration(
    color: Color(0xFFF5F3F0),
    borderRadius: BorderRadius.circular(24),
    boxShadow: [
      BoxShadow(
        color: Color(0xFFFFFCF7).withOpacity(0.8),
        offset: Offset(-4, -4),
        blurRadius: 12,
      ),
      BoxShadow(
        color: Color(0xFFA79E94).withOpacity(0.3),
        offset: Offset(4, 4),
        blurRadius: 12,
      ),
    ],
  ),
)
```

### Implementing Glassmorphic Overlays

**CSS with backdrop-filter:**
```css
.glassmorphic-overlay {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
}

/* Fallback for browsers without backdrop-filter support */
@supports not (backdrop-filter: blur(20px)) {
  .glassmorphic-overlay {
    background: rgba(255, 255, 255, 0.9);
  }
}
```

### Image Handling Best Practices

**Upload optimization:**
```typescript
async function processUploadedImage(file: File): Promise<ProcessedImage> {
  // Resize to max 2048px on longest edge
  const resized = await resizeImage(file, 2048);

  // Convert to WebP for storage efficiency
  const webp = await convertToWebP(resized, 85); // 85% quality

  // Generate thumbnail for gallery view
  const thumbnail = await resizeImage(file, 400);

  // Extract metadata for AI context
  const metadata = await extractExifData(file);

  return { fullRes: webp, thumbnail, metadata };
}
```

**Image crossfade animation:**
```typescript
function crossfadeImages(
  oldImage: HTMLImageElement,
  newImage: HTMLImageElement,
  duration: number = 500
) {
  // Preload new image
  await newImage.decode();

  // Crossfade animation
  oldImage.style.transition = `opacity ${duration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;
  newImage.style.transition = `opacity ${duration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;

  newImage.style.opacity = '0';
  oldImage.style.opacity = '1';

  requestAnimationFrame(() => {
    oldImage.style.opacity = '0';
    newImage.style.opacity = '1';
  });
}
```

### AI Generation State Management

**Show process transparency:**
```typescript
enum GenerationState {
  Idle = 'idle',
  Analyzing = 'analyzing',    // "Analyzing your space..."
  Generating = 'generating',  // "Generating design..."
  Refining = 'refining',      // "Refining details..."
  Complete = 'complete',
  Error = 'error'
}

function GenerationStatusBar({ state }: { state: GenerationState }) {
  const messages = {
    analyzing: 'Analyzing your space...',
    generating: 'Generating design options...',
    refining: 'Adding finishing touches...',
  };

  return (
    <GlassmorphicOverlay>
      <Spinner />
      <Text>{messages[state]}</Text>
      <ProgressBar value={getProgressForState(state)} />
    </GlassmorphicOverlay>
  );
}
```

### Accessibility Implementation

**Image alt text for generated designs:**
```typescript
function generateAltText(analysisResult: AIAnalysis): string {
  const { roomType, style, features, colors } = analysisResult;

  return `${style} style ${roomType} with ${features.join(', ')}. ` +
         `Dominant colors: ${colors.join(', ')}. ` +
         `AI-generated interior design rendering.`;
}

// Example output:
// "Modern style living room with large sectional sofa, floor-to-ceiling windows,
//  minimalist decor, indoor plants. Dominant colors: white, gray, green.
//  AI-generated interior design rendering."
```

**Voice control for iteration:**
```typescript
const voiceCommands = {
  'make it cozier': { mood: 'cozy', intensity: 'increase' },
  'add more plants': { element: 'plants', action: 'add' },
  'try scandinavian style': { style: 'scandinavian' },
  'make it brighter': { lighting: 'increase' },
  'more modern': { style: 'modern', intensity: 'increase' },
};

function handleVoiceCommand(transcript: string) {
  const command = voiceCommands[transcript.toLowerCase()];
  if (command) {
    regenerateWithAdjustments(command);
  }
}
```

### Performance Considerations for Image-Heavy App

**Lazy loading and progressive enhancement:**
```typescript
// Use progressive JPEG or WebP for smooth loading
function ImageCard({ src, alt, placeholder }: ImageCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-container">
      {/* Low-quality placeholder */}
      <img
        src={placeholder}
        alt={alt}
        className="placeholder"
        style={{ filter: loaded ? 'blur(0)' : 'blur(20px)' }}
      />

      {/* High-quality image loads on top */}
      <img
        src={src}
        alt={alt}
        className="full-quality"
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
}
```

**Limit glassmorphic elements for performance:**
```typescript
// Only apply backdrop-filter to max 3 elements simultaneously
const MAX_GLASSMORPHIC_LAYERS = 3;

function GlassmorphicManager() {
  const [activeOverlays, setActiveOverlays] = useState<string[]>([]);

  function registerOverlay(id: string) {
    if (activeOverlays.length >= MAX_GLASSMORPHIC_LAYERS) {
      console.warn('Too many glassmorphic layers. Falling back to solid background.');
      return false;
    }
    setActiveOverlays([...activeOverlays, id]);
    return true;
  }
}
```

---

## For Product Managers: Understanding Design Decisions

### Why These Choices Matter for Interior Design

**Warm neumorphism** → Users feel the interface is material and tangible, connecting the digital tool to the physical spaces they're designing. Trust increases because interactions feel "real."

**Warm neutrals with terracotta accents** → Users process visual information faster and feel more welcome. Warm tones trigger associations with home, comfort, and safety. Terracotta specifically evokes natural materials (clay, brick) relevant to interior design.

**Image-as-hero layout** → Users focus on the design, not the UI. Completion rates increase because the value (the generated design) is immediately obvious and central.

**Glassmorphic overlays** → Users can see UI controls without losing context of the design beneath. Navigation becomes intuitive because spatial relationships are clear.

**Transparent AI process** → Users trust the tool more when they see "Analyzing..." → "Generating..." states. Mystery creates skepticism; transparency creates confidence.

**Weighted, slower animations** → Users perceive the app as more sophisticated and professional. Fast, zippy animations feel toy-like; weighted animations feel substantial and trustworthy.

**Conversational typography** → Users feel like they're collaborating with a knowledgeable friend, not operating a technical tool. Engagement increases when the tone is approachable.

### When to Deviate from the System

**Marketing and onboarding** — First-time experiences can be slightly more colorful and illustrative to create excitement. Use warmer, richer versions of the accent colors. Show example transformations prominently. Just transition to the calm, focused interface once they're creating.

**Celebration moments** — When a user saves their first design, completes a room, or shares a project, break the calm aesthetic temporarily. Use richer terracotta, subtle confetti, maybe even a warm gradient. Celebrate, then return to focus.

**Error states** — When something goes wrong (upload failed, generation error), use the error red more prominently and explain clearly what happened and how to fix it.

**Premium features** — If you have paid tiers, use subtle gold or amber accents to indicate premium styles or features. Don't make it gaudy—just a small badge or soft glow.

**Social/community features** — If you add social elements (sharing designs, following designers, community galleries), you can introduce a secondary accent color (dusty blue) to differentiate community content from personal projects.

### Metrics That Matter

Track these to validate design decisions:

1. **Time to first generation** — How long from upload to seeing first design? Target: < 30 seconds
2. **Iteration rate** — How many designs do users generate per session? Higher = good engagement
3. **Save rate** — What percentage of generated designs get saved? Target: > 40%
4. **Return rate** — Do users come back after first session? Target: > 60% return within 7 days
5. **Share rate** — Are users sharing designs externally? Target: > 20% share at least once
6. **Generation completion** — What percentage of started generations complete? Target: > 95%

If metrics are low, consider:
- Is the generation too slow? (Add progress indicators, optimize backend)
- Are designs low quality? (Improve AI model, better prompts)
- Is UI confusing? (User test, simplify further)
- Is value proposition unclear? (Improve onboarding, show examples)

---

# Part III: The Complete Style Guide Reference

## Color Palette

### Primary Colors (Warm Neutrals)

* **Primary Background** - `#F8F6F3` (Warm cream, like aged paper or natural linen)
* **Surface Cream** - `#F5F3F0` (Slightly warmer white for cards and elevated surfaces)
* **Pure White** - `#FFFFFF` (For highest elevation cards and text on dark backgrounds)

### Accent Colors (Earthy Tones)

* **Primary Accent Aqua-Navy Gradient** - `#4CD0C8` → `#0E1C2A` (Vibrant fade, for primary actions and selections)
* **Secondary Accent Sage** - `#8B9D83` (Muted green, for nature/plant related tags)
* **Tertiary Accent Amber** - `#D4A574` (Warm gold, for lighting related features)
* **Tertiary Accent Dusty Blue** - `#9DAAB6` (Soft blue-gray, for textile/fabric tags)
* **Neutral Warm Gray** - `#A79E94` (Warm taupe for borders and dividers)

### Text Colors

* **Text Primary** - `#2C2520` (Very dark warm brown, nearly black)
* **Text Secondary** - `#6B6157` (Medium warm gray-brown, for secondary content)
* **Text Tertiary** - `#A39990` (Light warm gray, for de-emphasized text)
* **Text On Accent Gradient** - `#FFFFFF` (White text on gradient buttons)
* **Text On Dark** - `#FFFFFF` (White text on dark glassmorphic overlays)

### Functional Colors

* **Success Green** - `#6B8E6F` (Muted sage green, less aggressive than pure green)
* **Warning Amber** - `#D4A574` (Same as Tertiary Accent Amber)
* **Error Red** - `#C16B5E` (Warm terracotta-red, less harsh than pure red)

### Style Tag Colors (Contextual)

* **Modern** - `#9DAAB6` (Dusty Blue)
* **Rustic** - `#A0836C` (Warm brown)
* **Coastal** - `#89ADB8` (Soft blue)
* **Bohemian** - `#C77D5E` (Burnt orange)
* **Scandinavian** - `#B8BDB5` (Cool gray-beige)
* **Industrial** - `#6B6B6B` (Medium gray)
* **Traditional** - `#8B7E6F` (Warm taupe)
* **Minimalist** - `#D4D1CC` (Very light warm gray)

## Typography

### Font Family

* **Primary Font:** SF Pro Display (iOS) / Roboto (Android) / Inter (Web)
* **Alternative Font:** System UI fallback
* **Monospace Font:** SF Mono / Roboto Mono (for measurements and technical details)

### Font Weights

* **Light:** 300 (rarely used—only for very de-emphasized text)
* **Regular:** 400 (primary body text weight)
* **Medium:** 500 (labels, secondary headings, emphasis)
* **Semibold:** 600 (primary headings, card titles)
* **Bold:** 700 (numbers, measurements, strong emphasis—use sparingly)

### Text Styles

#### Headings

* **H1 (Screen Title):** 24px/29px, Semibold (600), Letter spacing -0.2px
  * Used for main screen titles like "Your Living Room", "Project Gallery"
* **H2 (Section Header):** 18px/27px, Medium (500), Letter spacing -0.1px
  * Used for section labels like "Style Options", "Saved Designs"
* **H3 (Card Title):** 16px/24px, Medium (500), Letter spacing 0px
  * Used for list item labels, style names, room types

#### Body Text

* **Body Large:** 17px/27px, Regular (400), Letter spacing 0px
  * Used for primary descriptions, onboarding copy
* **Body:** 15px/24px, Regular (400), Letter spacing 0.1px
  * Standard text for most UI elements, descriptions, metadata
* **Body Small:** 13px/21px, Regular (400), Letter spacing 0.2px
  * Supporting text, helper text, timestamps

#### Measurements and Technical Text

* **Measurement Large:** 20px/24px, Bold (700), Letter spacing -0.3px
  * Used for room dimensions: "12' × 15'"
* **Measurement Medium:** 16px/20px, Semibold (600), Letter spacing -0.2px
  * Used for furniture dimensions, counts
* **Price Display:** 18px/22px, Semibold (600), Letter spacing -0.2px
  * Used for estimated costs: "$2,400"

#### Special Text

* **Caption:** 12px/18px, Medium (500), Letter spacing 0.2px, Text Secondary
  * Used for timestamps, image metadata, helper text
* **Label:** 14px/20px, Medium (500), Letter spacing 0.1px
  * Used for form labels, category names
* **Button Text:** 16px/24px, Medium (500), Letter spacing 0.1px
  * Used specifically for button labels

## Component Styling

### Cards (Warm Neumorphic Design)

#### Elevated Card (Primary)

* **Background:** Surface Cream (`#F5F3F0`)
* **Shadow (Top-Left):** X: -4dp, Y: -4dp, Blur: 12dp, Color: `#FFFCF7` at 80% (warm cream highlight)
* **Shadow (Bottom-Right):** X: 4dp, Y: 4dp, Blur: 12dp, Color: `#A79E94` at 30% (warm gray depth)
* **Corner Radius:** 24dp
* **Padding:** 24dp vertical, 20dp horizontal
* **Border:** None (depth created through warm-toned shadows)

#### Image Card (Hero Content)

* **Background:** Pure White (`#FFFFFF`) or image itself
* **Corner Radius:** 16dp (slightly less rounded to feel more like a photo)
* **Shadow:** Y-offset: 8dp, Blur: 24dp, Opacity: 15%, Color: `#2C2520`
* **Aspect Ratio:** 4:3 (standard room photo proportion)
* **Border:** 1px solid `rgba(163, 153, 144, 0.15)` (subtle warm gray border)

#### Glassmorphic Overlay Card

* **Background:** `rgba(255, 255, 255, 0.75)` (75% white)
* **Backdrop Filter:** Blur 20px
* **Border:** 1px solid `rgba(255, 255, 255, 0.3)`
* **Corner Radius:** 16dp
* **Padding:** 16dp
* **Shadow:** Y-offset: 4dp, Blur: 16dp, Opacity: 10%, Color: `#2C2520`

### Buttons

#### Primary Action Button (Aqua-Navy Gradient)

* **Background:** Primary Accent Aqua-Navy Gradient (`#4CD0C8` → `#0E1C2A`)
* **Text:** Text On Accent Gradient (`#FFFFFF`)
* **Height:** 52dp
* **Corner Radius:** 26dp (fully rounded pill shape)
* **Padding:** 28dp horizontal
* **Typography:** 16px, Medium (500)
* **Shadow:** Y: 4dp, Blur: 12dp, Opacity: 25%, Color: `#0E1C2A`

#### Secondary Button (Warm Cream)

* **Background:** Surface Cream (`#F5F3F0`)
* **Text:** Text Primary (`#2C2520`)
* **Height:** 52dp
* **Corner Radius:** 26dp
* **Padding:** 28dp horizontal
* **Typography:** 16px, Medium (500)
* **Shadow:** Warm neumorphic (2dp offset, cream highlight + gray depth)

#### Floating Action Button (FAB) — Generate/Regenerate

* **Background:** Primary Accent Aqua-Navy Gradient (`#4CD0C8` → `#0E1C2A`)
* **Icon Color:** Pure White (`#FFFFFF`)
* **Size:** 64dp x 64dp (slightly larger than fitness app's 56dp—more presence)
* **Icon Size:** 28dp x 28dp
* **Shadow:** Y: 8dp, Blur: 20dp, Opacity: 30%, Color: `#0E1C2A`
* **Position:** Bottom-center (not bottom-right—center emphasizes primary action)

#### Style Chip (Floating Selector)

* **Default State:**
  * Background: Glassmorphic (`rgba(255, 255, 255, 0.7)` with 15px blur)
  * Text: Text Primary (`#2C2520`)
  * Typography: 14px, Medium (500)
  * Border: 1px solid `rgba(255, 255, 255, 0.4)`
  * Corner Radius: 20dp (fully rounded pill)
  * Padding: 10dp horizontal, 8dp vertical
* **Selected State:**
  * Background: Primary Accent Terracotta (`#C1694F`)
  * Text: Text On Terracotta (`#FFFFFF`)
  * Typography: 14px, Semibold (600)
  * Shadow: Y: 2dp, Blur: 8dp, Opacity: 30%

### Input Fields

* **Height:** 52dp (slightly larger than fitness app for easier interaction)
* **Corner Radius:** 26dp (pill-shaped)
* **Border:** 1px solid `#D4CFC8` (warm light gray)
* **Focus Border:** 2px solid Primary Accent Terracotta (`#C1694F`)
* **Background:** Pure White (`#FFFFFF`)
* **Text:** Text Primary (`#2C2520`)
* **Placeholder Text:** Text Tertiary (`#A39990`)
* **Padding:** 20dp horizontal

### Navigation

#### Bottom Navigation Bar (Glassmorphic)

* **Background:** `rgba(44, 37, 32, 0.9)` (90% dark warm brown) with blur
* **Backdrop Filter:** Blur 24px
* **Height:** 72dp + safe area (taller than fitness app—more touch-friendly)
* **Corner Radius:** 28dp top corners only
* **Shadow:** Y: -4dp, Blur: 20dp, Opacity: 15%, Color: `#000000`
* **Icon Size:** 28dp x 28dp
* **Active Icon:** Filled with Primary Accent Terracotta (`#C1694F`)
* **Inactive Icon:** Outline stroke at 60% opacity, `#FFFFFF`
* **Label Text:** 11px, Medium (500), shown only for active tab

#### Navigation Icons

* **Gallery/Home:** Grid or images icon
* **Projects:** Folder or bookmark icon
* **Generate:** Plus or sparkle icon (center position, emphasized)
* **Styles:** Palette or color swatch icon
* **Profile:** User or settings icon

### Icons

* **Primary Icons:** 28dp x 28dp (slightly larger than fitness app)
* **Small Icons:** 20dp x 20dp (inline with text)
* **Micro Icons:** 16dp x 16dp (chevrons, status indicators)
* **Large Icons:** 48dp x 48dp (empty states, onboarding)
* **Style:** Rounded, Outline/Stroke with 1.5px weight
* **Color (Active):** Primary Accent Terracotta or Text Primary
* **Color (Inactive):** Text Tertiary (`#A39990`)

### Image Presentation

#### Full-Bleed Hero Image

* **Width:** 100% viewport width
* **Aspect Ratio:** Maintain original (typically 4:3 or 16:9)
* **Corner Radius:** 0 (no rounding for full-bleed)
* **Loading State:** Low-quality placeholder with 20px blur that sharpens on load
* **Transition:** 500ms crossfade between images

#### Gallery Thumbnail

* **Size:** 160dp x 120dp (4:3 aspect ratio)
* **Corner Radius:** 12dp
* **Border:** 1px solid `rgba(163, 153, 144, 0.15)`
* **Shadow:** Y: 2dp, Blur: 8dp, Opacity: 10%
* **Hover State:** Scale to 103%, shadow increases to Y: 4dp, Blur: 12dp

### Loading and Generation States

#### Generation Progress Indicator

* **Background:** Glassmorphic overlay (centered on screen)
* **Spinner:** Circular, 48dp, Primary Accent Terracotta, 3dp stroke
* **Rotation:** 360° over 1000ms, linear, infinite
* **Status Text:** 16px, Medium (500), Text Primary
* **Progress Bar:** Height 4dp, Primary Accent Terracotta fill, warm cream background

#### Skeleton Screen (for project lists)

* **Shimmer Effect:** Moving left-to-right
* **Gradient:** `#F8F6F3` → `#FFFFFF` → `#F8F6F3`
* **Duration:** 1800ms, ease-in-out, infinite loop (slower than fitness app—feels more substantial)
* **Corner Radius:** Match component being loaded (24dp for cards)

## Spacing System

### Base Unit: 4dp

* **4dp** - Micro spacing (icon-to-text, chip gaps)
* **8dp** - Small spacing (between style chips, inline elements)
* **12dp** - Compact spacing (internal padding for small cards)
* **16dp** - Standard spacing (default margins, list item padding)
* **20dp** - Medium-small spacing (card horizontal padding)
* **24dp** - Medium spacing (card vertical padding, section spacing)
* **32dp** - Large spacing (major section separation, screen padding)
* **48dp** - Extra large spacing (top/bottom safe area padding)
* **64dp** - XXL spacing (hero image to content gap)

### Responsive Breakpoints

* **Mobile (< 428dp width):** 16dp horizontal margins, single-column layout
* **Tablet (744-1024dp width):** 32dp horizontal margins, two-column option
* **Desktop (1280dp+ width):** 48dp horizontal margins, three-column grid, max content width 1400dp

## Motion & Animation

### Transition Timing (Weighted for Interior Design)

* **Micro-interaction:** 120ms, Linear
  * Used for: Button press feedback, toggle switches, chip selections
* **Standard Transition:** 300ms, Ease-out cubic-bezier(0.4, 0, 0.2, 1)
  * Used for: Card appearances, list item selections, navigation
* **Emphasis Transition:** 400ms, Decelerate cubic-bezier(0, 0, 0.2, 1)
  * Used for: Generation start/complete, modal presentations, primary state changes
* **Image Crossfade:** 500ms, Linear
  * Used for: Transitioning between generated designs, before/after comparisons
* **Page Transitions:** 350ms, Standard ease cubic-bezier(0.4, 0, 0.2, 1)
  * Used for: Screen changes, navigation between major sections

### Animation Behaviors

#### Image Crossfade (Primary Transition)

* **Outgoing Image:** Opacity 1 → 0 over 500ms linear
* **Incoming Image:** Opacity 0 → 1 over 500ms linear (starts simultaneously)
* **Preload:** New image fully loaded before transition starts
* **Fallback:** If loading fails, fade to placeholder with error message

#### Button Press (Terracotta Primary)

* **Press:** Scale to 96%, shadow reduces from 12dp to 6dp blur, background darkens 10%
* **Duration:** 120ms ease-in
* **Release:** Return to original state over 250ms ease-out with slight overshoot (98% → 100%)
* **Haptic:** Medium impact on press

#### Style Chip Selection

* **Transition:** Background from glassmorphic to terracotta over 200ms
* **Text Weight:** Medium (500) to Semibold (600) with cross-fade
* **Scale:** 100% to 105% over 150ms with slight spring
* **Adjacent Chips:** Subtle scale down to 98% to emphasize selection
* **Haptic:** Light impact on selection

#### Card Hover (Desktop/Tablet)

* **Hover:** Elevate from Level 1 to Level 2 shadows over 200ms
* **Hover:** Scale to 102% over 200ms with ease-out
* **Cursor:** Changes to pointer
* **No Haptic:** (Desktop doesn't support haptics)

#### Glassmorphic Overlay Appearance

* **Entry:** Slide up from bottom over 350ms with decelerate easing
* **Opacity:** 0 → 1 over first 200ms of slide animation
* **Backdrop Blur:** Fades in over 200ms (some browsers animate blur poorly, so opacity helps)
* **Background Dim:** Screen dims to 50% opacity black overlay over 300ms

#### Generation Progress

* **Spinner:** Continuous rotation, no easing
* **Progress Bar:** Fills left-to-right, smooth interpolation
* **Text Updates:** Fade out old text over 150ms, fade in new text over 150ms (300ms total)
* **Completion:** Spinner fades out over 200ms, success checkmark fades in over 200ms

### Loading States

* **Image Loading:** Low-quality placeholder (LQIP) with 20px blur, sharp version fades in over 500ms
* **Card Loading:** Skeleton with warm-toned shimmer effect (1800ms cycle)
* **Generation:** Animated spinner + progress bar + status text
* **Empty State:** Illustration + friendly message, no animation (static and calm)

## Elevation System (Warm Neumorphism)

### Shadow Hierarchy (Z-axis)

#### Level 0 - Flat/Background

* No elevation shadow
* Used for: Screen backgrounds, image backgrounds

#### Level 1 - Resting (4dp)

* **Shadow 1:** X: -3dp, Y: -3dp, Blur: 8dp, `#FFFCF7` at 80% (warm cream highlight)
* **Shadow 2:** X: 3dp, Y: 3dp, Blur: 8dp, `#A79E94` at 25% (warm gray depth)
* Used for: Most cards, style chips, buttons in default state

#### Level 2 - Raised (8dp)

* **Shadow 1:** X: -4dp, Y: -4dp, Blur: 12dp, `#FFFCF7` at 85% (warmer cream highlight)
* **Shadow 2:** X: 4dp, Y: 4dp, Blur: 12dp, `#A79E94` at 30% (darker warm gray depth)
* Used for: Hover states, selected cards, important content

#### Level 3 - Floating (16dp)

* **Shadow:** X: 0dp, Y: 8dp, Blur: 24dp, `#2C2520` at 15% (dark warm brown)
* Used for: Image cards, modal dialogs, overlays

#### Level 4 - Navigation (24dp)

* **Shadow:** X: 0dp, Y: -4dp, Blur: 20dp, `#000000` at 18%
* Combined with glassmorphic blur
* Used for: Bottom navigation bar, floating action button (generate)

## Dark Mode Variants

### Color Adaptations

* **Primary Background** - `#2C2520` (Dark warm brown)
* **Surface Dark** - `#3D3530` (Lighter warm brown for cards)
* **Pure Dark Surface** - `#4A3F3A` (Highest elevation, warmest dark)

### Neumorphic Adjustments for Dark Mode

* **Shadow (Highlight):** X: -2dp, Y: -2dp, Blur: 8dp, `#4A3F3A` at 50% (lighter warm brown)
* **Shadow (Depth):** X: 2dp, Y: 2dp, Blur: 8dp, `#1A1512` at 60% (darker warm brown)
* **Accent Colors:** Primary Accent Terracotta becomes slightly lighter: `#D47B5F`

### Text Colors (Dark Mode)

* **Text Primary** - `#F5F3F0` (Warm cream, nearly white)
* **Text Secondary** - `#C7BEB6` (Light warm gray)
* **Text Tertiary** - `#8E8378` (Medium warm gray)

### Accent Color Adjustments (Dark Mode)

* **Primary Accent Terracotta** - `#D47B5F` (Lighter, higher contrast on dark)
* **Secondary Accent Sage** - `#9BB090` (Slightly lighter sage)
* **Tertiary Accent Amber** - `#E3B889` (Warmer, lighter amber)

## Accessibility Guidelines

### Contrast Ratios

* **Primary Text on Light Background:** Minimum 7:1 (AAA)
* **Secondary Text on Light Background:** Minimum 4.5:1 (AA)
* **Text on Terracotta:** 4.5:1 minimum (pure white on #C1694F achieves ~4.8:1)
* **UI Elements on Background:** Minimum 3:1

### Touch Targets

* **Minimum Size:** 44dp x 44dp (WCAG standard)
* **Recommended Size:** 52dp x 52dp for primary actions (more generous)
* **Spacing Between Targets:** Minimum 8dp, prefer 12dp

### Focus States

* **Keyboard Focus:** 3dp outline in Primary Accent Terracotta with 2dp offset
* **Focus Ring:** Rounded to follow component shape + 4dp
* **Focus Transition:** Fade in over 100ms

### Alt Text for Generated Images

* **Structure:** `[Style] [Room Type] with [Key Features]. Dominant colors: [Colors]. AI-generated interior design rendering.`
* **Example:** "Modern living room with large gray sectional sofa, floor-to-ceiling windows, minimalist coffee table, indoor plants. Dominant colors: white, gray, green. AI-generated interior design rendering."

### Voice Control Support

* **Commands:** "Make it cozier," "Add more plants," "Try modern style," "Make it brighter," "More color"
* **Feedback:** Visual + haptic confirmation of voice command
* **Error Handling:** "I didn't catch that. Try 'make it brighter' or 'add plants.'"

### Motion Preferences

* **Respect `prefers-reduced-motion`:**
  * Disable all spring animations
  * Reduce transition durations to 100ms or instant
  * Remove decorative shimmer effects
  * Keep functional animations (progress bars, spinners) but simplify

## Iconography System

### Icon Set

* **Primary Icon Library:** SF Symbols (iOS) / Material Symbols (Android) / Feather Icons (Web)
* **Style:** Rounded, Outline/Stroke weight 1.5px
* **Custom Icons:** Match stroke weight and rounded style, should feel hand-drawn enough to be warm, geometric enough to be clear

### Icon Categories

#### Navigation Icons
* Gallery, Projects, Generate (plus/sparkle), Styles, Profile
* Size: 28dp, Stroke: 1.5px

#### Action Icons
* Upload, Regenerate, Save, Share, Download, Edit, Delete, Info
* Size: 24dp, Stroke: 1.5px

#### Style Tag Icons
* Furniture, Lighting, Plants, Textiles, Decor, Architecture
* Size: 20dp, Stroke: 1.5px

#### Status Icons
* Loading, Success (check), Error, Warning, Info
* Size: 20dp, Stroke: 1.5px

## Micro-interactions Catalog

### Generate Button Press

* **Visual:** Scale to 94%, shadow compresses, background darkens 12%
* **Haptic:** Strong impact (this is a major action)
* **Duration:** 150ms press, 300ms release with overshoot
* **State Change:** Button disabled during generation, shows progress spinner

### Style Chip Tap

* **Visual:** Background transitions from glassmorphic to terracotta, scale 100% → 105%
* **Haptic:** Light impact
* **Duration:** 200ms
* **Adjacent Effect:** Other chips subtly scale down to 98%

### Image Card Tap (Mobile)

* **Visual:** Brief scale to 98% on press
* **Haptic:** Light impact
* **Action:** Opens full-screen image view with metadata overlay
* **Transition:** Image expands from thumbnail position to full-screen over 350ms

### Swipe to Iterate (Gallery Mode)

* **Gesture:** Horizontal swipe left/right on image
* **Visual:** New image slides in from direction of swipe with subtle parallax
* **Haptic:** Light impact at start of swipe, medium impact on generation trigger
* **Threshold:** 30% of screen width to trigger next generation

### Save to Project

* **Visual:** Heart icon fills with terracotta color, subtle scale pulse
* **Haptic:** Medium impact
* **Duration:** 250ms
* **Feedback:** Toast notification "Saved to [Project Name]" appears for 2 seconds

### Pinch to Zoom (Image Detail)

* **Gesture:** Two-finger pinch on generated image
* **Visual:** Smooth zoom 1x to 3x, pan enabled at zoom levels > 1x
* **Haptic:** Light impact at zoom start and end
* **UI Behavior:** Controls fade out during zoom interaction

## Implementation Notes

### Platform-Specific Considerations

#### iOS
* Use SF Pro Display for all text
* Implement neumorphism with custom CALayer shadows
* Use UIScrollView for image detail zoom
* Use UIImpactFeedbackGenerator (light, medium, heavy) for appropriate haptics
* Support Apple Pencil for annotations on iPad

#### Android
* Use Roboto as primary font
* Implement neumorphism with Material elevation + custom shadows
* Use Jetpack Compose for smooth animations
* Use HapticFeedbackConstants for haptics
* Support stylus input on larger devices

#### Web (Progressive Web App)
* Use Inter as web font (fallback to system)
* Implement backdrop-filter with fallback for older browsers
* Use Intersection Observer for lazy loading images
* Implement service worker for offline image caching
* Keyboard shortcuts: R (regenerate), S (save), Arrow keys (navigate)

### Performance Optimization

**Image Handling:**
* Convert uploads to WebP (85% quality) for storage
* Generate multiple sizes: thumbnail (400px), display (1200px), full (2400px)
* Use LQIP (Low Quality Image Placeholder) for fast initial load
* Implement progressive loading (blur → sharp)
* Cache generated images locally for 7 days

**Rendering:**
* Limit simultaneous glassmorphic elements to 3 max
* Use will-change CSS for animated elements
* Implement virtual scrolling for long project lists
* Debounce style chip selections (200ms) to prevent rapid re-generation

**AI Generation:**
* Queue multiple generation requests
* Show estimated wait time if queue is long
* Allow cancellation of in-progress generation
* Cache common style transformations

### Design Token Export

```json
{
  "color": {
    "background": {
      "primary": "#F8F6F3",
      "surface": "#F5F3F0",
      "pure": "#FFFFFF"
    },
    "accent": {
      "terracotta": "#C1694F",
      "sage": "#8B9D83",
      "amber": "#D4A574",
      "dustyBlue": "#9DAAB6",
      "warmGray": "#A79E94"
    },
    "text": {
      "primary": "#2C2520",
      "secondary": "#6B6157",
      "tertiary": "#A39990",
      "onTerracotta": "#FFFFFF",
      "onDark": "#FFFFFF"
    },
    "functional": {
      "success": "#6B8E6F",
      "warning": "#D4A574",
      "error": "#C16B5E"
    }
  },
  "typography": {
    "fontFamily": {
      "primary": "SF Pro Display, Roboto, Inter, system-ui",
      "monospace": "SF Mono, Roboto Mono, monospace"
    },
    "fontSize": {
      "h1": "24px",
      "h2": "18px",
      "h3": "16px",
      "bodyLarge": "17px",
      "body": "15px",
      "bodySmall": "13px",
      "measurementLarge": "20px",
      "caption": "12px"
    },
    "lineHeight": {
      "heading": 1.2,
      "body": 1.6,
      "bodyLarge": 1.7
    },
    "letterSpacing": {
      "tight": "-0.3px",
      "slightTight": "-0.2px",
      "normal": "0px",
      "slight": "0.1px",
      "wide": "0.2px"
    }
  },
  "spacing": {
    "xs": "4dp",
    "sm": "8dp",
    "compact": "12dp",
    "md": "16dp",
    "medSmall": "20dp",
    "lg": "24dp",
    "xl": "32dp",
    "xxl": "48dp",
    "xxxl": "64dp"
  },
  "borderRadius": {
    "sm": "12dp",
    "md": "16dp",
    "card": "24dp",
    "pill": "26dp",
    "full": "9999px"
  },
  "shadow": {
    "level0": "none",
    "level1": {
      "highlight": "-3dp -3dp 8dp rgba(255,252,247,0.8)",
      "depth": "3dp 3dp 8dp rgba(167,158,148,0.25)"
    },
    "level2": {
      "highlight": "-4dp -4dp 12dp rgba(255,252,247,0.85)",
      "depth": "4dp 4dp 12dp rgba(167,158,148,0.3)"
    },
    "level3": "0 8dp 24dp rgba(44,37,32,0.15)",
    "level4": "0 -4dp 20dp rgba(0,0,0,0.18)"
  },
  "animation": {
    "duration": {
      "micro": "120ms",
      "standard": "300ms",
      "emphasis": "400ms",
      "imageCrossfade": "500ms",
      "page": "350ms"
    },
    "easing": {
      "linear": "linear",
      "standard": "cubic-bezier(0.4, 0.0, 0.2, 1)",
      "decelerate": "cubic-bezier(0.0, 0.0, 0.2, 1)",
      "accelerate": "cubic-bezier(0.4, 0.0, 1, 1)"
    }
  },
  "blur": {
    "glassmorphic": "20px",
    "subtle": "10px",
    "imagePlaceholder": "20px"
  }
}
```

---

## Closing Thoughts

This design system represents a commitment: to make interior design accessible, inspiring, and achievable for everyone. It's a rejection of the "complexity equals sophistication" philosophy that dominates design tools, and an embrace of warm, clear, honest interfaces that empower creativity.

As you implement this system, remember: every color, every shadow, every animation is in service of helping someone transform their home—their most personal space—with confidence and joy. That's not just good design—it's a responsibility we take seriously.

Welcome to the team.

---

*Document Version: 1.0*
*Last Updated: 2025-11-03*
*Maintained by: Design Team*
