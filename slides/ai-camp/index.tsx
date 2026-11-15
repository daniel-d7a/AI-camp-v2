import type {
  DesignSystem,
  Page,
  SlideMeta,
  SlideTransition,
} from "@open-slide/core";
import { ImagePlaceholder, useIsActivePage } from "@open-slide/core";
import {
  AlertOctagon,
  AlertTriangle,
  ArrowRight,
  Binary,
  Book,
  BookOpen,
  Bot,
  Braces,
  Brain,
  Briefcase,
  Calendar,
  Check,
  CheckCircle,
  ClipboardList,
  Clock,
  Code,
  Code2,
  Coins,
  Copy,
  Cpu,
  CreditCard,
  Crosshair,
  Database,
  DollarSign,
  FileCheck,
  FileCode,
  FileText,
  Filter,
  GitBranch,
  Globe,
  GraduationCap,
  Grid,
  Hammer,
  Hash,
  Headphones,
  Image as ImageIcon,
  Inbox,
  Layers,
  Layout,
  LayoutGrid,
  Lock,
  Mail,
  Maximize2,
  MessageCircle,
  MessageCircleOff,
  MessageSquare,
  MessageSquareCode,
  MousePointerClick,
  Network,
  Package,
  Paperclip,
  Radio,
  RotateCcw,
  Scissors,
  Search,
  Send,
  Share2,
  Shield,
  Shirt,
  ShoppingBag,
  Sigma,
  Smile,
  Sparkles,
  Table,
  Terminal,
  TrendingDown,
  TrendingUp,
  User,
  UserCheck,
  Users,
  Wand2,
  Webhook,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import React, {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

import {
  COLORS,
  FONTS,
  SlideContainer,
  SlideHeader,
  SwissCard,
  deckTransition,
} from "../../theme";

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

function Step({
  children,
  index = 0,
}: {
  children: ReactNode;
  index?: number;
}) {
  return (
    <StaggerItem index={index} style={{ height: "100%" }}>
      {children}
    </StaggerItem>
  );
}

function Steps({ children }: { children: ReactNode }) {
  let idx = 0;
  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<{ index?: number }>(child)) return child;
        const current = idx;
        idx += 1;
        return React.cloneElement(child, { index: current });
      })}
    </>
  );
}

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
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 14px",
        fontFamily: FONTS.mono,
        fontSize: "15px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
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
        position: "relative",
        width: "100%",
        height,
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${accent ? COLORS.ACCENT : COLORS.BORDER}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        background: `repeating-linear-gradient(45deg, #F4F4F5, #F4F4F5 10px, #EEEEF0 10px, #EEEEF0 20px)`,
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          border: `1px solid ${COLORS.BORDER}`,
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: COLORS.MUTED,
        }}
      >
        <Maximize2 size={20} />
      </div>
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: "17px",
          fontWeight: 700,
          color: COLORS.TEXT,
          letterSpacing: "0.05em",
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: "13px",
          color: COLORS.MUTED,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
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
    { num: "01", title: "Mindset & Leverage", icon: Globe },
    { num: "02", title: "Prompt Engineering", icon: Terminal },
    { num: "03", title: "Brand & Web Studio", icon: Layout },
    { num: "04", title: "n8n Foundations", icon: Workflow },
    { num: "05", title: "AI Agents & RAG", icon: Bot },
  ];

  const dayTitles: Record<string, string> = {
    "01": "AI Leverage, Economics, and Revenue.",
    "02": "LLM Mechanics and Prompt Engineering.",
    "03": "AI Creation Studio — Brand, Visuals, and Website.",
    "04": "Automation Foundations with n8n.",
    "05": "AI Agents & RAG Systems.",
  };

  const isMainTitle = !activeDay;
  const tag = isMainTitle
    ? "AI CAMP // 5-DAY ROADMAP"
    : `DAY ${activeDay} // TOPIC ROADMAP`;
  const title = isMainTitle
    ? "From Chatting to Building Systems."
    : `Day ${activeDay}: ${dayTitles[activeDay] ?? ""}`;
  const subtitle = isMainTitle
    ? "A 5-day architectural roadmap from prompting to autonomous production."
    : `Today's mission and position in the 5-day system curriculum.`;

  return (
    <SlideContainer>
      <SlideHeader tag={tag} title={title} subtitle={subtitle} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          width: "100%",
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "380px",
                    padding: "36px",
                    boxSizing: "border-box",
                    backgroundColor: isActive ? "#FFFFFF" : COLORS.SURFACE,
                    border: `2px solid ${isActive ? COLORS.ACCENT : COLORS.BORDER}`,
                    boxShadow: isActive
                      ? "0 12px 30px rgba(255, 59, 48, 0.08)"
                      : "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: "44px",
                        fontWeight: 700,
                        color: isActive ? COLORS.ACCENT : COLORS.MUTED,
                      }}
                    >
                      {d.num}
                    </span>
                    {isActive && (
                      <MonoPill
                        color="#FFFFFF"
                        bg={COLORS.ACCENT}
                        border={COLORS.ACCENT}
                      >
                        TODAY
                      </MonoPill>
                    )}
                  </div>

                  <div>
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: isActive ? "#FFF0EE" : "#FFFFFF",
                        border: `1px solid ${isActive ? COLORS.ACCENT : COLORS.BORDER}`,
                        marginBottom: "20px",
                        color: isActive ? COLORS.ACCENT : COLORS.TEXT,
                      }}
                    >
                      <Icon size={28} />
                    </div>
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: FONTS.heading,
                        fontSize: "26px",
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

// Slide 1B: Instructor Introduction
const Slide0_Instructor: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="AI CAMP // YOUR INSTRUCTOR"
      tagColor={COLORS.ACCENT}
      title="Meet Your Instructor."
      subtitle="Learn directly from a builder shipping production AI systems."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "420px 1fr",
        gap: "32px",
        width: "100%",
        height: "460px",
      }}
    >
      <StaggerItem index={0}>
        <div
          style={{
            height: "460px",
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            borderTop: `3px solid ${COLORS.ACCENT}`,
            padding: "20px",
            boxSizing: "border-box",
            display: "flex",
          }}
        >
          <ImagePlaceholder hint="Instructor portrait" />
        </div>
      </StaggerItem>

      <StaggerItem index={1}>
        <div
          style={{
            height: "460px",
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: "44px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill
              color={COLORS.BG}
              bg={COLORS.ACCENT}
              border={COLORS.ACCENT}
            >
              LEAD INSTRUCTOR
            </MonoPill>
            <User size={32} color={COLORS.TEXT} strokeWidth={2} />
          </div>

          <div>
            <h2
              style={{
                margin: "0 0 10px 0",
                fontFamily: FONTS.heading,
                fontSize: "56px",
                fontWeight: 800,
                lineHeight: 1.05,
              }}
            >
              Eyad ALsherif
            </h2>
            <p
              style={{
                margin: 0,
                fontFamily: FONTS.body,
                fontSize: "26px",
                color: COLORS.MUTED,
                lineHeight: 1.4,
              }}
            >
              Full Stack &amp; AI Developer
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            <div
              style={{
                backgroundColor: COLORS.BG,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "13px",
                  fontWeight: 700,
                  color: COLORS.ACCENT,
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                FOCUS 01
              </span>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "20px",
                  fontWeight: 800,
                }}
              >
                LLM Systems
              </span>
            </div>
            <div
              style={{
                backgroundColor: COLORS.BG,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "13px",
                  fontWeight: 700,
                  color: COLORS.ACCENT_2,
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                FOCUS 02
              </span>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "20px",
                  fontWeight: 800,
                }}
              >
                n8n Pipelines
              </span>
            </div>
            <div
              style={{
                backgroundColor: COLORS.BG,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "13px",
                  fontWeight: 700,
                  color: COLORS.TEXT,
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                FOCUS 03
              </span>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "20px",
                  fontWeight: 800,
                }}
              >
                RAG Agents
              </span>
            </div>
          </div>
        </div>
      </StaggerItem>
    </div>
  </SlideContainer>
);

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
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          width: "100%",
          height: "420px",
        }}
      >
        <Steps>
          <Step>
            <SwissCard
              style={{ height: "100%", justifyContent: "space-between" }}
            >
              <Sparkles size={28} color={COLORS.ACCENT} />
              <div>
                <div
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: "72px",
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  Aa
                </div>
                <div style={{ display: "flex", gap: "8px", marginTop: "14px" }}>
                  {["#09090B", "#FF3B30", "#2563EB", "#E4E4E7"].map((c) => (
                    <span
                      key={c}
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        backgroundColor: c,
                        border: `1px solid ${COLORS.BORDER}`,
                        display: "inline-block",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h4
                  style={{
                    margin: "0 0 6px 0",
                    fontFamily: FONTS.heading,
                    fontSize: "24px",
                    fontWeight: 800,
                  }}
                >
                  Brand Identity
                </h4>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "14px",
                    color: COLORS.MUTED,
                  }}
                >
                  Typography & Palette Tokens
                </span>
              </div>
            </SwissCard>
          </Step>

          <Step>
            <SwissCard
              style={{ height: "100%", justifyContent: "space-between" }}
            >
              <Maximize2 size={28} color={COLORS.ACCENT} />
              <ImagePlaceholderBox
                title="STUDIO ASSET"
                subtitle="4K EDITORIAL"
                height={220}
              />
              <div>
                <h4
                  style={{
                    margin: "0 0 6px 0",
                    fontFamily: FONTS.heading,
                    fontSize: "24px",
                    fontWeight: 800,
                  }}
                >
                  Commercial Studio
                </h4>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "14px",
                    color: COLORS.MUTED,
                  }}
                >
                  AI Generated Product Photos
                </span>
              </div>
            </SwissCard>
          </Step>

          <Step>
            <SwissCard
              style={{ height: "100%", justifyContent: "space-between" }}
            >
              <Layout size={28} color={COLORS.ACCENT_2} />
              <ImagePlaceholderBox
                title="LOVABLE WEB APP"
                subtitle="WEBSITE UI MOCKUP"
                height={220}
              />
              <div>
                <h4
                  style={{
                    margin: "0 0 6px 0",
                    fontFamily: FONTS.heading,
                    fontSize: "24px",
                    fontWeight: 800,
                  }}
                >
                  Web Application
                </h4>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "14px",
                    color: COLORS.MUTED,
                  }}
                >
                  Full-Stack Interactive Code
                </span>
              </div>
            </SwissCard>
          </Step>

          <Step>
            <SwissCard
              style={{ height: "100%", justifyContent: "space-between" }}
            >
              <Workflow size={28} color={COLORS.ACCENT} />
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `1px solid ${COLORS.BORDER}`,
                  padding: "20px",
                  height: "220px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#FFF0EE",
                    border: `2px solid ${COLORS.ACCENT}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: COLORS.ACCENT,
                  }}
                >
                  <Workflow size={36} />
                </div>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "15px",
                    fontWeight: 700,
                    color: COLORS.TEXT,
                  }}
                >
                  n8n ENGINE
                </span>
              </div>
              <div>
                <h4
                  style={{
                    margin: "0 0 6px 0",
                    fontFamily: FONTS.heading,
                    fontSize: "24px",
                    fontWeight: 800,
                  }}
                >
                  Automated Pipeline
                </h4>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "14px",
                    color: COLORS.MUTED,
                  }}
                >
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
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
          width: "100%",
        }}
      >
        <Steps>
          {/* Left: For You */}
          <Step>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: `2px solid ${COLORS.ACCENT_2}`,
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "460px",
                boxSizing: "border-box",
                boxShadow: "0 12px 30px rgba(37, 99, 235, 0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: "32px",
                    fontWeight: 800,
                    color: COLORS.ACCENT_2,
                  }}
                >
                  For You
                </span>
                <Check size={28} color={COLORS.ACCENT_2} strokeWidth={3} />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {[
                  { text: "Creators who build software", icon: Hammer },
                  { text: "Freelancers and operators", icon: Briefcase },
                  { text: "Engineers who build systems", icon: Cpu },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <Icon size={24} color={COLORS.ACCENT_2} />
                      <span
                        style={{
                          fontFamily: FONTS.heading,
                          fontSize: "24px",
                          fontWeight: 800,
                          color: COLORS.TEXT,
                        }}
                      >
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  color: COLORS.ACCENT_2,
                  fontWeight: 700,
                }}
              >
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
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "460px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: "32px",
                    fontWeight: 800,
                    color: COLORS.MUTED,
                  }}
                >
                  Out of Scope
                </span>
                <X size={28} color={COLORS.ACCENT} />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {[
                  { text: "Mathematical theory papers", icon: Sigma },
                  { text: "Passive financial schemes", icon: Coins },
                  { text: "Casual chat usage", icon: MessageCircleOff },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        opacity: 0.7,
                      }}
                    >
                      <Icon size={24} color={COLORS.MUTED} />
                      <span
                        style={{
                          fontFamily: FONTS.heading,
                          fontSize: "24px",
                          fontWeight: 700,
                          color: COLORS.MUTED,
                          textDecoration: "line-through",
                        }}
                      >
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  color: COLORS.MUTED,
                }}
              >
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
    {
      num: "01",
      title: "Compute Limits",
      desc: "Learn why hardware limits AI development.",
      icon: Globe,
    },
    {
      num: "02",
      title: "Personal Leverage",
      desc: "Compress 30 days of team work into 3 hours.",
      icon: Clock,
    },
    {
      num: "03",
      title: "Revenue Models",
      desc: "Build high-margin client and system services.",
      icon: Zap,
    },
    {
      num: "04",
      title: "Arbitrage Pricing",
      desc: "Sell fixed business outcomes, not working hours.",
      icon: DollarSign,
    },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 01 // OUTCOMES"
        title="What You Will Learn Today."
        subtitle="Key takeaways and skills for Day 1."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          width: "100%",
        }}
      >
        <Steps>
          {outcomes.map((o) => {
            const Icon = o.icon;
            return (
              <Step key={o.num}>
                <div
                  style={{
                    backgroundColor: COLORS.SURFACE,
                    border: `1px solid ${COLORS.BORDER}`,
                    padding: "36px",
                    height: "380px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONTS.mono,
                      fontSize: "40px",
                      fontWeight: 800,
                      color: COLORS.ACCENT,
                    }}
                  >
                    {o.num}
                  </span>
                  <div>
                    <Icon
                      size={36}
                      color={COLORS.TEXT}
                      style={{ marginBottom: "16px" }}
                    />
                    <h3
                      style={{
                        margin: "0 0 8px 0",
                        fontFamily: FONTS.heading,
                        fontSize: "26px",
                        fontWeight: 800,
                      }}
                    >
                      {o.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: FONTS.body,
                        fontSize: "18px",
                        color: COLORS.MUTED,
                      }}
                    >
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
    { name: "Sam Altman", org: "OpenAI", desc: "Frontier models" },
    { name: "Jensen Huang", org: "NVIDIA", desc: "Compute hardware" },
    { name: "Dario Amodei", org: "Anthropic", desc: "AI safety & code" },
    { name: "Sundar Pichai", org: "Google", desc: "Global AI ecosystem" },
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
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          width: "100%",
        }}
      >
        <Steps>
          {leaders.map((p) => (
            <Step key={p.name}>
              <div
                style={{
                  backgroundColor: COLORS.SURFACE,
                  border: `1px solid ${COLORS.BORDER}`,
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "440px",
                  boxSizing: "border-box",
                }}
              >
                <MonoPill>{p.org}</MonoPill>
                <ImagePlaceholderBox
                  title={p.name.toUpperCase()}
                  subtitle="PORTRAIT"
                  height={240}
                />
                <div>
                  <h3
                    style={{
                      margin: "0 0 4px 0",
                      fontFamily: FONTS.heading,
                      fontSize: "26px",
                      fontWeight: 800,
                    }}
                  >
                    {p.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: FONTS.mono,
                      fontSize: "14px",
                      color: COLORS.MUTED,
                    }}
                  >
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
const SPIN_DIGITS = Array.from({ length: 6 }, () => [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
]).flat();

function SpinningDigit({
  digit,
  active,
  delayMs,
}: {
  digit: number;
  active: boolean;
  delayMs: number;
}) {
  const targetRow = 50 + digit;
  return (
    <span
      style={{
        display: "inline-block",
        height: "1em",
        overflow: "hidden",
        lineHeight: 1,
        verticalAlign: "top",
      }}
    >
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          transform: active ? `translateY(-${targetRow}em)` : "translateY(0em)",
          transition: `transform 2700ms cubic-bezier(0.12, 0.92, 0.18, 1) ${delayMs}ms`,
          willChange: "transform",
        }}
      >
        {SPIN_DIGITS.map((d, idx) => (
          <span
            key={idx}
            style={{
              height: "1em",
              lineHeight: 1,
              display: "block",
            }}
          >
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

function SpinningCounter({
  value,
  active,
  color,
}: {
  value: string;
  active: boolean;
  color: string;
}) {
  let digitIndex = 0;
  return (
    <div
      style={{
        fontFamily: FONTS.heading,
        fontSize: "68px",
        fontWeight: 800,
        lineHeight: 1,
        letterSpacing: "-0.03em",
        fontVariantNumeric: "tabular-nums",
        color,
        display: "inline-flex",
        alignItems: "baseline",
      }}
    >
      {Array.from(value).map((ch, idx) => {
        if (ch >= "0" && ch <= "9") {
          const delayMs = digitIndex * 90;
          digitIndex += 1;
          return (
            <SpinningDigit
              key={idx}
              digit={Number(ch)}
              active={active}
              delayMs={delayMs}
            />
          );
        }
        return (
          <span key={idx} style={{ lineHeight: 1 }}>
            {ch}
          </span>
        );
      })}
    </div>
  );
}

function SpendingCounterCard({
  metric,
  sub,
  value,
  desc,
  color,
  active,
}: {
  metric: string;
  sub: string;
  value: string;
  desc: string;
  color: string;
  active: boolean;
}) {
  return (
    <div
      style={{
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        borderTop: `3px solid ${color}`,
        padding: "26px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "14px",
            fontWeight: 700,
            color,
            letterSpacing: "0.08em",
          }}
        >
          {metric}
        </span>
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "13px",
            color: COLORS.MUTED,
          }}
        >
          {sub}
        </span>
      </div>

      <SpinningCounter value={value} active={active} color={COLORS.TEXT} />

      <p
        style={{
          margin: 0,
          fontFamily: FONTS.body,
          fontSize: "17px",
          lineHeight: 1.45,
          color: COLORS.MUTED,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

const Slide7_PhysicalScale: Page = () => {
  const isActive = useIsActivePage();
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setSpinning(false);
      return;
    }
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setSpinning(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [isActive]);

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 01 // INFRASTRUCTURE SPENDING"
        title="Trillions Flow Into AI Infrastructure."
        titleSize={76}
        subtitle="Massive spending on GPUs, compute, and AI startups proves compute is the defining modern asset."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "28px",
          width: "100%",
          height: "580px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "24px",
            height: "100%",
          }}
        >
          <SpendingCounterCard
            metric="HYPERSCALER CAPEX"
            sub="2025 ANNUAL SPEND"
            value="$320B+"
            desc="Microsoft, Meta, Google, and Amazon invest hundreds of billions into AI data centers."
            color={COLORS.ACCENT}
            active={spinning}
          />
          <SpendingCounterCard
            metric="GPU COMPUTE SALES"
            sub="DATA CENTER REVENUE"
            value="$115B"
            desc="Enterprise H100 and Blackwell GPU clusters power global model training and inference."
            color={COLORS.ACCENT_2}
            active={spinning}
          />
          <SpendingCounterCard
            metric="AI VENTURE CAPITAL"
            sub="GLOBAL FUNDING"
            value="$110B+"
            desc="Record private capital flows into foundation model labs and AI infrastructure firms."
            color={COLORS.TEXT}
            active={spinning}
          />
          <SpendingCounterCard
            metric="FRONTIER GPU UNIT"
            sub="PER CHIP COST"
            value="$40,000"
            desc="Sold-out HBM3e memory and silicon give chipmakers historic 75%+ gross margins."
            color={COLORS.ACCENT}
            active={spinning}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              overflow: "hidden",
              border: `1px solid ${COLORS.BORDER}`,
              backgroundColor: COLORS.SURFACE,
            }}
          >
            <ImagePlaceholder hint="NVIDIA GPU cluster or AI data center server rack" />
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              overflow: "hidden",
              border: `1px solid ${COLORS.BORDER}`,
              backgroundColor: COLORS.SURFACE,
            }}
          >
            <ImagePlaceholder hint="AI infrastructure capital spending chart or hyperscaler facility" />
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

// Slide 8: Leverage Equation & Iron Triangle
type TriangleConstraint = "fast" | "cheap" | "good";

function ConstraintButton({
  label,
  color,
  active,
  onClick,
  style,
}: {
  label: string;
  color: string;
  active: boolean;
  onClick: () => void;
  style: CSSProperties;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        position: "absolute",
        fontFamily: FONTS.mono,
        fontSize: "13px",
        fontWeight: 800,
        letterSpacing: "0.04em",
        padding: "6px 12px",
        border: `2px solid ${active ? color : COLORS.BORDER}`,
        backgroundColor: active ? "#FFFFFF" : COLORS.SURFACE,
        color: active ? color : COLORS.MUTED,
        cursor: "pointer",
        opacity: active ? 1 : 0.48,
        transform: active ? "scale(1.06)" : "scale(0.94)",
        boxShadow: active ? `0 6px 16px ${color}24` : "none",
        transition:
          "transform 260ms cubic-bezier(0.16, 1, 0.3, 1), opacity 220ms ease, border-color 220ms ease, color 220ms ease, background-color 220ms ease, box-shadow 260ms ease",
        whiteSpace: "nowrap",
        zIndex: 2,
        ...style,
      }}
    >
      {label}
    </button>
  );
}

const Slide8_LeverageEquation: Page = () => {
  const [selected, setSelected] = useState<TriangleConstraint[]>([
    "fast",
    "cheap",
  ]);
  const [aiMode, setAiMode] = useState(false);

  const toggleConstraint = (id: TriangleConstraint) => {
    if (aiMode) return;
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.length > 1 ? prev.filter((item) => item !== id) : prev;
      }
      return prev.length >= 2 ? [prev[1], id] : [...prev, id];
    });
  };

  const isFast = aiMode || selected.includes("fast");
  const isCheap = aiMode || selected.includes("cheap");
  const isGood = aiMode || selected.includes("good");

  const edgeFastCheap = isFast && isCheap;
  const edgeFastGood = isFast && isGood;
  const edgeCheapGood = isCheap && isGood;

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 01 // LEVERAGE"
        title="Break the Project Iron Triangle."
        subtitle="Autonomous systems eliminate the classic trade-off between speed, cost, and quality."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.95fr 1.25fr",
          gap: "32px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left: Interactive Iron Triangle Diagram */}
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${aiMode ? COLORS.ACCENT : COLORS.BORDER}`,
            padding: "28px 36px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "480px",
            boxSizing: "border-box",
            transition: "border-color 350ms ease, box-shadow 350ms ease",
            boxShadow: aiMode ? "0 16px 40px rgba(255, 59, 48, 0.12)" : "none",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "13px",
                fontWeight: 700,
                color: aiMode ? COLORS.ACCENT : COLORS.MUTED,
                transition: "color 250ms ease",
              }}
            >
              {aiMode
                ? "AI MODE // ALL 3 UNLOCKED"
                : "CLASSICAL CONSTRAINT // PICK 2"}
            </span>

            <button
              type="button"
              onClick={() => setAiMode((v) => !v)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                fontFamily: FONTS.mono,
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.06em",
                cursor: "pointer",
                border: `2px solid ${COLORS.ACCENT}`,
                backgroundColor: aiMode ? COLORS.ACCENT : "#FFFFFF",
                color: aiMode ? "#FFFFFF" : COLORS.ACCENT,
                transform: aiMode ? "scale(1.04)" : "scale(1)",
                boxShadow: aiMode
                  ? "0 8px 20px rgba(255, 59, 48, 0.28)"
                  : "0 2px 8px rgba(0, 0, 0, 0.05)",
                transition:
                  "transform 220ms cubic-bezier(0.16, 1, 0.3, 1), background-color 220ms ease, color 220ms ease, box-shadow 220ms ease",
              }}
            >
              <Sparkles size={15} />
              {aiMode ? "AI: ON" : "AI"}
            </button>
          </div>

          {/* Enlarging SVG Triangle Stage */}
          <div
            style={{
              position: "relative",
              width: "320px",
              height: "260px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: aiMode ? "scale(1.18)" : "scale(1)",
              transition: "transform 520ms cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform",
            }}
          >
            <svg
              width="280"
              height="240"
              viewBox="0 0 280 240"
              style={{ overflow: "visible" }}
            >
              {/* Triangle Fill */}
              <polygon
                points="140,28 28,204 252,204"
                fill={aiMode ? "#FFF5F5" : "#FFFFFF"}
                style={{ transition: "fill 360ms ease" }}
              />

              {/* Edge: Fast <-> Cheap */}
              <line
                x1="140"
                y1="28"
                x2="28"
                y2="204"
                stroke={
                  aiMode
                    ? COLORS.ACCENT
                    : edgeFastCheap
                      ? COLORS.TEXT
                      : COLORS.BORDER
                }
                strokeWidth={aiMode || edgeFastCheap ? 3.5 : 2}
                style={{
                  transition: "stroke 260ms ease, stroke-width 260ms ease",
                }}
              />

              {/* Edge: Fast <-> Good */}
              <line
                x1="140"
                y1="28"
                x2="252"
                y2="204"
                stroke={
                  aiMode
                    ? COLORS.ACCENT
                    : edgeFastGood
                      ? COLORS.TEXT
                      : COLORS.BORDER
                }
                strokeWidth={aiMode || edgeFastGood ? 3.5 : 2}
                style={{
                  transition: "stroke 260ms ease, stroke-width 260ms ease",
                }}
              />

              {/* Edge: Cheap <-> Good */}
              <line
                x1="28"
                y1="204"
                x2="252"
                y2="204"
                stroke={
                  aiMode
                    ? COLORS.ACCENT
                    : edgeCheapGood
                      ? COLORS.TEXT
                      : COLORS.BORDER
                }
                strokeWidth={aiMode || edgeCheapGood ? 3.5 : 2}
                style={{
                  transition: "stroke 260ms ease, stroke-width 260ms ease",
                }}
              />

              {/* Vertex Dots */}
              <circle
                cx="140"
                cy="28"
                r={isFast ? 9 : 6}
                fill={isFast ? COLORS.ACCENT : COLORS.BORDER}
                style={{ transition: "r 240ms ease, fill 240ms ease" }}
              />
              <circle
                cx="28"
                cy="204"
                r={isCheap ? 9 : 6}
                fill={isCheap ? COLORS.ACCENT_2 : COLORS.BORDER}
                style={{ transition: "r 240ms ease, fill 240ms ease" }}
              />
              <circle
                cx="252"
                cy="204"
                r={isGood ? 9 : 6}
                fill={isGood ? COLORS.TEXT : COLORS.BORDER}
                style={{ transition: "r 240ms ease, fill 240ms ease" }}
              />
            </svg>

            {/* Clickable Constraint Vertices */}
            <ConstraintButton
              label="FAST (TIME)"
              color={COLORS.ACCENT}
              active={isFast}
              onClick={() => toggleConstraint("fast")}
              style={{ top: "-10px", left: "50%", marginLeft: "-62px" }}
            />
            <ConstraintButton
              label="CHEAP (MONEY)"
              color={COLORS.ACCENT_2}
              active={isCheap}
              onClick={() => toggleConstraint("cheap")}
              style={{ bottom: "4px", left: "-18px" }}
            />
            <ConstraintButton
              label="GOOD (QUALITY)"
              color={COLORS.TEXT}
              active={isGood}
              onClick={() => toggleConstraint("good")}
              style={{ bottom: "4px", right: "-22px" }}
            />

            {/* Inner Text — appears when AI enlarges the triangle */}
            <div
              style={{
                position: "absolute",
                top: "135px",
                left: "50%",
                width: "132px",
                marginLeft: "-66px",
                textAlign: "center",
                pointerEvents: "none",
                opacity: aiMode ? 1 : 0,
                transform: aiMode
                  ? "scale(1) translateY(0)"
                  : "scale(0.86) translateY(6px)",
                transition: aiMode
                  ? "opacity 320ms ease 180ms, transform 360ms cubic-bezier(0.16, 1, 0.3, 1) 180ms"
                  : "opacity 160ms ease, transform 180ms ease",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "15px",
                  fontWeight: 800,
                  color: COLORS.ACCENT,
                  lineHeight: 1.2,
                  display: "block",
                }}
              >
                AI BREAKS THE LIMIT
              </span>
            </div>
          </div>

          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: "14px",
              color: COLORS.MUTED,
              textAlign: "center",
            }}
          >
            {aiMode
              ? "AI pipelines deliver speed, low cost, and quality simultaneously."
              : "Click any constraint to trade off (max 2 active) — or click AI."}
          </span>
        </div>

        {/* Right: Comparative cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Steps>
            <Step>
              <div
                style={{
                  backgroundColor: COLORS.SURFACE,
                  border: `1px solid ${COLORS.BORDER}`,
                  padding: "28px 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: "28px",
                      fontWeight: 800,
                      color: COLORS.MUTED,
                    }}
                  >
                    Standard Agency Team
                  </span>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Users size={20} color={COLORS.MUTED} />
                    <Clock size={20} color={COLORS.MUTED} />
                    <DollarSign size={20} color={COLORS.MUTED} />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONTS.body,
                      fontSize: "18px",
                      color: COLORS.MUTED,
                    }}
                  >
                    5 roles • $25,000 payroll burn • Meeting overhead
                  </span>
                  <span
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: "36px",
                      fontWeight: 800,
                      color: COLORS.MUTED,
                    }}
                  >
                    30 Days
                  </span>
                </div>
              </div>
            </Step>

            <Step>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `2px solid ${COLORS.ACCENT}`,
                  padding: "28px 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  boxShadow: "0 12px 30px rgba(255, 59, 48, 0.08)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: "28px",
                      fontWeight: 800,
                      color: COLORS.TEXT,
                    }}
                  >
                    1 Builder + AI Pipelines
                  </span>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <UserCheck size={20} color={COLORS.ACCENT} />
                    <Zap size={20} color={COLORS.ACCENT} />
                    <Sparkles size={20} color={COLORS.ACCENT} />
                    <Workflow size={20} color={COLORS.ACCENT} />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONTS.body,
                      fontSize: "18px",
                      color: COLORS.TEXT,
                      fontWeight: 500,
                    }}
                  >
                    1 builder • Near-$0 compute cost • High-fidelity verified
                    deliverable
                  </span>
                  <span
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: "36px",
                      fontWeight: 800,
                      color: COLORS.ACCENT,
                    }}
                  >
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.25fr",
          gap: "32px",
          width: "100%",
        }}
      >
        <Steps>
          {/* Left: Consumer */}
          <Step>
            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "36px",
                height: "460px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: "26px",
                    fontWeight: 800,
                    color: COLORS.MUTED,
                    display: "block",
                    marginBottom: "18px",
                  }}
                >
                  The Consumer (1-to-1 Manual)
                </span>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {[
                    {
                      prompt:
                        '"Write me an email about our project timeline..."',
                      icon: Mail,
                    },
                    {
                      prompt:
                        '"Generate an image of a modern coffee shop interior..."',
                      icon: ImageIcon,
                    },
                    {
                      prompt:
                        '"Debug this function and fix the syntax error..."',
                      icon: Code,
                    },
                  ].map((ex) => {
                    const Icon = ex.icon;
                    return (
                      <div
                        key={ex.prompt}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          backgroundColor: "#FFFFFF",
                          border: `1px solid ${COLORS.BORDER}`,
                          padding: "16px",
                        }}
                      >
                        <Icon size={22} color={COLORS.MUTED} />
                        <span
                          style={{
                            fontFamily: FONTS.mono,
                            fontSize: "15px",
                            color: COLORS.MUTED,
                            lineHeight: 1.3,
                          }}
                        >
                          {ex.prompt}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  color: COLORS.MUTED,
                }}
              >
                MANUAL LINEAR WORK // STOPS WHEN YOU CLOSE THE BROWSER
              </span>
            </div>
          </Step>

          {/* Right: System Builder */}
          <Step>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: `2px solid ${COLORS.ACCENT_2}`,
                padding: "36px",
                height: "460px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
                boxShadow: "0 12px 30px rgba(37, 99, 235, 0.08)",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: "26px",
                    fontWeight: 800,
                    color: COLORS.ACCENT_2,
                    display: "block",
                    marginBottom: "22px",
                  }}
                >
                  The System Builder (1-to-Many Autonomous)
                </span>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "22px",
                  }}
                >
                  {/* Pipeline 1 */}
                  <div
                    style={{
                      backgroundColor: "#F8FAFC",
                      border: `1px solid ${COLORS.ACCENT_2}`,
                      padding: "22px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <Globe size={28} color={COLORS.ACCENT_2} />
                        <span
                          style={{
                            fontFamily: FONTS.heading,
                            fontSize: "22px",
                            fontWeight: 800,
                          }}
                        >
                          Trigger
                        </span>
                      </div>
                      <ArrowRight
                        size={26}
                        color={COLORS.ACCENT_2}
                        strokeWidth={2.5}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          backgroundColor: "#DBEAFE",
                          padding: "6px 16px",
                        }}
                      >
                        <Cpu size={28} color={COLORS.ACCENT_2} />
                        <span
                          style={{
                            fontFamily: FONTS.heading,
                            fontSize: "22px",
                            fontWeight: 800,
                            color: COLORS.ACCENT_2,
                          }}
                        >
                          AI
                        </span>
                      </div>
                      <ArrowRight
                        size={26}
                        color={COLORS.ACCENT_2}
                        strokeWidth={2.5}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <Send size={28} color={COLORS.ACCENT_2} />
                        <span
                          style={{
                            fontFamily: FONTS.heading,
                            fontSize: "22px",
                            fontWeight: 800,
                          }}
                        >
                          Publish
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pipeline 2 */}
                  <div
                    style={{
                      backgroundColor: "#F8FAFC",
                      border: `1px solid ${COLORS.ACCENT_2}`,
                      padding: "22px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <Inbox size={28} color={COLORS.ACCENT_2} />
                        <span
                          style={{
                            fontFamily: FONTS.heading,
                            fontSize: "22px",
                            fontWeight: 800,
                          }}
                        >
                          Webhook
                        </span>
                      </div>
                      <ArrowRight
                        size={26}
                        color={COLORS.ACCENT_2}
                        strokeWidth={2.5}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          backgroundColor: "#DBEAFE",
                          padding: "6px 16px",
                        }}
                      >
                        <Cpu size={28} color={COLORS.ACCENT_2} />
                        <span
                          style={{
                            fontFamily: FONTS.heading,
                            fontSize: "22px",
                            fontWeight: 800,
                            color: COLORS.ACCENT_2,
                          }}
                        >
                          AI
                        </span>
                      </div>
                      <ArrowRight
                        size={26}
                        color={COLORS.ACCENT_2}
                        strokeWidth={2.5}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <Database size={28} color={COLORS.ACCENT_2} />
                        <span
                          style={{
                            fontFamily: FONTS.heading,
                            fontSize: "22px",
                            fontWeight: 800,
                          }}
                        >
                          Database
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  color: COLORS.ACCENT_2,
                  fontWeight: 700,
                }}
              >
                AUTONOMOUS SYSTEM // EXECUTES CONTINUOUSLY WITHOUT HUMAN
                INTERVENTION
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
      num: "01",
      title: "Service Arbitrage",
      desc: "Deliver client services 10x faster with AI workflows.",
      icon: Zap,
      imgTitle: "SERVICE ASSET",
      imgSub: "FREELANCE DELIVERABLE",
    },
    {
      num: "02",
      title: "B2B Automation",
      desc: "Build and sell n8n customer pipelines to SMB clients.",
      icon: Workflow,
      imgTitle: "N8N WORKFLOW",
      imgSub: "AUTOMATION BLUEPRINT",
    },
    {
      num: "03",
      title: "Cost Reduction",
      desc: "Replace multi-seat vendor expenses with custom internal nodes.",
      icon: TrendingDown,
      imgTitle: "ENTERPRISE OPS",
      imgSub: "INTERNAL EFFICIENCY",
    },
    {
      num: "04",
      title: "Digital Micro-Assets",
      desc: "Deploy niche tools & content engines with near-$0 marginal cost.",
      icon: Package,
      imgTitle: "MICRO SAAS",
      imgSub: "PROGRAMMATIC ENGINE",
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
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "24px",
          width: "100%",
          height: "460px",
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
                    padding: "24px",
                    display: "grid",
                    gridTemplateColumns: "1.1fr 0.9fr",
                    gap: "20px",
                    alignItems: "center",
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "8px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: FONTS.mono,
                            fontSize: "18px",
                            fontWeight: 800,
                            color: COLORS.ACCENT,
                          }}
                        >
                          {m.num}
                        </span>
                        <Icon size={20} color={COLORS.ACCENT} />
                      </div>
                      <h3
                        style={{
                          margin: "0 0 6px 0",
                          fontFamily: FONTS.heading,
                          fontSize: "24px",
                          fontWeight: 800,
                        }}
                      >
                        {m.title}
                      </h3>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: FONTS.body,
                        fontSize: "16px",
                        color: COLORS.MUTED,
                      }}
                    >
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

