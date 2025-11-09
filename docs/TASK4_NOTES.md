Task 4 Notes — Progress Ring Animation

Saved quick improvements to pick up later:

- Ease/duration: tweak duration or curve in `_controller` for snappier/slower motion.
  - Where: `_Dashboard1State._controller` in `lib/client_dashboard.dart`.
  - Suggestion: try `Duration(milliseconds: 600)` for snappier or `1200` for gentler feel; curves: `Curves.easeOut`, `Curves.easeOutCubic`, or `Curves.elasticOut` for playful effect.

- Accessibility: ensure the animated numeric text is announced if needed.
  - Action: Add `Semantics` widget around the percentage text with `value` updated as the animation runs and `liveRegion: true` to notify screen readers.
  - Where: `Dashboard1` `AnimatedBuilder` (percentage Text widget).

- Performance: the animation is lightweight; if you add many simultaneous animations, monitor Timeline in DevTools.
  - Action: avoid heavy repaints inside `CustomPainter`; cache static paints where possible; prefer shaders and composited layers when animating multiple elements.

- Expand: later we can add subtle entrance motion for the whole card (slide/fade) to increase perceived polish.
  - Approach: wrap the card in an `AnimatedOpacity` + `SlideTransition` using the same `_controller` (or a staggered controller) to produce coordinated motion.

Keep this file as the short-term checklist for improving the animation UX and accessibility.
