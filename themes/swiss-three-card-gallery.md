---
name: Swiss Three-Card Gallery
description: Bauhaus Swiss grid slide style featuring three equal-width cards with top image slots and crisp typographic hierarchy.
mode: light
---

# Swiss Three-Card Gallery

## Palette

| Role    | Value     | Notes                                      |
| ------- | --------- | ------------------------------------------ |
| bg      | `#FFFFFF` | primary canvas background                  |
| text    | `#09090B` | primary headlines and body copy            |
| accent  | `#FF3B30` | section eyebrow, top card rule, highlights |
| muted   | `#71717A` | subtitles and secondary descriptions       |
| surface | `#F4F4F5` | card fill                                  |
| border  | `#E4E4E7` | 1px grid rules and frame borders           |
| accent2 | `#2563EB` | secondary card accent                      |

## Typography

- Display font: `'Plus Jakarta Sans', sans-serif` — weight 800 for headlines.
- Body font: `'Inter', sans-serif` — weight 400–500.
- Mono font: `'JetBrains Mono', monospace` — weight 600–700 for tags and labels.
- Webfont import: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap`
- Type-scale overrides:
  - Hero title: 96 px
  - Page heading: 76–80 px
  - Card title: 28–30 px
  - Body / card description: 20–32 px
  - Eyebrow / tag: 15–20 px mono uppercase

## Layout

- Canvas: 1920 × 1080 px, `80px 110px` padding, inner hairline frame (`outline: 1px solid #E4E4E7`, `outlineOffset: -40px`).
- Alignment: left-aligned header above a 3-column (`repeat(3, 1fr)`, `24px` gap) card grid.
- Card structure: `520–540px` tall surface card (`#F4F4F5`) with `3px` colored top border, `250px+` framed image slot at the top, and mono tag + bold heading + concise copy below.

## Fixed components

These are paste-ready. Copy them verbatim into a slide that uses this theme.

### Title

```tsx
const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      margin: 0,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontSize: 80,
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      color: '#09090B',
    }}
  >
    {children}
  </h1>
);
```

### Footer

```tsx
import { useSlidePageNumber } from '@open-slide/core';

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 110,
        right: 110,
        bottom: 48,
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 16,
        letterSpacing: '0.08em',
        color: '#71717A',
      }}
    >
      <span>SWISS THREE-CARD GALLERY</span>
      <span>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
    </div>
  );
};
```

### Eyebrow

```tsx
const Eyebrow = ({
  children,
  color = '#FF3B30',
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 20,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color,
      marginBottom: 16,
    }}
  >
    <span style={{ width: 8, height: 8, backgroundColor: color, display: 'inline-block' }} />
    {children}
  </div>
);
```

### ImageCard

```tsx
import { ImagePlaceholder } from '@open-slide/core';

const ImageCard = ({
  tag,
  title,
  desc,
  hint,
  accent = '#FF3B30',
}: {
  tag: string;
  title: string;
  desc?: string;
  hint: string;
  accent?: string;
}) => (
  <div
    style={{
      backgroundColor: '#F4F4F5',
      border: '1px solid #E4E4E7',
      borderTop: `3px solid ${accent}`,
      padding: 24,
      height: 520,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        display: 'flex',
        height: desc ? 250 : undefined,
        flex: desc ? undefined : 1,
        overflow: 'hidden',
        border: '1px solid #E4E4E7',
        backgroundColor: '#FFFFFF',
        flexShrink: 0,
      }}
    >
      <ImagePlaceholder hint={hint} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 15,
          fontWeight: 700,
          color: accent,
          letterSpacing: '0.08em',
        }}
      >
        {tag}
      </span>
      <h3
        style={{
          margin: 0,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 28,
          fontWeight: 800,
          lineHeight: 1.15,
          color: '#09090B',
        }}
      >
        {title}
      </h3>
      {desc ? (
        <p
          style={{
            margin: 0,
            fontFamily: "'Inter', sans-serif",
            fontSize: 20,
            lineHeight: 1.45,
            color: '#71717A',
          }}
        >
          {desc}
        </p>
      ) : null}
    </div>
  </div>
);
```

## Motion

- Philosophy: subtle — quiet Swiss rise (`translateY(6px)` to `0`, `260ms`) between pages, with no decorative bouncing or rounded-pill transitions.

```css
@keyframes swissRise {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

## Aesthetic

Bauhaus Swiss Grid: crisp white canvas, sharp 0px corners, hairline zinc borders, stark black headlines, and surgical red/blue accents. Designed for structured three-column visual comparisons, case studies, and workflow showcases — never use rounded corners, drop-shadow blobs, gradients, or decorative emoji.

## Example usage

```tsx
const Showcase: Page = () => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      backgroundColor: '#FFFFFF',
      color: '#09090B',
      padding: '80px 110px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 44,
      outline: '1px solid #E4E4E7',
      outlineOffset: '-40px',
    }}
  >
    <div>
      <Eyebrow>01 // SHOWCASE</Eyebrow>
      <Title>Three Visual Examples.</Title>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, width: '100%' }}>
      <ImageCard tag="01 // CASE" title="First Card" desc="Concise explanation." hint="First visual" accent="#FF3B30" />
      <ImageCard tag="02 // CASE" title="Second Card" desc="Concise explanation." hint="Second visual" accent="#2563EB" />
      <ImageCard tag="03 // CASE" title="Third Card" desc="Concise explanation." hint="Third visual" accent="#09090B" />
    </div>
    <Footer />
  </div>
);
```
