import React, { type CSSProperties, type ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { Step, Steps } from '@open-slide/core';
import {
  Globe,
  Terminal,
  Layout,
  Workflow,
  Bot,
  Sparkles,
  Zap,
  TrendingDown,
  TrendingUp,
  Package,
  X,
  Check,
  Sigma,
  Coins,
  MessageCircleOff,
  Hammer,
  Briefcase,
  Cpu,
  ArrowRight,
  Clock,
  Maximize2,
  AlertTriangle,
  Braces,
  Database,
  Scale,
  Calculator,
  ShieldAlert,
  UserCheck,
  Layers,
  Crosshair,
  Shield,
  Table,
  DollarSign,
  Activity,
  Users,
  Mail,
  Image as ImageIcon,
  Code,
  Send,
  Inbox,
} from 'lucide-react';

import {
  COLORS,
  FONTS,
  CANVAS,
  SlideContainer,
  SlideHeader,
  SwissCard,
  SectionTag,
  deckTransition,
} from '../../theme';

// Module-level transition (Quiet Swiss rise)
export const transition: SlideTransition = deckTransition;

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
// Clean Reusable Components (Rule of Three)
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

function ImagePlaceholderBox({
  title,
  subtitle,
  height = 320,
  accent = false,
}: {
  title: string;
  subtitle: string;
  height?: number | string;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height,
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${accent ? COLORS.ACCENT : COLORS.BORDER}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        background: `repeating-linear-gradient(45deg, #F4F4F5, #F4F4F5 10px, #EEEEF0 10px, #EEEEF0 20px)`,
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          border: `1px solid ${COLORS.BORDER}`,
          backgroundColor: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: COLORS.MUTED,
        }}
      >
        <Maximize2 size={20} />
      </div>
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: '17px',
          fontWeight: 700,
          color: COLORS.TEXT,
          letterSpacing: '0.05em',
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: '13px',
          color: COLORS.MUTED,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        {subtitle}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Reusable 5-Day Roadmap Component (Rule of Three)
// ---------------------------------------------------------------------------

function CampRoadmap({ activeDay }: { activeDay?: string }) {
  const days = [
    { num: '01', title: 'Mindset & Leverage', icon: Globe },
    { num: '02', title: 'Prompt Engineering', icon: Terminal },
    { num: '03', title: 'Brand & Web Studio', icon: Layout },
    { num: '04', title: 'n8n Foundations', icon: Workflow },
    { num: '05', title: 'AI Agents & RAG', icon: Bot },
  ];

  const isMainTitle = !activeDay;
  const tag = isMainTitle
    ? 'AI CAMP // 5-DAY ROADMAP'
    : `DAY ${activeDay} // TOPIC ROADMAP`;
  const title = isMainTitle
    ? 'From Chatting to Building Systems.'
    : `Day ${activeDay}: ${
        activeDay === '01'
          ? 'AI Leverage, Economics, and Revenue.'
          : 'LLM Mechanics and Prompt Engineering.'
      }`;
  const subtitle = isMainTitle
    ? 'A 5-day architectural roadmap from prompting to autonomous production.'
    : `Today's mission and position in the 5-day system curriculum.`;

  return (
    <SlideContainer>
      <SlideHeader tag={tag} title={title} subtitle={subtitle} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '20px',
          width: '100%',
        }}
      >
        <Steps>
          {days.map((d) => {
            const Icon = d.icon;
            const isActive = activeDay === d.num;
            return (
              <Step key={d.num}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '380px',
                    padding: '36px',
                    boxSizing: 'border-box',
                    backgroundColor: isActive ? '#FFFFFF' : COLORS.SURFACE,
                    border: `2px solid ${isActive ? COLORS.ACCENT : COLORS.BORDER}`,
                    boxShadow: isActive ? '0 12px 30px rgba(255, 59, 48, 0.08)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: '44px',
                        fontWeight: 700,
                        color: isActive ? COLORS.ACCENT : COLORS.MUTED,
                      }}
                    >
                      {d.num}
                    </span>
                    {isActive && (
                      <MonoPill color="#FFFFFF" bg={COLORS.ACCENT} border={COLORS.ACCENT}>
                        TODAY
                      </MonoPill>
                    )}
                  </div>

                  <div>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isActive ? '#FFF0EE' : '#FFFFFF',
                        border: `1px solid ${isActive ? COLORS.ACCENT : COLORS.BORDER}`,
                        marginBottom: '20px',
                        color: isActive ? COLORS.ACCENT : COLORS.TEXT,
                      }}
                    >
                      <Icon size={28} />
                    </div>
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: FONTS.heading,
                        fontSize: '26px',
                        fontWeight: 800,
                        lineHeight: 1.15,
                        color: COLORS.TEXT,
                      }}
                    >
                      {d.title}
                    </h3>
                  </div>
                </div>
              </Step>
            );
          })}
        </Steps>
      </div>
    </SlideContainer>
  );
}

// ===========================================================================
// GENERAL CAMP SLIDES (Introductory Sequence)
// ===========================================================================

// Slide 1: Main Title Slide (5-Day Roadmap with NO highlights)
const Slide1_MainTitle: Page = () => <CampRoadmap />;

