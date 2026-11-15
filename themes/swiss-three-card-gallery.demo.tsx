import React from 'react';
import { type DesignSystem, ImagePlaceholder, type Page, useSlidePageNumber } from '@open-slide/core';

export const design: DesignSystem = {
  palette: {
    bg: '#FFFFFF',
    text: '#09090B',
    accent: '#FF3B30',
  },
  fonts: {
    display: "'Plus Jakarta Sans', sans-serif",
    body: "'Inter', sans-serif",
  },
  typeScale: {
    hero: 96,
    body: 32,
  },
  radius: 0,
};

const FONT_STYLE = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap');
`;

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
      <span>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

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

const pageShell: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: '#FFFFFF',
  color: '#09090B',
  fontFamily: "'Inter', sans-serif",
  padding: '80px 110px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 44,
  outline: '1px solid #E4E4E7',
  outlineOffset: '-40px',
};

const Cover: Page = () => (
  <div style={pageShell}>
    <style>{FONT_STYLE}</style>
    <div>
      <Eyebrow>THEME // SWISS GRID</Eyebrow>
      <Title>Three-Card Image Gallery.</Title>
      <p
        style={{
          margin: '20px 0 0 0',
          fontSize: 32,
          lineHeight: 1.4,
          color: '#71717A',
          maxWidth: 1100,
        }}
      >
        Sharp 0px Swiss framing with three equal-width image cards for cases, risks, and workflows.
      </p>
    </div>
    <Footer />
  </div>
);

const Showcase: Page = () => (
  <div style={pageShell}>
    <style>{FONT_STYLE}</style>
    <div>
      <Eyebrow>01 // THREE-COLUMN SHOWCASE</Eyebrow>
      <Title>Visual Evidence in Three Columns.</Title>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, width: '100%' }}>
      <ImageCard
        tag="01 // PRIMARY"
        title="First Visual Card"
        desc="Place a concrete screenshot, chart, or photo above a single focused takeaway."
        hint="Primary product or workflow screenshot"
        accent="#FF3B30"
      />
      <ImageCard
        tag="02 // SECONDARY"
        title="Second Visual Card"
        desc="Each card holds one clear idea with balanced vertical rhythm."
        hint="Secondary comparison or system diagram"
        accent="#2563EB"
      />
      <ImageCard
        tag="03 // TERTIARY"
        title="Third Visual Card"
        desc="Top accent rules separate categories without adding visual clutter."
        hint="Third real-world example image"
        accent="#09090B"
      />
    </div>
    <Footer />
  </div>
);

const Closer: Page = () => (
  <div style={pageShell}>
    <style>{FONT_STYLE}</style>
    <div>
      <Eyebrow color="#2563EB">02 // READY TO USE</Eyebrow>
      <Title>Drop In Real Assets & Ship.</Title>
      <p
        style={{
          margin: '20px 0 0 0',
          fontSize: 32,
          lineHeight: 1.4,
          color: '#71717A',
          maxWidth: 1000,
        }}
      >
        Replace any placeholder in the inspector while preserving the 3-column Swiss grid.
      </p>
    </div>
    <Footer />
  </div>
);

export default [Cover, Showcase, Closer];
