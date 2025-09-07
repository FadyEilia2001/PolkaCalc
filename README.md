# Project Plan – Calculator

## 1. Project Overview

**Goal**  
Build a fully functioning calculator app to practice DOM manipulation, event handling, and custom logic (without using `eval`).

**Tone/Vibe**  
Minimal, neon-on-dark (matrix-like glow). Modern, clean buttons with clear feedback states.

---

## 2. MVP (Minimum Viable Product)

- [ ] Display area (shows input and result).
- [ ] Number buttons (0–9).
- [ ] Operator buttons (+, −, ×, ÷).
- [ ] Clear (AC) and equals (=).
- [ ] Decimal support.
- [ ] Keyboard input optional (stretch).

**Stretch Goals**

- [ ] Theme toggle (light/dark).
- [ ] Styled error handling (like dividing by zero).

---

## 3. Structure & Naming

**Sections**

- Container → `calc-container`
- Display → `calc-display`
- Buttons grid → `calc-buttons`
- Button → `btn` + modifier classes (`btn-number`, `btn-operator`, `btn-clear`, `btn-equals`)

---

## 4. UI Tokens

**Colors**

- Background: `#0d0d0d` (deep dark)
- Neon green: `#39ff14` (main accent)
- Neon pink: `#ff2e92` (secondary accent)
- Text light: `#e0e0e0`

**Fonts**

- `"Source Code Pro", monospace` (retro coding feel)
- Backup: monospace

**Spacing Scale**

- 8px / 16px / 24px

**Border Radius**

- 6px (soft but modern)

**Shadows**

- Button glow: `0 0 12px rgba(57, 255, 20, 0.7)`
- Hover/active state intensifies glow

---

## 5. User Interactions & States

- Hover: button glow brightens.
- Active (click): button slightly scales down + glow pulse.
- Error: display text turns neon pink.
- Reset: clears all values.

---

## 6. File Plan

- `index.html`
- `style.css`
- `app.js`
- `README.md`

---

## UI Tokens

### Colors & Surfaces

| Token                    | Light Mode                | Dark Mode  |
| ------------------------ | ------------------------- | ---------- |
| Background               | `#F3F4F6`                 | `#0A0014`  |
| Calculator Body          | `#FFFFFF`                 | `#1C0028`  |
| Screen / Display BG      | `#F8FAFC`                 | `#11001C`  |
| Screen / Result Text     | `#111827`                 | `#FFFFFF`  |
| Screen / Expression Text | `#6B7280`                 | `#BFB3C8`  |
| Digits (0–9) Text        | `#333333`                 | `#FFFFFF`  |
| Operators Text           | `#A259FF` (alt `#F9A826`) | `#FF00AA`  |
| Accent (=) Button BG     | `#FDD835`                 | `#FF007F`  |
| Accent (=) Button Text   | `#111827`                 | `#1C0028`  |
| Neutral Button BG        | `#FFFFFF`                 | `#241134`  |
| Neutral Button Text      | `#111827`                 | `#EDE7F1`  |
| Disabled Button BG       | `#E5E7EB`                 | `#2B183C`  |
| Disabled Button Text     | `#9CA3AF`                 | `#6F5E79`  |
| Focus Ring               | `#0EA5E9`                 | `#22D3EE`  |
| Border                   | `#E5E7EB`                 | `#3A204F`  |
| Background Accent 1      |`#A259FF`                  |`#FF00AA` |
| **Background Accent 2**  |`#FDD835`                  |`#FF007F` |
| **Alt Accent 1 (soft)**  |`#C4B5FD`                  | `#7C3AED`  |
| **Alt Accent 2 (soft)**  |`#FDBA74`                  | `#FB923C`  |
### Typography

| Token                  | Value                                            |
| ---------------------- | ------------------------------------------------ |
| Title Font             | Black Ops One, fallback: `system-ui, sans-serif` |
| Text Font              | Aldrich, fallback: `system-ui, sans-serif`       |
| Screen Result Size     | `2.25rem`–`3rem`                                 |
| Screen Expression Size | `0.9rem`–`1rem`                                  |
| Button Label Size      | `1rem`                                           |

### Spacing & Sizing

| Token              | Value                         |
| ------------------ | ----------------------------- |
| Spacing Scale      | `4, 8, 12, 16, 24, 32` px     |
| Grid Gap (buttons) | `12px`                        |
| Button Size        | `64px` square (mobile `56px`) |
| Calculator Padding | `16–24px`                     |

### Shape

| Token                   | Value                                    |
| ----------------------- | ---------------------------------------- |
| Border Radius (body)    | `20px`                                   |
| Border Radius (buttons) | `16px`                                   |
| Border / Stroke         | subtle, matches “Border” color per theme |

### Effects

| Token           | Light Mode                                                                    | Dark Mode                     |
| --------------- | ----------------------------------------------------------------------------- | ----------------------------- |
| Shadow (body)   | `0 10px 30px rgba(0,0,0,.12)`                                                 | `0 10px 30px rgba(0,0,0,.35)` |
| Shadow (button) | `inset 3px 3px 6px rgba(0,0,0,.12), inset -3px -3px 6px rgba(255,255,255,.7)` | `0 4px 14px rgba(0,0,0,.35)`  |
| Glow (accent)   | `0 0 12px rgba(253,216,53,.5)`                                                | `0 0 16px rgba(255,0,170,.6)` |
| Transitions     | `all .18s ease-in-out`                                                        | `all .18s ease-in-out`        |
