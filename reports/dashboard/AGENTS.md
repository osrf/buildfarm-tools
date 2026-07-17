# AGENTS

## Scope
- This repository is a static dashboard with no build pipeline.
- Main implementation file: [index.html](index.html).
- Data source file: [dashboard_data.js](dashboard_data.js).

## Fast Start
- Serve locally from repository root:
  - `python3 -m http.server 8000`
  - Open `http://localhost:8000/`
- There are currently no automated tests or lint scripts.

## Architecture
- All UI, styles, and behavior live in [index.html](index.html).
- Runtime data is provided by `window.DASHBOARD_DATA` from [dashboard_data.js](dashboard_data.js).
- The dashboard has two main views:
  - Regressions (`#view-regressions`)
  - Known Issues (`#view-known-issues`)
- Modal flows are handled in-place in [index.html](index.html):
  - History modal
  - Suspect commits modal

## Data Contract
- Keep `window.DASHBOARD_DATA` shape compatible with current readers in [index.html](index.html):
  - `generated_at`
  - `known_issues[]`
  - `regressions.consistent[]`
  - `regressions.flaky[]`
  - optional `test_history`
- Prefer additive, backward-compatible data changes.
- If a field might be missing, handle it defensively in rendering paths.

## Editing Conventions
- Preserve current style: vanilla HTML/CSS/JS, no frameworks.
- Prefer small, localized changes; avoid broad refactors in [index.html](index.html).
- Keep escaping discipline:
  - Any user/data-derived content rendered via HTML strings should pass through `escapeHtml`.
- Keep URL filter behavior stable:
  - `project` query param accepts `ros` and `gazebo` (normalized to `ROS`/`Gazebo`).
- When adding new filters or columns, update:
  - control wiring (DOM + listeners)
  - filtering predicate(s)
  - count labels and empty states

## Manual Validation Checklist
- Open dashboard and confirm both tabs render.
- Validate filters update table contents and counts.
- Validate `project` URL param preselects project filter.
- Open both modals (history and suspects) and confirm close via:
  - close button
  - outside click
  - `Escape`
- Confirm no raw HTML injection appears in table cells for dynamic values.

## Common Pitfalls
- Breaking `window.DASHBOARD_DATA` keys will silently empty sections.
- Using unescaped string interpolation in `innerHTML` paths can introduce XSS.
- Moving logic out of [index.html](index.html) requires updating script load order and selectors.

## If The Project Grows
- Add file-scoped instructions under `.github/instructions/` for:
  - `**/index.html` UI and rendering rules
  - `**/dashboard_data.js` data-shape rules
- Add a custom skill for data refresh workflows if generation of [dashboard_data.js](dashboard_data.js) becomes frequent.