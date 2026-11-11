import React, { type CSSProperties, type ReactNode } from 'react';
import type { DesignSystem, SlideTransition } from '@open-slide/core';

// Re-export lucide-react icons for slides
export * from 'lucide-react';

// Design System: "Bauhaus Swiss Grid"
export const COLORS = {
  BG: '#FFFFFF',
  SURFACE: '#F4F4F5',
  BORDER: '#E4E4E7',
  TEXT: '#09090B',
  MUTED: '#71717A',
  ACCENT: '#FF3B30',
  ACCENT_2: '#2563EB',
} as const;

export const FONTS = {
  heading: "'Plus Jakarta Sans', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const CANVAS = {
  width: 1920,
  height: 1080,
  padding: '80px 110px',
  border: `1px solid ${COLORS.BORDER}`,
} as const;

// Global Slide Transition (Quiet Swiss Rise)
export const deckTransition: SlideTransition = {
  duration: 260,
  exit: {
    duration: 260,
    easing: 'cubic-bezier(0.4, 0, 1, 1)',
    keyframes: [{ opacity: 1 }, { opacity: 1 }],
  },
  enter: {
    duration: 260,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

// open-slide DesignSystem token object
export const design: DesignSystem = {
  palette: {
    bg: COLORS.BG,
    text: COLORS.TEXT,
    accent: COLORS.ACCENT,
  },
  fonts: {
    display: FONTS.heading,
    body: FONTS.body,
  },
  typeScale: {
    hero: 96,
    body: 32,
  },
  radius: 0,
};

// Google Fonts Loader (Idempotent head injection)
export const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap';
export const FONT_LINK_ID = 'osd-webfont-bauhaus-swiss';

export function loadThemeFonts(): void {
  if (typeof document === 'undefined') return;
  let link = document.getElementById(FONT_LINK_ID) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.id = FONT_LINK_ID;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  if (link.href !== FONT_HREF) {
    link.href = FONT_HREF;
  }
}

// Auto-load fonts at module evaluation
if (typeof document !== 'undefined') {
  loadThemeFonts();
}

// -------------------------------------------------------------
// Reusable Swiss Bauhaus Components (Rule of Three)
// -------------------------------------------------------------

export interface SlideContainerProps {
  children: ReactNode;
  style?: CSSProperties;
  showGridLines?: boolean;
}

export function SlideContainer({
  children,
  style,
  showGridLines = true,
}: SlideContainerProps) {
  loadThemeFonts();

  return React.createElement(
    'div',
    {
      style: {
        position: 'relative',
        width: CANVAS.width,
        height: CANVAS.height,
        backgroundColor: COLORS.BG,
        color: COLORS.TEXT,
        fontFamily: FONTS.body,
        padding: CANVAS.padding,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '44px',
        overflow: 'hidden',
        ...(showGridLines
          ? {
              outline: `1px solid ${COLORS.BORDER}`,
              outlineOffset: '-40px',
            }
          : {}),
        ...style,
      },
    },
    children
  );
}

export interface SectionTagProps {
  children: ReactNode;
  accentColor?: string;
  style?: CSSProperties;
}

export function SectionTag({
  children,
  accentColor = COLORS.ACCENT,
  style,
}: SectionTagProps) {
  return React.createElement(
    'div',
    {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: FONTS.mono,
        fontSize: '20px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: accentColor,
        marginBottom: '16px',
        ...style,
      },
    },
    React.createElement('span', {
      style: {
        width: '8px',
        height: '8px',
        backgroundColor: accentColor,
        display: 'inline-block',
      },
    }),
    children
  );
}

export interface SlideHeaderProps {
  tag?: string;
  tagColor?: string;
  title: string;
  subtitle?: string;
  titleSize?: number;
  style?: CSSProperties;
}

export function SlideHeader({
  tag,
  tagColor = COLORS.ACCENT,
  title,
  subtitle,
  titleSize = 80,
  style,
}: SlideHeaderProps) {
  return React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxWidth: '1600px',
        ...style,
      },
    },
    tag ? React.createElement(SectionTag, { accentColor: tagColor, children: tag }) : null,
    React.createElement(
      'h1',
      {
        style: {
          margin: 0,
          fontFamily: FONTS.heading,
          fontSize: `${titleSize}px`,
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: COLORS.TEXT,
        },
      },
      title
    ),
    subtitle
      ? React.createElement(
          'p',
          {
            style: {
              margin: '16px 0 0 0',
              fontFamily: FONTS.body,
              fontSize: '30px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
              color: COLORS.MUTED,
              maxWidth: '1200px',
            },
          },
          subtitle
        )
      : null
  );
}

export interface SwissCardProps {
  children: ReactNode;
  style?: CSSProperties;
  highlighted?: boolean;
  highlightColor?: string;
}

export function SwissCard({
  children,
  style,
  highlighted = false,
  highlightColor = COLORS.ACCENT,
}: SwissCardProps) {
  return React.createElement(
    'div',
    {
      style: {
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${highlighted ? highlightColor : COLORS.BORDER}`,
        padding: '36px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.2s ease',
        ...style,
      },
    },
    children
  );
}