// Slide 2: General Camp Deliverables (4 Products You Will Ship This Week)
const Slide2_Deliverables: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="AI CAMP // DELIVERABLES"
        title="4 Products You Will Ship This Week."
        subtitle="Deploy four functional production deliverables across the 5 days."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          width: '100%',
          height: '420px',
        }}
      >
        <Steps>
          <Step>
            <SwissCard style={{ height: '100%', justifyContent: 'space-between' }}>
              <Sparkles size={28} color={COLORS.ACCENT} />
              <div>
                <div style={{ fontFamily: FONTS.heading, fontSize: '72px', fontWeight: 800, lineHeight: 1 }}>Aa</div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
                  {['#09090B', '#FF3B30', '#2563EB', '#E4E4E7'].map((c) => (
                    <span
                      key={c}
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: c,
                        border: `1px solid ${COLORS.BORDER}`,
                        display: 'inline-block',
                      }}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h4 style={{ margin: '0 0 6px 0', fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 800 }}>
                  Brand Identity
                </h4>
                <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
                  Typography & Palette Tokens
                </span>
              </div>
            </SwissCard>
          </Step>

          <Step>
            <SwissCard style={{ height: '100%', justifyContent: 'space-between' }}>
              <Maximize2 size={28} color={COLORS.ACCENT} />
              <ImagePlaceholderBox title="STUDIO ASSET" subtitle="4K EDITORIAL" height={220} />
              <div>
                <h4 style={{ margin: '0 0 6px 0', fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 800 }}>
                  Commercial Studio
                </h4>
                <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
                  AI Generated Product Photos
                </span>
              </div>
            </SwissCard>
          </Step>

          <Step>
            <SwissCard style={{ height: '100%', justifyContent: 'space-between' }}>
              <Layout size={28} color={COLORS.ACCENT_2} />
              <ImagePlaceholderBox title="LOVABLE WEB APP" subtitle="WEBSITE UI MOCKUP" height={220} />
              <div>
                <h4 style={{ margin: '0 0 6px 0', fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 800 }}>
                  Web Application
                </h4>
                <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
                  Full-Stack Interactive Code
                </span>
              </div>
            </SwissCard>
          </Step>

          <Step>
            <SwissCard style={{ height: '100%', justifyContent: 'space-between' }}>
              <Workflow size={28} color={COLORS.ACCENT} />
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: `1px solid ${COLORS.BORDER}`,
                  padding: '20px',
                  height: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '14px',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#FFF0EE',
                    border: `2px solid ${COLORS.ACCENT}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: COLORS.ACCENT,
                  }}
                >
                  <Workflow size={36} />
                </div>
                <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700, color: COLORS.TEXT }}>
                  n8n ENGINE
                </span>
              </div>
              <div>
                <h4 style={{ margin: '0 0 6px 0', fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 800 }}>
                  Automated Pipeline
                </h4>
                <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
                  Autonomous n8n Backend
                </span>
              </div>
            </SwissCard>
          </Step>
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 3: Audience Filter (Swapped Order: For You on Left, Out of Scope on Right)
const Slide3_Audience: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="AI CAMP // AUDIENCE"
        title="Built for Builders. Not Spectators."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          width: '100%',
        }}
      >
        <Steps>
          {/* Left: For You */}
          <Step>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: `2px solid ${COLORS.ACCENT_2}`,
                padding: '48px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '460px',
                boxSizing: 'border-box',
                boxShadow: '0 12px 30px rgba(37, 99, 235, 0.08)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: '32px', fontWeight: 800, color: COLORS.ACCENT_2 }}>
                  For You
                </span>
                <Check size={28} color={COLORS.ACCENT_2} strokeWidth={3} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { text: 'Creators who build software', icon: Hammer },
                  { text: 'Freelancers and operators', icon: Briefcase },
                  { text: 'Engineers who build systems', icon: Cpu },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <Icon size={24} color={COLORS.ACCENT_2} />
                      <span style={{ fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 800, color: COLORS.TEXT }}>
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT_2, fontWeight: 700 }}>
                100% PRODUCTION EXECUTION
              </span>
            </div>
          </Step>

          {/* Right: Out of Scope */}
          <Step>
            <div
              style={{
                backgroundColor: COLORS.SURFACE,
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
                <span style={{ fontFamily: FONTS.heading, fontSize: '32px', fontWeight: 800, color: COLORS.MUTED }}>
                  Out of Scope
                </span>
                <X size={28} color={COLORS.ACCENT} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { text: 'Mathematical theory papers', icon: Sigma },
                  { text: 'Passive financial schemes', icon: Coins },
                  { text: 'Casual chat usage', icon: MessageCircleOff },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '16px', opacity: 0.7 }}>
                      <Icon size={24} color={COLORS.MUTED} />
                      <span style={{ fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 700, color: COLORS.MUTED, textDecoration: 'line-through' }}>
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
                ZERO THEORETICAL LECTURING
              </span>
            </div>
          </Step>
        </Steps>
      </div>
    </SlideContainer>
  );
};

// ===========================================================================
// DAY 01: AI LEVERAGE, ECONOMICS, AND REVENUE GENERATION
// ===========================================================================

// Slide 4: Day 1 Topic Roadmap (Day 01 Highlighted)
const Slide4_D1Roadmap: Page = () => <CampRoadmap activeDay="01" />;

// Slide 5: Day 1 Outcomes (Rewritten in ASD-STE100)
const Slide5_D1Outcomes: Page = () => {
  const outcomes = [
    { num: '01', title: 'Compute Limits', desc: 'Learn why hardware limits AI development.', icon: Globe },
    { num: '02', title: 'Personal Leverage', desc: 'Compress 30 days of team work into 3 hours.', icon: Clock },
    { num: '03', title: 'Revenue Models', desc: 'Build high-margin client and system services.', icon: Zap },
    { num: '04', title: 'Arbitrage Pricing', desc: 'Sell fixed business outcomes, not working hours.', icon: DollarSign },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 01 // OUTCOMES"
        title="What You Will Learn Today."
        subtitle="Key takeaways and skills for Day 1."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', width: '100%' }}>
        <Steps>
          {outcomes.map((o) => {
            const Icon = o.icon;
            return (
              <Step key={o.num}>
                <div
                  style={{
                    backgroundColor: COLORS.SURFACE,
                    border: `1px solid ${COLORS.BORDER}`,
                    padding: '36px',
                    height: '380px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                  }}
                >
                  <span style={{ fontFamily: FONTS.mono, fontSize: '40px', fontWeight: 800, color: COLORS.ACCENT }}>
                    {o.num}
                  </span>
                  <div>
                    <Icon size={36} color={COLORS.TEXT} style={{ marginBottom: '16px' }} />
                    <h3 style={{ margin: '0 0 8px 0', fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 800 }}>
                      {o.title}
                    </h3>
                    <p style={{ margin: 0, fontFamily: FONTS.body, fontSize: '18px', color: COLORS.MUTED }}>
                      {o.desc}
                    </p>
                  </div>
                </div>
              </Step>
            );
          })}
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 6: Industry Leaders
const Slide6_Leaders: Page = () => {
  const leaders = [
    { name: 'Sam Altman', org: 'OpenAI', desc: 'Frontier models' },
    { name: 'Jensen Huang', org: 'NVIDIA', desc: 'Compute hardware' },
    { name: 'Dario Amodei', org: 'Anthropic', desc: 'AI safety & code' },
    { name: 'Sundar Pichai', org: 'Google', desc: 'Global AI ecosystem' },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 01 // INDUSTRY"
        title="Leaders of the AI Economy."
        subtitle="These architects control global compute and frontier intelligence."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          width: '100%',
        }}
      >
        <Steps>
          {leaders.map((p) => (
            <Step key={p.name}>
              <div
                style={{
                  backgroundColor: COLORS.SURFACE,
                  border: `1px solid ${COLORS.BORDER}`,
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '440px',
                  boxSizing: 'border-box',
                }}
              >
                <MonoPill>{p.org}</MonoPill>
                <ImagePlaceholderBox title={p.name.toUpperCase()} subtitle="PORTRAIT" height={240} />
                <div>
                  <h3 style={{ margin: '0 0 4px 0', fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 800 }}>
                    {p.name}
                  </h3>
                  <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
                    {p.desc}
                  </span>
                </div>
              </div>
            </Step>
          ))}
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 7: Massive Infrastructure Spending & Importance
const Slide7_PhysicalScale: Page = () => {
  const hardwareCards = [
    {
      metric: 'GPU CAPITAL SPENDING',
      val: '$40,000+',
      sub: 'Per H100 / B200 unit',
      desc: 'Companies spend hundreds of billions on GPUs because compute dictates future economic power.',
      color: COLORS.ACCENT,
      imgTitle: 'FRONTIER GPUS',
      imgSub: 'CAPITAL EXPENDITURE',
    },
    {
      metric: 'RAM INFRASTRUCTURE RACE',
      val: 'HBM3e',
      sub: 'Memory bandwidth limit',
      desc: 'High-bandwidth memory chips are sold out for 18+ months as hyperscalers fund massive buildouts.',
      color: COLORS.ACCENT_2,
      imgTitle: 'HBM3e MEMORY',
      imgSub: 'CRITICAL SILICON',
    },
    {
      metric: 'HISTORIC CHIP PROFITS',
      val: '75%+ Margin',
      sub: 'NVIDIA & TSMC dominance',
      desc: 'Massive infrastructure spending makes semiconductor manufacturers the most profitable firms in history.',
      color: COLORS.TEXT,
      imgTitle: 'CHIP VALUATION',
      imgSub: 'MARKET DOMINANCE',
    },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 01 // INFRASTRUCTURE SPENDING"
        title="Trillions in Capital Flow Into AI Infrastructure."
        subtitle="Massive spending on GPUs, RAM, and silicon proves AI is the most critical modern asset."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          width: '100%',
        }}
      >
        <Steps>
          {hardwareCards.map((h) => (
            <Step key={h.metric}>
              <div
                style={{
                  backgroundColor: COLORS.SURFACE,
                  border: `1px solid ${COLORS.BORDER}`,
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '460px',
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: '14px',
                        fontWeight: 700,
                        color: h.color,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {h.metric}
                    </span>
                    <span style={{ fontFamily: FONTS.mono, fontSize: '13px', color: COLORS.MUTED }}>
                      {h.sub}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: '44px',
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      marginBottom: '16px',
                    }}
                  >
                    {h.val}
                  </div>
                </div>

                <ImagePlaceholderBox
                  title={h.imgTitle}
                  subtitle={h.imgSub}
                  height={180}
                />

                <p
                  style={{
                    margin: 0,
                    fontFamily: FONTS.body,
                    fontSize: '16px',
                    lineHeight: 1.45,
                    color: COLORS.MUTED,
                  }}
                >
                  {h.desc}
                </p>
              </div>
            </Step>
          ))}
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 8: Leverage Equation & Iron Triangle
const Slide8_LeverageEquation: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 01 // LEVERAGE"
        title="Break the Project Iron Triangle."
        subtitle="Autonomous systems eliminate the classic trade-off between speed, cost, and quality."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.3fr',
          gap: '32px',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left: The Iron Triangle Diagram */}
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '440px',
            boxSizing: 'border-box',
          }}
        >
          <span style={{ fontFamily: FONTS.mono, fontSize: '14px', fontWeight: 700, color: COLORS.MUTED }}>
            THE CLASSICAL CONSTRAINT
          </span>

          {/* SVG Triangle */}
          <div style={{ position: 'relative', width: '280px', height: '240px' }}>
            <svg width="280" height="240" viewBox="0 0 280 240">
              <polygon
                points="140,24 24,206 256,206"
                fill="#FFFFFF"
                stroke={COLORS.BORDER}
                strokeWidth="2"
              />
              <circle cx="140" cy="24" r="8" fill={COLORS.ACCENT} />
              <circle cx="24" cy="206" r="8" fill={COLORS.ACCENT_2} />
              <circle cx="256" cy="206" r="8" fill={COLORS.TEXT} />
            </svg>
            <div style={{ position: 'absolute', top: '-6px', left: '160px', fontFamily: FONTS.mono, fontSize: '14px', fontWeight: 800, color: COLORS.ACCENT }}>
              FAST (TIME)
            </div>
            <div style={{ position: 'absolute', bottom: '2px', left: '-20px', fontFamily: FONTS.mono, fontSize: '14px', fontWeight: 800, color: COLORS.ACCENT_2 }}>
              CHEAP (MONEY)
            </div>
            <div style={{ position: 'absolute', bottom: '2px', right: '-14px', fontFamily: FONTS.mono, fontSize: '14px', fontWeight: 800 }}>
              GOOD (QUALITY)
            </div>
            <div style={{ position: 'absolute', top: '110px', left: '85px', textAlign: 'center', width: '110px' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '16px', fontWeight: 800, color: COLORS.ACCENT }}>
                AI BREAKS THE LIMIT
              </span>
            </div>
          </div>

          <span style={{ fontFamily: FONTS.body, fontSize: '15px', color: COLORS.MUTED, textAlign: 'center' }}>
            Traditional law: "Pick two." AI pipelines deliver all three simultaneously.
          </span>
        </div>

        {/* Right: Comparative cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Steps>
            <Step>
              <div
                style={{
                  backgroundColor: COLORS.SURFACE,
                  border: `1px solid ${COLORS.BORDER}`,
                  padding: '28px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '28px', fontWeight: 800, color: COLORS.MUTED }}>
                    Standard Agency Team
                  </span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Users size={20} color={COLORS.MUTED} />
                    <Clock size={20} color={COLORS.MUTED} />
                    <DollarSign size={20} color={COLORS.MUTED} />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: FONTS.body, fontSize: '18px', color: COLORS.MUTED }}>
                    5 roles • $25,000 payroll burn • Meeting overhead
                  </span>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 800, color: COLORS.MUTED }}>
                    30 Days
                  </span>
                </div>
              </div>
            </Step>

            <Step>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: `2px solid ${COLORS.ACCENT}`,
                  padding: '28px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  boxShadow: '0 12px 30px rgba(255, 59, 48, 0.08)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '28px', fontWeight: 800, color: COLORS.TEXT }}>
                    1 Builder + AI Pipelines
                  </span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <UserCheck size={20} color={COLORS.ACCENT} />
                    <Zap size={20} color={COLORS.ACCENT} />
                    <Sparkles size={20} color={COLORS.ACCENT} />
                    <Workflow size={20} color={COLORS.ACCENT} />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: FONTS.body, fontSize: '18px', color: COLORS.TEXT, fontWeight: 500 }}>
                    1 builder • Near-$0 compute cost • High-fidelity verified deliverable
                  </span>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 800, color: COLORS.ACCENT }}>
                    3 Hours
                  </span>
                </div>
              </div>
            </Step>
          </Steps>
        </div>
      </div>
    </SlideContainer>
  );
};

// Slide 9: Consumer vs Builder with spelled prompts and bold AI pipelines
const Slide9_ConsumerVsBuilder: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 01 // MINDSET"
        title="Stop Chatting. Build Systems."
        subtitle="Move from single manual prompts to automated continuous pipelines."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '32px', width: '100%' }}>
        <Steps>
          {/* Left: Consumer */}
          <Step>
            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: '36px',
                height: '460px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
              }}
            >
              <div>
                <span style={{ fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 800, color: COLORS.MUTED, display: 'block', marginBottom: '18px' }}>
                  The Consumer (1-to-1 Manual)
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { prompt: '"Write me an email about our project timeline..."', icon: Mail },
                    { prompt: '"Generate an image of a modern coffee shop interior..."', icon: ImageIcon },
                    { prompt: '"Debug this function and fix the syntax error..."', icon: Code },
                  ].map((ex) => {
                    const Icon = ex.icon;
                    return (
                      <div
                        key={ex.prompt}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          backgroundColor: '#FFFFFF',
                          border: `1px solid ${COLORS.BORDER}`,
                          padding: '16px',
                        }}
                      >
                        <Icon size={22} color={COLORS.MUTED} />
                        <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.MUTED, lineHeight: 1.3 }}>
                          {ex.prompt}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
                MANUAL LINEAR WORK // STOPS WHEN YOU CLOSE THE BROWSER
              </span>
            </div>
          </Step>

          {/* Right: System Builder */}
          <Step>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: `2px solid ${COLORS.ACCENT_2}`,
                padding: '36px',
                height: '460px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                boxShadow: '0 12px 30px rgba(37, 99, 235, 0.08)',
              }}
            >
              <div>
                <span style={{ fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 800, color: COLORS.ACCENT_2, display: 'block', marginBottom: '22px' }}>
                  The System Builder (1-to-Many Autonomous)
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  {/* Pipeline 1 */}
                  <div style={{ backgroundColor: '#F8FAFC', border: `1px solid ${COLORS.ACCENT_2}`, padding: '22px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Globe size={28} color={COLORS.ACCENT_2} />
                        <span style={{ fontFamily: FONTS.heading, fontSize: '22px', fontWeight: 800 }}>Trigger</span>
                      </div>
                      <ArrowRight size={26} color={COLORS.ACCENT_2} strokeWidth={2.5} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#DBEAFE', padding: '6px 16px' }}>
                        <Cpu size={28} color={COLORS.ACCENT_2} />
                        <span style={{ fontFamily: FONTS.heading, fontSize: '22px', fontWeight: 800, color: COLORS.ACCENT_2 }}>AI</span>
                      </div>
                      <ArrowRight size={26} color={COLORS.ACCENT_2} strokeWidth={2.5} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Send size={28} color={COLORS.ACCENT_2} />
                        <span style={{ fontFamily: FONTS.heading, fontSize: '22px', fontWeight: 800 }}>Publish</span>
                      </div>
                    </div>
                  </div>

                  {/* Pipeline 2 */}
                  <div style={{ backgroundColor: '#F8FAFC', border: `1px solid ${COLORS.ACCENT_2}`, padding: '22px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Inbox size={28} color={COLORS.ACCENT_2} />
                        <span style={{ fontFamily: FONTS.heading, fontSize: '22px', fontWeight: 800 }}>Webhook</span>
                      </div>
                      <ArrowRight size={26} color={COLORS.ACCENT_2} strokeWidth={2.5} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#DBEAFE', padding: '6px 16px' }}>
                        <Cpu size={28} color={COLORS.ACCENT_2} />
                        <span style={{ fontFamily: FONTS.heading, fontSize: '22px', fontWeight: 800, color: COLORS.ACCENT_2 }}>AI</span>
                      </div>
                      <ArrowRight size={26} color={COLORS.ACCENT_2} strokeWidth={2.5} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Database size={28} color={COLORS.ACCENT_2} />
                        <span style={{ fontFamily: FONTS.heading, fontSize: '22px', fontWeight: 800 }}>Database</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT_2, fontWeight: 700 }}>
                AUTONOMOUS SYSTEM // EXECUTES CONTINUOUSLY WITHOUT HUMAN INTERVENTION
              </span>
            </div>
          </Step>
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 10: 4 Revenue Models with Image Placeholders
const Slide10_RevenueModels: Page = () => {
  const models = [
    {
      num: '01',
      title: 'Service Arbitrage',
      desc: 'Deliver client services 10x faster with AI workflows.',
      icon: Zap,
      imgTitle: 'SERVICE ASSET',
      imgSub: 'FREELANCE DELIVERABLE',
    },
    {
      num: '02',
      title: 'B2B Automation',
      desc: 'Build and sell n8n customer pipelines to SMB clients.',
      icon: Workflow,
      imgTitle: 'N8N WORKFLOW',
      imgSub: 'AUTOMATION BLUEPRINT',
    },
    {
      num: '03',
      title: 'Cost Reduction',
      desc: 'Replace multi-seat vendor expenses with custom internal nodes.',
      icon: TrendingDown,
      imgTitle: 'ENTERPRISE OPS',
      imgSub: 'INTERNAL EFFICIENCY',
    },
    {
      num: '04',
      title: 'Digital Micro-Assets',
      desc: 'Deploy niche tools & content engines with near-$0 marginal cost.',
      icon: Package,
      imgTitle: 'MICRO SAAS',
      imgSub: 'PROGRAMMATIC ENGINE',
    },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 01 // MONETIZATION"
        title="4 Practical Revenue Models."
        subtitle="Real commercial models built on AI leverage."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '24px',
          width: '100%',
          height: '460px',
        }}
      >
        <Steps>
          {models.map((m) => {
            const Icon = m.icon;
            return (
              <Step key={m.num}>
                <div
                  style={{
                    backgroundColor: COLORS.SURFACE,
                    border: `1px solid ${COLORS.BORDER}`,
                    padding: '24px',
                    display: 'grid',
                    gridTemplateColumns: '1.1fr 0.9fr',
                    gap: '20px',
                    alignItems: 'center',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                        <span style={{ fontFamily: FONTS.mono, fontSize: '18px', fontWeight: 800, color: COLORS.ACCENT }}>
                          {m.num}
                        </span>
                        <Icon size={20} color={COLORS.ACCENT} />
                      </div>
                      <h3 style={{ margin: '0 0 6px 0', fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 800 }}>
                        {m.title}
                      </h3>
                    </div>
                    <p style={{ margin: 0, fontFamily: FONTS.body, fontSize: '16px', color: COLORS.MUTED }}>
                      {m.desc}
                    </p>
                  </div>

                  <ImagePlaceholderBox
                    title={m.imgTitle}
                    subtitle={m.imgSub}
                    height={160}
                  />
                </div>
              </Step>
            );
          })}
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 11: Expanded Arbitrage Economics
const Slide11_ArbitrageMargin: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 01 // THE ECONOMICS"
        title="Sell the Outcome, Not the Hours."
        subtitle="The client receives the exact same commercial utility regardless of your execution time."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', width: '100%' }}>
        <Steps>
          {/* Card 1: Client Value Perspective */}
          <Step>
            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: '28px 36px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: '16px', fontWeight: 700, color: COLORS.TEXT }}>
                  CLIENT PERCEIVED VALUE // FIXED CONTRACT FEE
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: '18px', fontWeight: 800, color: COLORS.ACCENT_2 }}>
                  100% COMMERCIAL UTILITY
                </span>
              </div>
              <div
                style={{
                  height: '76px',
                  backgroundColor: COLORS.ACCENT_2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 32px',
                  color: '#FFFFFF',
                }}
              >
                <span style={{ fontFamily: FONTS.heading, fontSize: '32px', fontWeight: 800 }}>
                  $1,500 Deliverable Value
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: '16px', fontWeight: 600 }}>
                  SAME BRAND IMPACT & DEPLOYED CODE
                </span>
              </div>
              <span style={{ fontFamily: FONTS.body, fontSize: '16px', color: COLORS.MUTED }}>
                The client pays for the working asset and fast turnaround. Their commercial ROI is identical whether you spend 40 hours or 4 hours.
              </span>
            </div>
          </Step>

          {/* Card 2: Your Execution Time Delta */}
          <Step>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: `1px solid ${COLORS.BORDER}`,
                padding: '28px 36px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: '16px', fontWeight: 700 }}>
                  EXECUTION EFFORT DELTA
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: '18px', fontWeight: 800, color: COLORS.ACCENT }}>
                  +85% RETAINED PROFIT & TIME
                </span>
              </div>

              <div style={{ display: 'flex', height: '88px', width: '100%' }}>
                {/* 15% execution bar */}
                <div
                  style={{
                    width: '18%',
                    backgroundColor: COLORS.ACCENT,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '0 20px',
                    color: '#FFFFFF',
                    boxSizing: 'border-box',
                  }}
                >
                  <span style={{ fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 800 }}>
                    4 Hours
                  </span>
                  <span style={{ fontFamily: FONTS.mono, fontSize: '12px' }}>
                    AI EXECUTION
                  </span>
                </div>

                {/* 82% margin bar */}
                <div
                  style={{
                    width: '82%',
                    backgroundColor: COLORS.SURFACE,
                    border: `2px dashed ${COLORS.ACCENT}`,
                    borderLeft: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 32px',
                    boxSizing: 'border-box',
                  }}
                >
                  <div>
                    <span style={{ fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 800, display: 'block' }}>
                      Retained Leverage Margin
                    </span>
                    <span style={{ fontFamily: FONTS.mono, fontSize: '13px', color: COLORS.MUTED }}>
                      36 HOURS OF RECLAIMED TIME // $375/HR EFFECTIVE RATE
                    </span>
                  </div>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '38px', fontWeight: 800, color: COLORS.ACCENT }}>
                    +85%
                  </span>
                </div>
              </div>

              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT, fontWeight: 700 }}>
                VALUE-BASED PRICING CAPTURES MACHINE LEVERAGE. HOURLY BILLING PENALIZES EFFICIENCY.
              </span>
            </div>
          </Step>
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 12: Live Demo Transition (3 Images)
const Slide12_LiveDemo: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 01 // LIVE DEMO"
        title="Inspect the Final Deliverables."
        subtitle="Live walkthrough of our 3 core camp software assets."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          width: '100%',
        }}
      >
        <Steps>
          <Step>
            <div style={{ backgroundColor: COLORS.SURFACE, border: `1px solid ${COLORS.BORDER}`, padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700, color: COLORS.ACCENT }}>
                01 // BRAND STUDIO
              </span>
              <ImagePlaceholderBox
                title="STUDIO ASSET"
                subtitle="DEMO SCREEN 01"
                height={320}
              />
              <span style={{ fontFamily: FONTS.heading, fontSize: '22px', fontWeight: 800 }}>
                Visual Token System
              </span>
            </div>
          </Step>

          <Step>
            <div style={{ backgroundColor: COLORS.SURFACE, border: `1px solid ${COLORS.BORDER}`, padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700, color: COLORS.ACCENT_2 }}>
                02 // LOVABLE APP
              </span>
              <ImagePlaceholderBox
                title="LOVABLE WEB APP"
                subtitle="DEMO SCREEN 02"
                height={320}
              />
              <span style={{ fontFamily: FONTS.heading, fontSize: '22px', fontWeight: 800 }}>
                Interactive Code Frontend
              </span>
            </div>
          </Step>

          <Step>
            <div style={{ backgroundColor: COLORS.SURFACE, border: `1px solid ${COLORS.BORDER}`, padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700, color: COLORS.ACCENT }}>
                03 // N8N WORKFLOW
              </span>
              <ImagePlaceholderBox
                title="N8N PIPELINE"
                subtitle="DEMO SCREEN 03"
                height={320}
                accent
              />
              <span style={{ fontFamily: FONTS.heading, fontSize: '22px', fontWeight: 800 }}>
                Autonomous Agent Backend
              </span>
            </div>
          </Step>
        </Steps>
      </div>
    </SlideContainer>
  );
};

// ===========================================================================
// DAY 02: LLM MECHANICS AND PROMPT ENGINEERING
// ===========================================================================

// Slide 13: Day 2 Topic Roadmap (Day 02 Highlighted)
const Slide13_D2Roadmap: Page = () => <CampRoadmap activeDay="02" />;

// Slide 14: Day 2 Outcomes (ASD-STE100)
const Slide14_D2Outcomes: Page = () => {
  const outcomes = [
    { num: '01', title: 'Prediction Mechanics', desc: 'Learn how probability drives token generation.', icon: Cpu },
    { num: '02', title: 'Token Slicing', desc: 'See how models split words into sub-word tokens.', icon: Terminal },
    { num: '03', title: 'Memory Limits', desc: 'Understand why models forget earlier conversation text.', icon: AlertTriangle },
    { num: '04', title: '5-Part Formula', desc: 'Master Role, Context, Task, Instructions, and Format.', icon: UserCheck },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // OUTCOMES"
        title="What You Will Learn Today."
        subtitle="Key technical skills for Day 2."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', width: '100%' }}>
        <Steps>
          {outcomes.map((o) => {
            const Icon = o.icon;
            return (
              <Step key={o.num}>
                <div
                  style={{
                    backgroundColor: COLORS.SURFACE,
                    border: `1px solid ${COLORS.BORDER}`,
                    padding: '36px',
                    height: '380px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                  }}
                >
                  <span style={{ fontFamily: FONTS.mono, fontSize: '40px', fontWeight: 800, color: COLORS.ACCENT }}>
                    {o.num}
                  </span>
                  <div>
                    <Icon size={36} color={COLORS.TEXT} style={{ marginBottom: '16px' }} />
                    <h3 style={{ margin: '0 0 8px 0', fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 800 }}>
                      {o.title}
                    </h3>
                    <p style={{ margin: 0, fontFamily: FONTS.body, fontSize: '18px', color: COLORS.MUTED }}>
                      {o.desc}
                    </p>
                  </div>
                </div>
              </Step>
            );
          })}
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 15: Next-Token Prediction
const Slide15_NextToken: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // PREDICTION"
        title="It Does Not Think. It Predicts."
        subtitle="The model calculates probabilities for the next piece of text."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '32px', width: '100%', alignItems: 'center' }}>
        <div style={{ backgroundColor: COLORS.SURFACE, border: `1px solid ${COLORS.BORDER}`, padding: '44px', height: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.MUTED, marginBottom: '16px' }}>
            INPUT STRING
          </span>
          <div style={{ fontFamily: FONTS.mono, fontSize: '34px', fontWeight: 700 }}>
            "The capital of Egypt is ___"
          </div>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.BORDER}`, padding: '44px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Steps>
            <Step>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 800 }}>Cairo</span>
                  <span style={{ fontFamily: FONTS.mono, fontSize: '26px', fontWeight: 800, color: COLORS.ACCENT_2 }}>94%</span>
                </div>
                <div style={{ height: '28px', backgroundColor: COLORS.SURFACE, width: '100%' }}>
                  <div style={{ height: '100%', width: '94%', backgroundColor: COLORS.ACCENT_2 }} />
                </div>
              </div>
            </Step>
            <Step>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '22px', fontWeight: 700, color: COLORS.MUTED }}>Alexandria</span>
                  <span style={{ fontFamily: FONTS.mono, fontSize: '22px', color: COLORS.MUTED }}>4%</span>
                </div>
                <div style={{ height: '20px', backgroundColor: COLORS.SURFACE, width: '100%' }}>
                  <div style={{ height: '100%', width: '4%', backgroundColor: COLORS.MUTED }} />
                </div>
              </div>
            </Step>
            <Step>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontFamily: FONTS.heading, fontSize: '22px', fontWeight: 700, color: COLORS.MUTED }}>Pyramids</span>
                  <span style={{ fontFamily: FONTS.mono, fontSize: '22px', color: COLORS.MUTED }}>2%</span>
                </div>
                <div style={{ height: '20px', backgroundColor: COLORS.SURFACE, width: '100%' }}>
                  <div style={{ height: '100%', width: '2%', backgroundColor: COLORS.MUTED }} />
                </div>
              </div>
            </Step>
          </Steps>
        </div>
      </div>
    </SlideContainer>
  );
};

