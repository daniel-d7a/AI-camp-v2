import React, { type CSSProperties, type ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import {
  Cpu,
  AlertTriangle,
  Terminal,
  Braces,
  Sparkles,
  Database,
  Scale,
  Calculator,
  ShieldAlert,
  X,
  Check,
  UserCheck,
  Layers,
  Crosshair,
  Shield,
  Table,
  Workflow,
  ArrowRight,
  CornerDownRight,
  Binary,
  FileCode,
  Zap,
} from 'lucide-react';

import {
  COLORS,
  FONTS,
  CANVAS,
  SlideContainer,
  SlideHeader,
  SwissCard,
  SectionTag,
  loadThemeFonts,
} from '../../theme';

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

// ---------------------------------------------------------------------------
// Reusable Slide Helpers (Rule of Three)
// ---------------------------------------------------------------------------

function MonoPill({
  children,
  color = COLORS.TEXT,
  bg = COLORS.SURFACE,
  border = COLORS.BORDER,
}: {
  children: ReactNode;
  color?: string;
  bg?: string;
  border?: string;
}) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        fontFamily: FONTS.mono,
        fontSize: '15px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color,
        backgroundColor: bg,
        border: `1px solid ${border}`,
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Slide 1: Title & Core Modules (Archetype #4: Linear Steps)
// ---------------------------------------------------------------------------

const Slide1: Page = () => {
  const modules = [
    { num: '01', title: 'LLM Mechanics', desc: 'Next-Token & Latent Space', icon: Cpu },
    { num: '02', title: 'Hallucinations', desc: 'Probability vs. Veracity', icon: AlertTriangle },
    { num: '03', title: 'Prompt Framework', desc: '5-Part Engineering Spec', icon: Terminal },
    { num: '04', title: 'Structured Outputs', desc: 'JSON & Clean Schema Data', icon: Braces },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="AI CAMP // DAY 02"
        tagColor={COLORS.ACCENT}
        title="Under the Hood & The Art of Prompting."
        subtitle="Mastering statistical prediction engines before giving instructions."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          width: '100%',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.num}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '420px',
                padding: '40px',
                boxSizing: 'border-box',
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: '48px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: COLORS.ACCENT,
                  }}
                >
                  {m.num}
                </span>
                <MonoPill>MODULE</MonoPill>
              </div>

              <div>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFFFFF',
                    border: `1px solid ${COLORS.BORDER}`,
                    marginBottom: '28px',
                    color: COLORS.TEXT,
                  }}
                >
                  <Icon size={32} strokeWidth={2} />
                </div>
                <h3
                  style={{
                    margin: '0 0 8px 0',
                    fontFamily: FONTS.heading,
                    fontSize: '32px',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    color: COLORS.TEXT,
                  }}
                >
                  {m.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: FONTS.mono,
                    fontSize: '15px',
                    color: COLORS.MUTED,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 2: Next-Token Prediction (Archetype #6: Mechanics & Capacity Meters)
// ---------------------------------------------------------------------------

const Slide2: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="2.1 // NEXT-TOKEN PREDICTION"
        tagColor={COLORS.ACCENT}
        title="It Doesn't Think. It Predicts."
        subtitle="Calculating probabilities for the next piece of text."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '36px',
          alignItems: 'center',
          width: '100%',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {/* Left: Incomplete prompt card */}
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '460px',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <MonoPill color={COLORS.MUTED}>INPUT PROMPT STRING</MonoPill>
            <div
              style={{
                margin: '40px 0 0 0',
                fontFamily: FONTS.mono,
                fontSize: '38px',
                fontWeight: 700,
                lineHeight: 1.3,
                color: COLORS.TEXT,
              }}
            >
              "The capital of Egypt is{' '}
              <span
                style={{
                  display: 'inline-block',
                  width: '90px',
                  borderBottom: `4px solid ${COLORS.ACCENT}`,
                  marginLeft: '8px',
                  verticalAlign: 'middle',
                }}
              />
              "
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: `1px solid ${COLORS.BORDER}`, paddingTop: '20px' }}>
            <Cpu size={22} color={COLORS.ACCENT} />
            <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.MUTED }}>
              SOFTMAX DISTRIBUTION OVER 100K VOCABULARY
            </span>
          </div>
        </div>

        {/* Right: Probability bars */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: `1px solid ${COLORS.BORDER}`,
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '460px',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '16px', fontWeight: 700, color: COLORS.MUTED }}>
              TOP CANDIDATE PROBABILITIES
            </span>
            <MonoPill color={COLORS.ACCENT_2} bg="#EEF2FF" border={COLORS.ACCENT_2}>
              GREEDY SAMPLING
            </MonoPill>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Candidate 1: Cairo (94%) */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: '28px', fontWeight: 800 }}>
                  Cairo
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: '28px', fontWeight: 800, color: COLORS.ACCENT_2 }}>
                  94%
                </span>
              </div>
              <div style={{ height: '32px', backgroundColor: COLORS.SURFACE, width: '100%' }}>
                <div style={{ height: '100%', width: '94%', backgroundColor: COLORS.ACCENT_2 }} />
              </div>
            </div>

            {/* Candidate 2: Alexandria (4%) */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 700, color: COLORS.MUTED }}>
                  Alexandria
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: '24px', fontWeight: 700, color: COLORS.MUTED }}>
                  4%
                </span>
              </div>
              <div style={{ height: '24px', backgroundColor: COLORS.SURFACE, width: '100%' }}>
                <div style={{ height: '100%', width: '4%', backgroundColor: COLORS.MUTED }} />
              </div>
            </div>

            {/* Candidate 3: Pyramids (2%) */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 700, color: COLORS.MUTED }}>
                  Pyramids
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: '24px', fontWeight: 700, color: COLORS.MUTED }}>
                  2%
                </span>
              </div>
              <div style={{ height: '24px', backgroundColor: COLORS.SURFACE, width: '100%' }}>
                <div style={{ height: '100%', width: '2%', backgroundColor: COLORS.MUTED }} />
              </div>
            </div>
          </div>

          <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
            SAMPLING DECISION: SELECT HIGHEST WEIGHTED TOKEN
          </span>
        </div>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 3: How AI Reads: Tokens (Archetype #6 / #7 Hybrid)
// ---------------------------------------------------------------------------

const Slide3: Page = () => {
  const tokens = [
    { text: 'Un', num: 'tok_01', color: '#DBEAFE', border: COLORS.ACCENT_2, textCol: COLORS.ACCENT_2 },
    { text: 'believ', num: 'tok_02', color: '#FEE2E2', border: COLORS.ACCENT, textCol: COLORS.ACCENT },
    { text: 'able', num: 'tok_03', color: '#FEF3C7', border: '#D97706', textCol: '#B45309' },
    { text: 'Auto', num: 'tok_04', color: '#D1FAE5', border: '#10B981', textCol: '#047857' },
    { text: 'mation', num: 'tok_05', color: '#E0E7FF', border: '#6366F1', textCol: '#4338CA' },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="2.1 // TOKENS"
        tagColor={COLORS.ACCENT}
        title="Words Are Sliced Into Tokens."
        subtitle="Token count controls speed, memory, and cost."
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '500px',
          width: '100%',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {/* Token visualization row */}
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: '50px 60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '320px',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '16px', color: COLORS.MUTED, letterSpacing: '0.08em' }}>
              RAW STRING INPUT: "Unbelievable Automation"
            </span>
            <MonoPill color={COLORS.ACCENT} bg="#FFF0EE" border={COLORS.ACCENT}>
              BYTE-PAIR ENCODING (BPE)
            </MonoPill>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {tokens.map((t) => (
              <div
                key={t.num}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: t.color,
                  border: `2px solid ${t.border}`,
                  padding: '24px 36px',
                  minWidth: '180px',
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: '56px',
                    fontWeight: 800,
                    color: t.textCol,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {t.text}
                </span>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: '14px',
                    fontWeight: 600,
                    color: t.textCol,
                    marginTop: '8px',
                    opacity: 0.8,
                  }}
                >
                  {t.num}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${COLORS.BORDER}`, paddingTop: '16px' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.MUTED }}>
              TOKEN RULE // 1 TOKEN ≈ 4 CHARACTERS (~0.75 WORDS)
            </span>
            <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700, color: COLORS.TEXT }}>
              TOTAL: 2 WORDS = 5 DISCRETE TOKENS
            </span>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { label: 'COMPUTE SPEED', desc: 'Directly proportional to token output length' },
            { label: 'CONTEXT BUDGET', desc: 'Every prompt token subtracts from available memory' },
            { label: 'API INVOICING', desc: 'Billed per 1M input / output tokens strictly' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                backgroundColor: '#FFFFFF',
                border: `1px solid ${COLORS.BORDER}`,
                padding: '24px 30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700, color: COLORS.TEXT }}>
                {item.label}
              </span>
              <span style={{ fontFamily: FONTS.body, fontSize: '17px', color: COLORS.MUTED }}>
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 4: The Context Window (Archetype #6: Capacity Meter)
// ---------------------------------------------------------------------------

const Slide4: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="2.1 // CONTEXT WINDOW"
        tagColor={COLORS.ACCENT}
        title="Short-Term Memory Has a Hard Limit."
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '520px',
          width: '100%',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {/* Main context meter */}
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: '44px 50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '360px',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.MUTED, display: 'block' }}>
                SLIDING ATTENTION WINDOW
              </span>
              <span style={{ fontFamily: FONTS.heading, fontSize: '32px', fontWeight: 800 }}>
                128,000 Tokens Maximum Capacity
              </span>
            </div>
            <MonoPill color={COLORS.ACCENT} bg="#FFF0EE" border={COLORS.ACCENT}>
              FIFO OVERFLOW TRUNCATION
            </MonoPill>
          </div>

          {/* Visual capacity bar showing left falling off */}
          <div style={{ display: 'flex', height: '110px', gap: '16px', alignItems: 'stretch' }}>
            {/* Overflow / Forgotten block (Red dashed) */}
            <div
              style={{
                width: '24%',
                backgroundColor: '#FFF0EE',
                border: `2px dashed ${COLORS.ACCENT}`,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                opacity: 0.8,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} color={COLORS.ACCENT} />
                <span style={{ fontFamily: FONTS.mono, fontSize: '13px', fontWeight: 700, color: COLORS.ACCENT }}>
                  DROPPED FROM MEMORY
                </span>
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: '20px', fontWeight: 800, color: COLORS.ACCENT }}>
                Oldest Instructions
              </span>
            </div>

            {/* Active context block 1: System */}
            <div
              style={{
                width: '26%',
                backgroundColor: '#FFFFFF',
                border: `1px solid ${COLORS.BORDER}`,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontFamily: FONTS.mono, fontSize: '13px', color: COLORS.MUTED }}>
                01 // PERSISTENT
              </span>
              <span style={{ fontFamily: FONTS.heading, fontSize: '20px', fontWeight: 800 }}>
                System Prompt & Rules
              </span>
            </div>

            {/* Active context block 2: Chat History */}
            <div
              style={{
                width: '32%',
                backgroundColor: '#FFFFFF',
                border: `1px solid ${COLORS.BORDER}`,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontFamily: FONTS.mono, fontSize: '13px', color: COLORS.MUTED }}>
                02 // ACCUMULATING
              </span>
              <span style={{ fontFamily: FONTS.heading, fontSize: '20px', fontWeight: 800 }}>
                Recent Conversation Turn
              </span>
            </div>

            {/* Active context block 3: Next Token */}
            <div
              style={{
                width: '18%',
                backgroundColor: COLORS.ACCENT_2,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontFamily: FONTS.mono, fontSize: '13px', color: '#DBEAFE' }}>
                03 // BUFFER
              </span>
              <span style={{ fontFamily: FONTS.heading, fontSize: '20px', fontWeight: 800, color: '#FFFFFF' }}>
                Generation
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${COLORS.BORDER}`, paddingTop: '16px' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT, fontWeight: 700 }}>
              WARNING: LLMS SILENTLY FORGET INITIAL RULES WHEN OVERFILLED
            </span>
            <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
              SOLUTION: RAG & PINNED CONTEXT (DAY 05)
            </span>
          </div>
        </div>

        {/* 2 Takeaway Pills */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.BORDER}`, padding: '24px 32px' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700, color: COLORS.ACCENT, display: 'block', marginBottom: '4px' }}>
              LOST IN THE MIDDLE PHENOMENON
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: '18px', color: COLORS.MUTED }}>
              Models prioritize tokens at the extreme beginning and very end of the window.
            </span>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.BORDER}`, padding: '24px 32px' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700, color: COLORS.ACCENT_2, display: 'block', marginBottom: '4px' }}>
              CONTEXT AS AN OPERATING SYSTEM
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: '18px', color: COLORS.MUTED }}>
              Treat the context window as RAM: keep it lean, structured, and free of junk.
            </span>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 5: Why AI Lies Confidently (Archetype #5: Split Versus)
// ---------------------------------------------------------------------------

const Slide5: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="2.2 // HALLUCINATIONS"
        tagColor={COLORS.ACCENT}
        title="When Probability Beats Truth."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          width: '100%',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {/* Left: Database / Search */}
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '520px',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <MonoPill color={COLORS.ACCENT_2} bg="#EEF2FF" border={COLORS.ACCENT_2}>
                DETERMINISTIC
              </MonoPill>
              <Database size={28} color={COLORS.ACCENT_2} />
            </div>

            <h3 style={{ margin: '0 0 12px 0', fontFamily: FONTS.heading, fontSize: '38px', fontWeight: 800 }}>
              Search / Database
            </h3>
            <p style={{ margin: 0, fontFamily: FONTS.body, fontSize: '22px', color: COLORS.MUTED }}>
              Exact record retrieval from index
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: `1px solid ${COLORS.BORDER}`,
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Check size={24} color={COLORS.ACCENT_2} />
              <span style={{ fontFamily: FONTS.mono, fontSize: '20px', fontWeight: 700, color: COLORS.TEXT }}>
                100% Factually Grounded
              </span>
            </div>
            <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.MUTED }}>
              If data does not exist, returns 404 Not Found.
            </span>
          </div>

          <div style={{ borderTop: `1px solid ${COLORS.BORDER}`, paddingTop: '16px' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.MUTED }}>
              NATURE: RETRIEVAL ENGINE (ZERO CREATIVITY)
            </span>
          </div>
        </div>

        {/* Right: LLM */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: `2px solid ${COLORS.ACCENT}`,
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '520px',
            boxSizing: 'border-box',
            boxShadow: '0 16px 36px rgba(255, 59, 48, 0.08)',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <MonoPill color={COLORS.ACCENT} bg="#FFF0EE" border={COLORS.ACCENT}>
                PROBABILISTIC
              </MonoPill>
              <Sparkles size={28} color={COLORS.ACCENT} />
            </div>

            <h3 style={{ margin: '0 0 12px 0', fontFamily: FONTS.heading, fontSize: '38px', fontWeight: 800 }}>
              Large Language Model
            </h3>
            <p style={{ margin: 0, fontFamily: FONTS.body, fontSize: '22px', color: COLORS.MUTED }}>
              Plausible linguistic pattern simulator
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#FFF0EE',
              border: `1px solid ${COLORS.ACCENT}`,
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AlertTriangle size={24} color={COLORS.ACCENT} />
              <span style={{ fontFamily: FONTS.mono, fontSize: '20px', fontWeight: 700, color: COLORS.ACCENT }}>
                Confident Fiction (Hallucination)
              </span>
            </div>
            <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.ACCENT }}>
              Optimizes for text coherence, not factual truth.
            </span>
          </div>

          <div style={{ borderTop: `1px solid ${COLORS.BORDER}`, paddingTop: '16px' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.ACCENT, fontWeight: 700 }}>
              NATURE: GENERATIVE GUESS (ALWAYS VERIFY CRITICAL CLAIMS)
            </span>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 6: Verification Rules (Archetype #4: 3-Column Swiss Grid)
// ---------------------------------------------------------------------------

const Slide6: Page = () => {
  const guardrails = [
    {
      num: '01',
      title: 'Legal & Medical',
      desc: 'Never rely on raw LLM claims for statutory laws, medical dosage, or contractual compliance.',
      icon: Scale,
    },
    {
      num: '02',
      title: 'Strict Math & Finance',
      desc: 'Transformers struggle with multi-digit arithmetic. Delegate all calculus to Python or code interpreters.',
      icon: Calculator,
    },
    {
      num: '03',
      title: 'Company Secrets',
      desc: 'Never input unredacted customer PII or proprietary API keys into public web model endpoints.',
      icon: ShieldAlert,
    },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="2.2 // GUARDRAILS"
        tagColor={COLORS.ACCENT}
        title="Never Trust Blindly. Verify Critical Data."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
          width: '100%',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {guardrails.map((g) => {
          const Icon = g.icon;
          return (
            <div
              key={g.num}
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: '44px 36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '520px',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: '32px', fontWeight: 700, color: COLORS.ACCENT }}>
                  {g.num}
                </span>
                <MonoPill color={COLORS.ACCENT} bg="#FFF0EE" border={COLORS.ACCENT}>
                  HIGH RISK ZONE
                </MonoPill>
              </div>

              <div>
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    backgroundColor: '#FFFFFF',
                    border: `1px solid ${COLORS.BORDER}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: COLORS.ACCENT,
                    marginBottom: '28px',
                  }}
                >
                  <Icon size={36} strokeWidth={2} />
                </div>
                <h3
                  style={{
                    margin: '0 0 16px 0',
                    fontFamily: FONTS.heading,
                    fontSize: '36px',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {g.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: FONTS.body,
                    fontSize: '20px',
                    lineHeight: 1.45,
                    color: COLORS.MUTED,
                  }}
                >
                  {g.desc}
                </p>
              </div>

              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
                RULE // HUMAN-IN-THE-LOOP REQUIRED
              </span>
            </div>
          );
        })}
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 7: Garbage In, Garbage Out (Archetype #5: Before & After)
// ---------------------------------------------------------------------------

const Slide7: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="2.3 // CLEAR INSTRUCTIONS"
        tagColor={COLORS.ACCENT}
        title="Vague Wishes vs. Engineering Specs."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          width: '100%',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {/* Left: Vague Prompt */}
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '520px',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <MonoPill color={COLORS.MUTED}>VAGUE WISH (BAD INPUT)</MonoPill>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: '#FEE2E2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: COLORS.ACCENT,
                }}
              >
                <X size={20} strokeWidth={2.5} />
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: `1px solid ${COLORS.BORDER}`,
                padding: '24px',
                marginBottom: '24px',
              }}
            >
              <p style={{ margin: 0, fontFamily: FONTS.mono, fontSize: '24px', color: COLORS.MUTED }}>
                "Write a marketing post for my store."
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: `1px solid ${COLORS.BORDER}`,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ fontFamily: FONTS.mono, fontSize: '13px', color: COLORS.MUTED }}>
              RESULTING MODEL OUTPUT:
            </span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 700, color: COLORS.MUTED }}>
              Generic, Robotic, Forgettable Essay
            </span>
          </div>

          <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
            ACCURACY: ~20% // WASTES TOKENS & TIME
          </span>
        </div>

        {/* Right: Engineering Spec */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: `2px solid ${COLORS.ACCENT_2}`,
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '520px',
            boxSizing: 'border-box',
            boxShadow: '0 16px 40px rgba(37, 99, 235, 0.08)',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <MonoPill color={COLORS.ACCENT_2} bg="#EEF2FF" border={COLORS.ACCENT_2}>
                ENGINEERING SPEC (ELITE INPUT)
              </MonoPill>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: '#DBEAFE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: COLORS.ACCENT_2,
                }}
              >
                <Check size={22} strokeWidth={3} />
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#F8FAFC',
                border: `1px solid ${COLORS.ACCENT_2}`,
                padding: '24px',
                marginBottom: '24px',
              }}
            >
              <p style={{ margin: 0, fontFamily: FONTS.mono, fontSize: '22px', fontWeight: 600, color: COLORS.TEXT }}>
                5-Part Formula: [Role] + [Context] + [Task] + [Constraints] + [Format]
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#EFF6FF',
              border: `1px solid ${COLORS.ACCENT_2}`,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ fontFamily: FONTS.mono, fontSize: '13px', color: COLORS.ACCENT_2, fontWeight: 700 }}>
              RESULTING MODEL OUTPUT:
            </span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 800, color: COLORS.ACCENT_2 }}>
              High-Converting, Targeted, Client-Ready Copy
            </span>
          </div>

          <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT_2, fontWeight: 700 }}>
            ACCURACY: 98% FIRST-SHOT PRODUCTION QUALITY
          </span>
        </div>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 8: The 5-Part Prompt Framework (Archetype #4: Linear Steps)
// ---------------------------------------------------------------------------

const Slide8: Page = () => {
  const parts = [
    { num: '01', title: 'Role', sub: 'Persona & Expertise', icon: UserCheck },
    { num: '02', title: 'Context', sub: 'Audience & Background', icon: Layers },
    { num: '03', title: 'Task', sub: 'Exact Core Action', icon: Crosshair },
    { num: '04', title: 'Constraints', sub: 'Negative Limits & Rules', icon: Shield },
    { num: '05', title: 'Format', sub: 'JSON / Table / Markdown', icon: Table },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="2.3 // THE FRAMEWORK"
        tagColor={COLORS.ACCENT}
        title="The 5-Part Prompt Formula."
      />

      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', width: '100%', marginTop: 'auto', marginBottom: '20px', translate: '0px -165.1px' }}
      >
        {parts.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={p.num}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '460px',
                padding: '36px',
                boxSizing: 'border-box',
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: '44px',
                    fontWeight: 700,
                    color: COLORS.ACCENT,
                  }}
                >
                  {p.num}
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: '13px', color: COLORS.MUTED }}>
                  STEP
                </span>
              </div>

              <div>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#FFFFFF',
                    border: `1px solid ${COLORS.BORDER}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: COLORS.TEXT,
                    marginBottom: '24px',
                  }}
                >
                  <Icon size={32} />
                </div>
                <h3
                  style={{
                    margin: '0 0 8px 0',
                    fontFamily: FONTS.heading,
                    fontSize: '32px',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: FONTS.mono,
                    fontSize: '15px',
                    color: COLORS.MUTED,
                  }}
                >
                  {p.sub}
                </p>
              </div>

              <div style={{ borderTop: `1px solid ${COLORS.BORDER}`, paddingTop: '16px' }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: '13px', color: COLORS.MUTED }}>
                  {idx < 4 ? 'BLOCK CHAIN →' : 'FINAL DELIVERABLE'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 9: Anatomy of an Elite Prompt (Archetype #7: Color-Coded Anatomy Box)
// ---------------------------------------------------------------------------

const Slide9: Page = () => {
  const anatomyLines = [
    { tag: 'ROLE', text: 'You are an elite B2B conversion copywriter specializing in developer tools.', bg: '#DBEAFE', color: COLORS.ACCENT_2 },
    { tag: 'CONTEXT', text: 'We are launching an open-source workflow automation product to senior DevOps engineers.', bg: '#FEF3C7', color: '#B45309' },
    { tag: 'TASK', text: 'Write a 3-part announcement post optimized for high engagement on LinkedIn.', bg: '#D1FAE5', color: '#047857' },
    { tag: 'CONSTRAINTS', text: 'Under 150 words. Zero hype buzzwords. No emojis. Active voice verbs only.', bg: '#FEE2E2', color: COLORS.ACCENT },
    { tag: 'FORMAT', text: 'Return a clean Markdown table with columns: [Hook], [Body], and [Call-to-Action].', bg: '#EDE9FE', color: '#6D28D9' },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="2.3 // LIVE ANATOMY"
        tagColor={COLORS.ACCENT}
        title="Every Sentence Has a Job."
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: COLORS.SURFACE,
          border: `1px solid ${COLORS.BORDER}`,
          padding: '44px 50px',
          width: '100%',
          height: '520px',
          boxSizing: 'border-box',
          justifyContent: 'space-between',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: FONTS.mono, fontSize: '16px', color: COLORS.MUTED, letterSpacing: '0.08em' }}>
            ENGINEERED PROMPT CADENCE // 5 PILLARS
          </span>
          <MonoPill color={COLORS.ACCENT} bg="#FFF0EE" border={COLORS.ACCENT}>
            PRODUCTION SPEC
          </MonoPill>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {anatomyLines.map((row) => (
            <div
              key={row.tag}
              style={{
                display: 'grid',
                gridTemplateColumns: '170px 1fr',
                alignItems: 'center',
                gap: '24px',
                backgroundColor: '#FFFFFF',
                border: `1px solid ${COLORS.BORDER}`,
                padding: '16px 24px',
              }}
            >
              <div
                style={{
                  backgroundColor: row.bg,
                  color: row.color,
                  fontFamily: FONTS.mono,
                  fontSize: '15px',
                  fontWeight: 700,
                  padding: '6px 14px',
                  textAlign: 'center',
                  letterSpacing: '0.08em',
                }}
              >
                [{row.tag}]
              </div>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: '20px',
                  color: COLORS.TEXT,
                  lineHeight: 1.3,
                }}
              >
                {row.text}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${COLORS.BORDER}`, paddingTop: '16px' }}>
          <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
            RESULT: ELIMINATES 99% OF AMBIGUITY BEFORE MODEL INFERENCE
          </span>
          <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT_2, fontWeight: 700 }}>
            REUSABLE PROMPT TEMPLATE
          </span>
        </div>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 10: The Domain Experience Factor (Archetype #5: Split Versus)
// ---------------------------------------------------------------------------

const Slide10: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="2.3 // THE SECRET WEAPON"
        tagColor={COLORS.ACCENT}
        title="You Can't Prompt What You Don't Know."
        subtitle="Domain vocabulary unlocks elite outputs."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          width: '100%',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {/* Left: Beginner */}
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '520px',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <MonoPill color={COLORS.MUTED}>BEGINNER VOCABULARY</MonoPill>
              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>SURFACE LEVEL</span>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: `1px solid ${COLORS.BORDER}`,
                padding: '28px',
                marginBottom: '24px',
              }}
            >
              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED, display: 'block', marginBottom: '8px' }}>
                DESIGN PROMPT:
              </span>
              <p style={{ margin: 0, fontFamily: FONTS.mono, fontSize: '28px', color: COLORS.MUTED }}>
                "Make it look modern, clean, and nice."
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 700, color: COLORS.MUTED }}>
              Model Output:
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: '20px', color: COLORS.MUTED }}>
              Generic pastel gradients, round buttons, cliché stock aesthetics.
            </span>
          </div>

          <div style={{ borderTop: `1px solid ${COLORS.BORDER}`, paddingTop: '16px' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
              BOTTLENECK: ZERO TECHNICAL LEVERAGE
            </span>
          </div>
        </div>

        {/* Right: Domain Master */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: `2px solid ${COLORS.ACCENT_2}`,
            padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '520px',
            boxSizing: 'border-box',
            boxShadow: '0 16px 40px rgba(37, 99, 235, 0.08)',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <MonoPill color={COLORS.ACCENT_2} bg="#EEF2FF" border={COLORS.ACCENT_2}>
                DOMAIN EXPERT VOCABULARY
              </MonoPill>
              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT_2, fontWeight: 700 }}>
                SURGICAL PRECISION
              </span>
            </div>

            <div
              style={{
                backgroundColor: '#F8FAFC',
                border: `1px solid ${COLORS.ACCENT_2}`,
                padding: '28px',
                marginBottom: '24px',
              }}
            >
              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT_2, display: 'block', marginBottom: '8px' }}>
                DESIGN PROMPT:
              </span>
              <p style={{ margin: 0, fontFamily: FONTS.mono, fontSize: '24px', fontWeight: 700, color: COLORS.TEXT }}>
                "Bauhaus Swiss grid, #09090B ink, 85mm studio lighting, -0.03em tracking."
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span style={{ fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 800, color: COLORS.ACCENT_2 }}>
              Model Output:
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: '20px', color: COLORS.TEXT }}>
              Pixel-perfect editorial layouts, high-contrast typography, gallery-grade assets.
            </span>
          </div>

          <div style={{ borderTop: `1px solid ${COLORS.BORDER}`, paddingTop: '16px' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT_2, fontWeight: 700 }}>
              TAKEAWAY: YOUR INDUSTRY VOCABULARY IS YOUR PROMPTING SUPERPOWER
            </span>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 11: Taming the Yap (Structured Data) (Archetype #5 / #7 Hybrid)
// ---------------------------------------------------------------------------

const Slide11: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="2.4 // STRUCTURED OUTPUTS"
        tagColor={COLORS.ACCENT}
        title="Stop Essays. Demand Clean Data."
        subtitle="The bridge to Day 4 & Day 5 automations."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '24px',
          alignItems: 'center',
          width: '100%',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {/* Left: Chatty unstructured text */}
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '480px',
            boxSizing: 'border-box',
            opacity: 0.7,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <MonoPill color={COLORS.MUTED}>UNSTRUCTURED "YAP"</MonoPill>
            <X size={24} color={COLORS.ACCENT} />
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: `1px solid ${COLORS.BORDER}`,
              padding: '24px',
              fontFamily: FONTS.mono,
              fontSize: '17px',
              lineHeight: 1.6,
              color: COLORS.MUTED,
              textDecoration: 'line-through',
            }}
          >
            "Sure! I would be happy to help you process that incoming email! Based on what the customer wrote, it looks like they want to place an order immediately, so I would suggest routing this to your sales team as soon as possible..."
          </div>

          <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT, fontWeight: 600 }}>
            UNUSABLE FOR APIS // IMPOSSIBLE TO PARSE RELIABLY
          </span>
        </div>

        {/* Middle connector arrow */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <ArrowRight size={44} color={COLORS.ACCENT} strokeWidth={2.5} />
          <span style={{ fontFamily: FONTS.mono, fontSize: '13px', fontWeight: 700, color: COLORS.ACCENT }}>
            JSON SCHEMA
          </span>
        </div>

        {/* Right: Sharp JSON + n8n node */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: `2px solid ${COLORS.ACCENT}`,
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '480px',
            boxSizing: 'border-box',
            boxShadow: '0 16px 36px rgba(255, 59, 48, 0.08)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <MonoPill color={COLORS.ACCENT} bg="#FFF0EE" border={COLORS.ACCENT}>
              MACHINE-READABLE SCHEMA
            </MonoPill>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981' }}>
              <Workflow size={20} />
              <span style={{ fontFamily: FONTS.mono, fontSize: '13px', fontWeight: 700 }}>
                N8N READY
              </span>
            </div>
          </div>

          {/* JSON code block */}
          <div
            style={{
              backgroundColor: '#09090B',
              padding: '24px',
              fontFamily: FONTS.mono,
              fontSize: '20px',
              lineHeight: 1.6,
              color: '#FFFFFF',
            }}
          >
            <span style={{ color: '#71717A' }}>&#123;</span>
            <br />
            &nbsp;&nbsp;<span style={{ color: '#60A5FA' }}>"intent"</span>: <span style={{ color: '#34D399' }}>"order"</span>,
            <br />
            &nbsp;&nbsp;<span style={{ color: '#60A5FA' }}>"priority"</span>: <span style={{ color: '#F87171' }}>"high"</span>,
            <br />
            &nbsp;&nbsp;<span style={{ color: '#60A5FA' }}>"route"</span>: <span style={{ color: '#FBBF24' }}>"sales"</span>,
            <br />
            &nbsp;&nbsp;<span style={{ color: '#60A5FA' }}>"estimated_value"</span>: <span style={{ color: '#A78BFA' }}>4500</span>
            <br />
            <span style={{ color: '#71717A' }}>&#125;</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT, fontWeight: 700 }}>
              DIRECT INGESTION INTO AIRTABLE, POSTGRES & SLACK
            </span>
            <Check size={24} color="#10B981" strokeWidth={3} />
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide Metadata & Speaker Notes
// ---------------------------------------------------------------------------

export const notes: string[] = [
  // Slide 1
  'Welcome to Day 2. Today we pop open the black box. Before you can write elite prompts or build autonomous agents, you must understand the mathematical mechanics governing LLMs: token prediction, hallucinations, our 5-part prompt engineering framework, and structured outputs.',

  // Slide 2
  'Remember this core reality: an LLM does not think, reason, or understand. It calculates probability distributions over the next chunk of characters. When you prompt "The capital of Egypt is", Cairo receives a 94% softmax probability weight.',

  // Slide 3
  'Models do not process English words; they slice text into tokens via Byte-Pair Encoding. The phrase "Unbelievable Automation" is 2 words but 5 discrete tokens. Every token consumed or produced directly impacts execution speed, context limits, and API costs.',

  // Slide 4
  'The context window is short-term RAM. When your conversation surpasses 128K tokens, models silently drop the earliest tokens off the left side. If your initial rules get pushed out of the window, the model will stop following them.',

  // Slide 5
  'Why do LLMs hallucinate with utter confidence? Because a search engine retrieves exact verified database records, whereas an LLM produces the most linguistically plausible next words regardless of factual truth.',

  // Slide 6
  'Three strict guardrails for production: Never trust raw LLMs with legal or medical statutory facts, never let transformers do raw multi-digit math without code execution, and never paste confidential PII into public model interfaces.',

  // Slide 7
  'Garbage in, garbage out. A one-sentence vague wish yields generic robotic spam that sounds like every other AI-generated essay on the internet. An engineered specification yields client-ready production assets on the first pass.',

  // Slide 8
  'Here is our core 5-part prompt formula: Role, Context, Task, Constraints, and Format. Memorize this sequence. Every prompt you feed into an automation pipeline must define all five pillars.',

  // Slide 9
  'Look at the live anatomy of an elite prompt: Every single sentence performs a specific job. Role frames the persona, Context provides background, Task specifies the deliverable, Constraints eliminate buzzwords, and Format enforces a tabular layout.',

  // Slide 10
  'Here is the secret weapon: You cannot prompt what you do not know. If you tell an AI to make something look "modern and nice", you get cliché gradients. If you use real domain vocabulary like "Bauhaus Swiss grid, #09090B ink, 85mm lighting", you unlock museum-grade outputs.',

  // Slide 11
  'Stop accepting conversational paragraphs from your models. In Days 4 and 5, our n8n agents need machine-readable JSON payloads with strict keys like intent, priority, and route so downstream tools can act without human intervention.',
];

export const meta: SlideMeta = {
  title: 'Lecture 2: LLM Mechanics and Prompt Engineering',
  createdAt: '2026-11-11T13:28:29.307Z',
};

export default [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
] satisfies Page[];