// Slide 11: Simple AI Economics (Sell the Result, Not Your Hours)
const Slide11_ArbitrageMargin: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 01 // THE ECONOMICS"
        title="Sell the Result, Not Your Hours."
        subtitle="Clients pay for the finished product. AI gives you back your time."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
          width: "100%",
        }}
      >
        <Steps>
          {/* Left: Without AI */}
          <Step>
            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "44px",
                height: "440px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <MonoPill
                  color={COLORS.MUTED}
                  bg={COLORS.BG}
                  border={COLORS.BORDER}
                >
                  WITHOUT AI
                </MonoPill>
                <Clock size={32} color={COLORS.MUTED} />
              </div>

              <div>
                <div
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: "72px",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: COLORS.TEXT,
                  }}
                >
                  40 Hours
                </div>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "20px",
                    color: COLORS.MUTED,
                    display: "block",
                    marginTop: "12px",
                  }}
                >
                  $1,500 Result → $37 / hr
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    height: "36px",
                    width: "100%",
                    backgroundColor: COLORS.MUTED,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 16px",
                    color: COLORS.BG,
                    fontFamily: FONTS.mono,
                    fontSize: "14px",
                    fontWeight: 700,
                    boxSizing: "border-box",
                  }}
                >
                  100% MANUAL WORK
                </div>
              </div>
            </div>
          </Step>

          {/* Right: With AI */}
          <Step>
            <div
              style={{
                backgroundColor: COLORS.BG,
                border: `2px solid ${COLORS.ACCENT}`,
                padding: "44px",
                height: "440px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
                boxShadow: "0 12px 32px rgba(255, 59, 48, 0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <MonoPill
                  color={COLORS.BG}
                  bg={COLORS.ACCENT}
                  border={COLORS.ACCENT}
                >
                  WITH AI
                </MonoPill>
                <Zap size={32} color={COLORS.ACCENT} />
              </div>

              <div>
                <div
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: "72px",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: COLORS.ACCENT,
                  }}
                >
                  4 Hours
                </div>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "20px",
                    fontWeight: 700,
                    color: COLORS.TEXT,
                    display: "block",
                    marginTop: "12px",
                  }}
                >
                  $1,500 Result → $375 / hr (10×)
                </span>
              </div>

              <div style={{ display: "flex", height: "36px", width: "100%" }}>
                <div style={{ width: "15%", backgroundColor: COLORS.ACCENT }} />
                <div
                  style={{
                    width: "85%",
                    backgroundColor: "#FFF0EE",
                    border: `1px dashed ${COLORS.ACCENT}`,
                    borderLeft: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FONTS.mono,
                    fontSize: "14px",
                    fontWeight: 800,
                    color: COLORS.ACCENT,
                  }}
                >
                  36 HOURS SAVED
                </div>
              </div>
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
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          width: "100%",
        }}
      >
        <Steps>
          <Step>
            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "15px",
                  fontWeight: 700,
                  color: COLORS.ACCENT,
                }}
              >
                01 // BRAND STUDIO
              </span>
              <ImagePlaceholderBox
                title="STUDIO ASSET"
                subtitle="DEMO SCREEN 01"
                height={320}
              />
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "22px",
                  fontWeight: 800,
                }}
              >
                Visual Token System
              </span>
            </div>
          </Step>

          <Step>
            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "15px",
                  fontWeight: 700,
                  color: COLORS.ACCENT_2,
                }}
              >
                02 // LOVABLE APP
              </span>
              <ImagePlaceholderBox
                title="LOVABLE WEB APP"
                subtitle="DEMO SCREEN 02"
                height={320}
              />
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "22px",
                  fontWeight: 800,
                }}
              >
                Interactive Code Frontend
              </span>
            </div>
          </Step>

          <Step>
            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "15px",
                  fontWeight: 700,
                  color: COLORS.ACCENT,
                }}
              >
                03 // N8N WORKFLOW
              </span>
              <ImagePlaceholderBox
                title="N8N PIPELINE"
                subtitle="DEMO SCREEN 03"
                height={320}
                accent
              />
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "22px",
                  fontWeight: 800,
                }}
              >
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
    {
      num: "01",
      title: "Prediction Mechanics",
      desc: "Learn how probability drives token generation.",
      icon: Cpu,
    },
    {
      num: "02",
      title: "Token Slicing",
      desc: "See how models split words into sub-word tokens.",
      icon: Terminal,
    },
    {
      num: "03",
      title: "Memory Limits",
      desc: "Understand why models forget earlier conversation text.",
      icon: AlertTriangle,
    },
    {
      num: "04",
      title: "5-Part Formula",
      desc: "Master Role, Context, Task, Instructions, and Format.",
      icon: UserCheck,
    },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // OUTCOMES"
        title="What You Will Learn Today."
        subtitle="Key technical skills for Day 2."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          width: "100%",
        }}
      >
        <Steps>
          {outcomes.map((o) => {
            const Icon = o.icon;
            return (
              <Step key={o.num}>
                <div
                  style={{
                    backgroundColor: COLORS.SURFACE,
                    border: `1px solid ${COLORS.BORDER}`,
                    padding: "36px",
                    height: "380px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONTS.mono,
                      fontSize: "40px",
                      fontWeight: 800,
                      color: COLORS.ACCENT,
                    }}
                  >
                    {o.num}
                  </span>
                  <div>
                    <Icon
                      size={36}
                      color={COLORS.TEXT}
                      style={{ marginBottom: "16px" }}
                    />
                    <h3
                      style={{
                        margin: "0 0 8px 0",
                        fontFamily: FONTS.heading,
                        fontSize: "26px",
                        fontWeight: 800,
                      }}
                    >
                      {o.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: FONTS.body,
                        fontSize: "18px",
                        color: COLORS.MUTED,
                      }}
                    >
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

// Slide 15: Next-Token Prediction (3 words appear together, then bars fill smoothly)
function PredictionRow({
  word,
  pct,
  color,
  highlight = false,
}: {
  word: string;
  pct: number;
  color: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
          alignItems: "baseline",
        }}
      >
        <span
          data-pred-word=""
          style={{
            fontFamily: FONTS.heading,
            fontSize: highlight ? "26px" : "22px",
            fontWeight: highlight ? 800 : 700,
            color: highlight ? COLORS.TEXT : COLORS.MUTED,
            willChange: "transform, opacity",
          }}
        >
          {word}
        </span>
        <span
          data-pred-pct=""
          style={{
            fontFamily: FONTS.mono,
            fontSize: highlight ? "26px" : "22px",
            fontWeight: highlight ? 800 : 600,
            color,
            willChange: "opacity, transform",
          }}
        >
          {pct}%
        </span>
      </div>
      <div
        style={{
          height: highlight ? "28px" : "20px",
          backgroundColor: COLORS.SURFACE,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          data-pred-bar=""
          style={{
            height: "100%",
            width: `${pct}%`,
            backgroundColor: color,
            transformOrigin: "left center",
            willChange: "transform",
          }}
        />
      </div>
    </div>
  );
}

const Slide15_NextToken: Page = () => {
  const isActive = useIsActivePage();
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || !isActive) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stepEl = panel.closest("[data-osd-step]") as HTMLElement | null;
    let activeAnims: Animation[] = [];

    const cancelAll = () => {
      activeAnims.forEach((a) => a.cancel());
      activeAnims = [];
    };

    const play = () => {
      cancelAll();
      const words = Array.from(
        panel.querySelectorAll<HTMLElement>("[data-pred-word]"),
      );
      const bars = Array.from(
        panel.querySelectorAll<HTMLElement>("[data-pred-bar]"),
      );
      const pcts = Array.from(
        panel.querySelectorAll<HTMLElement>("[data-pred-pct]"),
      );

      // Phase 1: All 3 words appear together
      words.forEach((word) => {
        const wAnim = word.animate(
          [
            { opacity: 0, transform: "translate3d(0, 10px, 0)" },
            { opacity: 1, transform: "translate3d(0, 0, 0)" },
          ],
          {
            duration: 320,
            easing: "cubic-bezier(0, 0, 0.2, 1)",
            fill: "both",
          },
        );
        activeAnims.push(wAnim);
      });

      // Phase 2: Bars fill smoothly to target percentage (GPU scaleX)
      bars.forEach((bar) => {
        const bAnim = bar.animate(
          [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
          {
            duration: 820,
            delay: 360,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "both",
          },
        );
        activeAnims.push(bAnim);
      });

      // Phase 2b: Percentages fade in with the bars
      pcts.forEach((pct) => {
        const pAnim = pct.animate(
          [
            { opacity: 0, transform: "translate3d(-6px, 0, 0)" },
            { opacity: 1, transform: "translate3d(0, 0, 0)" },
          ],
          {
            duration: 450,
            delay: 520,
            easing: "cubic-bezier(0, 0, 0.2, 1)",
            fill: "both",
          },
        );
        activeAnims.push(pAnim);
      });
    };

    if (!stepEl) {
      play();
      return cancelAll;
    }

    if (stepEl.getAttribute("data-osd-step") === "revealed") {
      play();
    }

    const observer = new MutationObserver(() => {
      if (stepEl.getAttribute("data-osd-step") === "revealed") {
        play();
      } else {
        cancelAll();
      }
    });

    observer.observe(stepEl, {
      attributes: true,
      attributeFilter: ["data-osd-step"],
    });
    return () => {
      observer.disconnect();
      cancelAll();
    };
  }, [isActive]);

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // PREDICTION"
        title="It Does Not Think. It Predicts."
        subtitle="The model calculates probabilities for the next piece of text."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "32px",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: "44px",
            height: "360px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: "15px",
              color: COLORS.MUTED,
              marginBottom: "16px",
            }}
          >
            INPUT STRING
          </span>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            "The capital of Egypt is ___"
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: `1px solid ${COLORS.BORDER}`,
            padding: "44px",
          }}
        >
          <Steps>
            <Step>
              <div
                ref={panelRef}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <PredictionRow
                  word="Cairo"
                  pct={94}
                  color={COLORS.ACCENT_2}
                  highlight
                />
                <PredictionRow word="Alexandria" pct={4} color={COLORS.MUTED} />
                <PredictionRow word="Pyramids" pct={2} color={COLORS.MUTED} />
              </div>
            </Step>
          </Steps>
        </div>
      </div>
    </SlideContainer>
  );
};

// Slide 16: Tokens (GPU-composited WAAPI: Sentence copied, then split & float apart)
const TOKEN_PILLS_META = [
  { text: "Hello", num: "tok_1", col: COLORS.ACCENT, joinX: -62 },
  { text: " my", num: "tok_2", col: COLORS.ACCENT_2, joinX: -244 },
  { text: " name", num: "tok_3", col: "#10B981", joinX: -426 },
  { text: " is", num: "tok_4", col: "#F59E0B", joinX: -608 },
  { text: " Ey", num: "tok_5", col: COLORS.ACCENT, joinX: -814 },
  { text: "ad", num: "tok_6", col: COLORS.ACCENT_2, joinX: -1031 },
] as const;

function TokenSlice({
  text,
  num,
  col,
}: {
  text: string;
  num: string;
  col: string;
}) {
  return (
    <div
      data-tok-card=""
      style={{
        flex: 1,
        position: "relative",
        padding: "16px 12px",
        textAlign: "center",
        willChange: "transform, opacity",
      }}
    >
      {/* Separate box layer so background/border never repaint during transform */}
      <div
        data-tok-box=""
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: COLORS.SURFACE,
          border: `2px solid ${col}`,
          willChange: "transform, opacity",
        }}
      />
      <div style={{ position: "relative" }}>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: "36px",
            fontWeight: 800,
            color: col,
            whiteSpace: "pre",
          }}
        >
          {text}
        </div>
        <span
          data-tok-meta=""
          style={{
            fontFamily: FONTS.mono,
            fontSize: "12px",
            color: COLORS.MUTED,
            marginTop: "4px",
            display: "block",
            willChange: "opacity, transform",
          }}
        >
          {num}
        </span>
      </div>
    </div>
  );
}

