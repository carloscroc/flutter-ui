<!--
SYNC IMPACT REPORT

- Source: populated from `.specify/memory/constitution.md` and `design-system/` documents
- Version: 1.0.0 (initial formalization)
- Modified/Defined principles: Calm Capability; Neumorphic & Glassmorphism UI; Test-First; Integration & Observability; Versioning, Simplicity & Tokens
- Added: Additional Constraints, Development Workflow sections
- Templates flagged for review (recommended follow-up):
  - .specify/templates/plan-template.md ⚠ pending
  - .specify/templates/spec-template.md ⚠ pending
  - .specify/templates/tasks-template.md ⚠ pending
  - .specify/templates/checklist-template.md ⚠ pending
  - .specify/templates/agent-file-template.md ⚠ pending
- Deferred TODOs:
  - TODO(RATIFICATION_DATE): maintainers to set official ratification date on approval
-->

# flutter_ui Constitution

## Overview

This document captures the core principles, constraints, workflow rules, and governance for the `flutter_ui` project. It formalizes the design-led engineering decisions present in the `design-system/` and aligns development templates under `.specify/` with clear, testable rules.

Keep this file visible (repo root or `.github/`) for contributors. The canonical machine-editable template remains at `.specify/memory/constitution.md` per Speckit conventions.

## Core Principles

### 1. Calm Capability
Every design and engineering decision favors reducing cognitive load and emotional pressure for users. Use monochrome bases and soft pastels; reserve pure black as an attention anchor used sparingly. Rationale: fitness/wellness users benefit from clarity, not gamified pressure.

### 2. Neumorphic & Glassmorphism UI
UI surfaces should follow the project's neumorphic system for primary cards and glassmorphism for the persistent bottom navigation. Implement consistent shadow pairs (highlight + depth), fixed corner radii (16/24/32dp), and limit stacked elevations to maintain legibility and performance.

### 3. Test-First (NON-NEGOTIABLE)
Adopt test-first practices: write failing tests (unit/widget/integration) before implementation. CI must run tests and block merges on failure. Tests are the project’s living specification.

### 4. Integration & Observability
Require integration and contract tests for cross-module interactions. Use structured logging and lightweight observability for production runtime errors and user-impacting issues.

### 5. Versioning, Simplicity & Design Tokens
Use semantic versioning for public artifacts. Centralize tokens (colors, spacing, typography) under `design-system/` and avoid per-component hardcoding. Prefer minimal, well-justified APIs and screens.

## Additional Constraints

- Primary stack: Flutter (Dart). See `pubspec.yaml` for dependencies.
- Design tokens and component guidance are under `design-system/` (tokens, components, docs).
- Accessibility baselines: WCAG AA for general text, aim for AAA on metrics where feasible. Minimum touch target: 44dp.
- Performance baseline: aim for 60fps interactions on target devices; optimize shadows and blur use especially in lists.

## Development Workflow

- Branch naming: `feat/`, `fix/`, `chore/` prefixes recommended.
- Pull Requests: require at least one approving maintainer review, passing CI (format, lint, tests), and a linked spec/plan when applicable.
- Quality Gates: `flutter_lints`, unit/widget/integration tests, accessibility checklist validations run in CI before merge.
- Design Tokens: import tokens rather than hardcoding; keep token changes backward-compatible when possible (use MINOR bumps for additions, PATCH for docs/clarity).

## Governance & Amendment Process

To amend the constitution:

1. Open a PR that modifies this file and include a migration plan and explicit rationale.
2. Declare the intended version bump (MAJOR/MINOR/PATCH) with justification.
3. At least one maintainer approval + passing CI is required to merge.
4. Update `LAST_AMENDED_DATE` after merge. The original `RATIFICATION_DATE` should be set by maintainers when the constitution is formally adopted.

Versioning summary:
- MAJOR: incompatible governance or principle removals/redefinitions.
- MINOR: new principle or materially expanded guidance.
- PATCH: wording fixes, clarifications, or non-semantic refinements.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE) | **Last Amended**: 2025-11-05

## How to use this constitution

- Before starting design or engineering work that affects architectural or UX decisions, check the relevant Principle and Quality Gates here.
- Use `.specify/templates/*` as the authoritative templates for plans, specs, tasks, and checklists; update them if this constitution changes mandatory gates.
- When creating feature plans/specs, include a short note that references the Principle(s) the feature must satisfy.

## Quick Examples (how principles map to actions)

- Principle: Test-First → Action: create unit/widget/integration tests as part of PR; CI must pass.
- Principle: Neumorphic UI → Action: use design tokens for shadows, corners, and avoid per-component hardcoding.
- Principle: Calm Capability → Action: limit black accent usage to ≤3 focal elements per screen.

## Sync Impact Summary & Next Steps

- Templates flagged for review (recommended): update 'Constitution Check' gates to reference principle IDs and required checklist items.
- TODO: maintainers to set `RATIFICATION_DATE` after review.
- Optional: copy this file to `.github/CONSTITUTION.md` (I can do this if you want a separate path).

---

Appendix: Source notes

This constitution was derived from the project `design-system/` (style guide and competitor analysis) and the Speckit template at `.specify/memory/constitution.md`.

If you'd like any changes (tone, granularity, or additional governance fields such as voting rules or CLA requirements), tell me and I will update and open a PR.