// Slide 16: Tokens (Animated: Sentence to Sliced Tokens)
const Slide16_Tokens: Page = () => {
  const tokenPills = [
    { text: 'Hello', num: 'tok_1', col: COLORS.ACCENT },
    { text: ' my', num: 'tok_2', col: COLORS.ACCENT_2 },
    { text: ' name', num: 'tok_3', col: '#10B981' },
    { text: ' is', num: 'tok_4', col: '#F59E0B' },
    { text: ' Ey', num: 'tok_5', col: COLORS.ACCENT },
    { text: 'ad', num: 'tok_6', col: COLORS.ACCENT_2 },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // TOKENS"
        title="Text Breaks Into Sub-Word Tokens."
        subtitle="Tokens dictate compute speed, memory budget, and API costs."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
        <Steps>
          {/* Beat 1: Full raw sentence */}
          <Step>
            <div style={{ backgroundColor: COLORS.SURFACE, border: `1px solid ${COLORS.BORDER}`, padding: '32px 40px' }}>
              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED, display: 'block', marginBottom: '10px' }}>
                RAW TEXT STRING (5 WORDS):
              </span>
              <div style={{ fontFamily: FONTS.mono, fontSize: '42px', fontWeight: 800, color: COLORS.TEXT }}>
                "Hello my name is Eyad"
              </div>
            </div>
          </Step>

          {/* Beat 2: Token sliced blocks */}
          <Step>
            <div style={{ backgroundColor: '#FFFFFF', border: `2px solid ${COLORS.ACCENT}`, padding: '32px 40px', boxShadow: '0 12px 30px rgba(255, 59, 48, 0.08)' }}>
              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT, fontWeight: 700, display: 'block', marginBottom: '16px' }}>
                BYTE-PAIR ENCODING (BPE) TOKEN SLICES:
              </span>
              <div style={{ display: 'flex', gap: '14px' }}>
                {tokenPills.map((t) => (
                  <div
                    key={t.num}
                    style={{
                      flex: 1,
                      backgroundColor: COLORS.SURFACE,
                      border: `2px solid ${t.col}`,
                      padding: '16px 12px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontFamily: FONTS.mono, fontSize: '36px', fontWeight: 800, color: t.col }}>
                      {t.text}
                    </div>
                    <span style={{ fontFamily: FONTS.mono, fontSize: '12px', color: COLORS.MUTED, marginTop: '4px', display: 'block' }}>
                      {t.num}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Step>

          {/* Beat 3: Token rule explanation */}
          <Step>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: COLORS.SURFACE, border: `1px solid ${COLORS.BORDER}`, padding: '20px 32px' }}>
              <span style={{ fontFamily: FONTS.mono, fontSize: '16px', color: COLORS.TEXT }}>
                SUB-WORD TOKENIZATION // COMMON WORDS REMAIN WHOLE, NAMES SPLIT INTO SUB-WORDS
              </span>
              <span style={{ fontFamily: FONTS.mono, fontSize: '16px', fontWeight: 800, color: COLORS.ACCENT }}>
                5 WORDS = 6 TOKENS
              </span>
            </div>
          </Step>
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 17: Context Window (Animated: Empty -> Full -> Overflow Drop)
const Slide17_ContextWindow: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // CONTEXT WINDOW"
        title="Short-Term Memory Has a Limit."
        subtitle="When the context window fills, earlier conversation blocks drop out."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', width: '100%' }}>
        <Steps>
          {/* Stage 1: Empty */}
          <Step>
            <div style={{ backgroundColor: COLORS.SURFACE, border: `1px solid ${COLORS.BORDER}`, padding: '28px 36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700 }}>
                  STAGE 1 // INITIAL PROMPT (15% CAPACITY)
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
                  128,000 TOKENS MAXIMUM
                </span>
              </div>
              <div style={{ display: 'flex', height: '64px', backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.BORDER}` }}>
                <div style={{ width: '15%', backgroundColor: COLORS.ACCENT_2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontFamily: FONTS.mono, fontSize: '14px', fontWeight: 700 }}>
                  SYSTEM RULES
                </div>
                <div style={{ width: '85%', display: 'flex', alignItems: 'center', paddingLeft: '16px', fontFamily: FONTS.mono, fontSize: '13px', color: COLORS.MUTED }}>
                  AVAILABLE FREE RAM (85%)
                </div>
              </div>
            </div>
          </Step>

          {/* Stage 2: Filling */}
          <Step>
            <div style={{ backgroundColor: COLORS.SURFACE, border: `1px solid ${COLORS.BORDER}`, padding: '28px 36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700 }}>
                  STAGE 2 // ACCUMULATING TURNS (90% CAPACITY)
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT }}>
                  MEMORY NEAR LIMIT
                </span>
              </div>
              <div style={{ display: 'flex', height: '64px', backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.BORDER}` }}>
                <div style={{ width: '15%', backgroundColor: COLORS.ACCENT_2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontFamily: FONTS.mono, fontSize: '13px', fontWeight: 700 }}>
                  SYSTEM
                </div>
                <div style={{ width: '75%', backgroundColor: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONTS.mono, fontSize: '13px', fontWeight: 700, color: COLORS.TEXT }}>
                  LONG CHAT HISTORY & ATTACHED DOCUMENTS
                </div>
                <div style={{ width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONTS.mono, fontSize: '12px', color: COLORS.MUTED }}>
                  10% FREE
                </div>
              </div>
            </div>
          </Step>

          {/* Stage 3: Overflow Drop */}
          <Step>
            <div style={{ backgroundColor: '#FFFFFF', border: `2px solid ${COLORS.ACCENT}`, padding: '28px 36px', boxShadow: '0 12px 30px rgba(255, 59, 48, 0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 800, color: COLORS.ACCENT }}>
                  STAGE 3 // FIFO OVERFLOW: OLDEST DATA DROPPED
                </span>
                <MonoPill color={COLORS.ACCENT} bg="#FFF0EE" border={COLORS.ACCENT}>
                  MEMORY LOSS
                </MonoPill>
              </div>
              <div style={{ display: 'flex', height: '64px', gap: '8px' }}>
                <div style={{ width: '22%', backgroundColor: '#FFF0EE', border: `2px dashed ${COLORS.ACCENT}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS.ACCENT, fontFamily: FONTS.mono, fontSize: '13px', fontWeight: 800 }}>
                  DROPPED DATA ⚠️
                </div>
                <div style={{ width: '56%', backgroundColor: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONTS.mono, fontSize: '13px', fontWeight: 700, color: COLORS.TEXT }}>
                  ACTIVE CONVERSATION
                </div>
                <div style={{ width: '22%', backgroundColor: COLORS.ACCENT_2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontFamily: FONTS.mono, fontSize: '13px', fontWeight: 800 }}>
                  NEW OUTPUT
                </div>
              </div>
            </div>
          </Step>
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 18: Hallucinations (Reasons + Concrete Examples)
const Slide18_Hallucinations: Page = () => {
  const reasons = [
    { title: 'Probability over Truth', desc: 'Models predict the most likely next word, not verified truth.' },
    { title: 'Training Gaps & Noise', desc: 'Inconsistent internet text creates false pattern links.' },
    { title: 'Plausible Completion', desc: 'Models attempt to answer rather than say "I do not know".' },
  ];

  const examples = [
    { title: 'Fake Court Cases', desc: 'Inventing legal precedents, judges, and docket numbers.' },
    { title: 'Phantom Software APIs', desc: 'Inventing Python functions and parameters that do not exist.' },
    { title: 'False Biography Facts', desc: 'Inventing dates, company awards, and publications.' },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // HALLUCINATIONS"
        title="Why Models Generate False Information."
        subtitle="Language models optimize for linguistic plausibility, not factual accuracy."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', width: '100%' }}>
        <Steps>
          {/* Left: 3 Core Reasons */}
          <Step>
            <div style={{ backgroundColor: COLORS.SURFACE, border: `1px solid ${COLORS.BORDER}`, padding: '36px', height: '460px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
              <div>
                <span style={{ fontFamily: FONTS.mono, fontSize: '14px', fontWeight: 700, color: COLORS.ACCENT, display: 'block', marginBottom: '16px' }}>
                  TECHNICAL CAUSES
                </span>
                <h3 style={{ margin: '0 0 24px 0', fontFamily: FONTS.heading, fontSize: '28px', fontWeight: 800 }}>
                  3 Reasons Models Lie
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {reasons.map((r, i) => (
                    <div key={r.title} style={{ backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.BORDER}`, padding: '14px 18px' }}>
                      <span style={{ fontFamily: FONTS.heading, fontSize: '18px', fontWeight: 800, display: 'block', marginBottom: '4px' }}>
                        0{i + 1} {r.title}
                      </span>
                      <span style={{ fontFamily: FONTS.body, fontSize: '15px', color: COLORS.MUTED }}>
                        {r.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Step>

          {/* Right: 3 Concrete Examples */}
          <Step>
            <div style={{ backgroundColor: '#FFFFFF', border: `2px solid ${COLORS.ACCENT}`, padding: '36px', height: '460px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box', boxShadow: '0 12px 30px rgba(255, 59, 48, 0.08)' }}>
              <div>
                <span style={{ fontFamily: FONTS.mono, fontSize: '14px', fontWeight: 700, color: COLORS.ACCENT, display: 'block', marginBottom: '16px' }}>
                  REAL-WORLD RISKS
                </span>
                <h3 style={{ margin: '0 0 24px 0', fontFamily: FONTS.heading, fontSize: '28px', fontWeight: 800 }}>
                  Concrete Hallucination Cases
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {examples.map((ex) => (
                    <div key={ex.title} style={{ backgroundColor: '#FFF0EE', border: `1px solid ${COLORS.ACCENT}`, padding: '14px 18px' }}>
                      <span style={{ fontFamily: FONTS.heading, fontSize: '18px', fontWeight: 800, color: COLORS.ACCENT, display: 'block', marginBottom: '4px' }}>
                        ⚠️ {ex.title}
                      </span>
                      <span style={{ fontFamily: FONTS.body, fontSize: '15px', color: COLORS.TEXT }}>
                        {ex.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Step>
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 19: Vague vs Technical Spec
const Slide19_VagueVsSpec: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // SPECIFICATION"
        title="Vague Text vs. Technical Specifications."
        subtitle="Prompt engineering is writing exact specifications for software systems."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', width: '100%' }}>
        <Steps>
          <Step>
            <div style={{ backgroundColor: COLORS.SURFACE, border: `1px solid ${COLORS.BORDER}`, padding: '44px', height: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 800, color: COLORS.MUTED }}>Vague Input</span>
              <div style={{ backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.BORDER}`, padding: '24px' }}>
                <p style={{ margin: 0, fontFamily: FONTS.mono, fontSize: '22px', color: COLORS.MUTED }}>
                  "Write a marketing post for my store."
                </p>
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: '20px', color: COLORS.MUTED }}>Output: Generic robotic essay</span>
            </div>
          </Step>

          <Step>
            <div style={{ backgroundColor: '#FFFFFF', border: `2px solid ${COLORS.ACCENT_2}`, padding: '44px', height: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 800, color: COLORS.ACCENT_2 }}>Technical Spec</span>
              <div style={{ backgroundColor: '#F8FAFC', border: `1px solid ${COLORS.ACCENT_2}`, padding: '24px' }}>
                <p style={{ margin: 0, fontFamily: FONTS.mono, fontSize: '20px', fontWeight: 700 }}>
                  [Role] + [Context] + [Task] + [Instructions] + [Format]
                </p>
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: '20px', color: COLORS.ACCENT_2, fontWeight: 700 }}>Output: Exact production deliverable</span>
            </div>
          </Step>
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 20: 5-Part Formula (Role, Context, Task, Instructions, Format)
const Slide20_PromptFormula: Page = () => {
  const parts = [
    { num: '01', title: 'Role', sub: 'Persona & Authority', icon: UserCheck },
    { num: '02', title: 'Context', sub: 'Background & Goal', icon: Layers },
    { num: '03', title: 'Task', sub: 'Core Objective', icon: Crosshair },
    { num: '04', title: 'Instructions', sub: 'Rules & Limits', icon: Shield },
    { num: '05', title: 'Format', sub: 'Output Structure', icon: Table },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // THE FRAMEWORK"
        title="The 5-Part Prompt Formula."
        subtitle="Define all five pillars to remove ambiguity."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', width: '100%' }}>
        <Steps>
          {parts.map((p) => {
            const Icon = p.icon;
            return (
              <Step key={p.num}>
                <div style={{ backgroundColor: COLORS.SURFACE, border: `1px solid ${COLORS.BORDER}`, padding: '36px', height: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <span style={{ fontFamily: FONTS.mono, fontSize: '40px', fontWeight: 800, color: COLORS.ACCENT }}>{p.num}</span>
                  <div>
                    <Icon size={32} style={{ marginBottom: '16px' }} />
                    <h3 style={{ margin: '0 0 6px 0', fontFamily: FONTS.heading, fontSize: '28px', fontWeight: 800 }}>{p.title}</h3>
                    <span style={{ fontFamily: FONTS.mono, fontSize: '13px', color: COLORS.MUTED }}>{p.sub}</span>
                  </div>
                </div>
              </Step>
            );
          })}
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 21: Anatomy (Fashion Marketing Campaign)
const Slide21_Anatomy: Page = () => {
  const rows = [
    { tag: 'ROLE', text: 'You are a creative director specializing in luxury fashion brands.' },
    { tag: 'CONTEXT', text: 'We are launching an autumn capsule collection for modern minimalists.' },
    { tag: 'TASK', text: 'Create a 3-part marketing campaign for Instagram and email.' },
    { tag: 'INSTRUCTIONS', text: 'Focus on architectural silhouettes, monochrome tones, and quiet luxury. Avoid hype words.' },
    { tag: 'FORMAT', text: 'Return a structured Markdown table with columns: Channel, Visual Concept, and Headline Copy.' },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // ANATOMY"
        title="Anatomy of an Exact Prompt."
        subtitle="A live prompt example for a luxury fashion marketing campaign."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%', backgroundColor: COLORS.SURFACE, border: `1px solid ${COLORS.BORDER}`, padding: '36px' }}>
        <Steps>
          {rows.map((r) => (
            <Step key={r.tag}>
              <div style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: '20px', alignItems: 'center', backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.BORDER}`, padding: '14px 20px' }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: '14px', fontWeight: 800, color: COLORS.ACCENT }}>[{r.tag}]</span>
                <span style={{ fontFamily: FONTS.mono, fontSize: '18px', color: COLORS.TEXT }}>{r.text}</span>
              </div>
            </Step>
          ))}
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 22: Technical Vocabulary in Multiple Domains
const Slide22_Vocabulary: Page = () => {
  const domains = [
    {
      domain: 'FASHION & BRAND DESIGN',
      basic: '"Make a nice minimal winter jacket."',
      tech: '"Double-breasted wool overcoat, dropped shoulders, #09090B raw hem."',
    },
    {
      domain: 'SOFTWARE ARCHITECTURE',
      basic: '"Build a fast web server."',
      tech: '"Async Rust microservice with Actix-web, Redis cache, and Postgres pool."',
    },
    {
      domain: 'CINEMATOGRAPHY & VIDEO',
      basic: '"Make a dramatic movie shot."',
      tech: '"85mm anamorphic lens, 2.39:1 aspect ratio, low-key lighting, 24fps."',
    },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // TECHNICAL VOCABULARY"
        title="Domain Terms Produce Exact Deliverables."
        subtitle="You cannot prompt what you do not know. Professional terms eliminate generic output."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', width: '100%' }}>
        <Steps>
          {domains.map((d) => (
            <Step key={d.domain}>
              <div
                style={{
                  backgroundColor: COLORS.SURFACE,
                  border: `1px solid ${COLORS.BORDER}`,
                  padding: '28px',
                  height: '420px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                }}
              >
                <span style={{ fontFamily: FONTS.mono, fontSize: '13px', fontWeight: 800, color: COLORS.ACCENT }}>
                  {d.domain}
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {/* Basic */}
                  <div style={{ backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.BORDER}`, padding: '16px' }}>
                    <span style={{ fontFamily: FONTS.mono, fontSize: '11px', color: COLORS.MUTED, display: 'block', marginBottom: '6px' }}>
                      BASIC INPUT:
                    </span>
                    <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.MUTED }}>
                      {d.basic}
                    </span>
                  </div>

                  {/* Technical */}
                  <div style={{ backgroundColor: '#F8FAFC', border: `2px solid ${COLORS.ACCENT_2}`, padding: '16px' }}>
                    <span style={{ fontFamily: FONTS.mono, fontSize: '11px', color: COLORS.ACCENT_2, fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                      DOMAIN SPECIFICATION:
                    </span>
                    <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700, color: COLORS.TEXT }}>
                      {d.tech}
                    </span>
                  </div>
                </div>

                <span style={{ fontFamily: FONTS.mono, fontSize: '12px', color: COLORS.MUTED }}>
                  EXACT TERMINOLOGY UNLOCKS MAXIMUM MODEL CAPABILITY
                </span>
              </div>
            </Step>
          ))}
        </Steps>
      </div>
    </SlideContainer>
  );
};

// ===========================================================================
// Speaker Notes & Metadata (22 Slides Total)
// ===========================================================================

export const notes: string[] = [
  // 1: Main Title (Roadmap neutral)
  'Welcome to AI Camp. Here is our complete 5-day architectural roadmap from simple prompting to autonomous production systems.',

  // 2: Camp Deliverables
  'Before we begin Day 1, review the four concrete products you will build and deploy into production by the end of this week.',

  // 3: Audience Filter
  'Set expectations early: no theoretical math or get-rich schemes. We focus entirely on production systems for builders and operators.',

  // 4: Day 1 Topic Roadmap
  'Today we begin Day 1: Mindset & Leverage. Notice our highlighted position on the 5-day track.',

  // 5: Day 1 Outcomes
  'Here are today’s four key outcomes in simplified technical terms: compute limits, personal leverage, revenue models, and value-based arbitrage pricing.',

  // 6: Leaders
  'Four industry leaders control global compute: Altman, Huang, Amodei, and Pichai. We operate at the application layer above them.',

  // 7: Physical Scale & Hardware Spending
  'Trillions in global capital are pouring into AI infrastructure: enterprise GPUs surged past $40,000, high-bandwidth RAM is sold out for 18 months, and chipmakers like NVIDIA and TSMC are commanding historic 75% gross margins. This unprecedented spending proves AI is the most critical modern asset.',

  // 8: Leverage Equation & Iron Triangle
  'Classical engineering forced you to pick two between speed, cost, and quality. Autonomous AI pipelines eliminate this constraint: one builder produces high-fidelity deliverables in 3 hours with near-zero marginal cost.',

  // 9: Mindset
  'Stop using single chat prompts for individual emails, images, and functions. Build autonomous pipelines like automated content engines and lead-routing webhooks that run 24 hours a day without you.',

  // 10: Revenue Models
  'Four practical revenue models: freelance delivery arbitrage, B2B workflow systems, internal enterprise cost reduction, and digital micro-SaaS products.',

  // 11: Arbitrage Margin
  'The client pays $1,500 for the finished commercial outcome. Their commercial value is identical whether it took 40 hours or 4 hours. By delivering in 4 hours with AI, you capture an 85% profit margin.',

  // 12: Live Demo Transition
  'Switch screens now to examine our three live camp software assets: the brand studio system, the Lovable web application, and the autonomous n8n agent backend.',

  // 13: Day 2 Topic Roadmap
  'Welcome to Day 2: LLM Mechanics and Prompt Engineering. Day 2 is highlighted on our 5-day track.',

  // 14: Day 2 Outcomes
  'Today’s four technical outcomes: next-token prediction, token slicing, memory limits, and our 5-part prompt engineering formula.',

  // 15: Next-Token Prediction
  'Models do not think; they calculate probability distributions. Cairo receives a 94% probability weight for the next token.',

  // 16: Tokens Animated
  'Models slice text into tokens via Byte-Pair Encoding. The phrase "Hello my name is Eyad" is 5 words but 6 tokens because rare words and names split into sub-words.',

  // 17: Context Window Animated
  'The context window functions like RAM. As conversation turns accumulate, memory fills up and the model silently drops earlier instructions.',

  // 18: Hallucinations
  'Language models optimize for linguistic plausibility rather than factual accuracy. This causes fabricated legal citations, fake software APIs, and false biographies.',

  // 19: Vague vs Spec
  'Vague prompts yield generic text. Engineering specifications with clear instructions yield production deliverables on the first pass.',

  // 20: Prompt Formula
  'Memorize the 5-part prompt formula: Role, Context, Task, Instructions, and Format. Define all five parts in every prompt.',

  // 21: Anatomy Fashion Campaign
  'Here is the live anatomy of an exact prompt for a luxury fashion marketing campaign: Role, Context, Task, Instructions, and Format each perform a specific job.',

  // 22: Vocabulary Multi-Domain
  'Technical domain vocabulary across fashion, software architecture, and cinematography unlocks exact results. Professional terms eliminate generic output.',
];

export const meta: SlideMeta = {
  title: 'AI Camp Master Deck',
  createdAt: '2026-11-11T13:57:55.286Z',
};

export default [
  // General Camp Introduction
  Slide1_MainTitle,
  Slide2_Deliverables,
  Slide3_Audience,

  // Day 01: AI Leverage, Economics, and Revenue Generation
  Slide4_D1Roadmap,
  Slide5_D1Outcomes,
  Slide6_Leaders,
  Slide7_PhysicalScale,
  Slide8_LeverageEquation,
  Slide9_ConsumerVsBuilder,
  Slide10_RevenueModels,
  Slide11_ArbitrageMargin,
  Slide12_LiveDemo,

  // Day 02: LLM Mechanics and Prompt Engineering
  Slide13_D2Roadmap,
  Slide14_D2Outcomes,
  Slide15_NextToken,
  Slide16_Tokens,
  Slide17_ContextWindow,
  Slide18_Hallucinations,
  Slide19_VagueVsSpec,
  Slide20_PromptFormula,
  Slide21_Anatomy,
  Slide22_Vocabulary,
] satisfies Page[];