const Slide16_Tokens: Page = () => {
  const isActive = useIsActivePage();
  const rowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row || !isActive) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stepEl = row.closest("[data-osd-step]") as HTMLElement | null;
    let activeAnims: Animation[] = [];

    const cancelAll = () => {
      activeAnims.forEach((a) => a.cancel());
      activeAnims = [];
    };

    const play = () => {
      cancelAll();
      const cards = Array.from(
        row.querySelectorAll<HTMLElement>("[data-tok-card]"),
      );
      const boxes = Array.from(
        row.querySelectorAll<HTMLElement>("[data-tok-box]"),
      );
      const metas = Array.from(
        row.querySelectorAll<HTMLElement>("[data-tok-meta]"),
      );

      cards.forEach((card, i) => {
        const joinX = TOKEN_PILLS_META[i]?.joinX ?? 0;

        // Phase 1: Copy down from Beat 1 as one joined sentence
        const copyDown = card.animate(
          [
            { opacity: 0, transform: `translate3d(${joinX}px, -185px, 0)` },
            {
              opacity: 1,
              transform: `translate3d(${joinX}px, -185px, 0)`,
              offset: 0.2,
            },
            { opacity: 1, transform: `translate3d(${joinX}px, 0px, 0)` },
          ],
          {
            duration: 420,
            easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
            fill: "forwards",
          },
        );

        // Phase 2: Split & float smoothly into separated token slots (slower ease-out)
        const splitOut = card.animate(
          [
            { transform: `translate3d(${joinX}px, 0px, 0)` },
            { transform: "translate3d(0px, 0px, 0)" },
          ],
          {
            duration: 950,
            delay: 420,
            easing: "cubic-bezier(0, 0, 0.2, 1)",
            fill: "forwards",
          },
        );

        activeAnims.push(copyDown, splitOut);
      });

      boxes.forEach((box) => {
        const boxIn = box.animate(
          [
            { opacity: 0, transform: "scale(0.95)" },
            { opacity: 1, transform: "scale(1)" },
          ],
          {
            duration: 420,
            delay: 1320,
            easing: "cubic-bezier(0, 0, 0.2, 1)",
            fill: "both",
          },
        );
        activeAnims.push(boxIn);
      });

      metas.forEach((meta) => {
        const metaIn = meta.animate(
          [
            { opacity: 0, transform: "translate3d(0, 6px, 0)" },
            { opacity: 1, transform: "translate3d(0, 0, 0)" },
          ],
          {
            duration: 480,
            delay: 750,
            easing: "cubic-bezier(0, 0, 0.2, 1)",
            fill: "both",
          },
        );
        activeAnims.push(metaIn);
      });
    };

    if (!stepEl) {
      play();
      return cancelAll;
    }

    if (stepEl.getAttribute("data-osd-step") === "revealed") {
      play();
    }

    const observer = new MutationObserver(() => {
      if (stepEl.getAttribute("data-osd-step") === "revealed") {
        play();
      } else {
        cancelAll();
      }
    });

    observer.observe(stepEl, {
      attributes: true,
      attributeFilter: ["data-osd-step"],
    });
    return () => {
      observer.disconnect();
      cancelAll();
    };
  }, [isActive]);

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // TOKENS"
        title="Text Breaks Into Sub-Word Tokens."
        subtitle="Tokens dictate compute speed, memory budget, and API costs."
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          width: "100%",
        }}
      >
        <Steps>
          {/* Beat 1: Full raw sentence */}
          <Step>
            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "32px 40px",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  color: COLORS.MUTED,
                  display: "block",
                  marginBottom: "10px",
                }}
              >
                RAW TEXT STRING (5 WORDS):
              </span>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "42px",
                  fontWeight: 800,
                  color: COLORS.TEXT,
                }}
              >
                "Hello my name is Eyad"
              </div>
            </div>
          </Step>

          {/* Beat 2: Token sliced blocks */}
          <Step>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: `2px solid ${COLORS.ACCENT}`,
                padding: "32px 40px",
                boxShadow: "0 12px 30px rgba(255, 59, 48, 0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "14px",
                    color: COLORS.ACCENT,
                    fontWeight: 700,
                  }}
                >
                  BYTE-PAIR ENCODING (BPE) TOKEN SLICES:
                </span>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "12px",
                    color: COLORS.ACCENT,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  "Eyad" → SUB-WORD SPLIT
                </span>
              </div>
              <div
                ref={rowRef}
                style={{ display: "flex", gap: "18px", alignItems: "stretch" }}
              >
                <TokenSlice text="Hello" num="tok_1" col={COLORS.ACCENT} />
                <TokenSlice text=" my" num="tok_2" col={COLORS.ACCENT_2} />
                <TokenSlice text=" name" num="tok_3" col="#10B981" />
                <TokenSlice text=" is" num="tok_4" col="#F59E0B" />
                <TokenSlice text=" Ey" num="tok_5" col={COLORS.ACCENT} />
                <TokenSlice text="ad" num="tok_6" col={COLORS.ACCENT_2} />
              </div>
            </div>
          </Step>

          {/* Beat 3: Token rule explanation */}
          <Step>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "20px 32px",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "16px",
                  color: COLORS.TEXT,
                }}
              >
                SUB-WORD TOKENIZATION // COMMON WORDS REMAIN WHOLE, NAMES SPLIT
                INTO SUB-WORDS
              </span>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "16px",
                  fontWeight: 800,
                  color: COLORS.ACCENT,
                }}
              >
                5 WORDS = 6 TOKENS
              </span>
            </div>
          </Step>
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 17: Context Window (Real-Time Animated Bar + Live Event Rows)
type ContextEventItem = {
  id: string;
  tag: string;
  label: string;
  barLabel: string;
  tokensK: number;
  color: string;
  textColor: string;
  status: "IN MEMORY" | "NEAR LIMIT" | "OVERFLOW";
};

const CONTEXT_EVENTS: ContextEventItem[] = [
  {
    id: "sys",
    tag: "01",
    label: "System Rules & Persona Loaded",
    barLabel: "SYSTEM RULES",
    tokensK: 18,
    color: COLORS.ACCENT_2,
    textColor: "#FFFFFF",
    status: "IN MEMORY",
  },
  {
    id: "chat1",
    tag: "02",
    label: "Initial Chat Turns (1–3)",
    barLabel: "CHAT 1–3",
    tokensK: 26,
    color: "#CBD5E1",
    textColor: COLORS.TEXT,
    status: "IN MEMORY",
  },
  {
    id: "pdf",
    tag: "03",
    label: "Attached PDF Document",
    barLabel: "PDF DOC (48K)",
    tokensK: 48,
    color: "#6366F1",
    textColor: "#FFFFFF",
    status: "IN MEMORY",
  },
  {
    id: "chat2",
    tag: "04",
    label: "Extended Chat Turns (4–8)",
    barLabel: "CHAT 4–8",
    tokensK: 28,
    color: "#94A3B8",
    textColor: "#FFFFFF",
    status: "NEAR LIMIT",
  },
  {
    id: "new",
    tag: "05",
    label: "New Prompt & Model Output (+24K)",
    barLabel: "NEW OUTPUT",
    tokensK: 24,
    color: COLORS.ACCENT,
    textColor: "#FFFFFF",
    status: "OVERFLOW",
  },
];

const MAX_CONTEXT_K = 128;

function ContextEventRow({
  item,
  visible,
  evicted,
}: {
  item: ContextEventItem;
  visible: boolean;
  evicted: boolean;
}) {
  const badgeColor = evicted
    ? COLORS.ACCENT
    : item.status === "OVERFLOW"
      ? COLORS.ACCENT
      : item.status === "NEAR LIMIT"
        ? "#D97706"
        : COLORS.ACCENT_2;

  const badgeText = evicted ? "DROPPED (FIFO)" : item.status;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "56px 1fr 120px 170px",
        alignItems: "center",
        gap: "16px",
        padding: "12px 20px",
        backgroundColor: evicted ? "#FFF5F5" : "#FFFFFF",
        border: `1px solid ${evicted ? COLORS.ACCENT : COLORS.BORDER}`,
        opacity: visible ? (evicted ? 0.65 : 1) : 0,
        transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, 10px, 0)",
        transition:
          "opacity 360ms cubic-bezier(0, 0, 0.2, 1), transform 380ms cubic-bezier(0.16, 1, 0.3, 1), background-color 300ms ease, border-color 300ms ease",
      }}
    >
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: "13px",
          fontWeight: 700,
          color: COLORS.MUTED,
        }}
      >
        #{item.tag}
      </span>
      <span
        style={{
          fontFamily: FONTS.body,
          fontSize: "17px",
          fontWeight: 600,
          color: evicted ? COLORS.ACCENT : COLORS.TEXT,
          textDecoration: evicted ? "line-through" : "none",
        }}
      >
        {item.label}
      </span>
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: "15px",
          fontWeight: 700,
          color: COLORS.TEXT,
          textAlign: "right",
        }}
      >
        +{item.tokensK}K
      </span>
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: "12px",
          fontWeight: 800,
          color: badgeColor,
          backgroundColor: `${badgeColor}14`,
          border: `1px solid ${badgeColor}40`,
          padding: "5px 10px",
          textAlign: "center",
        }}
      >
        {badgeText}
      </span>
    </div>
  );
}

const Slide17_ContextWindow: Page = () => {
  const isActive = useIsActivePage();
  const [stepCount, setStepCount] = useState<number>(
    isActive ? 0 : CONTEXT_EVENTS.length,
  );
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setStepCount(CONTEXT_EVENTS.length);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStepCount(CONTEXT_EVENTS.length);
      return;
    }

    setStepCount(0);
    const delays = [250, 1150, 2050, 2950, 3950];
    const timers = delays.map((ms, idx) =>
      window.setTimeout(() => {
        setStepCount(idx + 1);
      }, ms),
    );

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [isActive, runId]);

  const activeEvents = CONTEXT_EVENTS.slice(0, stepCount);
  const rawTotalK = activeEvents.reduce((sum, e) => sum + e.tokensK, 0);
  const isOverflow = rawTotalK > MAX_CONTEXT_K;
  const usedK = Math.min(rawTotalK, MAX_CONTEXT_K);
  const pct = Math.round((usedK / MAX_CONTEXT_K) * 100);

  // When overflow happens, oldest block ('sys', 18K) is evicted from the left
  const evictedId = isOverflow ? "sys" : null;
  const freePct = Math.max(0, 100 - (rawTotalK / MAX_CONTEXT_K) * 100);

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // CONTEXT WINDOW"
        title="Short-Term Memory Has a Limit."
        subtitle="When the context window fills, earlier conversation blocks drop out."
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
        }}
      >
        {/* Top: Real-Time Context Bar */}
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `2px solid ${isOverflow ? COLORS.ACCENT : COLORS.BORDER}`,
            padding: "24px 32px",
            transition: "border-color 300ms ease",
            boxShadow: isOverflow
              ? "0 12px 30px rgba(255, 59, 48, 0.10)"
              : "none",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "15px",
                  fontWeight: 800,
                  color: isOverflow ? COLORS.ACCENT : COLORS.TEXT,
                }}
              >
                LIVE MEMORY // {usedK}K / {MAX_CONTEXT_K}K TOKENS ({pct}%)
              </span>
            </div>

            <button
              type="button"
              onClick={() => setRunId((n) => n + 1)}
              style={{
                fontFamily: FONTS.mono,
                fontSize: "12px",
                fontWeight: 800,
                padding: "6px 14px",
                border: `1px solid ${COLORS.BORDER}`,
                backgroundColor: "#FFFFFF",
                color: COLORS.TEXT,
                cursor: "pointer",
              }}
            >
              REPLAY
            </button>
          </div>

          {/* Sliding FIFO Bar */}
          <div
            style={{
              display: "flex",
              height: "72px",
              width: "100%",
              backgroundColor: "#FFFFFF",
              border: `1px solid ${COLORS.BORDER}`,
              overflow: "hidden",
            }}
          >
            {CONTEXT_EVENTS.map((ev, idx) => {
              const isAdded = idx < stepCount;
              const isEvicted = ev.id === evictedId;
              const targetWidth =
                !isAdded || isEvicted ? 0 : (ev.tokensK / MAX_CONTEXT_K) * 100;

              return (
                <div
                  key={ev.id}
                  style={{
                    width: `${targetWidth}%`,
                    height: "100%",
                    backgroundColor: ev.color,
                    color: ev.textColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FONTS.mono,
                    fontSize: "13px",
                    fontWeight: 800,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    opacity: !isAdded || isEvicted ? 0 : 1,
                    borderRight: targetWidth > 0 ? "2px solid #FFFFFF" : "none",
                    transition:
                      "width 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 350ms ease",
                  }}
                >
                  {ev.barLabel}
                </div>
              );
            })}

            {freePct > 0 && (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "16px",
                  fontFamily: FONTS.mono,
                  fontSize: "13px",
                  color: COLORS.MUTED,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {Math.round(freePct)}% FREE
              </div>
            )}
          </div>
        </div>

        {/* Bottom: Real-Time Event Rows */}
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: "18px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: "12px",
              fontWeight: 700,
              color: COLORS.MUTED,
              marginBottom: "4px",
            }}
          >
            REAL-TIME TOKEN STREAM
          </span>
          <ContextEventRow
            item={CONTEXT_EVENTS[0]}
            visible={stepCount >= 1}
            evicted={isOverflow}
          />
          <ContextEventRow
            item={CONTEXT_EVENTS[1]}
            visible={stepCount >= 2}
            evicted={false}
          />
          <ContextEventRow
            item={CONTEXT_EVENTS[2]}
            visible={stepCount >= 3}
            evicted={false}
          />
          <ContextEventRow
            item={CONTEXT_EVENTS[3]}
            visible={stepCount >= 4}
            evicted={false}
          />
          <ContextEventRow
            item={CONTEXT_EVENTS[4]}
            visible={stepCount >= 5}
            evicted={false}
          />
        </div>
      </div>
    </SlideContainer>
  );
};

// Slide 18: Hallucinations (3 Columns: Image Above + One Risk Each)
function HallucinationRiskCard({
  index,
  title,
  desc,
  hint,
}: {
  index: string;
  title: string;
  desc: string;
  hint: string;
}) {
  return (
    <div
      style={{
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        borderTop: `3px solid ${COLORS.ACCENT}`,
        padding: "24px",
        height: "520px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "250px",
          overflow: "hidden",
          border: `1px solid ${COLORS.BORDER}`,
          backgroundColor: "#FFFFFF",
          flexShrink: 0,
        }}
      >
        <ImagePlaceholder hint={hint} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "14px",
            fontWeight: 700,
            color: COLORS.ACCENT,
            letterSpacing: "0.08em",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <AlertTriangle
            size={16}
            color={COLORS.ACCENT}
            style={{ flexShrink: 0 }}
          />
          RISK {index}
        </span>

        <h3
          style={{
            margin: 0,
            fontFamily: FONTS.heading,
            fontSize: "30px",
            fontWeight: 800,
            lineHeight: 1.15,
            color: COLORS.TEXT,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: 0,
            fontFamily: FONTS.body,
            fontSize: "20px",
            lineHeight: 1.45,
            color: COLORS.MUTED,
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

const Slide18_Hallucinations: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // HALLUCINATIONS"
        title="Why Models Generate False Information."
        subtitle="Language models optimize for linguistic plausibility, not factual accuracy."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          width: "100%",
        }}
      >
        <Steps>
          <Step>
            <HallucinationRiskCard
              index="01"
              title="Fake Court Cases"
              desc="Models invent legal precedents, judges, and docket numbers."
              hint="AI hallucinated legal brief or fake court citation"
            />
          </Step>
          <Step>
            <HallucinationRiskCard
              index="02"
              title="Phantom Software APIs"
              desc="Models invent Python functions and parameters that do not exist."
              hint="Code editor showing non-existent software API error"
            />
          </Step>
          <Step>
            <HallucinationRiskCard
              index="03"
              title="False Biography Facts"
              desc="Models invent dates, company awards, and past publications."
              hint="Fact-checked biography with highlighted false claims"
            />
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
          width: "100%",
        }}
      >
        <Steps>
          <Step>
            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "44px",
                height: "420px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "26px",
                  fontWeight: 800,
                  color: COLORS.MUTED,
                }}
              >
                Vague Input
              </span>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `1px solid ${COLORS.BORDER}`,
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: FONTS.mono,
                    fontSize: "22px",
                    color: COLORS.MUTED,
                  }}
                >
                  "Write a marketing post for my store."
                </p>
              </div>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "20px",
                  color: COLORS.MUTED,
                }}
              >
                Output: Generic robotic essay
              </span>
            </div>
          </Step>

          <Step>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: `2px solid ${COLORS.ACCENT_2}`,
                padding: "44px",
                height: "420px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "26px",
                  fontWeight: 800,
                  color: COLORS.ACCENT_2,
                }}
              >
                Technical Spec
              </span>
              <div
                style={{
                  backgroundColor: "#F8FAFC",
                  border: `1px solid ${COLORS.ACCENT_2}`,
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: FONTS.mono,
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  [Role] + [Context] + [Task] + [Instructions] + [Format]
                </p>
              </div>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "20px",
                  color: COLORS.ACCENT_2,
                  fontWeight: 700,
                }}
              >
                Output: Exact production deliverable
              </span>
            </div>
          </Step>
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 20: 5-Part Formula (Role, Context, Task, Instructions, Format)
function FormulaPartCard({
  num,
  title,
  sub,
  icon: Icon,
}: {
  num: string;
  title: string;
  sub: string;
  icon: LucideIcon;
}) {
  return (
    <div
      style={{
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        padding: "28px",
        height: "440px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: "24px",
          fontWeight: 800,
          color: COLORS.ACCENT,
        }}
      >
        {num}
      </span>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "16px 0",
          backgroundColor: "#FFFFFF",
          border: `1px solid ${COLORS.BORDER}`,
        }}
      >
        <Icon size={112} strokeWidth={1.6} color={COLORS.TEXT} />
      </div>

      <div>
        <h3
          style={{
            margin: "0 0 6px 0",
            fontFamily: FONTS.heading,
            fontSize: "30px",
            fontWeight: 800,
          }}
        >
          {title}
        </h3>
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "15px",
            color: COLORS.MUTED,
          }}
        >
          {sub}
        </span>
      </div>
    </div>
  );
}

const Slide20_PromptFormula: Page = () => {
  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // THE FRAMEWORK"
        title="The 5-Part Prompt Formula."
        subtitle="Define all five pillars to remove ambiguity."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          width: "100%",
        }}
      >
        <Steps>
          <Step>
            <FormulaPartCard
              num="01"
              title="Role"
              sub="Persona & Authority"
              icon={UserCheck}
            />
          </Step>
          <Step>
            <FormulaPartCard
              num="02"
              title="Context"
              sub="Background & Goal"
              icon={Layers}
            />
          </Step>
          <Step>
            <FormulaPartCard
              num="03"
              title="Task"
              sub="Core Objective"
              icon={Crosshair}
            />
          </Step>
          <Step>
            <FormulaPartCard
              num="04"
              title="Instructions"
              sub="Rules & Limits"
              icon={Shield}
            />
          </Step>
          <Step>
            <FormulaPartCard
              num="05"
              title="Format"
              sub="Output Structure"
              icon={Table}
            />
          </Step>
        </Steps>
      </div>
    </SlideContainer>
  );
};

// Slide 21: Anatomy (Fashion Marketing Campaign)
const Slide21_Anatomy: Page = () => {
  const rows = [
    {
      tag: "ROLE",
      text: "You are a creative director specializing in luxury fashion brands.",
    },
    {
      tag: "CONTEXT",
      text: "We are launching an autumn capsule collection for modern minimalists.",
    },
    {
      tag: "TASK",
      text: "Create a 3-part marketing campaign for Instagram and email.",
    },
    {
      tag: "INSTRUCTIONS",
      text: "Focus on architectural silhouettes, monochrome tones, and quiet luxury. Avoid hype words.",
    },
    {
      tag: "FORMAT",
      text: "Return a structured Markdown table with columns: Channel, Visual Concept, and Headline Copy.",
    },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // ANATOMY"
        title="Anatomy of an Exact Prompt."
        subtitle="A live prompt example for a luxury fashion marketing campaign."
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
          backgroundColor: COLORS.SURFACE,
          border: `1px solid ${COLORS.BORDER}`,
          padding: "28px",
          boxSizing: "border-box",
        }}
      >
        <Steps>
          {rows.map((r) => (
            <Step key={r.tag}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "210px 1fr",
                  gap: "24px",
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                  border: `1px solid ${COLORS.BORDER}`,
                  padding: "20px 26px",
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "20px",
                    fontWeight: 800,
                    color: COLORS.ACCENT,
                  }}
                >
                  [{r.tag}]
                </span>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "25px",
                    lineHeight: 1.35,
                    fontWeight: 500,
                    color: COLORS.TEXT,
                  }}
                >
                  {r.text}
                </span>
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
      domain: "PRODUCT PHOTOGRAPHY",
      basic: '"Take a nice photo of my product."',
      tech: '"Studio softbox lighting, blurred background (f/1.8), 45-degree angle, clean white backdrop."',
    },
    {
      domain: "BUSINESS & MARKETING",
      basic: '"Write a marketing email for our launch."',
      tech: '"Short B2B cold email: pain-point hook, 1-sentence case study, and a single call-to-action."',
    },
    {
      domain: "WEB DESIGN & UI",
      basic: '"Make a modern homepage."',
      tech: '"Split-screen hero section, sticky top navbar, 3-column pricing table, dark-mode theme."',
    },
  ];

  return (
    <SlideContainer>
      <SlideHeader
        tag="DAY 02 // TECHNICAL VOCABULARY"
        title="Domain Terms Produce Exact Deliverables."
        subtitle="You cannot prompt what you do not know. Professional terms eliminate generic output."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          width: "100%",
        }}
      >
        <Steps>
          {domains.map((d) => (
            <Step key={d.domain}>
              <div
                style={{
                  backgroundColor: COLORS.SURFACE,
                  border: `1px solid ${COLORS.BORDER}`,
                  padding: "30px",
                  height: "530px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "18px",
                    fontWeight: 800,
                    color: COLORS.ACCENT,
                  }}
                >
                  {d.domain}
                </span>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {/* Basic */}
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: `1px solid ${COLORS.BORDER}`,
                      padding: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: "14px",
                        color: COLORS.MUTED,
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      BASIC INPUT:
                    </span>
                    <span
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: "20px",
                        lineHeight: 1.4,
                        color: COLORS.MUTED,
                      }}
                    >
                      {d.basic}
                    </span>
                  </div>

                  {/* Technical */}
                  <div
                    style={{
                      backgroundColor: "#F8FAFC",
                      border: `2px solid ${COLORS.ACCENT_2}`,
                      padding: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: "14px",
                        color: COLORS.ACCENT_2,
                        fontWeight: 700,
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      DOMAIN SPECIFICATION:
                    </span>
                    <span
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: "21px",
                        lineHeight: 1.4,
                        fontWeight: 700,
                        color: COLORS.TEXT,
                      }}
                    >
                      {d.tech}
                    </span>
                  </div>
                </div>

                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "14px",
                    color: COLORS.MUTED,
                  }}
                >
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
// DAY 02 // SECTION 2.4: Studying with LLMs & NotebookLM (5 Slides)
// ===========================================================================

// Slide 22B: Answer Machine vs. Personal Tutor
const Slide22B_D2TutorVsMachine: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="2.4 // LEARNING MINDSET"
      tagColor={COLORS.ACCENT}
      title="Don't Just Copy Answers. Build Your Brain."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "32px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            borderTop: `3px solid ${COLORS.MUTED}`,
            padding: "44px",
            height: "460px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Copy size={40} color={COLORS.MUTED} strokeWidth={1.8} />
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#FFF0EE",
                border: `1px solid ${COLORS.ACCENT}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={24} color={COLORS.ACCENT} strokeWidth={2.5} />
            </div>
          </div>

          <div>
            <h3
              style={{
                margin: "0 0 14px 0",
                fontFamily: FONTS.heading,
                fontSize: "38px",
                fontWeight: 800,
                color: COLORS.TEXT,
              }}
            >
              The Answer Machine
            </h3>
            <div
              style={{
                backgroundColor: COLORS.BG,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "18px 22px",
                fontFamily: FONTS.mono,
                fontSize: "20px",
                color: COLORS.MUTED,
              }}
            >
              &ldquo;Summarize this book / Do my homework&rdquo;
            </div>
          </div>

          <MonoPill color={COLORS.ACCENT} bg="#FFF0EE" border={COLORS.ACCENT}>
            0% RETAINED SKILL
          </MonoPill>
        </div>
      </StaggerItem>

      <StaggerItem index={1}>
        <div
          style={{
            backgroundColor: COLORS.BG,
            border: `2px solid ${COLORS.ACCENT_2}`,
            padding: "44px",
            height: "460px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            boxShadow: "0 12px 32px rgba(37, 99, 235, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <GraduationCap
              size={44}
              color={COLORS.ACCENT_2}
              strokeWidth={1.8}
            />
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: COLORS.ACCENT_2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Check size={24} color={COLORS.BG} strokeWidth={2.5} />
            </div>
          </div>

          <div>
            <h3
              style={{
                margin: "0 0 14px 0",
                fontFamily: FONTS.heading,
                fontSize: "38px",
                fontWeight: 800,
                color: COLORS.TEXT,
              }}
            >
              The Personal Tutor
            </h3>
            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.ACCENT_2}`,
                padding: "18px 22px",
                fontFamily: FONTS.mono,
                fontSize: "20px",
                fontWeight: 700,
                color: COLORS.TEXT,
              }}
            >
              &ldquo;Explain step-by-step &amp; quiz me&rdquo;
            </div>
          </div>

          <MonoPill
            color={COLORS.BG}
            bg={COLORS.ACCENT_2}
            border={COLORS.ACCENT_2}
          >
            100% DOMAIN MASTERY
          </MonoPill>
        </div>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 22C: Study Method 1: Simple Analogies (3 Levels)
