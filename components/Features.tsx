import React from "react";
import {
  Video,
  Target,
  Flame,
  TrendingUp,
  LineChart,
  Timer,
  PlaySquare,
  BookOpen,
  Activity,
  Award,
  Dumbbell,
} from "lucide-react";
import "../styles/Features.css";
import "../styles/animations.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string; // For bento sizing
  renderContent?: () => React.ReactNode;
}

// ----------------------------------------------------------------------
// Mock UI Components
// ----------------------------------------------------------------------

const MockupImageContainer = ({ src }: { src: string }) => (
  <div className="bento-mockup-wrapper">
    <img src={src} alt="Feature Mockup" className="bento-mockup-img" />
  </div>
);

const MockupAnimationContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="bento-mockup-wrapper bg-animation">{children}</div>;

const MockTimerUI = () => (
  <MockupAnimationContainer>
    <div className="mock-timer-complex">
      {/* Top Header / Mode Selector */}
      <div className="mock-timer-header">
        <div className="timer-mode active">Intervals</div>
        <div className="timer-mode">Shot Clock</div>
      </div>

      {/* Main Dial */}
      <div className="mock-timer-dial-container">
        <svg className="mock-timer-svg" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            className="timer-track"
            fill="none"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            className="timer-progress"
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
        <div className="mock-timer-time">
          <span className="time-min">02</span>
          <span className="time-colon">:</span>
          <span className="time-sec">45</span>
        </div>
      </div>

      {/* Controls & Rounds */}
      <div className="mock-timer-footer">
        <div className="timer-round-info">
          <span className="round-label">Round</span>
          <span className="round-value">3 / 5</span>
        </div>
        <div className="timer-controls">
          <div className="t-btn t-btn-reset">
            <div className="t-icon-box"></div>
          </div>
          <div className="t-btn t-btn-play">
            <PlaySquare size={14} fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  </MockupAnimationContainer>
);

const MockImpossibleUI = () => (
  <MockupAnimationContainer>
    <div className="mock-impossible-complex">
      {/* Background Alerts */}
      <div className="imp-bg-alerts">
        <div className="imp-alert-line l1"></div>
        <div className="imp-alert-line l2"></div>
      </div>

      <div className="imp-main-card">
        <div className="imp-card-header">
          <Flame size={16} className="imp-flame-icon" />
          <span className="imp-title">Grip Burnout</span>
          <span className="imp-badge">Extreme</span>
        </div>

        <div className="imp-metrics">
          <div className="imp-metric-item">
            <span className="m-label">Target</span>
            <span className="m-value">60s</span>
          </div>
          <div className="imp-metric-item">
            <span className="m-label">Current</span>
            <span className="m-value text-red">42s</span>
          </div>
        </div>

        <div className="imp-progress-bar-container">
          <div className="imp-progress-fill">
            <div className="imp-progress-glow"></div>
          </div>
        </div>
      </div>
    </div>
  </MockupAnimationContainer>
);

// ----------------------------------------------------------------------
// Features Data Array - ORDERED EXACTLY AS REQUESTED
// 1. AI Video Analysis (Large)
// 2. Skill Tree (Tall)
// 3. Practice Mode (Standard)
// 4. Progress Tracking (Standard)
// 5. Impossible Mode (Wide)
// 6. AI Chat Coach (Wide)
// ----------------------------------------------------------------------

const features: FeatureProps[] = [
  {
    icon: Video,
    title: "AI Video Breakdowns",
    description:
      "Upload practice or match clips and get quick AI analysis of your stance, setups, finishes, and chain wrestling. Instantly spot mistakes, see key moments, and get simple insights to improve your technique.",
    className: "bento-large bento-item-1",
    renderContent: () => <MockupImageContainer src="/bento-1.png" />,
  },
  {
    icon: Target,
    title: "Personalized Drill Plans",
    description:
      "Daily sessions tailored to your style and level across neutral, top, and bottom positions for folkstyle and freestyle.",
    className: "bento-tall bento-item-2",
    renderContent: () => <MockupImageContainer src="/bento-2.png" />,
  },
  {
    icon: BookOpen,
    title: "Technique Library",
    description:
      "Clear walkthroughs for takedowns, finishes, rides, escapes, scrambles, counters, and advanced chain wrestling.",
    className: "bento-standard bento-item-3",
  },
  {
    icon: LineChart,
    title: "Stats & Match Tracker",
    description:
      "Log attempts, finishes, riding time, escapes, near-falls, and pins to identify trends and close performance gaps.",
    className: "bento-standard bento-item-4",
  },
  {
    icon: Flame,
    title: "Impossible Mode",
    description:
      "Short, intense challenges that sharpen speed, grip strength, and mat conditioning when time is tight.",
    className: "bento-wide bento-item-5",
    renderContent: () => <MockImpossibleUI />,
  },
  {
    icon: Timer,
    title: "Timers & Tools",
    description:
      "Shot clock, interval timer, stance-in-motion drills, and scoring helpers to optimize practice sessions.",
    className: "bento-wide bento-item-6",
    renderContent: () => <MockTimerUI />,
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    description:
      "Mat-specific power training, explosiveness drills, core workouts, and cardio circuits for late-match endurance.",
    className: "bento-wide bento-item-7",
    renderContent: () => <MockupImageContainer src="/bento-5.png" />,
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Streaks, targets, and milestones keep you motivated and focused on improving every day on the mat.",
    className: "bento-wide bento-item-8",
    renderContent: () => <MockupImageContainer src="/bento-4.png" />,
  },
];

// ----------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------

const BentoCard: React.FC<{ feature: FeatureProps; index: number }> = ({
  feature,
  index,
}) => {
  const [ref, inView] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`bento-wrapper ${inView ? "animate-fade-in" : "opacity-0"} ${feature.className || ""}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* The solid card that sits ON TOP of the border, creating the edge effect */}
      <div className="core-feature-card">
        <div className="core-feature-header-group">
          <div className="core-feature-icon-wrapper">
            <feature.icon
              className="core-feature-icon"
              size={
                feature.className && feature.className.includes("bento-large")
                  ? 28
                  : 24
              }
            />
          </div>
          <div className="core-feature-text-content">
            <h3 className="core-feature-card-title">{feature.title}</h3>
            <p className="core-feature-card-desc">{feature.description}</p>
          </div>
        </div>
        {/* Mock Filler UI */}
        {feature.renderContent && (
          <div className="core-feature-mock-ui-wrapper">
            {feature.renderContent()}
          </div>
        )}
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  const [headerRef, headerInView] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="core-features-section">
      <div className="feature-bg">
        <div className="core-features-container">
          <div ref={headerRef} className="core-features-header">
            <span
              className={`section-label inline-block ${headerInView ? "animate-fade-in" : "opacity-0"}`}
            >
              Features
            </span>
            <h2
              className={`core-features-title ${headerInView ? "animate-fade-in delay-100" : "opacity-0"}`}
            >
              The Future of{" "}
              <span className="text-brand-primary">Wrestling Training</span>
            </h2>
            <p
              className={`core-features-subtitle ${headerInView ? "animate-fade-in delay-200" : "opacity-0"}`}
            >
              Combines advanced artificial intelligence with proven wrestling
              methodology. An AI coach in your pocket.
            </p>
          </div>

          <div className="core-features-bento-grid">
            {features.map((feature, index) => (
              <BentoCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
