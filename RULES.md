# AI Camp Slide Design & Authoring Rules

## 1. Canvas & Layout
- **Resolution:** Fixed 1920×1080 canvas (`CANVAS.width` × `CANVAS.height`).
- **Vertical Centering:** Place content in vertical center. Do not use extreme space-between that pushes header to top edge and content to bottom edge.
- **Rhythm & Gaps:** Header is anchored with standard 40px–48px gap to centered visual centerpiece.
- **Subtle Swiss Grid:** Hairline grid borders (`1px solid #E4E4E7`).
- **No Overflow:** All content must strictly fit within 1080px without scroll or clipping.

## 2. Motion & Transitions
- **Deck-Wide Transitions:** Use `deckTransition` (duration: 260ms, quiet Swiss rise: 6px translateY + opacity fade-in).
- **Staged Reveals (`<Steps>` and `<Step>`):**
  - Do not reveal entire complex slide all at once.
  - Reveal elements in stages using `<Steps>` with `<Step>`.
  - Staging pattern:
    - Step 1: Baseline / Problem / Left card / Initial state.
    - Step 2: Solution / Right card / Automated output.
    - Linear blocks / cards: reveal sequentially in sequence.

## 3. Deck Structure & Navigation Architecture
- **Unified Master Presentation:** All days belong to the same master deck (`slides/ai-camp/index.tsx`).
- **Introductory Sequence (General Camp Level):**
  1. Slide 1 (Master Title): The 5-day roadmap with **no highlights** (neutral cards).
  2. Slide 2 (Camp Deliverables): General camp deliverables ("4 Products You Will Ship This Week").
  3. Slide 3 (Audience Filter): Who this camp is for vs. out of scope.
- **Lecture Introduction Pattern (Per Day):**
  1. **Topic Roadmap Slide:** The 5-day roadmap with the current day **highlighted** (`#FF3B30` border + `TODAY` pill).
  2. **Lecture Outcomes Slide:** High-impact outcome points ("What You Will Learn Today") instead of vague overview slides.
  3. **Content Slides:** 1 visual centerpiece archetype per slide.

## 4. Visual Purity & Badge Hygiene
- **No Useless Micro-Badges:** Remove repetitive decorative pills (e.g., `FILTER 01`, `METHOD A`, `BLOCK CHAIN →`, `BOTTLENECK: ...`).
- **Keep Only Functional Tags:** Module/Day tags, primary metric labels, and high-value system chips.
- **Visual Centerpiece:** Exactly ONE bold archetype per slide.

## 5. Language: ASD-STE100 (Simplified Technical English)
- Use short, clear, direct sentences (≤ 20 words per clause).
- Use active voice and imperative forms for actions.
- Use approved, unambiguous technical words.
- Zero fluff, zero hype, zero buzzwords.