const Slide22C_D2Analogies: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="2.4 // SIMPLE ANALOGIES"
      tagColor={COLORS.ACCENT}
      title="Break Down Hard Topics in 3 Levels."
      subtitle="Use everyday comparisons to learn industry vocabulary fast."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 48px 1fr 48px 1fr",
        gap: "12px",
        width: "100%",
        alignItems: "end",
      }}
    >
      <StaggerItem index={0}>
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: "32px",
            height: "320px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "22px",
                fontWeight: 800,
                color: COLORS.MUTED,
              }}
            >
              01
            </span>
            <Smile size={36} color={COLORS.TEXT} strokeWidth={1.8} />
          </div>
          <div>
            <h3
              style={{
                margin: "0 0 8px 0",
                fontFamily: FONTS.heading,
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              Level 1: Everyday Analogy
            </h3>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "17px",
                color: COLORS.MUTED,
              }}
            >
              Explain like I&apos;m 10
            </span>
          </div>
        </div>
      </StaggerItem>

      <StaggerItem
        index={1}
        style={{
          height: "320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowRight size={32} color={COLORS.MUTED} strokeWidth={2.5} />
      </StaggerItem>

      <StaggerItem index={2}>
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: "32px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "22px",
                fontWeight: 800,
                color: COLORS.ACCENT_2,
              }}
            >
              02
            </span>
            <BookOpen size={36} color={COLORS.ACCENT_2} strokeWidth={1.8} />
          </div>
          <div>
            <h3
              style={{
                margin: "0 0 8px 0",
                fontFamily: FONTS.heading,
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              Level 2: Core Mechanics
            </h3>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "17px",
                color: COLORS.MUTED,
              }}
            >
              University Student
            </span>
          </div>
        </div>
      </StaggerItem>

      <StaggerItem
        index={3}
        style={{
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowRight size={32} color={COLORS.ACCENT} strokeWidth={2.5} />
      </StaggerItem>

      <StaggerItem index={4}>
        <div
          style={{
            backgroundColor: COLORS.ACCENT,
            color: COLORS.BG,
            padding: "36px",
            height: "480px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            boxShadow: "0 16px 36px rgba(255, 59, 48, 0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill color={COLORS.ACCENT} bg={COLORS.BG} border={COLORS.BG}>
              03 // TARGET
            </MonoPill>
            <Briefcase size={38} color={COLORS.BG} strokeWidth={1.8} />
          </div>
          <div>
            <h3
              style={{
                margin: "0 0 8px 0",
                fontFamily: FONTS.heading,
                fontSize: "30px",
                fontWeight: 800,
              }}
            >
              Level 3: Industry Terms
            </h3>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "18px",
                color: "#FFF0EE",
              }}
            >
              Pro Vocabulary
            </span>
          </div>
        </div>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 22D: Study Method 2: Active Recall (Quiz Mode)
function LoopStepCard({
  step,
  title,
  accent,
  icon: Icon,
}: {
  step: string;
  title: string;
  accent: string;
  icon: LucideIcon;
}) {
  return (
    <div
      style={{
        width: "420px",
        height: "185px",
        backgroundColor: COLORS.BG,
        border: `2px solid ${accent}`,
        padding: "26px 30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        boxShadow: "0 8px 24px rgba(9, 9, 11, 0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "16px",
            fontWeight: 800,
            color: accent,
          }}
        >
          {step}
        </span>
        <Icon size={36} color={accent} strokeWidth={2} />
      </div>
      <h3
        style={{
          margin: 0,
          fontFamily: FONTS.heading,
          fontSize: "30px",
          fontWeight: 800,
          color: COLORS.TEXT,
        }}
      >
        {title}
      </h3>
    </div>
  );
}

const Slide22D_D2ActiveRecall: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="2.4 // ACTIVE RECALL"
      tagColor={COLORS.ACCENT}
      title="Stop Passive Reading. Force the AI to Quiz You."
    />

    <div
      style={{
        position: "relative",
        width: "100%",
        height: "510px",
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        boxSizing: "border-box",
      }}
    >
      {/* Closed-loop SVG arrows */}
      <svg
        viewBox="0 0 1700 510"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <defs>
          <marker
            id="loopArrowBlue"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto"
          >
            <path d="M 0 1 L 9 5 L 0 9 z" fill={COLORS.ACCENT_2} />
          </marker>
          <marker
            id="loopArrowBlack"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto"
          >
            <path d="M 0 1 L 9 5 L 0 9 z" fill={COLORS.TEXT} />
          </marker>
          <marker
            id="loopArrowRed"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto"
          >
            <path d="M 0 1 L 9 5 L 0 9 z" fill={COLORS.ACCENT} />
          </marker>
        </defs>

        {/* Step 01 (top center) -> Step 02 (bottom right) */}
        <path
          d="M 1070 120 Q 1340 130 1350 275"
          fill="none"
          stroke={COLORS.ACCENT_2}
          strokeWidth="4"
          markerEnd="url(#loopArrowBlue)"
        />
        {/* Step 02 (bottom right) -> Step 03 (bottom left) */}
        <path
          d="M 1110 385 L 590 385"
          fill="none"
          stroke={COLORS.TEXT}
          strokeWidth="4"
          markerEnd="url(#loopArrowBlack)"
        />
        {/* Step 03 (bottom left) -> Step 01 (top center) */}
        <path
          d="M 350 275 Q 360 130 620 120"
          fill="none"
          stroke={COLORS.ACCENT}
          strokeWidth="4"
          strokeDasharray="10 8"
          markerEnd="url(#loopArrowRed)"
        />
      </svg>

      {/* Center Loop Label */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "57%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 20px",
          backgroundColor: COLORS.BG,
          border: `1px solid ${COLORS.BORDER}`,
        }}
      >
        <RotateCcw size={20} color={COLORS.ACCENT} strokeWidth={2.5} />
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "15px",
            fontWeight: 800,
            color: COLORS.TEXT,
          }}
        >
          NEXT QUESTION
        </span>
      </div>

      {/* Step 01: Top Center */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "32px",
          transform: "translateX(-50%)",
        }}
      >
        <StaggerItem index={0}>
          <LoopStepCard
            step="STEP 01"
            title="AI Asks 1 Question"
            accent={COLORS.ACCENT_2}
            icon={Bot}
          />
        </StaggerItem>
      </div>

      {/* Step 02: Bottom Right */}
      <div style={{ position: "absolute", right: "110px", bottom: "32px" }}>
        <StaggerItem index={1}>
          <LoopStepCard
            step="STEP 02"
            title="You Type Your Answer"
            accent={COLORS.TEXT}
            icon={User}
          />
        </StaggerItem>
      </div>

      {/* Step 03: Bottom Left */}
      <div style={{ position: "absolute", left: "110px", bottom: "32px" }}>
        <StaggerItem index={2}>
          <LoopStepCard
            step="STEP 03"
            title="AI Grades & Fixes Gaps"
            accent={COLORS.ACCENT}
            icon={CheckCircle}
          />
        </StaggerItem>
      </div>
    </div>
  </SlideContainer>
);

// Slide 22E: Enter NotebookLM: Study Only From Your Files
const Slide22E_D2NotebookLM: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="2.4 // NOTEBOOKLM"
      tagColor={COLORS.ACCENT}
      title="Open Internet Guessing vs. Your Verified Files."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "32px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: "44px",
            height: "460px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill
              color={COLORS.MUTED}
              bg={COLORS.BG}
              border={COLORS.BORDER}
            >
              OPEN INTERNET
            </MonoPill>
            <Globe size={44} color={COLORS.MUTED} strokeWidth={1.8} />
          </div>

          <div>
            <h3
              style={{
                margin: "0 0 12px 0",
                fontFamily: FONTS.heading,
                fontSize: "38px",
                fontWeight: 800,
              }}
            >
              Standard Chatbot
            </h3>
            <p
              style={{
                margin: 0,
                fontFamily: FONTS.body,
                fontSize: "24px",
                lineHeight: 1.4,
                color: COLORS.MUTED,
              }}
            >
              Pulls from random internet noise.
            </p>
          </div>

          <MonoPill color={COLORS.ACCENT} bg="#FFF0EE" border={COLORS.ACCENT}>
            HALLUCINATION RISK
          </MonoPill>
        </div>
      </StaggerItem>

      <StaggerItem index={1}>
        <div
          style={{
            backgroundColor: COLORS.BG,
            border: `2px solid ${COLORS.ACCENT_2}`,
            padding: "44px",
            height: "460px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            boxShadow: "0 12px 32px rgba(37, 99, 235, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill
              color={COLORS.BG}
              bg={COLORS.ACCENT_2}
              border={COLORS.ACCENT_2}
            >
              WALLED GARDEN
            </MonoPill>
            <FileCheck size={44} color={COLORS.ACCENT_2} strokeWidth={1.8} />
          </div>

          <div>
            <h3
              style={{
                margin: "0 0 12px 0",
                fontFamily: FONTS.heading,
                fontSize: "38px",
                fontWeight: 800,
              }}
            >
              Google NotebookLM
            </h3>
            <p
              style={{
                margin: 0,
                fontFamily: FONTS.body,
                fontSize: "24px",
                lineHeight: 1.4,
                color: COLORS.TEXT,
              }}
            >
              Reads only your uploaded PDFs, Docs &amp; YouTube links.
            </p>
          </div>

          <MonoPill
            color={COLORS.BG}
            bg={COLORS.ACCENT_2}
            border={COLORS.ACCENT_2}
          >
            EXACT PAGE CITATIONS [1] [2]
          </MonoPill>
        </div>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Helper: NotebookLM Bento Card for Slide 22F
function StudyKitBentoCard({
  title,
  sub,
  icon: Icon,
  accent,
}: {
  title: string;
  sub: string;
  icon: LucideIcon;
  accent: string;
}) {
  return (
    <div
      style={{
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        borderLeft: `4px solid ${accent}`,
        padding: "32px 36px",
        height: "220px",
        display: "flex",
        alignItems: "center",
        gap: "28px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "96px",
          height: "96px",
          backgroundColor: COLORS.BG,
          border: `1px solid ${COLORS.BORDER}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={48} color={accent} strokeWidth={1.8} />
      </div>
      <div>
        <h3
          style={{
            margin: "0 0 8px 0",
            fontFamily: FONTS.heading,
            fontSize: "32px",
            fontWeight: 800,
            color: COLORS.TEXT,
          }}
        >
          {title}
        </h3>
        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: "21px",
            color: COLORS.MUTED,
          }}
        >
          {sub}
        </span>
      </div>
    </div>
  );
}

// Slide 22F: NotebookLM Study Power-Ups
const Slide22F_D2StudyKits: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="2.4 // ONE-CLICK TOOLS"
      tagColor={COLORS.ACCENT}
      title="Turn Dry PDFs Into Interactive Study Kits."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <StudyKitBentoCard
          title="Audio Podcast"
          sub="Listen & interrupt with voice questions"
          icon={Headphones}
          accent={COLORS.ACCENT}
        />
      </StaggerItem>
      <StaggerItem index={1}>
        <StudyKitBentoCard
          title="Mind Maps"
          sub="Visual topic connections"
          icon={Network}
          accent={COLORS.ACCENT_2}
        />
      </StaggerItem>
      <StaggerItem index={2}>
        <StudyKitBentoCard
          title="Flashcards & Quizzes"
          sub="Instant active recall"
          icon={Layers}
          accent={COLORS.TEXT}
        />
      </StaggerItem>
      <StaggerItem index={3}>
        <StudyKitBentoCard
          title="Study Guides"
          sub="Key terms & timelines"
          icon={FileText}
          accent={COLORS.TEXT}
        />
      </StaggerItem>
    </div>
  </SlideContainer>
);

// ---------------------------------------------------------------------------
// Staggered Entrance Helper (Day 03 & Day 04)
// ---------------------------------------------------------------------------

function StaggerItem({
  index = 0,
  children,
  style,
}: {
  index?: number;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const isActive = useIsActivePage();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setShown(false);
      return;
    }
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setShown(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [isActive]);

  return (
    <div
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(14px)",
        transition:
          "opacity 380ms cubic-bezier(0, 0, 0.2, 1), transform 380ms cubic-bezier(0, 0, 0.2, 1)",
        transitionDelay: shown ? `${140 + index * 110}ms` : "0ms",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ===========================================================================
// DAY 03: AI Creation Studio — Brand, Visuals, and Website
// ===========================================================================

function PipelineStepCard({
  num,
  title,
  role,
  icon: Icon,
  highlighted = false,
}: {
  num: string;
  title: string;
  role: string;
  icon: LucideIcon;
  highlighted?: boolean;
}) {
  return (
    <SwissCard
      highlighted={highlighted}
      style={{
        height: "430px",
        justifyContent: "space-between",
        padding: "36px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "48px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: highlighted ? COLORS.ACCENT : COLORS.TEXT,
          }}
        >
          {num}
        </span>
        <MonoPill
          color={highlighted ? COLORS.BG : COLORS.MUTED}
          bg={highlighted ? COLORS.ACCENT : COLORS.BG}
          border={highlighted ? COLORS.ACCENT : COLORS.BORDER}
        >
          STEP {num}
        </MonoPill>
      </div>

      <div>
        <div
          style={{
            width: "64px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.BG,
            border: `1px solid ${COLORS.BORDER}`,
            marginBottom: "28px",
          }}
        >
          <Icon
            size={32}
            strokeWidth={1.75}
            color={highlighted ? COLORS.ACCENT : COLORS.TEXT}
          />
        </div>
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: "34px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: COLORS.TEXT,
            marginBottom: "10px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: "20px",
            fontWeight: 500,
            color: COLORS.MUTED,
          }}
        >
          {role}
        </div>
      </div>
    </SwissCard>
  );
}

function StackToolCard({
  index,
  toolName,
  role,
  tier,
  accent,
  icon: Icon,
}: {
  index: string;
  toolName: string;
  role: string;
  tier: string;
  accent: string;
  icon: LucideIcon;
}) {
  return (
    <SwissCard
      style={{
        height: "460px",
        justifyContent: "space-between",
        padding: "44px",
        borderTop: `6px solid ${accent}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "22px",
            fontWeight: 700,
            color: accent,
          }}
        >
          {index}
        </span>
        <MonoPill color={accent} bg={COLORS.BG} border={accent}>
          {tier}
        </MonoPill>
      </div>

      <div
        style={{
          width: "88px",
          height: "88px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.BG,
          border: `1px solid ${COLORS.BORDER}`,
        }}
      >
        <Icon size={44} strokeWidth={1.75} color={accent} />
      </div>

      <div>
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: "38px",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: COLORS.TEXT,
            marginBottom: "12px",
          }}
        >
          {toolName}
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: "22px",
            fontWeight: 600,
            color: COLORS.MUTED,
          }}
        >
          {role}
        </div>
      </div>
    </SwissCard>
  );
}

function ColorSwatch({
  hex,
  label,
  lightText = false,
}: {
  hex: string;
  label: string;
  lightText?: boolean;
}) {
  return (
    <div
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: hex,
        border: `1px solid ${COLORS.BORDER}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: "18px",
          fontWeight: 700,
          color: lightText ? COLORS.BG : COLORS.TEXT,
        }}
      >
        {hex}
      </div>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: "14px",
          fontWeight: 500,
          color: lightText ? "#A1A1AA" : COLORS.MUTED,
          marginTop: "4px",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function CapsuleLookbookCard({
  num,
  name,
  price,
  hint,
}: {
  num: string;
  name: string;
  price: string;
  hint: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        height: "520px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          flex: 1,
          margin: "20px 20px 0 20px",
          backgroundColor: COLORS.BG,
          border: `1px solid ${COLORS.BORDER}`,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            zIndex: 2,
            padding: "4px 10px",
            backgroundColor: COLORS.BG,
            border: `1px solid ${COLORS.BORDER}`,
            fontFamily: FONTS.mono,
            fontSize: "14px",
            fontWeight: 700,
            color: COLORS.MUTED,
          }}
        >
          DROP // {num}
        </div>
        <ImagePlaceholder hint={hint} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 24px",
          gap: "12px",
        }}
      >
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: "22px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: COLORS.TEXT,
          }}
        >
          {num} // {name}
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: "24px",
            fontWeight: 700,
            color: COLORS.ACCENT,
            flexShrink: 0,
          }}
        >
          {price}
        </div>
      </div>
    </div>
  );
}

function VoicePillarCard({
  num,
  adjective,
  sample,
  accent,
}: {
  num: string;
  adjective: string;
  sample: string;
  accent: string;
}) {
  return (
    <SwissCard
      style={{
        height: "420px",
        justifyContent: "space-between",
        padding: "40px",
        borderTop: `6px solid ${accent}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "22px",
            fontWeight: 700,
            color: accent,
          }}
        >
          {num}
        </span>
        <MonoPill color={accent} bg={COLORS.BG} border={accent}>
          VOICE PILLAR
        </MonoPill>
      </div>

      <div
        style={{
          fontFamily: FONTS.heading,
          fontSize: "46px",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: COLORS.TEXT,
        }}
      >
        {adjective}
      </div>

      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: "20px",
          lineHeight: 1.45,
          color: COLORS.MUTED,
          borderTop: `1px solid ${COLORS.BORDER}`,
          paddingTop: "20px",
        }}
      >
        {sample}
      </div>
    </SwissCard>
  );
}

function FunnelInputNode({ label, tag }: { label: string; tag: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 28px",
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
      }}
    >
      <span
        style={{
          fontFamily: FONTS.heading,
          fontSize: "26px",
          fontWeight: 700,
          color: COLORS.TEXT,
        }}
      >
        {label}
      </span>
      <MonoPill bg={COLORS.BG}>{tag}</MonoPill>
    </div>
  );
}

function PromptBlock({
  tag,
  accent,
  spec,
  icon: Icon,
}: {
  tag: string;
  accent: string;
  spec: string;
  icon?: LucideIcon;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "320px 1fr",
        alignItems: "center",
        gap: "32px",
        padding: "26px 32px",
        backgroundColor: COLORS.BG,
        border: `1px solid ${COLORS.BORDER}`,
        borderLeft: `8px solid ${accent}`,
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          fontFamily: FONTS.mono,
          fontSize: "18px",
          fontWeight: 700,
          color: accent,
          letterSpacing: "0.06em",
        }}
      >
        {tag}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontFamily: FONTS.mono,
          fontSize: "24px",
          fontWeight: 600,
          color: COLORS.TEXT,
        }}
      >
        {Icon && <Icon size={24} color={accent} />}
        <span>{spec}</span>
      </div>
    </div>
  );
}

function PublishStepCard({
  num,
  title,
  detail,
  badge,
  icon: Icon,
  highlighted = false,
}: {
  num: string;
  title: string;
  detail: string;
  badge: string;
  icon: LucideIcon;
  highlighted?: boolean;
}) {
  return (
    <SwissCard
      highlighted={highlighted}
      style={{
        height: "420px",
        padding: "40px",
        justifyContent: "space-between",
        backgroundColor: highlighted ? COLORS.TEXT : COLORS.SURFACE,
        color: highlighted ? COLORS.BG : COLORS.TEXT,
        borderWidth: highlighted ? "2px" : "1px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "42px",
            fontWeight: 700,
            color: highlighted ? COLORS.ACCENT : COLORS.TEXT,
          }}
        >
          {num}
        </span>
        <MonoPill
          color={highlighted ? COLORS.BG : COLORS.MUTED}
          bg={highlighted ? COLORS.ACCENT : COLORS.BG}
          border={highlighted ? COLORS.ACCENT : COLORS.BORDER}
        >
          {badge}
        </MonoPill>
      </div>

      <div
        style={{
          width: "72px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: highlighted ? "#18181B" : COLORS.BG,
          border: `1px solid ${highlighted ? "#3F3F46" : COLORS.BORDER}`,
        }}
      >
        <Icon
          size={36}
          color={highlighted ? COLORS.ACCENT : COLORS.TEXT}
          strokeWidth={1.75}
        />
      </div>

      <div>
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: "34px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: highlighted ? COLORS.BG : COLORS.TEXT,
            marginBottom: "10px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: "18px",
            color: highlighted ? "#A1A1AA" : COLORS.MUTED,
          }}
        >
          {detail}
        </div>
      </div>
    </SwissCard>
  );
}

// Slide 23: Day 03 Topic Roadmap (Camp Roadmap highlighting Day 03)
const Slide23_D3Roadmap: Page = () => <CampRoadmap activeDay="03" />;

// Slide 24: Title & The 4-Step Studio Pipeline
const Slide24_D3Pipeline: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 03 // THE PIPELINE"
      tagColor={COLORS.ACCENT}
      title="Build a Live Fashion Brand."
      subtitle="Connect four AI tools to create a complete product in 60 minutes."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "24px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <PipelineStepCard
          num="01"
          title="Brand Identity"
          role="LLM Strategy"
          icon={Sparkles}
        />
      </StaggerItem>
      <StaggerItem index={1}>
        <PipelineStepCard
          num="02"
          title="Product Collection"
          role="Image-to-Image AI"
          icon={Shirt}
        />
      </StaggerItem>
      <StaggerItem index={2}>
        <PipelineStepCard
          num="03"
          title="Social Campaign"
          role="Multimodal Copy"
          icon={Share2}
        />
      </StaggerItem>
      <StaggerItem index={3}>
        <PipelineStepCard
          num="04"
          title="Live Storefront"
          role="Lovable Web App"
          icon={Globe}
          highlighted
        />
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 25: Today's Free Tool Stack
const Slide25_D3Stack: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 03 // THE STACK"
      tagColor={COLORS.ACCENT}
      title="Zero Code. Free Tools Only."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "32px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <StackToolCard
          index="TOOL 01"
          toolName="Google Gemini"
          role="Brand and Meta-Prompts"
          tier="FREE TIER"
          accent={COLORS.ACCENT_2}
          icon={MessageSquareCode}
        />
      </StaggerItem>
      <StaggerItem index={1}>
        <StackToolCard
          index="TOOL 02"
          toolName="Leonardo AI"
          role="Garment Image Restyling"
          tier="FREE TIER"
          accent={COLORS.TEXT}
          icon={Wand2}
        />
      </StaggerItem>
      <StaggerItem index={2}>
        <StackToolCard
          index="TOOL 03"
          toolName="Lovable.dev"
          role="Single-Prompt Web UI"
          tier="5 CREDITS/DAY"
          accent={COLORS.ACCENT}
          icon={Layout}
        />
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 26: Step 1: The Brand Identity Bible
const Slide26_D3BrandBible: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 03 // BRAND STRATEGY"
      tagColor={COLORS.ACCENT}
      title="One Prompt. Complete Brand Identity."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.25fr 1fr",
        gridTemplateRows: "260px 260px",
        gap: "24px",
        width: "100%",
      }}
    >
      <StaggerItem index={0} style={{ display: "flex", height: "100%" }}>
        <SwissCard
          style={{
            flex: 1,
            backgroundColor: "#141312",
            color: "#EAE6DF",
            justifyContent: "space-between",
            padding: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill color="#EAE6DF" bg="transparent" border="#2E2B28">
              NAME & SLOGAN
            </MonoPill>
            <Sparkles size={24} color="#D46A31" />
          </div>
          <div>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: "68px",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "#EAE6DF",
              }}
            >
              RIMAL KINETIC
            </div>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: "20px",
                color: "#D46A31",
                marginTop: "14px",
                letterSpacing: "0.06em",
              }}
            >
              ANCIENT SCRIPT. FUTURE STREETS.
            </div>
          </div>
        </SwissCard>
      </StaggerItem>

      <StaggerItem index={1} style={{ display: "flex", height: "100%" }}>
        <SwissCard
          style={{ flex: 1, justifyContent: "space-between", padding: "28px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <MonoPill bg={COLORS.BG}>COLOR PALETTE</MonoPill>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "16px",
                color: COLORS.MUTED,
              }}
            >
              4 TOKENS
            </span>
          </div>
          <div style={{ display: "flex", gap: "12px", flex: 1 }}>
            <ColorSwatch hex="#141312" label="OBSIDIAN" lightText />
            <ColorSwatch hex="#EAE6DF" label="ALABASTER" />
            <ColorSwatch hex="#D46A31" label="TERRACOTTA" lightText />
            <ColorSwatch hex="#298C82" label="VERDIGRIS" lightText />
          </div>
        </SwissCard>
      </StaggerItem>

      <StaggerItem index={2} style={{ display: "flex", height: "100%" }}>
        <SwissCard
          style={{ flex: 1, justifyContent: "space-between", padding: "32px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill bg={COLORS.BG}>TYPOGRAPHY</MonoPill>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "16px",
                color: COLORS.MUTED,
              }}
            >
              DISPLAY + MONO
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "40px" }}>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: "108px",
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                color: COLORS.TEXT,
              }}
            >
              Aa
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "32px",
                  fontWeight: 800,
                }}
              >
                Syne (Bold Geometric)
              </div>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "22px",
                  color: COLORS.MUTED,
                }}
              >
                Space Mono // 0123456789
              </div>
            </div>
          </div>
        </SwissCard>
      </StaggerItem>

      <StaggerItem index={3} style={{ display: "flex", height: "100%" }}>
        <SwissCard
          highlighted
          highlightColor="#298C82"
          style={{ flex: 1, justifyContent: "space-between", padding: "32px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill color="#298C82" bg={COLORS.BG} border="#298C82">
              TARGET PERSONA
            </MonoPill>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "16px",
                color: COLORS.MUTED,
              }}
            >
              ICP // 01
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div
              style={{
                width: "88px",
                height: "88px",
                backgroundColor: "#141312",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <User size={44} color="#EAE6DF" strokeWidth={1.75} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "32px",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: COLORS.TEXT,
                }}
              >
                Avant-Garde Tastemaker
              </div>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "18px",
                  color: COLORS.MUTED,
                  marginTop: "6px",
                }}
              >
                AGE 22–35 // TECH-FORWARD // NOMADIC
              </div>
            </div>
          </div>
        </SwissCard>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 26B: Brand Voice & Tone (From Report)
