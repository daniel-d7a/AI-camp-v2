import React, { type CSSProperties, type ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import {
  Globe,
  Terminal,
  Layout,
  Workflow,
  Bot,
  Sparkles,
  Zap,
  TrendingDown,
  Package,
  X,
  Check,
  Sigma,
  Coins,
  MessageCircleOff,
  Hammer,
  Briefcase,
  Cpu,
  Server,
  ArrowRight,
  Clock,
  DollarSign,
  User,
  Users,
  Layers,
  Play,
  Activity,
  Maximize2,
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
        fontSize: '16px',
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
  height = 360,
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
        overflow: 'hidden',
        background: `repeating-linear-gradient(45deg, #F4F4F5, #F4F4F5 10px, #EEEEF0 10px, #EEEEF0 20px)`,
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
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
          fontSize: '18px',
          fontWeight: 600,
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
// Slide 1: Title & 5-Day Roadmap (Archetype #4: Linear Steps)
// ---------------------------------------------------------------------------

const Slide1: Page = () => {
  const days = [
    { num: '01', title: 'Mindset & Leverage', icon: Globe, active: true },
    { num: '02', title: 'Prompt Engineering', icon: Terminal, active: false },
    { num: '03', title: 'Brand & Web Studio', icon: Layout, active: false },
    { num: '04', title: 'n8n Foundations', icon: Workflow, active: false },
    { num: '05', title: 'AI Agents & RAG', icon: Bot, active: false },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="AI CAMP // DAY 01"
        tagColor={COLORS.ACCENT}
        title="From Chatting to Building Systems."
        subtitle="A 5-day architectural roadmap from prompting to autonomous production."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '20px',
          width: '100%',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {days.map((d) => {
          const Icon = d.icon;
          return (
            <div
              key={d.num}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '360px',
                padding: '36px',
                boxSizing: 'border-box',
                backgroundColor: d.active ? '#FFFFFF' : COLORS.SURFACE,
                border: `2px solid ${d.active ? COLORS.ACCENT : COLORS.BORDER}`,
                boxShadow: d.active ? '0 12px 30px rgba(255, 59, 48, 0.08)' : 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: '44px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: d.active ? COLORS.ACCENT : COLORS.MUTED,
                  }}
                >
                  {d.num}
                </span>
                {d.active ? (
                  <MonoPill color="#FFFFFF" bg={COLORS.ACCENT} border={COLORS.ACCENT}>
                    TODAY
                  </MonoPill>
                ) : (
                  <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
                    DAY
                  </span>
                )}
              </div>

              <div>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: d.active ? '#FFF0EE' : '#FFFFFF',
                    border: `1px solid ${d.active ? COLORS.ACCENT : COLORS.BORDER}`,
                    marginBottom: '24px',
                    color: d.active ? COLORS.ACCENT : COLORS.TEXT,
                  }}
                >
                  <Icon size={32} strokeWidth={2} />
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: FONTS.heading,
                    fontSize: '28px',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    color: COLORS.TEXT,
                  }}
                >
                  {d.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 2: What You Will Ship This Week (Archetype #8: Artifact Bento)
// ---------------------------------------------------------------------------

const Slide2: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="1.1 // CAMP OUTPUTS"
        tagColor={COLORS.ACCENT}
        title="4 Tangible Products in 5 Days."
        subtitle="Zero hypothetical exercises. Every day concludes with a deployed asset."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr 1fr 1fr',
          gap: '20px',
          width: '100%',
          height: '480px',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {/* Card 1: Brand System */}
        <SwissCard style={{ justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <MonoPill>DAY 03</MonoPill>
              <Sparkles size={20} color={COLORS.MUTED} />
            </div>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: '84px',
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                marginBottom: '16px',
              }}
            >
              Aa
            </div>
            <div style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.MUTED }}>
              TYPOGRAPHY & PALETTE
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {[
              { hex: '#09090B', name: 'JET' },
              { hex: '#FF3B30', name: 'RED' },
              { hex: '#2563EB', name: 'BLUE' },
            ].map((c) => (
              <div key={c.hex} style={{ border: `1px solid ${COLORS.BORDER}`, backgroundColor: '#FFFFFF', padding: '6px' }}>
                <div style={{ height: '36px', backgroundColor: c.hex, marginBottom: '6px' }} />
                <span style={{ fontFamily: FONTS.mono, fontSize: '12px', fontWeight: 600 }}>{c.hex}</span>
              </div>
            ))}
          </div>
        </SwissCard>

        {/* Card 2: AI Fashion Photography */}
        <SwissCard style={{ justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <MonoPill>DAY 03</MonoPill>
              <Maximize2 size={20} color={COLORS.MUTED} />
            </div>
            <h4 style={{ margin: 0, fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 800 }}>
              AI Studio Asset
            </h4>
          </div>
          <ImagePlaceholderBox
            title="STUDIO CAM"
            subtitle="4K EDITORIAL RENDER"
            height={280}
          />
        </SwissCard>

        {/* Card 3: Live Lovable Website */}
        <SwissCard style={{ justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <MonoPill>DAY 03</MonoPill>
              <Layout size={20} color={COLORS.MUTED} />
            </div>
            <h4 style={{ margin: 0, fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 800 }}>
              Lovable Web App
            </h4>
          </div>
          <div
            style={{
              height: '280px',
              backgroundColor: '#FFFFFF',
              border: `1px solid ${COLORS.BORDER}`,
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: `1px solid ${COLORS.BORDER}`, paddingBottom: '10px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
              </div>
              <span style={{ fontFamily: FONTS.mono, fontSize: '12px', color: COLORS.MUTED, marginLeft: '8px' }}>
                brand.lovable.app
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ height: '32px', backgroundColor: COLORS.SURFACE, width: '70%' }} />
              <div style={{ height: '70px', backgroundColor: COLORS.SURFACE }} />
            </div>
            <MonoPill color={COLORS.ACCENT_2} bg="#EEF2FF" border={COLORS.ACCENT_2}>
              LIVE REACT CODE
            </MonoPill>
          </div>
        </SwissCard>

        {/* Card 4: n8n Automated Node Graph */}
        <SwissCard style={{ justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <MonoPill>DAY 04 & 05</MonoPill>
              <Workflow size={20} color={COLORS.MUTED} />
            </div>
            <h4 style={{ margin: 0, fontFamily: FONTS.heading, fontSize: '26px', fontWeight: 800 }}>
              n8n Agent Engine
            </h4>
          </div>
          <div
            style={{
              height: '280px',
              backgroundColor: '#FFFFFF',
              border: `1px solid ${COLORS.BORDER}`,
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            {['WEBHOOK TRIGGER', 'CLAUDE 3.5 SONNET', 'SLACK + POSTGRES'].map((step, idx) => (
              <div
                key={step}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  backgroundColor: COLORS.SURFACE,
                  border: `1px solid ${idx === 1 ? COLORS.ACCENT : COLORS.BORDER}`,
                  fontFamily: FONTS.mono,
                  fontSize: '13px',
                  fontWeight: 600,
                }}
              >
                <span>{step}</span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
              </div>
            ))}
          </div>
        </SwissCard>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 3: Who This Camp Is For (Archetype #5: Split Versus)
// ---------------------------------------------------------------------------

const Slide3: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="1.1 // AUDIENCE FILTER"
        tagColor={COLORS.ACCENT}
        title="Built for Builders. Not Spectators."
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
        {/* Out of scope card */}
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: COLORS.MUTED,
              }}
            >
              OUT OF SCOPE
            </span>
            <div
              style={{
                width: '42px',
                height: '42px',
                backgroundColor: '#FEE2E2',
                border: `1px solid ${COLORS.ACCENT}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: COLORS.ACCENT,
              }}
            >
              <X size={24} strokeWidth={2.5} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { label: 'Deep Math & Theory Papers', icon: Sigma },
              { label: 'Passive "Get-Rich-Quick" Schemes', icon: Coins },
              { label: 'Casual One-Off Chatters', icon: MessageCircleOff },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    padding: '16px 20px',
                    backgroundColor: '#FFFFFF',
                    border: `1px solid ${COLORS.BORDER}`,
                    opacity: 0.75,
                  }}
                >
                  <Icon size={32} color={COLORS.MUTED} />
                  <span
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: '32px',
                      fontWeight: 700,
                      color: COLORS.MUTED,
                      textDecoration: 'line-through',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.MUTED }}>
            FILTER 01 // NO THEORETICAL LECTURING
          </span>
        </div>

        {/* For you card */}
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: COLORS.ACCENT_2,
              }}
            >
              FOR YOU
            </span>
            <div
              style={{
                width: '42px',
                height: '42px',
                backgroundColor: '#DBEAFE',
                border: `1px solid ${COLORS.ACCENT_2}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: COLORS.ACCENT_2,
              }}
            >
              <Check size={24} strokeWidth={3} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { label: 'Tech-Curious Creators', icon: Hammer },
              { label: 'Freelancers & Operators', icon: Briefcase },
              { label: 'No-Code System Builders', icon: Cpu },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    padding: '16px 20px',
                    backgroundColor: '#F8FAFC',
                    border: `1px solid ${COLORS.ACCENT_2}`,
                  }}
                >
                  <Icon size={32} color={COLORS.ACCENT_2} />
                  <span
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: '32px',
                      fontWeight: 800,
                      color: COLORS.TEXT,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.ACCENT_2, fontWeight: 600 }}>
            TARGET AUDIENCE // 100% EXECUTION & LEVERAGE
          </span>
        </div>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 4: Architects of the New Economy (Archetype #1: People / Leaders)
// ---------------------------------------------------------------------------

const Slide4: Page = () => {
  const leaders = [
    { name: 'Sam Altman', org: 'OPENAI', role: 'FRONTIER MODELS' },
    { name: 'Jensen Huang', org: 'NVIDIA', role: 'COMPUTE HARDWARE' },
    { name: 'Dario Amodei', org: 'ANTHROPIC', role: 'AI SAFETY & CODING' },
    { name: 'Demis Hassabis', org: 'GOOGLE DEEPMIND', role: 'SCIENTIFIC DISCOVERY' },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="1.2 // POWER SHIFT"
        tagColor={COLORS.ACCENT}
        title="Not a Software Update. A Power Shift."
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
        {leaders.map((person, idx) => (
          <div
            key={person.name}
            style={{
              backgroundColor: COLORS.SURFACE,
              border: `1px solid ${COLORS.BORDER}`,
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '520px',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: FONTS.mono, fontSize: '18px', fontWeight: 700, color: COLORS.MUTED }}>
                0{idx + 1}
              </span>
              <MonoPill>{person.org}</MonoPill>
            </div>

            <ImagePlaceholderBox
              title={person.name.toUpperCase()}
              subtitle="PORTRAIT PLACEHOLDER"
              height={300}
            />

            <div>
              <h3
                style={{
                  margin: '0 0 6px 0',
                  fontFamily: FONTS.heading,
                  fontSize: '32px',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                }}
              >
                {person.name}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: FONTS.mono,
                  fontSize: '14px',
                  color: COLORS.MUTED,
                  letterSpacing: '0.05em',
                }}
              >
                {person.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 5: Physical Scale of Intelligence (Archetype #2: Scale / Environment)
// ---------------------------------------------------------------------------

const Slide5: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="1.2 // NATIONAL LEVERAGE"
        tagColor={COLORS.ACCENT}
        title="Compute Is the New Oil."
        subtitle="Trillions in energy, silicon, and hyperscale data centers."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '32px',
          width: '100%',
          height: '520px',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {/* Left: Datacenter visualization */}
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <MonoPill color={COLORS.ACCENT} border={COLORS.ACCENT}>
              HYPERSCALE CLUSTERS
            </MonoPill>
            <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
              SILICON CAPITAL
            </span>
          </div>

          <ImagePlaceholderBox
            title="HYPERSCALE SERVER CLUSTERS"
            subtitle="DATA CENTER RACKS // UNIFIED INFRASTRUCTURE"
            height={340}
            accent
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${COLORS.BORDER}`, paddingTop: '16px' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
              GLOBAL CAPACITY: &gt;100,000 H100 UNITS
            </span>
            <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.TEXT, fontWeight: 600 }}>
              TIER 4 RESILIENCE
            </span>
          </div>
        </div>

        {/* Right: 3 Stat Badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'space-between' }}>
          {[
            {
              metric: 'GIGAWATTS',
              val: '10 GW+',
              desc: 'Dedicated Nuclear & Green Power Contracts',
              color: COLORS.ACCENT,
            },
            {
              metric: 'GPUS',
              val: '100,000+',
              desc: 'Liquid-Cooled NVLink Compute Fabric',
              color: COLORS.ACCENT_2,
            },
            {
              metric: 'SOVEREIGN AI',
              val: '$500B+',
              desc: 'National Infrastructure Budgets Globally',
              color: COLORS.TEXT,
            },
          ].map((stat) => (
            <div
              key={stat.metric}
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: '28px 36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: '15px',
                  fontWeight: 600,
                  color: stat.color,
                  letterSpacing: '0.08em',
                  marginBottom: '6px',
                }}
              >
                {stat.metric}
              </span>
              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '52px',
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  color: COLORS.TEXT,
                  marginBottom: '8px',
                }}
              >
                {stat.val}
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: FONTS.body,
                  fontSize: '18px',
                  color: COLORS.MUTED,
                }}
              >
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 6: The Leverage Equation (Archetype #6: Mechanics & Capacity Meters)
// ---------------------------------------------------------------------------

const Slide6: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="1.2 // PERSONAL LEVERAGE"
        tagColor={COLORS.ACCENT}
        title="Compress Time, Labor, and Capital."
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          width: '100%',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {/* Top Row: Traditional Team (Muted) */}
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: '36px 44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: '280px' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.MUTED, letterSpacing: '0.08em' }}>
              METHOD A // LEGACY
            </span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 800, color: COLORS.MUTED }}>
              Traditional Team
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {['DESIGN', 'COPY', 'DEV', 'OPS', 'SUPPORT'].map((role) => (
              <div
                key={role}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 20px',
                  backgroundColor: '#FFFFFF',
                  border: `1px solid ${COLORS.BORDER}`,
                }}
              >
                <User size={24} color={COLORS.MUTED} />
                <span style={{ fontFamily: FONTS.mono, fontSize: '14px', fontWeight: 600, color: COLORS.MUTED }}>
                  {role}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <ArrowRight size={32} color={COLORS.MUTED} />
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: `1px solid ${COLORS.BORDER}`,
                padding: '16px 36px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.MUTED }}>
                30 DAYS
              </div>
              <span style={{ fontFamily: FONTS.mono, fontSize: '13px', color: COLORS.MUTED }}>
                HIGH OVERHEAD
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Row: 1 Builder + AI Systems (Accent Red) */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: `2px solid ${COLORS.ACCENT}`,
            padding: '36px 44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 16px 36px rgba(255, 59, 48, 0.08)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: '280px' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.ACCENT, letterSpacing: '0.08em' }}>
              METHOD B // LEVERAGE
            </span>
            <span style={{ fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 800, color: COLORS.TEXT }}>
              1 Builder + AI Engine
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 28px',
                backgroundColor: '#FFF0EE',
                border: `1px solid ${COLORS.ACCENT}`,
              }}
            >
              <User size={28} color={COLORS.ACCENT} />
              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', fontWeight: 700, color: COLORS.ACCENT }}>
                YOU (ORCHESTRATOR)
              </span>
            </div>

            <span style={{ fontFamily: FONTS.mono, fontSize: '28px', fontWeight: 700, color: COLORS.ACCENT }}>
              +
            </span>

            {['PROMPT ENGINE', 'STUDIO GENERATORS', 'N8N WORKFLOWS'].map((system) => (
              <div
                key={system}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 20px',
                  backgroundColor: COLORS.SURFACE,
                  border: `1px solid ${COLORS.BORDER}`,
                }}
              >
                <Cpu size={24} color={COLORS.TEXT} />
                <span style={{ fontFamily: FONTS.mono, fontSize: '14px', fontWeight: 600, color: COLORS.TEXT }}>
                  {system}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <ArrowRight size={32} color={COLORS.ACCENT} />
            <div
              style={{
                backgroundColor: '#FFF0EE',
                border: `1px solid ${COLORS.ACCENT}`,
                padding: '16px 36px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.ACCENT }}>
                3 HOURS
              </div>
              <span style={{ fontFamily: FONTS.mono, fontSize: '13px', color: COLORS.ACCENT, fontWeight: 700 }}>
                100X VELOCITY
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 7: Consumer vs. System Builder (Archetype #5: Split Versus)
// ---------------------------------------------------------------------------

const Slide7: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="1.2 // MINDSET SHIFT"
        tagColor={COLORS.ACCENT}
        title="Stop Chatting. Start Orchestrating."
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
        {/* Left: Consumer */}
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
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
              <MonoPill color={COLORS.MUTED}>THE CONSUMER</MonoPill>
              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>1-TO-1 MANUAL</span>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: `1px solid ${COLORS.BORDER}`,
                padding: '24px',
                marginBottom: '24px',
              }}
            >
              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED, display: 'block', marginBottom: '8px' }}>
                PROMPT INPUT:
              </span>
              <p
                style={{
                  margin: 0,
                  fontFamily: FONTS.mono,
                  fontSize: '22px',
                  fontWeight: 600,
                  color: COLORS.TEXT,
                }}
              >
                "Write me an email to follow up with leads..."
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Clock size={20} color={COLORS.MUTED} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 700, color: COLORS.MUTED }}>
                Single execution at a time
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <X size={20} color={COLORS.ACCENT} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 700, color: COLORS.MUTED }}>
                Stops the second you close the tab
              </span>
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${COLORS.BORDER}`, paddingTop: '16px' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
              VALUE CEILING: BOUND BY YOUR LINEAR HOURS
            </span>
          </div>
        </div>

        {/* Right: System Builder */}
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
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
              <MonoPill color={COLORS.ACCENT_2} bg="#EEF2FF" border={COLORS.ACCENT_2}>
                THE SYSTEM BUILDER
              </MonoPill>
              <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT_2, fontWeight: 700 }}>
                1-TO-MANY PIPELINE
              </span>
            </div>

            {/* Pipeline flowchart */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr auto 1fr',
                alignItems: 'center',
                gap: '12px',
                padding: '24px 16px',
                backgroundColor: '#F8FAFC',
                border: `1px solid ${COLORS.ACCENT_2}`,
                marginBottom: '24px',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: '11px', color: COLORS.MUTED, display: 'block' }}>
                  INPUT
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700 }}>
                  Webhook
                </span>
              </div>
              <ArrowRight size={20} color={COLORS.ACCENT_2} />
              <div style={{ textAlign: 'center', backgroundColor: '#DBEAFE', padding: '8px' }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: '11px', color: COLORS.ACCENT_2, display: 'block' }}>
                  AI BRAIN
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700, color: COLORS.ACCENT_2 }}>
                  Claude 3.5
                </span>
              </div>
              <ArrowRight size={20} color={COLORS.ACCENT_2} />
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: '11px', color: COLORS.MUTED, display: 'block' }}>
                  OUTPUT
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: '15px', fontWeight: 700 }}>
                  Multi-App
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Activity size={20} color={COLORS.ACCENT_2} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 700, color: COLORS.TEXT }}>
                Orchestrates thousands of requests
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Check size={20} color={COLORS.ACCENT_2} />
              <span style={{ fontFamily: FONTS.heading, fontSize: '24px', fontWeight: 700, color: COLORS.TEXT }}>
                Runs autonomously 24/7 without you
              </span>
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${COLORS.BORDER}`, paddingTop: '16px' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.ACCENT_2, fontWeight: 700 }}>
              VALUE CEILING: INFINITELY SCALABLE
            </span>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 8: 4 Revenue Models with AI (Archetype #3 / #4 Hybrid 2x2 Grid)
// ---------------------------------------------------------------------------

const Slide8: Page = () => {
  const models = [
    {
      num: '01',
      title: 'Service Arbitrage',
      tag: 'FREELANCE & AGENCY',
      desc: 'Deliver 10x faster with AI-augmented workflows in brand, copy, and web.',
      icon: Zap,
      accent: COLORS.ACCENT,
    },
    {
      num: '02',
      title: 'B2B Automation',
      tag: 'N8N CLIENT SYSTEMS',
      desc: 'Build & sell automated customer and data pipelines to SMB businesses.',
      icon: Workflow,
      accent: COLORS.ACCENT_2,
    },
    {
      num: '03',
      title: 'Cost Reduction',
      tag: 'INTERNAL ENTERPRISE',
      desc: 'Replace multi-seat vendor expenses with custom internal AI nodes.',
      icon: TrendingDown,
      accent: COLORS.TEXT,
    },
    {
      num: '04',
      title: 'Digital Micro-Assets',
      tag: 'PROGRAMMATIC PRODUCTS',
      desc: 'Deploy niche apps, databases, and content engines with near-$0 marginal cost.',
      icon: Package,
      accent: '#10B981',
    },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="1.3 // MONETIZATION"
        tagColor={COLORS.ACCENT}
        title="4 Practical Ways to Generate Revenue."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '24px',
          width: '100%',
          height: '520px',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {models.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.num}
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: '36px 44px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: '36px',
                    fontWeight: 700,
                    color: m.accent,
                  }}
                >
                  {m.num}
                </span>
                <MonoPill>{m.tag}</MonoPill>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#FFFFFF',
                    border: `1px solid ${COLORS.BORDER}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: m.accent,
                  }}
                >
                  <Icon size={32} />
                </div>
                <div>
                  <h3
                    style={{
                      margin: '0 0 6px 0',
                      fontFamily: FONTS.heading,
                      fontSize: '32px',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      color: COLORS.TEXT,
                    }}
                  >
                    {m.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: FONTS.body,
                      fontSize: '19px',
                      color: COLORS.MUTED,
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 9: The Arbitrage Margin (Archetype #6: Capacity Bar)
// ---------------------------------------------------------------------------

const Slide9: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="1.3 // THE ECONOMICS"
        tagColor={COLORS.ACCENT}
        title="Sell the Outcome, Not the Hours."
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
          width: '100%',
          marginTop: 'auto',
          marginBottom: '30px',
        }}
      >
        {/* Bar 1: Client Value */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '18px', fontWeight: 600, color: COLORS.TEXT }}>
              CLIENT PERCEIVED VALUE // FIXED CONTRACT PRICE
            </span>
            <span style={{ fontFamily: FONTS.mono, fontSize: '20px', fontWeight: 700, color: COLORS.ACCENT_2 }}>
              100% VALUE
            </span>
          </div>
          <div
            style={{
              width: '100%',
              height: '90px',
              backgroundColor: COLORS.ACCENT_2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 32px',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 800, color: '#FFFFFF' }}>
              $1,500 Deliverable Value
            </span>
            <span style={{ fontFamily: FONTS.mono, fontSize: '18px', fontWeight: 600, color: '#FFFFFF' }}>
              MARKET STANDARD RATE
            </span>
          </div>
        </div>

        {/* Bar 2: Your Delivery with AI */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '18px', fontWeight: 600, color: COLORS.TEXT }}>
              YOUR ACTUAL EFFORT WITH AI SYSTEMS
            </span>
            <span style={{ fontFamily: FONTS.mono, fontSize: '20px', fontWeight: 700, color: COLORS.ACCENT }}>
              85% PROFIT MARGIN
            </span>
          </div>

          <div
            style={{
              width: '100%',
              height: '110px',
              display: 'flex',
              boxSizing: 'border-box',
            }}
          >
            {/* 15% execution bar */}
            <div
              style={{
                width: '18%',
                backgroundColor: COLORS.ACCENT,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 24px',
                boxSizing: 'border-box',
              }}
            >
              <span style={{ fontFamily: FONTS.heading, fontSize: '28px', fontWeight: 800, color: '#FFFFFF' }}>
                4 Hours
              </span>
              <span style={{ fontFamily: FONTS.mono, fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>
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
                padding: '0 36px',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <TrendingDown size={32} color={COLORS.ACCENT} style={{ transform: 'rotate(180deg)' }} />
                <div>
                  <div style={{ fontFamily: FONTS.heading, fontSize: '32px', fontWeight: 800, color: COLORS.TEXT }}>
                    Your Leverage Margin
                  </div>
                  <span style={{ fontFamily: FONTS.mono, fontSize: '14px', color: COLORS.MUTED }}>
                    RETAINED TIME & PURE CAPITAL ARBITRAGE
                  </span>
                </div>
              </div>
              <span style={{ fontFamily: FONTS.heading, fontSize: '48px', fontWeight: 800, color: COLORS.ACCENT }}>
                +85%
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

// ---------------------------------------------------------------------------
// Slide 10: Live Demo Transition (Archetype #10: Live Demo Interrupt)
// ---------------------------------------------------------------------------

const Slide10: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="1.4 // LIVE PREVIEW"
        tagColor={COLORS.ACCENT}
        title="See the Finish Line."
        subtitle="Live walkthrough: Day 3 Lovable Brand Site + Day 5 n8n AI Workflow."
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          width: '100%',
          height: '520px',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {/* Pulsing Live Demo Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#FFF0EE',
            border: `2px solid ${COLORS.ACCENT}`,
            padding: '12px 28px',
          }}
        >
          <span
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: COLORS.ACCENT,
              display: 'inline-block',
              boxShadow: '0 0 12px rgba(255, 59, 48, 0.8)',
            }}
          />
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: COLORS.ACCENT,
            }}
          >
            LIVE DEMO INTERRUPT // SWITCH TO SCREEN
          </span>
        </div>

        {/* Dual tool cards connected */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            gap: '32px',
            width: '1200px',
          }}
        >
          {/* Card 1: Lovable Web UI */}
          <div
            style={{
              backgroundColor: COLORS.SURFACE,
              border: `2px solid ${COLORS.BORDER}`,
              padding: '44px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <MonoPill>DAY 03 BUILD</MonoPill>
              <Layout size={28} color={COLORS.ACCENT_2} />
            </div>
            <div>
              <h3 style={{ margin: '0 0 8px 0', fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 800 }}>
                Lovable Brand App
              </h3>
              <p style={{ margin: 0, fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.MUTED }}>
                FULL-STACK GENERATIVE INTERACTION
              </p>
            </div>
          </div>

          <ArrowRight size={44} color={COLORS.ACCENT} strokeWidth={2.5} />

          {/* Card 2: n8n Workflow */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: `2px solid ${COLORS.ACCENT}`,
              padding: '44px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxShadow: '0 16px 36px rgba(255, 59, 48, 0.08)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <MonoPill color={COLORS.ACCENT} bg="#FFF0EE" border={COLORS.ACCENT}>
                DAY 05 BUILD
              </MonoPill>
              <Workflow size={28} color={COLORS.ACCENT} />
            </div>
            <div>
              <h3 style={{ margin: '0 0 8px 0', fontFamily: FONTS.heading, fontSize: '36px', fontWeight: 800 }}>
                n8n Autonomous Node
              </h3>
              <p style={{ margin: 0, fontFamily: FONTS.mono, fontSize: '15px', color: COLORS.ACCENT, fontWeight: 600 }}>
                AUTONOMOUS PRODUCTION BACKEND
              </p>
            </div>
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
  'Welcome to AI Camp Day 1. Today we pivot from playing with chatbots to building scalable systems. Here is our 5-day trajectory: we start with mindset and leverage today, conquer prompt engineering tomorrow, build our brand and full-stack web studio on Day 3, master n8n workflows on Day 4, and deploy autonomous agents with RAG on Day 5.',

  // Slide 2
  'By Friday, you will have shipped four concrete products into the wild: a complete brand visual identity system, professional-grade studio assets, a live full-stack web app on Lovable, and an automated backend n8n workflow.',

  // Slide 3
  'Let us establish expectations immediately. We are not doing linear math papers, passive get-rich schemes, or casual toy chatting. This camp is built for builders: creators, freelancers, and operators ready to multiply their output.',

  // Slide 4
  'This is not an incremental software upgrade; it is an economic power shift. Altman, Huang, Amodei, and Hassabis are orchestrating trillion-dollar infrastructure shifts. Our job is to capture leverage at the application layer.',

  // Slide 5
  'Intelligence is physical. Trillions of dollars in energy contracts, sovereign clusters, and liquid-cooled data centers prove compute is the new oil. You have direct API access to this industrial powerhouse.',

  // Slide 6
  'Here is the personal leverage equation: A legacy team takes 30 days and heavy payroll across design, dev, and ops. One builder equipped with automated AI pipelines ships the same production deliverable in 3 hours.',

  // Slide 7
  'Do not remain a consumer typing isolated prompts that halt when you leave your desk. Become a system builder who designs persistent, multi-app pipelines that run 24 hours a day.',

  // Slide 8
  'Four immediate monetization avenues: service arbitrage for high-velocity delivery, B2B workflow automations sold to small businesses, internal cost reduction, and digital micro-products launched at near-zero marginal cost.',

  // Slide 9
  'Never bill by the hour. The client pays for a $1,500 outcome. When you execute that deliverable with AI systems in 4 hours, that 85% delta is your retained leverage margin.',

  // Slide 10
  'Let us switch screens right now and look at the real finish line: I will demonstrate the live Lovable brand site and the autonomous n8n agent workflow we will build together.',
];

export const meta: SlideMeta = {
  title: 'Lecture 1: AI Leverage, Economics, and Revenue Generation',
  createdAt: '2026-11-11T12:39:35.073Z',
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
] satisfies Page[];
