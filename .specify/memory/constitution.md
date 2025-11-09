# [PROJECT_NAME] Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### [PRINCIPLE_1_NAME]
<!-- Example: I. Library-First -->
[PRINCIPLE_1_DESCRIPTION]
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### [PRINCIPLE_2_NAME]
<!-- Example: II. CLI Interface -->
[PRINCIPLE_2_DESCRIPTION]
<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### [PRINCIPLE_3_NAME]
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
[PRINCIPLE_3_DESCRIPTION]
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### [PRINCIPLE_4_NAME]
<!-- Example: IV. Integration Testing -->
[PRINCIPLE_4_DESCRIPTION]
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

### [PRINCIPLE_5_NAME]
<!-- Example: V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity -->
[PRINCIPLE_5_DESCRIPTION]
<!-- Example: Text I/O ensures debuggability; Structured logging required; Or: MAJOR.MINOR.BUILD format; Or: Start simple, YAGNI principles -->

## [SECTION_2_NAME]
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

[SECTION_2_CONTENT]
<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## [SECTION_3_NAME]
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

[SECTION_3_CONTENT]
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

[GOVERNANCE_RULES]
<!--
SYNC IMPACT REPORT

- Version change: TEMPLATE → 1.0.0
- Modified principles: (derived from repository design-system)
	- "Calm Capability" (design philosophy) — new/defined
	- "Neumorphic & Glassmorphism UI" — new/defined
	- "Test-First (NON-NEGOTIABLE)" — defined for project
	- "Integration & Observability" — defined
	- "Versioning, Simplicity & Tokens" — defined
- Added sections: Additional Constraints, Development Workflow
- Removed sections: none
- Templates requiring updates (⚠ pending):
	- .specify/templates/plan-template.md ⚠ pending
	- .specify/templates/spec-template.md ⚠ pending
	- .specify/templates/tasks-template.md ⚠ pending
	- .specify/templates/checklist-template.md ⚠ pending
	- .specify/templates/agent-file-template.md ⚠ pending
- Follow-up TODOs:
	- TODO(RATIFICATION_DATE): Set the official ratification date when the maintainers approve.
	- Review and update templates' "Constitution Check" gate to reference principle IDs if desired.
-->

# flutter_ui Constitution

## Core Principles

### 1. Calm Capability
Every design and engineering decision favors reducing cognitive load and emotional pressure for users.
Design choices must prioritize calm, readable interfaces that enable users to act with confidence. Use monochrome bases, soft pastels for non-critical differentiation, and reserve pure black as an attention anchor used sparingly. Rationale: fitness/wellness users benefit from clarity, not gamified pressure.

### 2. Neumorphic & Glassmorphism UI
UI surfaces should follow the project's neumorphic system for primary cards and glassmorphism for the persistent bottom navigation. Implement consistent shadow pairs (highlight + depth), fixed corner radii (16/24/32dp), and limit stacked elevations to maintain legibility and performance. Rationale: tactile, calm depth supports the project's "Calm Capability" philosophy.

### 3. Test-First (NON-NEGOTIABLE)
Tests (unit, widget, integration) must be designed up-front for every feature: write failing tests first, then implement code to satisfy them (Red → Green → Refactor). CI must run the test suites and block merges on failures. Rationale: maintains stability, documents expected behavior, and enables safe refactoring.

### 4. Integration & Observability
Integration tests and contract checks are required for cross-module interactions (e.g., navigation flows, data contracts between UI and services). Implement structured logging and lightweight observability for runtime errors and user-impacting issues. Rationale: ensures early detection of regressions across layers.

### 5. Versioning, Simplicity & Design Tokens
Follow semantic versioning for public artifacts. Prefer minimal surface area: prefer design tokens and centralized constants to avoid per-component drift. Keep APIs and screens simple—YAGNI (You Aren't Gonna Need It) should guide feature scope. Rationale: reduces complexity and long-term maintenance cost.

## Additional Constraints

- Primary stack: Flutter (Dart) — see `pubspec.yaml`.
- Design tokens and implementation guidance live under `design-system/` (tokens, components, docs).
- Accessibility: all screens must meet contrast and touch-target rules (WCAG AA as baseline; aim for AAA on metrics). Implement `prefers-reduced-motion` support.
- Performance: aim for smooth 60fps interactions on target device classes; optimize shadow and animation use for lists.

## Development Workflow

- Source organization: mirror `design-system` tokens in code. Avoid hardcoded styling values; import tokens from a single source.
- Branching: feature branches named `feat/xxx` or `fix/xxx`; PRs must reference a spec or plan entry when applicable.
- Reviews: at least one approving review from a maintainer; PRs must pass CI (formatting, linting, tests).
- Quality gates: Lints (flutter_lints), unit/widget/integration tests, and accessibility checklist run in CI before merge.

## Governance

Amendments to this constitution follow these steps:

1. Propose amendment via a PR against this file with an explicit change rationale and migration plan.
2. Indicate version bump kind (MAJOR/MINOR/PATCH) and justification.
3. At least one maintainer approval + passing CI is required to ratify.
4. Ratification: once merged, update `LAST_AMENDED_DATE` to merge date. If the first formal adoption date is known, set `RATIFICATION_DATE`.

Versioning rules (summary):
- MAJOR: incompatible governance or principle removals/redefinitions.
- MINOR: new principle or materially expanded guidance.
- PATCH: wording fixes, clarifications, or non-semantic refinements.

**Version**: 1.0.0 | **Ratified**: 2025-11-05 | **Last Amended**: 2025-11-05

```