const Slide26B_D3BrandVoice: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 03 // BRAND VOICE & TONE"
      tagColor={COLORS.ACCENT}
      title="Prophetic. Visceral. Minimalist."
      subtitle="Combine desert heritage with modern cyberpunk style."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "32px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <VoicePillarCard
          num="01"
          adjective="Prophetic"
          sample='"Sand remembers every imprint. Nothing lasts forever."'
          accent="#D46A31"
        />
      </StaggerItem>
      <StaggerItem index={1}>
        <VoicePillarCard
          num="02"
          adjective="Visceral"
          sample='"500 GSM sand-washed fleece. Forged from raw earth tones."'
          accent={COLORS.TEXT}
        />
      </StaggerItem>
      <StaggerItem index={2}>
        <VoicePillarCard
          num="03"
          adjective="Minimalist"
          sample='"3 archival pieces. 48 hours. Zero restocks."'
          accent="#298C82"
        />
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 27: Step 2: Reference-Guided Generation
const Slide27_D3ImageToImage: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 03 // IMAGE-TO-IMAGE"
      tagColor={COLORS.ACCENT}
      title="Use a Reference Image. Keep the Structure."
      subtitle="Send a clothing reference photo to Image AI to create custom designs."
      titleSize={64}
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 240px 1fr",
        alignItems: "center",
        gap: "24px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <SwissCard
          style={{
            height: "470px",
            justifyContent: "space-between",
            borderColor: COLORS.MUTED,
            padding: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill color={COLORS.MUTED} bg={COLORS.BG} border={COLORS.MUTED}>
              INPUT // WEB REFERENCE
            </MonoPill>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "16px",
                color: COLORS.MUTED,
              }}
            >
              FLAT-LAY
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              margin: "20px 0",
              overflow: "hidden",
              border: `1px solid ${COLORS.BORDER}`,
            }}
          >
            <ImagePlaceholder hint="Plain oversized hoodie flat-lay web reference" />
          </div>

          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: "28px",
              fontWeight: 700,
              color: COLORS.MUTED,
              textAlign: "center",
            }}
          >
            Plain Reference Garment
          </div>
        </SwissCard>
      </StaggerItem>

      <StaggerItem
        index={1}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            padding: "10px 18px",
            backgroundColor: COLORS.ACCENT_2,
            color: COLORS.BG,
            fontFamily: FONTS.mono,
            fontSize: "16px",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textAlign: "center",
          }}
        >
          + BRAND PROMPT
        </div>
        <ArrowRight size={48} color={COLORS.ACCENT} strokeWidth={2.25} />
      </StaggerItem>

      <StaggerItem index={2}>
        <SwissCard
          highlighted
          highlightColor={COLORS.ACCENT}
          style={{
            height: "470px",
            justifyContent: "space-between",
            borderWidth: "2px",
            padding: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill
              color={COLORS.BG}
              bg={COLORS.ACCENT}
              border={COLORS.ACCENT}
            >
              OUTPUT // AI EDITORIAL
            </MonoPill>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "16px",
                color: COLORS.ACCENT,
              }}
            >
              LEONARDO AI
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              margin: "20px 0",
              overflow: "hidden",
              border: `1px solid ${COLORS.BORDER}`,
            }}
          >
            <ImagePlaceholder hint="RIMAL KINETIC Mirage Heavyweight Hoodie AI editorial output" />
          </div>

          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: "28px",
              fontWeight: 800,
              color: COLORS.TEXT,
              textAlign: "center",
            }}
          >
            Mirage Heavyweight Hoodie Lookbook
          </div>
        </SwissCard>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 28: The 3-Piece Capsule Collection
const Slide28_D3CapsuleDrop: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 03 // THE CAPSULE DROP"
      tagColor={COLORS.ACCENT}
      title="Three Matching Products. One Visual Style."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "32px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <CapsuleLookbookCard
          num="01"
          name="Nomad Script Boxy Shirt"
          price="$185"
          hint="Nomad Script Boxy Shirt lookbook image"
        />
      </StaggerItem>
      <StaggerItem index={1}>
        <CapsuleLookbookCard
          num="02"
          name="Mirage Heavyweight Hoodie"
          price="$245"
          hint="Mirage Heavyweight Hoodie lookbook image"
        />
      </StaggerItem>
      <StaggerItem index={2}>
        <CapsuleLookbookCard
          num="03"
          name="Kinetic Calligraphy Crewneck"
          price="$210"
          hint="Kinetic Calligraphy Crewneck lookbook image"
        />
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 29: Step 3: Viral Social Launch Assets
const Slide29_D3SocialCampaign: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 03 // SOCIAL CAMPAIGN"
      tagColor={COLORS.ACCENT}
      title="Use Approved Images for Launch Posts."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.15fr 1fr",
        gap: "32px",
        width: "100%",
      }}
    >
      {/* Left: Social Copy Text Box */}
      <StaggerItem index={0}>
        <SwissCard
          style={{
            height: "520px",
            padding: "44px",
            justifyContent: "space-between",
            backgroundColor: COLORS.SURFACE,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#141312",
                }}
              />
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                @RIMALKINETIC
              </span>
            </div>
            <MonoPill
              color={COLORS.BG}
              bg={COLORS.ACCENT}
              border={COLORS.ACCENT}
            >
              48-HOUR DROP
            </MonoPill>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: "38px",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: COLORS.TEXT,
              }}
            >
              “CAPSULE 01 HAS LANDED. 3 archival pieces. 48 hours. Zero
              restocks.”
            </div>
            <div
              style={{
                fontFamily: FONTS.body,
                fontSize: "24px",
                lineHeight: 1.45,
                color: COLORS.MUTED,
              }}
            >
              Sand remembers every imprint. Heavyweight textiles forged from raw
              earth tones — built for the modern nomad.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "24px",
              borderTop: `1px solid ${COLORS.BORDER}`,
              gap: "16px",
            }}
          >
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: "16px",
                color: COLORS.MUTED,
              }}
            >
              #RimalKinetic #FuturisticStreetwear
            </div>
            <div
              style={{
                padding: "10px 20px",
                backgroundColor: COLORS.ACCENT,
                color: COLORS.BG,
                fontFamily: FONTS.mono,
                fontSize: "16px",
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              48-Hour Waitlist
            </div>
          </div>
        </SwissCard>
      </StaggerItem>

      {/* Right: Single Image Frame */}
      <StaggerItem index={1}>
        <SwissCard
          style={{
            height: "520px",
            padding: "20px",
            backgroundColor: COLORS.BG,
          }}
        >
          <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
            <ImagePlaceholder hint="RIMAL KINETIC social launch campaign hero image" />
          </div>
        </SwissCard>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 30: The Secret: Meta-Prompting
const Slide30_D3MetaPrompting: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 03 // PROMPT ARCHITECT"
      tagColor={COLORS.ACCENT}
      title="Use an LLM to Write the Next Prompt."
      subtitle="Save your 5 free Lovable credits. Do not type prompts manually."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.15fr 72px 1fr 72px 1fr",
        alignItems: "center",
        gap: "16px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <StaggerItem index={0}>
          <FunnelInputNode label="Brand HEX & Fonts" tag="STEP 01" />
        </StaggerItem>
        <StaggerItem index={1}>
          <FunnelInputNode label="3 Product Specs" tag="STEP 02" />
        </StaggerItem>
        <StaggerItem index={2}>
          <FunnelInputNode label="3 Social Posts" tag="STEP 03" />
        </StaggerItem>
      </div>

      <StaggerItem
        index={3}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ArrowRight size={44} color={COLORS.ACCENT_2} strokeWidth={2.25} />
      </StaggerItem>

      <StaggerItem index={3}>
        <SwissCard
          highlighted
          highlightColor={COLORS.ACCENT_2}
          style={{
            height: "340px",
            borderWidth: "2px",
            backgroundColor: COLORS.BG,
            justifyContent: "space-between",
            padding: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill
              color={COLORS.BG}
              bg={COLORS.ACCENT_2}
              border={COLORS.ACCENT_2}
            >
              SYNTHESIS
            </MonoPill>
            <Cpu size={32} color={COLORS.ACCENT_2} />
          </div>
          <div>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: "34px",
                fontWeight: 800,
                lineHeight: 1.15,
                color: COLORS.TEXT,
              }}
            >
              LLM Meta-Prompt Architect
            </div>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: "18px",
                color: COLORS.ACCENT_2,
                marginTop: "12px",
              }}
            >
              COMPRESSES ALL CONTEXT
            </div>
          </div>
        </SwissCard>
      </StaggerItem>

      <StaggerItem
        index={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ArrowRight size={44} color={COLORS.ACCENT} strokeWidth={2.25} />
      </StaggerItem>

      <StaggerItem index={4}>
        <SwissCard
          highlighted
          highlightColor={COLORS.ACCENT}
          style={{
            height: "340px",
            borderWidth: "2px",
            backgroundColor: COLORS.TEXT,
            color: COLORS.BG,
            justifyContent: "space-between",
            padding: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill
              color={COLORS.BG}
              bg={COLORS.ACCENT}
              border={COLORS.ACCENT}
            >
              READY TO PASTE
            </MonoPill>
            <FileCode size={32} color={COLORS.ACCENT} />
          </div>
          <div>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: "34px",
                fontWeight: 800,
                lineHeight: 1.15,
                color: COLORS.BG,
              }}
            >
              1 Master Lovable Prompt
            </div>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: "18px",
                color: "#A1A1AA",
                marginTop: "12px",
              }}
            >
              1 CREDIT // 80% COMPLETE
            </div>
          </div>
        </SwissCard>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 31: Anatomy of the 1-Shot Lovable Prompt
const Slide31_D3MasterPrompt: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 03 // MASTER PROMPT"
      tagColor={COLORS.ACCENT}
      title="Give Lovable All Data in One Prompt."
    />

    <SwissCard
      style={{
        padding: "32px",
        gap: "18px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <PromptBlock
          tag="[01 DESIGN SYSTEM]"
          accent={COLORS.ACCENT_2}
          spec="Obsidian #141312, Alabaster #EAE6DF, Terracotta #D46A31, Syne + Space Mono"
        />
      </StaggerItem>
      <StaggerItem index={1}>
        <PromptBlock
          tag="[02 HERO & MANIFESTO]"
          accent={COLORS.TEXT}
          spec='"Ancient script. Future streets." + desert editorial'
        />
      </StaggerItem>
      <StaggerItem index={2}>
        <PromptBlock
          tag="[03 3-ITEM CAPSULE GRID]"
          accent={COLORS.ACCENT}
          spec="Boxy Shirt ($185), Mirage Hoodie ($245), Crewneck ($210) + Waitlist"
        />
      </StaggerItem>
      <StaggerItem index={3}>
        <PromptBlock
          tag="[04 ATTACHED ASSETS]"
          accent={COLORS.MUTED}
          icon={Paperclip}
          spec="nomad_shirt.png, mirage_hoodie.png, kinetic_crewneck.png"
        />
      </StaggerItem>
    </SwissCard>
  </SlideContainer>
);

// Slide 31B: Live 1-Shot Lovable Output (From Report)
const Slide31B_D3LovableOutput: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 03 // LIVE OUTPUT"
      tagColor={COLORS.ACCENT}
      title="Single-Prompt Storefront: RIMAL KINETIC."
      subtitle="Built from one master prompt. Stopped at the free-tier credit limit."
    />

    <SwissCard
      style={{
        height: "500px",
        padding: "0",
        backgroundColor: COLORS.BG,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 28px",
          backgroundColor: COLORS.SURFACE,
          borderBottom: `1px solid ${COLORS.BORDER}`,
        }}
      >
        <span
          style={{ fontFamily: FONTS.mono, fontSize: "18px", fontWeight: 700 }}
        >
          rimal-kinetic.lovable.app
        </span>
      </div>
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <ImagePlaceholder hint="RIMAL KINETIC Lovable.dev live storefront screenshot" />
      </div>
    </SwissCard>
  </SlideContainer>
);

// Slide 33: The Bridge to Day 4 (The Waitlist Button)
const Slide33_D3BridgeDay4: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 03 // TOMORROW'S HOOK"
      tagColor={COLORS.ACCENT}
      title="Build the Storefront Today. Connect the Backend Tomorrow."
      titleSize={62}
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.15fr 260px 1fr",
        alignItems: "center",
        gap: "24px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <SwissCard
          style={{
            height: "440px",
            padding: "0",
            backgroundColor: COLORS.BG,
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "18px 28px",
              backgroundColor: COLORS.SURFACE,
              borderBottom: `1px solid ${COLORS.BORDER}`,
            }}
          >
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              rimal-kinetic.lovable.app
            </span>
            <MonoPill
              color={COLORS.ACCENT_2}
              bg={COLORS.BG}
              border={COLORS.ACCENT_2}
            >
              DAY 03 // UI
            </MonoPill>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "40px",
              gap: "28px",
            }}
          >
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: "42px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              RIMAL KINETIC // CAPSULE 01
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                padding: "20px 36px",
                backgroundColor: COLORS.ACCENT,
                color: COLORS.BG,
                fontFamily: FONTS.mono,
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              <MousePointerClick size={26} />
              Reserve Now
            </div>
          </div>
        </SwissCard>
      </StaggerItem>

      <StaggerItem
        index={1}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <MonoBadgeBridge />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "0px",
              borderTop: `4px dashed ${COLORS.ACCENT}`,
            }}
          />
          <ArrowRight size={36} color={COLORS.ACCENT} strokeWidth={2.5} />
        </div>
      </StaggerItem>

      <StaggerItem index={2}>
        <SwissCard
          highlighted
          highlightColor={COLORS.ACCENT_2}
          style={{
            height: "440px",
            borderWidth: "2px",
            backgroundColor: COLORS.TEXT,
            color: COLORS.BG,
            justifyContent: "space-between",
            padding: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill
              color={COLORS.BG}
              bg={COLORS.ACCENT_2}
              border={COLORS.ACCENT_2}
            >
              DAY 04 // BRAIN
            </MonoPill>
            <Zap size={32} color={COLORS.ACCENT} />
          </div>

          <div
            style={{
              width: "88px",
              height: "88px",
              backgroundColor: "#18181B",
              border: "1px solid #3F3F46",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Workflow size={44} color={COLORS.BG} />
          </div>

          <div>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: "40px",
                fontWeight: 800,
                color: COLORS.BG,
              }}
            >
              n8n Automation
            </div>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: "18px",
                color: "#A1A1AA",
                marginTop: "10px",
              }}
            >
              CRM + EMAIL + ORDER SYNC
            </div>
          </div>
        </SwissCard>
      </StaggerItem>
    </div>
  </SlideContainer>
);

function MonoBadgeBridge() {
  return (
    <MonoPill color={COLORS.TEXT} bg={COLORS.SURFACE}>
      WEBHOOK →
    </MonoPill>
  );
}

// Slide 34: Publish App & Share to Social Media
const Slide34_D3PublishAndShare: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 03 // LAUNCH & SHARE"
      tagColor={COLORS.ACCENT}
      title="Publish the App. Share on Social Media."
      subtitle="Deploy your Lovable storefront and add the live link to your posts."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 56px 1fr 56px 1fr",
        alignItems: "center",
        gap: "12px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <PublishStepCard
          num="01"
          title="Publish App"
          detail="rimal-kinetic.lovable.app"
          badge="LOVABLE DEPLOY"
          icon={Globe}
        />
      </StaggerItem>

      <StaggerItem
        index={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ArrowRight size={36} color={COLORS.ACCENT_2} strokeWidth={2.25} />
      </StaggerItem>

      <StaggerItem index={2}>
        <PublishStepCard
          num="02"
          title="Copy Live URL"
          detail="Link in Bio & Story Sticker"
          badge="1-CLICK SHARE"
          icon={Send}
        />
      </StaggerItem>

      <StaggerItem
        index={3}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ArrowRight size={36} color={COLORS.ACCENT} strokeWidth={2.25} />
      </StaggerItem>

      <StaggerItem index={4}>
        <PublishStepCard
          num="03"
          title="Share Drop Post"
          detail="@RIMALKINETIC // 48H DROP"
          badge="GO LIVE"
          icon={Share2}
          highlighted
        />
      </StaggerItem>
    </div>
  </SlideContainer>
);

// ===========================================================================
// DAY 04: Automation Foundations with n8n
// ===========================================================================

function D4ModuleCard({
  num,
  title,
  subtitle,
  icon: Icon,
  highlighted = false,
}: {
  num: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  highlighted?: boolean;
}) {
  return (
    <SwissCard
      highlighted={highlighted}
      style={{
        height: "420px",
        padding: "40px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "48px",
            fontWeight: 700,
            color: highlighted ? COLORS.ACCENT : COLORS.TEXT,
          }}
        >
          {num}
        </span>
        <MonoPill
          color={highlighted ? COLORS.BG : COLORS.MUTED}
          bg={highlighted ? COLORS.ACCENT : COLORS.BG}
          border={highlighted ? COLORS.ACCENT : COLORS.BORDER}
        >
          MODULE {num}
        </MonoPill>
      </div>

      <div
        style={{
          width: "72px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.BG,
          border: `1px solid ${COLORS.BORDER}`,
        }}
      >
        <Icon
          size={36}
          color={highlighted ? COLORS.ACCENT : COLORS.TEXT}
          strokeWidth={1.75}
        />
      </div>

      <div>
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: "34px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: COLORS.TEXT,
            marginBottom: "8px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: "18px",
            color: COLORS.MUTED,
          }}
        >
          {subtitle}
        </div>
      </div>
    </SwissCard>
  );
}

function CanvasNodeCard({
  nodeId,
  label,
  sub,
  accent,
  icon: Icon,
}: {
  nodeId: string;
  label: string;
  sub: string;
  accent: string;
  icon: LucideIcon;
}) {
  return (
    <div
      style={{
        backgroundColor: COLORS.BG,
        border: `2px solid ${accent}`,
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        minWidth: "280px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "15px",
            fontWeight: 700,
            color: accent,
          }}
        >
          {nodeId}
        </span>
        <div
          style={{
            width: "12px",
            height: "12px",
            backgroundColor: "#16A34A",
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "52px",
            height: "52px",
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={26} color={accent} />
        </div>
        <div>
          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: "24px",
              fontWeight: 800,
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: "15px",
              color: COLORS.MUTED,
            }}
          >
            {sub}
          </div>
        </div>
      </div>
    </div>
  );
}

function FormulaPillarCard({
  num,
  title,
  role,
  bg,
  icon: Icon,
}: {
  num: string;
  title: string;
  role: string;
  bg: string;
  icon: LucideIcon;
}) {
  return (
    <div
      style={{
        height: "440px",
        backgroundColor: bg,
        color: COLORS.BG,
        padding: "44px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "44px",
            fontWeight: 700,
            opacity: 0.9,
          }}
        >
          {num}
        </span>
        <Icon size={40} color={COLORS.BG} strokeWidth={1.75} />
      </div>

      <div>
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: "46px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "12px",
          }}
        >
          {title}
        </div>
        <div
          style={{ fontFamily: FONTS.mono, fontSize: "22px", opacity: 0.85 }}
        >
          {role}
        </div>
      </div>
    </div>
  );
}

type ServiceId =
  | "gmail"
  | "sheets"
  | "calendar"
  | "slack"
  | "telegram"
  | "notion"
  | "stripe"
  | "shopify"
  | "github"
  | "typeform"
  | "airtable"
  | "hubspot"
  | "discord"
  | "supabase"
  | "n8n"
  | "cron"
  | "webhook";

const SERVICE_ICONS: Record<ServiceId, { icon: LucideIcon; color: string }> = {
  gmail: { icon: Mail, color: "#EA4335" },
  sheets: { icon: Table, color: "#0F9D58" },
  calendar: { icon: Calendar, color: "#4285F4" },
  slack: { icon: Hash, color: "#E01E5A" },
  telegram: { icon: Send, color: "#229ED9" },
  notion: { icon: FileText, color: "#09090B" },
  stripe: { icon: CreditCard, color: "#635BFF" },
  shopify: { icon: ShoppingBag, color: "#95BF47" },
  github: { icon: Code2, color: "#181717" },
  typeform: { icon: ClipboardList, color: "#262627" },
  airtable: { icon: Grid, color: "#FCB400" },
  hubspot: { icon: Share2, color: "#FF7A59" },
  discord: { icon: MessageCircle, color: "#5865F2" },
  supabase: { icon: Zap, color: "#3ECF8E" },
  n8n: { icon: Workflow, color: "#EA4B71" },
  cron: { icon: Clock, color: "#FF3B30" },
  webhook: { icon: Webhook, color: "#2563EB" },
};

function ServiceMark({ id, size = 20 }: { id: ServiceId; size?: number }) {
  const { icon: Icon, color } = SERVICE_ICONS[id];
  return <Icon size={size} color={color} strokeWidth={2} />;
}

function ServiceChip({ id, label }: { id: ServiceId; label: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "8px 14px",
        backgroundColor: COLORS.BG,
        border: `1px solid ${COLORS.BORDER}`,
        fontFamily: FONTS.mono,
        fontSize: "15px",
        fontWeight: 600,
        color: COLORS.TEXT,
      }}
    >
      <ServiceMark id={id} size={20} />
      <span>{label}</span>
    </div>
  );
}

function TriggerNodeCard({
  num,
  title,
  sub,
  services,
}: {
  num: string;
  title: string;
  sub: string;
  services: ReactNode;
}) {
  return (
    <SwissCard
      style={{
        height: "440px",
        padding: "32px",
        justifyContent: "space-between",
        position: "relative",
        borderTop: `6px solid ${COLORS.ACCENT}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "20px",
            fontWeight: 700,
            color: COLORS.MUTED,
          }}
        >
          {num}
        </span>
        <div
          style={{
            width: "36px",
            height: "36px",
            backgroundColor: COLORS.ACCENT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Zap size={20} color={COLORS.BG} />
        </div>
      </div>

      <div>
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: "28px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: COLORS.TEXT,
            marginBottom: "6px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: "16px",
            color: COLORS.MUTED,
          }}
        >
          {sub}
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {services}
      </div>
    </SwissCard>
  );
}

function ActionSinkCard({
  category,
  action,
  accent,
  services,
}: {
  category: string;
  action: string;
  accent: string;
  services: ReactNode;
}) {
  return (
    <SwissCard
      style={{
        height: "440px",
        padding: "32px",
        justifyContent: "space-between",
        borderTop: `6px solid ${accent}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MonoPill color={accent} bg={COLORS.BG} border={accent}>
          ACTION
        </MonoPill>
      </div>

      <div>
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: "28px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: COLORS.TEXT,
            marginBottom: "6px",
          }}
        >
          {category}
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: "17px",
            fontWeight: 600,
            color: accent,
          }}
        >
          {action}
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {services}
      </div>
    </SwissCard>
  );
}

function FlowNodeBox({
  num,
  title,
  sub,
  accent = COLORS.TEXT,
  bg = COLORS.BG,
  textColor = COLORS.TEXT,
}: {
  num: string;
  title: string;
  sub: string;
  accent?: string;
  bg?: string;
  textColor?: string;
}) {
  return (
    <div
      style={{
        padding: "24px 26px",
        backgroundColor: bg,
        border: `2px solid ${accent}`,
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: "15px",
          fontWeight: 700,
          color: accent,
        }}
      >
        {num}
      </span>
      <div
        style={{
          fontFamily: FONTS.heading,
          fontSize: "26px",
          fontWeight: 800,
          lineHeight: 1.15,
          color: textColor,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: "16px",
          opacity: 0.8,
          color: textColor,
        }}
      >
        {sub}
      </div>
    </div>
  );
}

// Slide 35: Day 04 Topic Roadmap
const Slide35_D4Roadmap: Page = () => <CampRoadmap activeDay="04" />;

// Slide 36: Title & Today's Blueprint
const Slide36_D4Blueprint: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 04 // OVERVIEW"
      tagColor={COLORS.ACCENT}
      title="Connect the System: n8n Foundations."
      subtitle="Replace manual tasks with automated workflows."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "32px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <D4ModuleCard
          num="01"
          title="The Canvas & UI"
          subtitle="Nodes, Wires & JSON"
          icon={LayoutGrid}
        />
      </StaggerItem>
      <StaggerItem index={1}>
        <D4ModuleCard
          num="02"
          title="Trigger → Logic → Action"
          subtitle="3-Part System Model"
          icon={GitBranch}
        />
      </StaggerItem>
      <StaggerItem index={2}>
        <D4ModuleCard
          num="03"
          title="Multi-Step Workflows"
          subtitle="Storefront to Alerts"
          icon={Zap}
          highlighted
        />
      </StaggerItem>
    </div>
  </SlideContainer>
);

function ReasonRow({
  icon: Icon,
  text,
  accent,
}: {
  icon: LucideIcon;
  text: string;
  accent: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "14px 20px",
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        borderLeft: `4px solid ${accent}`,
      }}
    >
      <Icon size={20} color={accent} strokeWidth={2} />
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: "18px",
          fontWeight: 600,
          color: COLORS.TEXT,
        }}
      >
        {text}
      </span>
    </div>
  );
}

// Slide 37: Manual Work vs. System Automation
const Slide37_D4ManualVsAuto: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 04 // WHY AUTOMATE"
      tagColor={COLORS.ACCENT}
      title="Do Not Copy Data Manually."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "36px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <StaggerItem index={0}>
          <SwissCard
            style={{
              height: "320px",
              padding: "36px",
              justifyContent: "space-between",
              borderColor: COLORS.MUTED,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <MonoPill
                color={COLORS.MUTED}
                bg={COLORS.BG}
                border={COLORS.MUTED}
              >
                BEFORE // MANUAL
              </MonoPill>
              <User size={30} color={COLORS.MUTED} />
            </div>

            <div>
              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "40px",
                  fontWeight: 800,
                  color: COLORS.MUTED,
                  marginBottom: "12px",
                }}
              >
                Human Input
              </div>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "20px",
                  lineHeight: 1.45,
                  color: COLORS.MUTED,
                }}
              >
                Copy form data → Paste into Sheets → Type confirmation emails
              </div>
            </div>
          </SwissCard>
        </StaggerItem>

        <StaggerItem
          index={1}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <ReasonRow
            icon={Clock}
            text="Hours lost to manual copy-paste tasks"
            accent={COLORS.MUTED}
          />
          <ReasonRow
            icon={AlertTriangle}
            text="Manual errors and missed customer leads"
            accent={COLORS.MUTED}
          />
          <ReasonRow
            icon={TrendingDown}
            text="Process stops when you are offline"
            accent={COLORS.MUTED}
          />
        </StaggerItem>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <StaggerItem index={2}>
          <SwissCard
            highlighted
            highlightColor={COLORS.ACCENT}
            style={{
              height: "320px",
              padding: "36px",
              justifyContent: "space-between",
              borderWidth: "2px",
              backgroundColor: COLORS.BG,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <MonoPill
                color={COLORS.BG}
                bg={COLORS.ACCENT}
                border={COLORS.ACCENT}
              >
                AFTER // SYSTEM
              </MonoPill>
              <Workflow size={30} color={COLORS.ACCENT} />
            </div>

            <div>
              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "40px",
                  fontWeight: 800,
                  color: COLORS.TEXT,
                  marginBottom: "12px",
                }}
              >
                n8n Pipeline
              </div>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "20px",
                  lineHeight: 1.45,
                  color: COLORS.TEXT,
                }}
              >
                Send webhook data across all apps automatically
              </div>
            </div>
          </SwissCard>
        </StaggerItem>

        <StaggerItem
          index={3}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <ReasonRow
            icon={Zap}
            text="Instant webhook execution in 0 seconds"
            accent={COLORS.ACCENT}
          />
          <ReasonRow
            icon={Check}
            text="100% consistent data accuracy"
            accent={COLORS.ACCENT_2}
          />
          <ReasonRow
            icon={TrendingUp}
            text="Runs 24 hours a day with no manual work"
            accent={COLORS.TEXT}
          />
        </StaggerItem>
      </div>
    </div>
  </SlideContainer>
);

// Slide 38: Anatomy of the n8n Canvas
const Slide38_D4CanvasAnatomy: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 04 // THE INTERFACE"
      tagColor={COLORS.ACCENT}
      title="Data Moves Left to Right."
      subtitle="Nodes, connections, and live JSON data."
    />

    <div
      style={{
        width: "100%",
        height: "450px",
        padding: "48px",
        boxSizing: "border-box",
        border: `2px solid ${COLORS.TEXT}`,
        backgroundColor: COLORS.SURFACE,
        backgroundImage: `radial-gradient(${COLORS.MUTED} 1.25px, transparent 1.25px)`,
        backgroundSize: "24px 24px",
        display: "grid",
        gridTemplateColumns: "1fr 160px 1fr 160px 1fr",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <StaggerItem index={0}>
        <CanvasNodeCard
          nodeId="NODE 01"
          label="Webhook"
          sub="Trigger Input"
          accent={COLORS.ACCENT}
          icon={Webhook}
        />
      </StaggerItem>

      <StaggerItem
        index={1}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            padding: "5px 10px",
            backgroundColor: "#16A34A",
            color: COLORS.BG,
            fontFamily: FONTS.mono,
            fontSize: "12px",
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          1 Item (JSON)
        </div>
        <ArrowRight size={36} color={COLORS.TEXT} strokeWidth={2.25} />
      </StaggerItem>

      <StaggerItem index={2}>
        <CanvasNodeCard
          nodeId="NODE 02"
          label="IF / Filter"
          sub="Route Logic"
          accent={COLORS.ACCENT_2}
          icon={Filter}
        />
      </StaggerItem>

      <StaggerItem
        index={3}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            padding: "5px 10px",
            backgroundColor: "#16A34A",
            color: COLORS.BG,
            fontFamily: FONTS.mono,
            fontSize: "12px",
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          1 Item Passed
        </div>
        <ArrowRight size={36} color={COLORS.TEXT} strokeWidth={2.25} />
      </StaggerItem>

      <StaggerItem index={4}>
        <CanvasNodeCard
          nodeId="NODE 03"
          label="Google Sheets"
          sub="Append Row"
          accent={COLORS.TEXT}
          icon={Table}
        />
      </StaggerItem>
    </div>
  </SlideContainer>
);

function AutomationExampleRow({
  tag,
  title,
  accent,
  step1,
  step2,
  step3,
}: {
  tag: string;
  title: string;
  accent: string;
  step1: { id: ServiceId; label: string };
  step2: { id: ServiceId; label: string };
  step3: { id: ServiceId; label: string };
}) {
  return (
    <SwissCard
      style={{
        width: "100%",
        padding: "28px 36px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderLeft: `8px solid ${accent}`,
        gap: "32px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          minWidth: "420px",
        }}
      >
        <MonoPill color={accent} bg={COLORS.BG} border={accent}>
          {tag}
        </MonoPill>
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: "32px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: COLORS.TEXT,
          }}
        >
          {title}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <ServiceChip id={step1.id} label={step1.label} />
        <ArrowRight size={24} color={accent} strokeWidth={2.5} />
        <ServiceChip id={step2.id} label={step2.label} />
        <ArrowRight size={24} color={accent} strokeWidth={2.5} />
        <ServiceChip id={step3.id} label={step3.label} />
      </div>
    </SwissCard>
  );
}

// Slide 38B: 3 Real Automation Examples
function AutomationExampleColumn({
  tag,
  title,
  accent,
  hint,
}: {
  tag: string;
  title: string;
  accent: string;
  hint: string;
}) {
  return (
    <div
      style={{
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        borderTop: `3px solid ${accent}`,
        padding: "24px",
        height: "540px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "15px",
            fontWeight: 700,
            color: accent,
            letterSpacing: "0.08em",
            display: "block",
            marginBottom: "6px",
          }}
        >
          {tag}
        </span>
        <h3
          style={{
            margin: 0,
            fontFamily: FONTS.heading,
            fontSize: "28px",
            fontWeight: 800,
            lineHeight: 1.15,
            color: COLORS.TEXT,
          }}
        >
          {title}
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          border: `1px solid ${COLORS.BORDER}`,
          backgroundColor: "#FFFFFF",
        }}
      >
        <ImagePlaceholder hint={hint} />
      </div>
    </div>
  );
}

const Slide38B_D4Examples: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 04 // REAL EXAMPLES"
      tagColor={COLORS.ACCENT}
      title="Three Common Automation Examples."
      subtitle="Three daily workflows that run automatically."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <AutomationExampleColumn
          tag="01 // E-COMMERCE"
          title="Order → Sheet → Email"
          accent={COLORS.ACCENT}
          hint="E-commerce order to Google Sheet and Gmail receipt workflow"
        />
      </StaggerItem>
      <StaggerItem index={1}>
        <AutomationExampleColumn
          tag="02 // LEAD ROUTING"
          title="Form → Filter → Slack"
          accent={COLORS.ACCENT_2}
          hint="Contact form filter to Slack sales alert workflow"
        />
      </StaggerItem>
      <StaggerItem index={2}>
        <AutomationExampleColumn
          tag="03 // REPORTING"
          title="Schedule → Metrics → Summary"
          accent={COLORS.TEXT}
          hint="Daily schedule Stripe revenue metrics to Telegram summary workflow"
        />
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 39: The Universal Automation Formula
function AutomationStageBox({
  active,
  accent,
  label,
  detail,
  icon: Icon,
}: {
  active: boolean;
  accent: string;
  label: string;
  detail: string;
  icon: LucideIcon;
}) {
  return (
    <div
      style={{
        backgroundColor: active ? accent : COLORS.BG,
        color: active ? COLORS.BG : COLORS.TEXT,
        border: `2px solid ${active ? accent : COLORS.BORDER}`,
        padding: "18px 22px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        transition:
          "background-color 280ms ease, color 280ms ease, border-color 280ms ease, transform 280ms ease",
        transform: active ? "translateY(-3px)" : "translateY(0)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          backgroundColor: active ? "rgba(255,255,255,0.18)" : COLORS.SURFACE,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={22} color={active ? COLORS.BG : accent} strokeWidth={2.2} />
      </div>
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: active ? "rgba(255,255,255,0.85)" : accent,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: "20px",
            fontWeight: 800,
            lineHeight: 1.2,
          }}
        >
          {detail}
        </div>
      </div>
    </div>
  );
}

function StageFlowTrack() {
  const isActive = useIsActivePage();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setStage(0);
      return;
    }
    const id = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 1250);
    return () => clearInterval(id);
  }, [isActive]);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        padding: "22px 28px",
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "1fr 72px 1fr 72px 1fr",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <AutomationStageBox
        active={stage === 0}
        accent={COLORS.ACCENT}
        label="01 // MESSAGE ARRIVES"
        detail="New Order: $240"
        icon={Mail}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: "24px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "3px",
            backgroundColor: stage >= 1 ? COLORS.ACCENT_2 : COLORS.BORDER,
            transition: "background-color 280ms ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: stage === 0 ? "8%" : "82%",
            width: "12px",
            height: "12px",
            backgroundColor: COLORS.ACCENT,
            opacity: stage === 0 || stage === 1 ? 1 : 0.25,
            transition:
              "left 550ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms ease",
          }}
        />
      </div>

      <AutomationStageBox
        active={stage === 1}
        accent={COLORS.ACCENT_2}
        label="02 // LOGIC CHECK"
        detail="Order > $200? TRUE"
        icon={Filter}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: "24px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "3px",
            backgroundColor: stage === 2 ? COLORS.TEXT : COLORS.BORDER,
            transition: "background-color 280ms ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: stage <= 1 ? "8%" : "82%",
            width: "12px",
            height: "12px",
            backgroundColor: COLORS.ACCENT_2,
            opacity: stage >= 1 ? 1 : 0.25,
            transition:
              "left 550ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms ease",
          }}
        />
      </div>

      <AutomationStageBox
        active={stage === 2}
        accent={COLORS.TEXT}
        label="03 // STORED"
        detail="Saved to Database"
        icon={Database}
      />
    </div>
  );
}

const Slide39_D4Formula: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 04 // MENTAL MODEL"
      tagColor={COLORS.ACCENT}
      title="Every Workflow Has 3 Parts."
    />

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "28px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 64px 1fr 64px 1fr",
          alignItems: "center",
          gap: "12px",
          width: "100%",
        }}
      >
        <StaggerItem index={0}>
          <FormulaPillarCard
            num="01"
            title="Trigger"
            role="Start Event"
            bg={COLORS.ACCENT}
            icon={Zap}
          />
        </StaggerItem>
        <StaggerItem
          index={1}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ArrowRight size={44} color={COLORS.TEXT} strokeWidth={2.5} />
        </StaggerItem>
        <StaggerItem index={2}>
          <FormulaPillarCard
            num="02"
            title="Logic"
            role="Decision Rules"
            bg={COLORS.ACCENT_2}
            icon={Cpu}
          />
        </StaggerItem>
        <StaggerItem
          index={3}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ArrowRight size={44} color={COLORS.TEXT} strokeWidth={2.5} />
        </StaggerItem>
        <StaggerItem index={4}>
          <FormulaPillarCard
            num="03"
            title="Action"
            role="Final Output"
            bg={COLORS.TEXT}
            icon={Send}
          />
        </StaggerItem>
      </div>

      <StageFlowTrack />
    </div>
  </SlideContainer>
);

// Slide 40: Part 1: Triggers (The Spark)
const Slide40_D4Triggers: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 04 // TRIGGERS"
      tagColor={COLORS.ACCENT}
      title="How a Workflow Starts."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "24px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <TriggerNodeCard
          num="01"
          title="Schedule / Cron"
          sub="Every Day @ 9AM"
          services={
            <>
              <ServiceChip id="cron" label="n8n Cron" />
              <ServiceChip id="calendar" label="Google Calendar" />
            </>
          }
        />
      </StaggerItem>
      <StaggerItem index={1}>
        <TriggerNodeCard
          num="02"
          title="Webhook / API"
          sub="Instant HTTP POST"
          services={
            <>
              <ServiceChip id="webhook" label="Webhook" />
              <ServiceChip id="stripe" label="Stripe" />
              <ServiceChip id="shopify" label="Shopify" />
              <ServiceChip id="github" label="GitHub" />
            </>
          }
        />
      </StaggerItem>
      <StaggerItem index={2}>
        <TriggerNodeCard
          num="03"
          title="Form Submission"
          sub="Website Pre-Order"
          services={
            <>
              <ServiceChip id="typeform" label="Typeform" />
              <ServiceChip id="sheets" label="Google Forms" />
              <ServiceChip id="n8n" label="n8n Form" />
            </>
          }
        />
      </StaggerItem>
      <StaggerItem index={3}>
        <TriggerNodeCard
          num="04"
          title="App Event"
          sub="New Message / Email"
          services={
            <>
              <ServiceChip id="gmail" label="Gmail" />
              <ServiceChip id="slack" label="Slack" />
              <ServiceChip id="telegram" label="Telegram" />
            </>
          }
        />
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 41: Part 2: Logic (The Brain)
const Slide41_D4Logic: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 04 // LOGIC"
      tagColor={COLORS.ACCENT}
      title="Filter, Route, and Transform Data."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 64px 1.25fr 64px 1.15fr",
        alignItems: "center",
        gap: "12px",
        width: "100%",
        padding: "40px",
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        boxSizing: "border-box",
      }}
    >
      <StaggerItem
        index={0}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <FlowNodeBox
          num="INPUT"
          title="Incoming Payload"
          sub="JSON Object"
          accent={COLORS.TEXT}
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <ServiceChip id="stripe" label="Stripe" />
          <ServiceChip id="shopify" label="Shopify" />
          <ServiceChip id="typeform" label="Typeform" />
        </div>
      </StaggerItem>

      <StaggerItem
        index={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ArrowRight size={36} color={COLORS.TEXT} strokeWidth={2.25} />
      </StaggerItem>

      <StaggerItem
        index={1}
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        <FlowNodeBox
          num="ROUTER"
          title="IF / Switch / Code"
          sub="Evaluate & Transform"
          accent={COLORS.ACCENT_2}
          bg={COLORS.BG}
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <ServiceChip id="n8n" label="n8n IF" />
          <ServiceChip id="n8n" label="Switch" />
          <ServiceChip id="n8n" label="Set Fields" />
          <ServiceChip id="github" label="Code (JS)" />
        </div>
      </StaggerItem>

      <StaggerItem
        index={2}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "90px",
        }}
      >
        <ArrowRight size={34} color={COLORS.ACCENT_2} strokeWidth={2.5} />
        <ArrowRight size={34} color={COLORS.MUTED} strokeWidth={2.5} />
      </StaggerItem>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <StaggerItem
          index={2}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <FlowNodeBox
            num="TRUE PATH"
            title="High-Priority Route"
            sub="Condition Met"
            accent={COLORS.ACCENT_2}
            bg={COLORS.ACCENT_2}
            textColor={COLORS.BG}
          />
          <div style={{ display: "flex", gap: "8px" }}>
            <ServiceChip id="slack" label="Slack" />
            <ServiceChip id="telegram" label="Telegram" />
          </div>
        </StaggerItem>
        <StaggerItem
          index={3}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <FlowNodeBox
            num="FALSE PATH"
            title="Standard Route"
            sub="Fallback Action"
            accent={COLORS.MUTED}
            bg={COLORS.BG}
            textColor={COLORS.MUTED}
          />
          <div style={{ display: "flex", gap: "8px" }}>
            <ServiceChip id="gmail" label="Gmail" />
            <ServiceChip id="sheets" label="Sheets" />
          </div>
        </StaggerItem>
      </div>
    </div>
  </SlideContainer>
);

// Slide 42: Part 3: Actions & Sinks (The Destination)
const Slide42_D4Actions: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 04 // ACTIONS"
      tagColor={COLORS.ACCENT}
      title="Where Data Is Saved and Sent."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "24px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <ActionSinkCard
          category="Spreadsheets & DB"
          action="Log & Sync Rows"
          accent={COLORS.ACCENT_2}
          services={
            <>
              <ServiceChip id="sheets" label="Google Sheets" />
              <ServiceChip id="airtable" label="Airtable" />
              <ServiceChip id="supabase" label="Supabase" />
            </>
          }
        />
      </StaggerItem>
      <StaggerItem index={1}>
        <ActionSinkCard
          category="Email & Outreach"
          action="Send Replies"
          accent={COLORS.ACCENT}
          services={
            <>
              <ServiceChip id="gmail" label="Gmail" />
              <ServiceChip id="stripe" label="Invoices" />
              <ServiceChip id="calendar" label="Calendar" />
            </>
          }
        />
      </StaggerItem>
      <StaggerItem index={2}>
        <ActionSinkCard
          category="Team & Community"
          action="Instant Alerts"
          accent={COLORS.TEXT}
          services={
            <>
              <ServiceChip id="slack" label="Slack" />
              <ServiceChip id="telegram" label="Telegram" />
              <ServiceChip id="discord" label="Discord" />
            </>
          }
        />
      </StaggerItem>
      <StaggerItem index={3}>
        <ActionSinkCard
          category="CRM & Workspace"
          action="Update Records"
          accent={COLORS.MUTED}
          services={
            <>
              <ServiceChip id="notion" label="Notion" />
              <ServiceChip id="hubspot" label="HubSpot" />
              <ServiceChip id="github" label="GitHub" />
            </>
          }
        />
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 43: How Nodes Talk: Drag-and-Drop Variables
const Slide43_D4DataMapping: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 04 // DATA MAPPING"
      tagColor={COLORS.ACCENT}
      title="Output of Node 1 = Input of Node 2."
      subtitle="Each JSON field is a reusable data block."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 90px 1.1fr",
        alignItems: "center",
        gap: "16px",
        width: "100%",
      }}
    >
      {/* Left: Trigger Output JSON */}
      <StaggerItem index={0}>
        <SwissCard
          style={{
            height: "380px",
            padding: "36px",
            justifyContent: "space-between",
            backgroundColor: COLORS.TEXT,
            color: COLORS.BG,
          }}
        >
          <MonoPill color={COLORS.BG} bg="transparent" border="#3F3F46">
            TRIGGER OUTPUT JSON
          </MonoPill>
          <pre
            style={{
              margin: 0,
              fontFamily: FONTS.mono,
              fontSize: "24px",
              lineHeight: 1.6,
              color: "#EAE6DF",
            }}
          >
            {`{\n  "name": "Eyad",\n  "item": "Mirage Hoodie",\n  "vip": true\n}`}
          </pre>
        </SwissCard>
      </StaggerItem>

      <StaggerItem
        index={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ArrowRight size={44} color={COLORS.ACCENT} strokeWidth={2.5} />
      </StaggerItem>

      {/* Right: Email Node Template */}
      <StaggerItem index={2}>
        <SwissCard
          highlighted
          highlightColor={COLORS.ACCENT_2}
          style={{
            height: "380px",
            padding: "36px",
            justifyContent: "space-between",
            backgroundColor: COLORS.BG,
            borderWidth: "2px",
          }}
        >
          <MonoPill
            color={COLORS.ACCENT_2}
            bg={COLORS.SURFACE}
            border={COLORS.ACCENT_2}
          >
            EMAIL NODE TEMPLATE
          </MonoPill>

          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: "34px",
              fontWeight: 700,
              lineHeight: 1.6,
              color: COLORS.TEXT,
            }}
          >
            <span>“Hello </span>
            <span
              style={{
                padding: "4px 12px",
                backgroundColor: COLORS.ACCENT_2,
                color: COLORS.BG,
                fontFamily: FONTS.mono,
                fontSize: "26px",
              }}
            >
              {"{{ $json.name }}"}
            </span>
            <span>, your </span>
            <span
              style={{
                padding: "4px 12px",
                backgroundColor: COLORS.ACCENT_2,
                color: COLORS.BG,
                fontFamily: FONTS.mono,
                fontSize: "26px",
              }}
            >
              {"{{ $json.item }}"}
            </span>
            <span> is reserved.”</span>
          </div>
        </SwissCard>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 44: Workflow 1: The Linear Pipeline
const Slide44_D4Workflow1: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 04 // BUILD 01 (SIMPLE)"
      tagColor={COLORS.ACCENT}
      title="Receive the Order. Save the Lead."
      subtitle="Connect your Day 3 Lovable store to a live spreadsheet."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 220px 1fr",
        alignItems: "center",
        gap: "24px",
        width: "100%",
        padding: "56px",
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        boxSizing: "border-box",
      }}
    >
      <StaggerItem index={0}>
        <FlowNodeBox
          num="01 // TRIGGER"
          title="Day 3 Website Order"
          sub="Webhook / Form Trigger"
          accent={COLORS.ACCENT}
          bg={COLORS.BG}
        />
      </StaggerItem>

      <StaggerItem
        index={1}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <ArrowRight size={44} color={COLORS.ACCENT} strokeWidth={2.5} />
      </StaggerItem>

      <StaggerItem index={2}>
        <FlowNodeBox
          num="02 // ACTION"
          title="Add Customer Row"
          sub="Google Sheets"
          accent={COLORS.ACCENT_2}
          bg={COLORS.BG}
        />
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 45: Workflow 2: The Branching Pipeline
const Slide45_D4Workflow2: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="DAY 04 // BUILD 02 (MULTI-STEP)"
      tagColor={COLORS.ACCENT}
      title="Route Orders with Conditional Logic."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 48px 1fr 48px 1fr 56px 1.15fr",
        alignItems: "center",
        gap: "8px",
        width: "100%",
        padding: "36px",
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        boxSizing: "border-box",
      }}
    >
      <StaggerItem index={0}>
        <FlowNodeBox
          num="01"
          title="Form Trigger"
          sub="Pre-Order"
          accent={COLORS.TEXT}
        />
      </StaggerItem>
      <StaggerItem
        index={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ArrowRight size={28} color={COLORS.TEXT} />
      </StaggerItem>
      <StaggerItem index={1}>
        <FlowNodeBox
          num="02"
          title="Google Sheets"
          sub="Log Lead"
          accent={COLORS.TEXT}
        />
      </StaggerItem>
      <StaggerItem
        index={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ArrowRight size={28} color={COLORS.TEXT} />
      </StaggerItem>
      <StaggerItem index={2}>
        <FlowNodeBox
          num="03"
          title="IF Node"
          sub="Order > $200?"
          accent={COLORS.ACCENT_2}
        />
      </StaggerItem>

      <StaggerItem
        index={3}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "90px",
        }}
      >
        <ArrowRight size={32} color={COLORS.ACCENT} strokeWidth={2.5} />
        <ArrowRight size={32} color={COLORS.ACCENT_2} strokeWidth={2.5} />
      </StaggerItem>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <StaggerItem index={3}>
          <FlowNodeBox
            num="04 // TRUE"
            title="Telegram VIP Alert"
            sub="Instant Notification"
            accent={COLORS.ACCENT}
            bg={COLORS.ACCENT}
            textColor={COLORS.BG}
          />
        </StaggerItem>
        <StaggerItem index={4}>
          <FlowNodeBox
            num="04 // FALSE"
            title="Confirmation Email"
            sub="Standard Reply"
            accent={COLORS.ACCENT_2}
            bg={COLORS.ACCENT_2}
            textColor={COLORS.BG}
          />
        </StaggerItem>
      </div>
    </div>
  </SlideContainer>
);

// ===========================================================================
// DAY 05: AI Workflows and RAG Applications in n8n (12 Slides)
// ===========================================================================

// Slide 45B: Day 5 Topic Roadmap (Day 05 Highlighted)
const Slide45B_D5Roadmap: Page = () => <CampRoadmap activeDay="05" />;

// Helper: Day 5 Module / Step Card
function D5ModuleCard({
  num,
  title,
  sub,
  icon: Icon,
  accent = COLORS.ACCENT,
}: {
  num: string;
  title: string;
  sub: string;
  icon: LucideIcon;
  accent?: string;
}) {
  return (
    <div
      style={{
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        borderTop: `3px solid ${accent}`,
        padding: "32px",
        height: "420px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: "24px",
          fontWeight: 800,
          color: accent,
        }}
      >
        {num}
      </span>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "18px 0",
          backgroundColor: COLORS.BG,
          border: `1px solid ${COLORS.BORDER}`,
        }}
      >
        <Icon size={88} strokeWidth={1.6} color={COLORS.TEXT} />
      </div>

      <div>
        <h3
          style={{
            margin: "0 0 6px 0",
            fontFamily: FONTS.heading,
            fontSize: "28px",
            fontWeight: 800,
          }}
        >
          {title}
        </h3>
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "15px",
            color: COLORS.MUTED,
          }}
        >
          {sub}
        </span>
      </div>
    </div>
  );
}

// Slide 46 (5.1): Title & Final Day Blueprint
const Slide46_D5Blueprint: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="AI CAMP // DAY 05"
      tagColor={COLORS.ACCENT}
      title="AI Agents, Workflows & Custom Memory."
      subtitle="Putting an LLM brain inside your automated pipelines."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <D5ModuleCard
          num="01"
          title="AI Nodes & Routing"
          sub="Structured JSON Output"
          icon={Bot}
          accent={COLORS.ACCENT}
        />
      </StaggerItem>
      <StaggerItem index={1}>
        <D5ModuleCard
          num="02"
          title="Smart Triage Pipelines"
          sub="Classify, Draft & Alert"
          icon={Sparkles}
          accent={COLORS.ACCENT_2}
        />
      </StaggerItem>
      <StaggerItem index={2}>
        <D5ModuleCard
          num="03"
          title="RAG & Custom Memory"
          sub="Vector Store Lookup"
          icon={Database}
          accent={COLORS.TEXT}
        />
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 47 (5.2): Rule Logic vs. AI Logic
const Slide47_D5RuleVsAI: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="5.1 // WHEN TO USE AI"
      tagColor={COLORS.ACCENT}
      title="Strict Rules vs. Human Judgment."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "32px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `2px solid ${COLORS.ACCENT_2}`,
            padding: "36px",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill
              color={COLORS.BG}
              bg={COLORS.ACCENT_2}
              border={COLORS.ACCENT_2}
            >
              DETERMINISTIC
            </MonoPill>
            <GitBranch size={40} color={COLORS.ACCENT_2} strokeWidth={2} />
          </div>

          <div>
            <h3
              style={{
                margin: "0 0 10px 0",
                fontFamily: FONTS.heading,
                fontSize: "40px",
                fontWeight: 800,
              }}
            >
              Standard IF Node
            </h3>
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: "21px",
                color: COLORS.MUTED,
              }}
            >
              Strict math and exact value matches.
            </span>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div
              style={{
                backgroundColor: COLORS.BG,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "16px 20px",
                fontFamily: FONTS.mono,
                fontSize: "21px",
                fontWeight: 700,
              }}
            >
              Order &gt; $200
            </div>
            <div
              style={{
                backgroundColor: COLORS.BG,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "16px 20px",
                fontFamily: FONTS.mono,
                fontSize: "21px",
                fontWeight: 700,
              }}
            >
              Status == &quot;Paid&quot;
            </div>
          </div>
        </div>
      </StaggerItem>

      <StaggerItem index={1}>
        <div
          style={{
            backgroundColor: COLORS.BG,
            border: `2px solid ${COLORS.ACCENT}`,
            padding: "36px",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            boxShadow: "0 12px 32px rgba(255, 59, 48, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill
              color={COLORS.BG}
              bg={COLORS.ACCENT}
              border={COLORS.ACCENT}
            >
              PROBABILISTIC
            </MonoPill>
            <Brain size={40} color={COLORS.ACCENT} strokeWidth={2} />
          </div>

          <div>
            <h3
              style={{
                margin: "0 0 10px 0",
                fontFamily: FONTS.heading,
                fontSize: "40px",
                fontWeight: 800,
              }}
            >
              AI LLM Node
            </h3>
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: "21px",
                color: COLORS.MUTED,
              }}
            >
              Understands messy human language.
            </span>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "12px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "15px",
                    fontWeight: 800,
                    color: COLORS.ACCENT,
                  }}
                >
                  SENTIMENT
                </span>
                <span
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: "15px",
                    color: COLORS.MUTED,
                    marginLeft: "10px",
                  }}
                >
                  Detect emotion
                </span>
              </div>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  fontWeight: 700,
                  color: COLORS.TEXT,
                }}
              >
                &quot;Damaged!&quot; → Angry
              </span>
            </div>

            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "12px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "15px",
                    fontWeight: 800,
                    color: COLORS.ACCENT,
                  }}
                >
                  SUMMARY
                </span>
                <span
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: "15px",
                    color: COLORS.MUTED,
                    marginLeft: "10px",
                  }}
                >
                  Shorten text
                </span>
              </div>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  fontWeight: 700,
                  color: COLORS.TEXT,
                }}
              >
                Long thread → 2 lines
              </span>
            </div>

            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "12px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: "15px",
                    fontWeight: 800,
                    color: COLORS.ACCENT,
                  }}
                >
                  INTENT
                </span>
                <span
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: "15px",
                    color: COLORS.MUTED,
                    marginLeft: "10px",
                  }}
                >
                  Find user goal
                </span>
              </div>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  fontWeight: 700,
                  color: COLORS.TEXT,
                }}
              >
                &quot;Where is box?&quot; → Track
              </span>
            </div>
          </div>
        </div>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Helper: Sub-node port card for Slide 48
function SubNodePort({
  port,
  title,
  sub,
  icon: Icon,
  accent,
}: {
  port: string;
  title: string;
  sub: string;
  icon: LucideIcon;
  accent: string;
}) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ width: "2px", height: "42px", backgroundColor: accent }} />
      <div
        style={{
          width: "100%",
          backgroundColor: COLORS.BG,
          border: `1px solid ${COLORS.BORDER}`,
          borderTop: `3px solid ${accent}`,
          padding: "24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: "14px",
              fontWeight: 700,
              color: accent,
            }}
          >
            {port}
          </span>
          <Icon size={28} color={accent} strokeWidth={2} />
        </div>
        <h4
          style={{
            margin: 0,
            fontFamily: FONTS.heading,
            fontSize: "24px",
            fontWeight: 800,
          }}
        >
          {title}
        </h4>
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "16px",
            color: COLORS.MUTED,
          }}
        >
          {sub}
        </span>
      </div>
    </div>
  );
}

// Slide 48 (5.3): Wiring the AI Node in n8n
const Slide48_D5NodeAnatomy: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="5.1 // NODE ANATOMY"
      tagColor={COLORS.ACCENT}
      title="One Node. Three Connected Parts."
      subtitle="Connecting your model, output parser, and external tools."
    />

    <div
      style={{
        width: "100%",
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        padding: "36px 48px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Parent Node */}
      <StaggerItem index={0} style={{ width: "680px" }}>
        <div
          style={{
            backgroundColor: COLORS.TEXT,
            color: COLORS.BG,
            padding: "28px 36px",
            border: `2px solid ${COLORS.TEXT}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <Bot size={44} color={COLORS.ACCENT} strokeWidth={2} />
            <div>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  color: COLORS.ACCENT,
                  fontWeight: 700,
                  display: "block",
                }}
              >
                PARENT N8N NODE
              </span>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "30px",
                  fontWeight: 800,
                }}
              >
                AI Agent Node
              </span>
            </div>
          </div>
          <MonoPill color={COLORS.TEXT} bg={COLORS.BG} border={COLORS.BG}>
            3 PORTS
          </MonoPill>
        </div>
      </StaggerItem>

      {/* Connector Horizontal Bus */}
      <div
        style={{
          width: "68%",
          height: "2px",
          backgroundColor: COLORS.BORDER,
          marginTop: "24px",
        }}
      />

      {/* 3 Sub-Node Ports */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          width: "100%",
        }}
      >
        <StaggerItem index={1}>
          <SubNodePort
            port="SUB-PORT 01"
            title="Chat Model"
            sub="Gemini / Groq LLM"
            icon={Cpu}
            accent={COLORS.ACCENT}
          />
        </StaggerItem>
        <StaggerItem index={2}>
          <SubNodePort
            port="SUB-PORT 02"
            title="Output Parser"
            sub="Strict JSON Schema"
            icon={Braces}
            accent={COLORS.ACCENT_2}
          />
        </StaggerItem>
        <StaggerItem index={3}>
          <SubNodePort
            port="SUB-PORT 03"
            title="Tools"
            sub="Sheets, Gmail & Search"
            icon={Hammer}
            accent={COLORS.TEXT}
          />
        </StaggerItem>
      </div>
    </div>
  </SlideContainer>
);

// Slide 49 (5.4): Day 2 Payoff: Structured Output Parser
const Slide49_D5StructuredJson: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="5.1 // CLEAN DATA OUTPUT"
      tagColor={COLORS.ACCENT}
      title="Force the AI to Speak JSON."
      subtitle="So the next node in your workflow never breaks."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 220px 1.25fr",
        alignItems: "center",
        gap: "20px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <SwissCard
          style={{
            height: "410px",
            padding: "36px",
            justifyContent: "space-between",
          }}
        >
          <MonoPill color={COLORS.MUTED} bg={COLORS.BG} border={COLORS.BORDER}>
            INCOMING CUSTOMER EMAIL
          </MonoPill>
          <p
            style={{
              margin: 0,
              fontFamily: FONTS.heading,
              fontSize: "30px",
              fontWeight: 700,
              lineHeight: 1.4,
              color: COLORS.TEXT,
            }}
          >
            &ldquo;Hey! My Dune Hoodie arrived with a torn sleeve, I want a
            replacement ASAP!&rdquo;
          </p>
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: "15px",
              color: COLORS.MUTED,
            }}
          >
            UNSTRUCTURED RAW TEXT
          </span>
        </SwissCard>
      </StaggerItem>

      <StaggerItem
        index={1}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <MonoPill color={COLORS.BG} bg={COLORS.TEXT} border={COLORS.TEXT}>
          AI NODE + PARSER
        </MonoPill>
        <ArrowRight size={44} color={COLORS.ACCENT} strokeWidth={2.5} />
      </StaggerItem>

      <StaggerItem index={2}>
        <SwissCard
          style={{
            height: "410px",
            padding: "36px",
            justifyContent: "space-between",
            backgroundColor: COLORS.TEXT,
            color: COLORS.BG,
          }}
        >
          <MonoPill color={COLORS.BG} bg="transparent" border="#3F3F46">
            STRICT JSON OUTPUT CARD
          </MonoPill>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              fontFamily: FONTS.mono,
              fontSize: "21px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ color: "#A1A1AA" }}>&quot;category&quot;:</span>
              <span
                style={{
                  padding: "6px 14px",
                  backgroundColor: COLORS.ACCENT,
                  color: COLORS.BG,
                  fontWeight: 700,
                }}
              >
                &quot;defect_refund&quot;
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ color: "#A1A1AA" }}>&quot;urgency&quot;:</span>
              <span
                style={{
                  padding: "6px 14px",
                  backgroundColor: COLORS.ACCENT_2,
                  color: COLORS.BG,
                  fontWeight: 700,
                }}
              >
                &quot;high&quot;
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ color: "#A1A1AA" }}>&quot;draft_reply&quot;:</span>
              <span
                style={{
                  padding: "6px 14px",
                  backgroundColor: "#27272A",
                  color: COLORS.BG,
                  border: "1px solid #52525B",
                }}
              >
                &quot;We are shipping a replacement...&quot;
              </span>
            </div>
          </div>
        </SwissCard>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 50 (5.5): Build 1: Smart Customer Triage Pipeline
const Slide50_D5TriagePipeline: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="5.2 // SMART AUTOMATION"
      tagColor={COLORS.ACCENT}
      title="Read, Classify, Draft, and Route."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 48px 1fr 48px 1fr 56px 1.25fr",
        alignItems: "center",
        gap: "8px",
        width: "100%",
        padding: "40px 36px",
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        boxSizing: "border-box",
      }}
    >
      <StaggerItem index={0}>
        <FlowNodeBox
          num="01 // TRIGGER"
          title="Customer Form / Email"
          sub="Incoming Message"
          accent={COLORS.TEXT}
        />
      </StaggerItem>
      <StaggerItem
        index={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ArrowRight size={28} color={COLORS.TEXT} />
      </StaggerItem>
      <StaggerItem index={1}>
        <FlowNodeBox
          num="02 // AI BRAIN"
          title="Classifier & Draft"
          sub="JSON + Reply"
          accent={COLORS.ACCENT_2}
        />
      </StaggerItem>
      <StaggerItem
        index={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ArrowRight size={28} color={COLORS.TEXT} />
      </StaggerItem>
      <StaggerItem index={2}>
        <FlowNodeBox
          num="03 // ROUTE"
          title="Switch Node"
          sub="By Category"
          accent={COLORS.TEXT}
        />
      </StaggerItem>

      <StaggerItem
        index={3}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "90px",
        }}
      >
        <ArrowRight size={32} color={COLORS.ACCENT_2} strokeWidth={2.5} />
        <ArrowRight size={32} color={COLORS.ACCENT} strokeWidth={2.5} />
      </StaggerItem>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <StaggerItem index={3}>
          <FlowNodeBox
            num="BRANCH A // VIP & SALES"
            title="Send Instant Auto-Reply"
            sub="Automated Gmail Response"
            accent={COLORS.ACCENT_2}
            bg={COLORS.ACCENT_2}
            textColor={COLORS.BG}
          />
        </StaggerItem>
        <StaggerItem index={4}>
          <FlowNodeBox
            num="BRANCH B // URGENT DEFECT"
            title="Alert Support Team"
            sub="Instant Telegram Alert"
            accent={COLORS.ACCENT}
            bg={COLORS.ACCENT}
            textColor={COLORS.BG}
          />
        </StaggerItem>
      </div>
    </div>
  </SlideContainer>
);

// Slide 51 (5.6): The Problem with Standard LLMs
const Slide51_D5RagProblem: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="5.3 // WHY WE NEED RAG"
      tagColor={COLORS.ACCENT}
      title="AI Doesn't Know Your Private Data."
      subtitle="And pasting 500 PDFs breaks the Context Window."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "32px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: "44px",
            height: "430px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill
              color={COLORS.MUTED}
              bg={COLORS.BG}
              border={COLORS.BORDER}
            >
              LIMITATION 01
            </MonoPill>
            <Lock size={44} color={COLORS.MUTED} strokeWidth={1.8} />
          </div>

          <h3
            style={{
              margin: 0,
              fontFamily: FONTS.heading,
              fontSize: "42px",
              fontWeight: 800,
              color: COLORS.TEXT,
            }}
          >
            Zero Private Knowledge
          </h3>

          <p
            style={{
              margin: 0,
              fontFamily: FONTS.body,
              fontSize: "24px",
              lineHeight: 1.45,
              color: COLORS.MUTED,
            }}
          >
            The LLM does not know your store return policy, live inventory, or
            internal PDFs.
          </p>
        </div>
      </StaggerItem>

      <StaggerItem index={1}>
        <div
          style={{
            backgroundColor: "#FFF5F5",
            border: `2px solid ${COLORS.ACCENT}`,
            padding: "44px",
            height: "430px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill
              color={COLORS.BG}
              bg={COLORS.ACCENT}
              border={COLORS.ACCENT}
            >
              LIMITATION 02
            </MonoPill>
            <AlertOctagon size={44} color={COLORS.ACCENT} strokeWidth={1.8} />
          </div>

          <h3
            style={{
              margin: 0,
              fontFamily: FONTS.heading,
              fontSize: "42px",
              fontWeight: 800,
              color: COLORS.ACCENT,
            }}
          >
            Context Overload
          </h3>

          <p
            style={{
              margin: 0,
              fontFamily: FONTS.body,
              fontSize: "24px",
              lineHeight: 1.45,
              color: COLORS.TEXT,
            }}
          >
            Stuffing entire databases into one prompt causes token cutoffs and
            hallucinations.
          </p>
        </div>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 52 (5.7): What Is RAG? (The Open-Book Exam)
function VisualNodeIcon({
  icon: Icon,
  label,
  border,
  bg = COLORS.BG,
  color = COLORS.TEXT,
}: {
  icon: LucideIcon;
  label: string;
  border: string;
  bg?: string;
  color?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <div
        style={{
          width: "76px",
          height: "76px",
          backgroundColor: bg,
          border: `2px solid ${border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={36} color={color} strokeWidth={2} />
      </div>
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: "13px",
          fontWeight: 700,
          color: COLORS.MUTED,
        }}
      >
        {label}
      </span>
    </div>
  );
}

const Slide52_D5RagExam: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="5.3 // RAG DEMYSTIFIED"
      tagColor={COLORS.ACCENT}
      title="Closed-Book Guessing vs. Open-Book Lookup."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "32px",
        width: "100%",
      }}
    >
      <StaggerItem index={0}>
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: "40px",
            height: "510px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                backgroundColor: COLORS.BG,
                border: `1px solid ${COLORS.BORDER}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Book size={32} color={COLORS.MUTED} strokeWidth={1.8} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  color: COLORS.MUTED,
                  fontWeight: 700,
                  display: "block",
                }}
              >
                CLOSED-BOOK EXAM
              </span>
              <h3
                style={{
                  margin: 0,
                  fontFamily: FONTS.heading,
                  fontSize: "34px",
                  fontWeight: 800,
                }}
              >
                Standard LLM
              </h3>
            </div>
          </div>

          {/* Visual Drawing: LLM disconnected from Database */}
          <div
            style={{
              backgroundColor: COLORS.BG,
              border: `1px solid ${COLORS.BORDER}`,
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <VisualNodeIcon
                icon={MessageSquare}
                label="QUERY"
                border={COLORS.BORDER}
                color={COLORS.TEXT}
              />
              <ArrowRight size={24} color={COLORS.MUTED} />
              <VisualNodeIcon
                icon={Brain}
                label="LLM"
                border={COLORS.MUTED}
                color={COLORS.TEXT}
              />
              <ArrowRight size={24} color={COLORS.ACCENT} />
              <VisualNodeIcon
                icon={AlertTriangle}
                label="GUESS"
                border={COLORS.ACCENT}
                bg="#FFF0EE"
                color={COLORS.ACCENT}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 14px",
                border: `1px dashed ${COLORS.BORDER}`,
                color: COLORS.MUTED,
              }}
            >
              <Lock size={16} color={COLORS.MUTED} />
              <Database size={18} color={COLORS.MUTED} />
              <X size={16} color={COLORS.ACCENT} />
            </div>
          </div>

          <MonoPill color={COLORS.ACCENT} bg="#FFF0EE" border={COLORS.ACCENT}>
            HIGH HALLUCINATION RISK
          </MonoPill>
        </div>
      </StaggerItem>

      <StaggerItem index={1}>
        <div
          style={{
            backgroundColor: COLORS.BG,
            border: `2px solid ${COLORS.ACCENT_2}`,
            padding: "40px",
            height: "510px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            boxShadow: "0 12px 32px rgba(37, 99, 235, 0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                backgroundColor: COLORS.ACCENT_2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <BookOpen size={26} color={COLORS.BG} strokeWidth={2} />
              <Search size={20} color={COLORS.BG} strokeWidth={2.2} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  color: COLORS.ACCENT_2,
                  fontWeight: 700,
                  display: "block",
                }}
              >
                OPEN-BOOK LOOKUP
              </span>
              <h3
                style={{
                  margin: 0,
                  fontFamily: FONTS.heading,
                  fontSize: "34px",
                  fontWeight: 800,
                }}
              >
                RAG System
              </h3>
            </div>
          </div>

          {/* Visual Drawing: LLM pulls live from Database */}
          <div
            style={{
              backgroundColor: COLORS.SURFACE,
              border: `1px solid ${COLORS.BORDER}`,
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <VisualNodeIcon
                icon={MessageSquare}
                label="QUERY"
                border={COLORS.TEXT}
                color={COLORS.TEXT}
              />
              <ArrowRight size={24} color={COLORS.ACCENT_2} />
              <VisualNodeIcon
                icon={Brain}
                label="LLM"
                border={COLORS.ACCENT_2}
                bg={COLORS.ACCENT_2}
                color={COLORS.BG}
              />
              <ArrowRight size={24} color={COLORS.ACCENT_2} />
              <VisualNodeIcon
                icon={CheckCircle}
                label="FACT"
                border={COLORS.TEXT}
                bg={COLORS.TEXT}
                color={COLORS.BG}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 18px",
                backgroundColor: COLORS.BG,
                border: `2px solid ${COLORS.ACCENT_2}`,
              }}
            >
              <Search size={18} color={COLORS.ACCENT_2} />
              <ArrowRight
                size={16}
                color={COLORS.ACCENT_2}
                style={{ transform: "rotate(-90deg)" }}
              />
              <Database size={20} color={COLORS.ACCENT_2} />
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "13px",
                  fontWeight: 800,
                  color: COLORS.ACCENT_2,
                }}
              >
                VECTOR DB
              </span>
            </div>
          </div>

          <MonoPill
            color={COLORS.BG}
            bg={COLORS.ACCENT_2}
            border={COLORS.ACCENT_2}
          >
            100% GROUNDED IN FACTS
          </MonoPill>
        </div>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Helper: Ingestion Step Card for Slide 53
function IngestionStepCard({
  num,
  title,
  sub,
  icon: Icon,
  accent,
}: {
  num: string;
  title: string;
  sub: string;
  icon: LucideIcon;
  accent: string;
}) {
  return (
    <div
      style={{
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        borderTop: `3px solid ${accent}`,
        padding: "24px",
        height: "340px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: "20px",
          fontWeight: 800,
          color: accent,
        }}
      >
        {num}
      </span>

      <div
        style={{
          flex: 1,
          margin: "14px 0",
          backgroundColor: COLORS.BG,
          border: `1px solid ${COLORS.BORDER}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={64} strokeWidth={1.6} color={accent} />
      </div>

      <div>
        <h3
          style={{
            margin: "0 0 4px 0",
            fontFamily: FONTS.heading,
            fontSize: "26px",
            fontWeight: 800,
          }}
        >
          {title}
        </h3>
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "14px",
            color: COLORS.MUTED,
          }}
        >
          {sub}
        </span>
      </div>
    </div>
  );
}

// Slide 53 (5.8): Pipeline 1: Data Ingestion (Storing Knowledge)
const Slide53_D5Ingestion: Page = () => {
  const isActive = useIsActivePage();
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setPulse(false);
      return;
    }
    const id = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1350);
    return () => clearInterval(id);
  }, [isActive]);

  const demoBoxStyle: CSSProperties = {
    marginTop: "14px",
    height: "124px",
    backgroundColor: COLORS.BG,
    border: `1px solid ${COLORS.BORDER}`,
    padding: "14px 16px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
  };

  return (
    <SlideContainer>
      <SlideHeader
        tag="5.3 // STEP 1: INGESTION"
        tagColor={COLORS.ACCENT}
        title="Slice the Documents. Store in Memory."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 32px 1fr 32px 1fr 32px 1fr",
          alignItems: "start",
          gap: "8px",
          width: "100%",
        }}
      >
        {/* 01 Load File + Animation */}
        <StaggerItem index={0}>
          <IngestionStepCard
            num="01"
            title="Load File"
            sub="PDF / Docs / Sheets"
            icon={FileText}
            accent={COLORS.TEXT}
          />
          <div style={demoBoxStyle}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "12px",
                  fontWeight: 700,
                  color: COLORS.MUTED,
                }}
              >
                READ FILE
              </span>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "12px",
                  fontWeight: 700,
                  color: COLORS.TEXT,
                }}
              >
                {pulse ? "12 PAGES" : "LOADING..."}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 12px",
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                transform: pulse ? "translateX(0px)" : "translateX(-14px)",
                opacity: pulse ? 1 : 0.6,
                transition:
                  "transform 520ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease",
              }}
            >
              <FileText size={18} color={COLORS.TEXT} />
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                brand-faq.pdf
              </span>
            </div>
          </div>
        </StaggerItem>

        <div
          style={{
            height: "340px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowRight size={26} color={COLORS.MUTED} />
        </div>

        {/* 02 Chunk Text + Animation */}
        <StaggerItem index={1}>
          <IngestionStepCard
            num="02"
            title="Chunk Text"
            sub="Slice into paragraphs"
            icon={Scissors}
            accent={COLORS.ACCENT}
          />
          <div style={demoBoxStyle}>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: "12px",
                fontWeight: 700,
                color: COLORS.ACCENT,
                marginBottom: "10px",
              }}
            >
              {pulse ? "SPLIT INTO 3 CHUNKS" : "RAW DOCUMENT"}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: pulse ? "8px" : "0px",
                transition: "gap 520ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div
                style={{
                  backgroundColor: pulse ? "#FFF0EE" : COLORS.SURFACE,
                  border: `1px solid ${pulse ? COLORS.ACCENT : COLORS.BORDER}`,
                  padding: "8px 4px",
                  fontFamily: FONTS.mono,
                  fontSize: "12px",
                  fontWeight: 700,
                  textAlign: "center",
                  transition: "all 450ms ease",
                }}
              >
                C1
              </div>
              <div
                style={{
                  backgroundColor: pulse ? "#FFF0EE" : COLORS.SURFACE,
                  border: `1px solid ${pulse ? COLORS.ACCENT : COLORS.BORDER}`,
                  padding: "8px 4px",
                  fontFamily: FONTS.mono,
                  fontSize: "12px",
                  fontWeight: 700,
                  textAlign: "center",
                  transition: "all 450ms ease",
                }}
              >
                C2
              </div>
              <div
                style={{
                  backgroundColor: pulse ? "#FFF0EE" : COLORS.SURFACE,
                  border: `1px solid ${pulse ? COLORS.ACCENT : COLORS.BORDER}`,
                  padding: "8px 4px",
                  fontFamily: FONTS.mono,
                  fontSize: "12px",
                  fontWeight: 700,
                  textAlign: "center",
                  transition: "all 450ms ease",
                }}
              >
                C3
              </div>
            </div>
          </div>
        </StaggerItem>

        <div
          style={{
            height: "340px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowRight size={26} color={COLORS.MUTED} />
        </div>

        {/* 03 Embed + Animation */}
        <StaggerItem index={2}>
          <IngestionStepCard
            num="03"
            title="Embed"
            sub="Convert to numbers"
            icon={Binary}
            accent={COLORS.ACCENT_2}
          />
          <div style={demoBoxStyle}>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: "12px",
                fontWeight: 700,
                color: COLORS.ACCENT_2,
                marginBottom: "10px",
              }}
            >
              {pulse ? "VECTOR NUMBERS" : "TEXT CHUNK"}
            </div>
            <div
              style={{
                padding: "10px 12px",
                backgroundColor: pulse ? COLORS.ACCENT_2 : COLORS.SURFACE,
                color: pulse ? COLORS.BG : COLORS.TEXT,
                fontFamily: FONTS.mono,
                fontSize: "14px",
                fontWeight: 700,
                textAlign: "center",
                transition: "background-color 420ms ease, color 420ms ease",
              }}
            >
              {pulse ? "[0.82, -0.14, 0.91]" : '"Wash cold only"'}
            </div>
          </div>
        </StaggerItem>

        <div
          style={{
            height: "340px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowRight size={26} color={COLORS.MUTED} />
        </div>

        {/* 04 Vector Store + Animation */}
        <StaggerItem index={3}>
          <IngestionStepCard
            num="04"
            title="Vector Store"
            sub="Searchable memory"
            icon={Database}
            accent={COLORS.TEXT}
          />
          <div style={demoBoxStyle}>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: "12px",
                fontWeight: 700,
                color: COLORS.TEXT,
                marginBottom: "8px",
              }}
            >
              {pulse ? "3 VECTORS INDEXED" : "SAVING TO DB..."}
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <div
                style={{
                  height: "14px",
                  backgroundColor: COLORS.TEXT,
                  width: pulse ? "100%" : "35%",
                  transition: "width 480ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
              <div
                style={{
                  height: "14px",
                  backgroundColor: COLORS.ACCENT_2,
                  width: pulse ? "100%" : "20%",
                  transition: "width 620ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
              <div
                style={{
                  height: "14px",
                  backgroundColor: COLORS.ACCENT,
                  width: pulse ? "100%" : "10%",
                  transition: "width 760ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
            </div>
          </div>
        </StaggerItem>
      </div>
    </SlideContainer>
  );
};

// Slide 54 (5.9): Pipeline 2: Retrieval & Chat (Answering Live)
const Slide54_D5Retrieval: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="5.3 // STEP 2: RETRIEVAL"
      tagColor={COLORS.ACCENT}
      title="Search First. Generate Second."
    />

    <div
      style={{
        width: "100%",
        backgroundColor: COLORS.SURFACE,
        border: `1px solid ${COLORS.BORDER}`,
        padding: "32px",
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "1fr 44px 1.25fr 44px 1fr",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <StaggerItem index={0}>
        <div
          style={{
            backgroundColor: COLORS.BG,
            border: `1px solid ${COLORS.BORDER}`,
            borderTop: `3px solid ${COLORS.TEXT}`,
            padding: "28px",
            height: "440px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: "15px",
              fontWeight: 700,
              color: COLORS.TEXT,
            }}
          >
            01 // USER QUESTION
          </span>
          <p
            style={{
              margin: 0,
              fontFamily: FONTS.heading,
              fontSize: "26px",
              fontWeight: 700,
              lineHeight: 1.35,
            }}
          >
            &ldquo;What is your wash policy for the Dune Hoodie?&rdquo;
          </p>
          <MonoPill
            color={COLORS.MUTED}
            bg={COLORS.SURFACE}
            border={COLORS.BORDER}
          >
            LIVE CHAT QUERY
          </MonoPill>
        </div>
      </StaggerItem>

      <StaggerItem
        index={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ArrowRight size={34} color={COLORS.ACCENT_2} strokeWidth={2.5} />
      </StaggerItem>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <StaggerItem index={1}>
          <div
            style={{
              backgroundColor: COLORS.BG,
              border: `2px solid ${COLORS.ACCENT_2}`,
              padding: "22px 24px",
              height: "210px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  fontWeight: 700,
                  color: COLORS.ACCENT_2,
                }}
              >
                02 // VECTOR LOOKUP
              </span>
              <Search size={22} color={COLORS.ACCENT_2} />
            </div>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: "21px",
                fontWeight: 800,
              }}
            >
              Pulls exact Brand FAQ chunk
            </div>
            <div
              style={{
                backgroundColor: COLORS.SURFACE,
                border: `1px solid ${COLORS.BORDER}`,
                padding: "10px 12px",
                fontFamily: FONTS.mono,
                fontSize: "14px",
                color: COLORS.TEXT,
                lineHeight: 1.35,
              }}
            >
              FAQ #4: &quot;Machine wash cold, inside out. Hang dry only.&quot;
            </div>
          </div>
        </StaggerItem>

        <StaggerItem index={2}>
          <div
            style={{
              backgroundColor: COLORS.BG,
              border: `2px solid ${COLORS.ACCENT}`,
              padding: "22px 24px",
              height: "210px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  fontWeight: 700,
                  color: COLORS.ACCENT,
                }}
              >
                03 // LLM BRAIN
              </span>
              <Sparkles size={22} color={COLORS.ACCENT} />
            </div>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: "21px",
                fontWeight: 800,
              }}
            >
              Combines Question + Context
            </div>
            <div
              style={{
                backgroundColor: "#FFF5F5",
                border: `1px solid ${COLORS.ACCENT}`,
                padding: "10px 12px",
                fontFamily: FONTS.mono,
                fontSize: "14px",
                color: COLORS.TEXT,
                lineHeight: 1.35,
              }}
            >
              &quot;Answer user question using ONLY FAQ #4 above.&quot;
            </div>
          </div>
        </StaggerItem>
      </div>

      <StaggerItem
        index={3}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ArrowRight size={34} color={COLORS.ACCENT} strokeWidth={2.5} />
      </StaggerItem>

      <StaggerItem index={3}>
        <div
          style={{
            backgroundColor: COLORS.TEXT,
            color: COLORS.BG,
            padding: "28px",
            height: "440px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "15px",
                fontWeight: 700,
                color: COLORS.ACCENT,
              }}
            >
              04 // GROUNDED ANSWER
            </span>
            <CheckCircle size={26} color={COLORS.ACCENT} />
          </div>
          <p
            style={{
              margin: 0,
              fontFamily: FONTS.heading,
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: 1.35,
            }}
          >
            &ldquo;Wash your Dune Hoodie cold, inside out, and hang dry
            only.&rdquo;
          </p>
          <MonoPill color={COLORS.TEXT} bg={COLORS.BG} border={COLORS.BG}>
            ZERO HALLUCINATION
          </MonoPill>
        </div>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 55 (5.10): Live Build Transition
const Slide55_D5LiveBuild: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="5.4 // FINAL LAB"
      tagColor={COLORS.ACCENT}
      title="Let's Build Our Brand AI Agent & RAG Bot."
      subtitle="Connecting our Day 3 Clothing Brand FAQ to a live n8n chat agent."
    />

    <StaggerItem index={0}>
      <div
        style={{
          width: "100%",
          backgroundColor: COLORS.TEXT,
          color: COLORS.BG,
          padding: "48px 56px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MonoPill color={COLORS.BG} bg={COLORS.ACCENT} border={COLORS.ACCENT}>
            <Radio size={16} />
            LIVE RAG BUILD
          </MonoPill>
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: "16px",
              color: "#A1A1AA",
            }}
          >
            N8N // RIMAL KINETIC FAQ AGENT
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 64px 1fr 64px 1fr",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              border: "1px solid #3F3F46",
              backgroundColor: "#18181B",
              padding: "28px",
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <FileText size={40} color={COLORS.ACCENT} />
            <div>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "13px",
                  color: "#A1A1AA",
                  display: "block",
                }}
              >
                SOURCE
              </span>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "24px",
                  fontWeight: 800,
                }}
              >
                Google Drive PDF
              </span>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <ArrowRight size={36} color={COLORS.ACCENT} strokeWidth={2.5} />
          </div>

          <div
            style={{
              border: "1px solid #3F3F46",
              backgroundColor: "#18181B",
              padding: "28px",
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <Database size={40} color={COLORS.ACCENT_2} />
            <div>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "13px",
                  color: "#A1A1AA",
                  display: "block",
                }}
              >
                MEMORY
              </span>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "24px",
                  fontWeight: 800,
                }}
              >
                n8n Vector Store
              </span>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <ArrowRight size={36} color={COLORS.ACCENT} strokeWidth={2.5} />
          </div>

          <div
            style={{
              border: `2px solid ${COLORS.ACCENT}`,
              backgroundColor: "#18181B",
              padding: "28px",
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <Bot size={40} color={COLORS.BG} />
            <div>
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "13px",
                  color: COLORS.ACCENT,
                  display: "block",
                }}
              >
                OUTPUT
              </span>
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: "24px",
                  fontWeight: 800,
                }}
              >
                AI Chat Agent
              </span>
            </div>
          </div>
        </div>
      </div>
    </StaggerItem>
  </SlideContainer>
);

// Slide 56 (5.11): Camp Graduation & What's Next (Domain Mastery & Automation)
const Slide56_D5Graduation: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="AI CAMP // GRADUATION"
      tagColor={COLORS.ACCENT}
      title="Multiply Your Craft With AI Systems."
      subtitle="Where to go from here."
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
        width: "100%",
        alignItems: "end",
      }}
    >
      <StaggerItem index={0}>
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: "32px",
            height: "320px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "22px",
                fontWeight: 800,
                color: COLORS.MUTED,
              }}
            >
              STEP 01
            </span>
            <CheckCircle size={28} color={COLORS.ACCENT_2} />
          </div>
          <div>
            <h3
              style={{
                margin: "0 0 8px 0",
                fontFamily: FONTS.heading,
                fontSize: "30px",
                fontWeight: 800,
              }}
            >
              Prompt & Create
            </h3>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "16px",
                color: COLORS.MUTED,
              }}
            >
              Day 1–3: LLMs, JSON, Lovable UI
            </span>
          </div>
        </div>
      </StaggerItem>

      <StaggerItem index={1}>
        <div
          style={{
            backgroundColor: COLORS.SURFACE,
            border: `1px solid ${COLORS.BORDER}`,
            padding: "32px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "22px",
                fontWeight: 800,
                color: COLORS.MUTED,
              }}
            >
              STEP 02
            </span>
            <CheckCircle size={28} color={COLORS.ACCENT_2} />
          </div>
          <div>
            <h3
              style={{
                margin: "0 0 8px 0",
                fontFamily: FONTS.heading,
                fontSize: "30px",
                fontWeight: 800,
              }}
            >
              Automate Logic
            </h3>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: "16px",
                color: COLORS.MUTED,
              }}
            >
              Day 4–5: Triggers, Routing, RAG Agents
            </span>
          </div>
        </div>
      </StaggerItem>

      <StaggerItem index={2}>
        <div
          style={{
            backgroundColor: COLORS.ACCENT,
            color: COLORS.BG,
            padding: "36px",
            height: "490px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            boxShadow: "0 16px 36px rgba(255, 59, 48, 0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MonoPill color={COLORS.ACCENT} bg={COLORS.BG} border={COLORS.BG}>
              STEP 03 // NEXT LEVEL
            </MonoPill>
            <TrendingUp size={34} color={COLORS.BG} />
          </div>
          <div>
            <h3
              style={{
                margin: "0 0 12px 0",
                fontFamily: FONTS.heading,
                fontSize: "34px",
                fontWeight: 800,
              }}
            >
              Lead Your Domain
            </h3>
            <p
              style={{
                margin: 0,
                fontFamily: FONTS.body,
                fontSize: "20px",
                lineHeight: 1.4,
                color: "#FFF0EE",
              }}
            >
              Become an expert in your field and build deeper automations
              tailored to your industry.
            </p>
          </div>
        </div>
      </StaggerItem>
    </div>
  </SlideContainer>
);

// Slide 57 (5.12): Closing Quote & Thank You
const Slide57_D5Closing: Page = () => (
  <SlideContainer>
    <SlideHeader
      tag="AI CAMP // THANK YOU"
      tagColor={COLORS.ACCENT}
      title="Thank You for Building With Us."
    />

    <StaggerItem index={0}>
      <div
        style={{
          width: "100%",
          backgroundColor: COLORS.TEXT,
          color: COLORS.BG,
          borderTop: `4px solid ${COLORS.ACCENT}`,
          padding: "56px 64px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "48px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: FONTS.heading,
            fontSize: "54px",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: COLORS.BG,
            maxWidth: "1380px",
          }}
        >
          &ldquo;The best way to predict the future is to invent it.&rdquo;
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MonoPill color={COLORS.BG} bg={COLORS.ACCENT} border={COLORS.ACCENT}>
            ALAN KAY
          </MonoPill>
        </div>
      </div>
    </StaggerItem>
  </SlideContainer>
);

// ===========================================================================
// Speaker Notes & Metadata (61 Slides Total)
// ===========================================================================

export const notes: string[] = [
  // 1: Main Title (Roadmap neutral)
  "Welcome to AI Camp. Here is our complete 5-day architectural roadmap from simple prompting to autonomous production systems.",

  // 2: Instructor Introduction
  "Introduce yourself, your background building LLM systems, n8n pipelines, and RAG agents, and what students can expect from the week.",

  // 2: Camp Deliverables
  "Before we begin Day 1, review the four concrete products you will build and deploy into production by the end of this week.",

  // 3: Audience Filter
  "Set expectations early: no theoretical math or get-rich schemes. We focus entirely on production systems for builders and operators.",

  // 4: Day 1 Topic Roadmap
  "Today we begin Day 1: Mindset & Leverage. Notice our highlighted position on the 5-day track.",

  // 5: Day 1 Outcomes
  "Here are today’s four key outcomes in simplified technical terms: compute limits, personal leverage, revenue models, and value-based arbitrage pricing.",

  // 6: Leaders
  "Four industry leaders control global compute: Altman, Huang, Amodei, and Pichai. We operate at the application layer above them.",

  // 7: Physical Scale & Hardware Spending
  "Trillions in global capital are pouring into AI infrastructure: enterprise GPUs surged past $40,000, high-bandwidth RAM is sold out for 18 months, and chipmakers like NVIDIA and TSMC are commanding historic 75% gross margins. This unprecedented spending proves AI is the most critical modern asset.",

  // 8: Leverage Equation & Iron Triangle
  "Classical engineering forced you to pick two between speed, cost, and quality. Autonomous AI pipelines eliminate this constraint: one builder produces high-fidelity deliverables in 3 hours with near-zero marginal cost.",

  // 9: Mindset
  "Stop using single chat prompts for individual emails, images, and functions. Build autonomous pipelines like automated content engines and lead-routing webhooks that run 24 hours a day without you.",

  // 10: Revenue Models
  "Four practical revenue models: freelance delivery arbitrage, B2B workflow systems, internal enterprise cost reduction, and digital micro-SaaS products.",

  // 11: Arbitrage Margin
  "The client pays $1,500 for the finished commercial outcome. Their commercial value is identical whether it took 40 hours or 4 hours. By delivering in 4 hours with AI, you capture an 85% profit margin.",

  // 12: Live Demo Transition
  "Switch screens now to examine our three live camp software assets: the brand studio system, the Lovable web application, and the autonomous n8n agent backend.",

  // 13: Day 2 Topic Roadmap
  "Welcome to Day 2: LLM Mechanics and Prompt Engineering. Day 2 is highlighted on our 5-day track.",

  // 14: Day 2 Outcomes
  "Today’s four technical outcomes: next-token prediction, token slicing, memory limits, and our 5-part prompt engineering formula.",

  // 15: Next-Token Prediction
  "Models do not think; they calculate probability distributions. Cairo receives a 94% probability weight for the next token.",

  // 16: Tokens Animated
  'Models slice text into tokens via Byte-Pair Encoding. The phrase "Hello my name is Eyad" is 5 words but 6 tokens because rare words and names split into sub-words.',

  // 17: Context Window Animated
  "The context window functions like RAM. As conversation turns accumulate, memory fills up and the model silently drops earlier instructions.",

  // 18: Hallucinations
  "Language models optimize for linguistic plausibility rather than factual accuracy. This causes fabricated legal citations, fake software APIs, and false biographies.",

  // 19: Vague vs Spec
  "Vague prompts yield generic text. Engineering specifications with clear instructions yield production deliverables on the first pass.",

  // 20: Prompt Formula
  "Memorize the 5-part prompt formula: Role, Context, Task, Instructions, and Format. Define all five parts in every prompt.",

  // 21: Anatomy Fashion Campaign
  "Here is the live anatomy of an exact prompt for a luxury fashion marketing campaign: Role, Context, Task, Instructions, and Format each perform a specific job.",

  // 22: Vocabulary Multi-Domain
  "Technical domain vocabulary across fashion, software architecture, and cinematography unlocks exact results. Professional terms eliminate generic output.",

  // 22B (Section 2.4.1): Answer Machine vs. Personal Tutor
  "Do not use AI only to copy answers. Ask it to explain step by step and quiz you so you build real domain mastery.",

  // 22C (Section 2.4.2): Simple Analogies (3 Levels)
  "Break down hard topics in three levels: start with an everyday analogy, move to core mechanics, and finish with industry terms.",

  // 22D (Section 2.4.3): Active Recall (Quiz Mode)
  "Force the AI into quiz mode: it asks one question, you type your answer, and it grades and fixes your gaps in a loop.",

  // 22E (Section 2.4.4): NotebookLM
  "Standard chatbots guess from the open internet. Google NotebookLM studies only your uploaded PDFs, Docs, and YouTube links with exact page citations.",

  // 22F (Section 2.4.5): NotebookLM Study Power-Ups
  "Turn dry PDFs into interactive study kits in one click: audio podcasts you can interrupt, mind maps, flashcards, and study guides.",

  // 23: Day 3 Topic Roadmap
  "Welcome to Day 3: AI Creation Studio. Today, connect an LLM, Image AI, and Lovable to build a live brand.",

  // 24: Day 3 Pipeline
  "In 60 minutes, connect four AI tools in sequence to build a complete fashion brand.",

  // 25: Day 3 Free Stack
  "All tools today have free tiers: Google Gemini for strategy, Leonardo AI for garment images, and Lovable.dev for web UI.",

  // 26: Brand Identity Bible (RIMAL KINETIC)
  "Step 1 creates a complete Brand Identity in one prompt: RIMAL KINETIC, slogan Ancient script. Future streets., exact HEX colors, Syne and Space Mono fonts, and target persona.",

  // 27: Brand Voice & Tone
  "Define three voice rules before you write copy: Prophetic, Visceral, and Minimalist. Keep product text and social posts consistent.",

  // 28: Reference-Guided Generation
  "Do not generate garment images from text alone. Send a clean reference photo to Leonardo AI and add your brand prompt.",

  // 29: 3-Piece Capsule Collection
  "Focus the first collection on three matching items: Nomad Script Boxy Shirt at $185, Mirage Heavyweight Hoodie at $245, and Kinetic Calligraphy Crewneck at $210.",

  // 30: Viral Social Launch Assets
  "Use your approved images for launch posts: show the collection copy on the left and the main product image on the right.",

  // 31: Meta-Prompting
  "Do not spend your five daily Lovable credits typing prompts manually. Send your brand, product, and social specs to Google Gemini to write one master prompt.",

  // 32: Master Prompt Anatomy
  "Include four blocks in one master Lovable prompt: design tokens, hero section, 3-item product grid with a waitlist modal, and attached product images.",

  // 33: Live 1-Shot Lovable Output
  "This is the RIMAL KINETIC storefront built from one master prompt. Generation stopped at the free-tier credit limit.",

  // 34: Bridge to Day 4
  "Build the storefront and Reserve Now button today. Connect that button to an n8n webhook tomorrow on Day 4.",

  // 35: Publish App & Share to Social Media
  "Select Publish in Lovable to deploy your storefront. Copy the live URL and add it to your social posts.",

  // 36: Day 4 Topic Roadmap
  "Welcome to Day 4: Automation Foundations with n8n. Today, build the backend workflows for your storefront.",

  // 37: Day 4 Blueprint
  "Today covers three modules: the n8n canvas and UI, the Trigger-Logic-Action model, and live multi-step workflows.",

  // 38: Manual vs Automation
  "Do not copy form data into spreadsheets and emails manually. An n8n workflow sends data across all apps automatically.",

  // 39: Anatomy of the n8n Canvas
  "On the n8n canvas, data moves from left to right between nodes as structured JSON objects.",

  // 40: 3 Real Automation Examples
  "Review three common automations: e-commerce order logging, lead routing to Slack, and scheduled daily revenue summaries.",

  // 41: Universal Automation Formula
  "Every workflow has three parts: a Trigger event, Logic rules, and an Action output.",

  // 42: Part 1: Triggers
  "Workflows start from four triggers: a Cron schedule, a Webhook request, a form submission, or an app event.",

  // 43: Part 2: Logic
  "Logic nodes such as IF and Switch check JSON fields and route data down True or False paths.",

  // 44: Part 3: Actions & Sinks
  "Action nodes save or send data: update Google Sheets, send Gmail replies, alert Slack or Telegram, and update your CRM.",

  // 45: Data Mapping
  "Output of Node 1 becomes input of Node 2. Drag JSON fields such as $json.name and $json.item into downstream templates.",

  // 46: Workflow 1 (Linear)
  "Build Workflow 1 as a 2-node linear flow: receive the Day 3 Lovable order webhook and add a customer row in Google Sheets.",

  // 47: Workflow 2 (Branching)
  "Build Workflow 2 with an IF node: orders above $200 send a Telegram VIP alert; standard orders send a confirmation email.",

  // 48 (Day 5 Roadmap): Day 5 Topic Roadmap
  "Welcome to Day 5: AI Agents & RAG Systems. Day 5 is highlighted as the final step on our 5-day track.",

  // 49 (Day 5.1): Title & Final Day Blueprint
  "Today you put an LLM brain inside your automated pipelines: AI nodes, smart triage, and custom RAG memory.",

  // 50 (Day 5.2): Rule Logic vs. AI Logic
  "Use standard IF nodes for strict math such as Order greater than $200. Use an AI node for sentiment, summary, and intent detection.",

  // 51 (Day 5.3): Wiring the AI Node in n8n
  "One AI Agent node connects to three bottom ports: a chat model, a structured output parser, and external tools.",

  // 52 (Day 5.4): Structured Output Parser
  "Force the AI to output strict JSON with category, urgency, and draft reply fields so downstream nodes never break.",

  // 53 (Day 5.5): Smart Customer Triage Pipeline
  "Wire a four-step triage pipeline: trigger on email or form, classify and draft with AI, split on a Switch node, and route VIP replies or urgent alerts.",

  // 54 (Day 5.6): Why We Need RAG
  "Standard LLMs have zero private knowledge of your business and break when you paste 500 PDFs into the context window.",

  // 55 (Day 5.7): RAG Demystified
  "A standard LLM guesses from old training memory. A RAG system searches your PDFs first and writes a grounded answer.",

  // 56 (Day 5.8): Pipeline 1 — Data Ingestion
  "First, build the ingestion pipeline: load your file, chunk the text into paragraphs, embed meaning into numbers, and save them in a vector store.",

  // 57 (Day 5.9): Pipeline 2 — Retrieval & Chat
  "Second, run the retrieval pipeline: take the user question, pull FAQ #4 from the vector store, pass both to the LLM, and return a grounded answer.",

  // 58 (Day 5.10): Live Build Transition
  "Switch to n8n now for our final live lab: connect the Day 3 brand FAQ PDF into a vector store and chat agent.",

  // 59 (Day 5.11): Camp Graduation
  "Use AI systems as your domain advantage: become the top expert in your field and build deeper automations for your industry.",

  // 60 (Day 5.12): Closing Quote & Thank You
  "Thank the students for building across all five days, leave them with the closing quote, and invite questions.",
];

export const meta: SlideMeta = {
  title: "AI Camp Master Deck",
  createdAt: "2026-11-11T13:57:55.286Z",
};

export default [
  // General Camp Introduction
  Slide1_MainTitle,
  Slide0_Instructor,
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
  Slide22B_D2TutorVsMachine,
  Slide22C_D2Analogies,
  Slide22D_D2ActiveRecall,
  Slide22E_D2NotebookLM,
  Slide22F_D2StudyKits,

  // Day 03: AI Creation Studio — Brand, Visuals, and Website
  Slide23_D3Roadmap,
  Slide24_D3Pipeline,
  Slide25_D3Stack,
  Slide26_D3BrandBible,
  Slide26B_D3BrandVoice,
  Slide27_D3ImageToImage,
  Slide28_D3CapsuleDrop,
  Slide29_D3SocialCampaign,
  Slide30_D3MetaPrompting,
  Slide31_D3MasterPrompt,
  Slide31B_D3LovableOutput,
  Slide33_D3BridgeDay4,
  Slide34_D3PublishAndShare,

  // Day 04: Automation Foundations with n8n
  Slide35_D4Roadmap,
  Slide36_D4Blueprint,
  Slide37_D4ManualVsAuto,
  Slide38_D4CanvasAnatomy,
  Slide38B_D4Examples,
  Slide39_D4Formula,
  Slide40_D4Triggers,
  Slide41_D4Logic,
  Slide42_D4Actions,
  Slide43_D4DataMapping,
  Slide44_D4Workflow1,
  Slide45_D4Workflow2,

  // Day 05: AI Workflows and RAG Applications in n8n
  Slide45B_D5Roadmap,
  Slide46_D5Blueprint,
  Slide47_D5RuleVsAI,
  Slide48_D5NodeAnatomy,
  Slide49_D5StructuredJson,
  Slide50_D5TriagePipeline,
  Slide51_D5RagProblem,
  Slide52_D5RagExam,
  Slide53_D5Ingestion,
  Slide54_D5Retrieval,
  Slide55_D5LiveBuild,
  Slide56_D5Graduation,
  Slide57_D5Closing,
] satisfies Page[];
