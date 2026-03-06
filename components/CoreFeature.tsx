import React, { useEffect, useRef, useState } from "react";
import {
  Video,
  Target,
  Flame,
  TrendingUp,
  LineChart,
  MessageSquare,
  PlaySquare,
  Activity,
  Award,
} from "lucide-react";
import "../styles/CoreFeaature.css";

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

const MockVideoUploader = () => (
  <div className="mock-video-ui">
    <div className="mock-video-header">
      <div className="mock-dot-group">
        <span className="mock-dot red"></span>
        <span className="mock-dot yellow"></span>
        <span className="mock-dot green"></span>
      </div>
      <div className="mock-video-title">stance_analysis_01.mp4</div>
    </div>
    <div className="mock-video-body">
      <PlaySquare size={32} className="mock-video-play" />
      <div className="mock-scan-line"></div>
    </div>
    <div className="mock-video-footer">
      <div className="mock-bar animate-bar-1"></div>
      <div className="mock-bar animate-bar-2"></div>
      <div className="mock-bar animate-bar-3"></div>
      <div className="mock-bar animate-bar-4"></div>
      <div className="mock-bar animate-bar-5"></div>
      <div className="mock-bar animate-bar-6"></div>
      <div className="mock-bar animate-bar-7"></div>
    </div>
  </div>
);

const MockSkillTree = () => (
  <div className="mock-skill-ui">
    <div className="mock-skill-node primary pulse-node">
      <Target size={16} />
    </div>
    <div className="mock-skill-line line-1"></div>
    <div className="mock-skill-node secondary left bounce-node-slow">
      <TrendingUp size={14} />
    </div>
    <div className="mock-skill-line line-2"></div>
    <div className="mock-skill-node secondary right bounce-node-fast">
      <Award size={14} />
    </div>
  </div>
);

const MockChatUI = () => (
  <div className="mock-chat-ui">
    <div className="mock-chat-bubble ai float-bubble-1">
      <Activity size={12} className="chat-ai-icon" />
      <div className="mock-chat-lines">
        <div className="c-line w-full"></div>
        <div className="c-line w-3/4"></div>
      </div>
    </div>
    <div
      className="mock-chat-bubble user float-bubble-2"
      style={{
        alignSelf: "flex-end",
        backgroundColor: "var(--color-brand-primary)",
      }}
    >
      <div className="mock-chat-lines dark">
        <div className="c-line w-5/6"></div>
      </div>
    </div>
    <div className="mock-chat-bubble ai float-bubble-3">
      <Activity size={12} className="chat-ai-icon" />
      <div className="mock-chat-lines">
        <div className="c-line w-full"></div>
        <div className="c-line w-1/2"></div>
      </div>
    </div>
  </div>
);

const MockImpossibleMode = () => (
  <div className="mock-impossible-ui shake-ui">
    <div className="mock-ring ring-outer"></div>
    <div className="mock-ring ring-inner"></div>
    <Flame size={28} className="mock-flame pulse-flame" />
  </div>
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
    title: "AI Video Analysis",
    description:
      "Upload clips and receive instant AI feedback on stance, footwork, balance, and execution.",
    className: "bento-large bento-item-1",
    renderContent: () => <MockVideoUploader />,
  },
  {
    icon: TrendingUp,
    title: "Skill Tree",
    description:
      "Visualize growth across categories. Unlock advanced techniques as you improve.",
    className: "bento-tall bento-item-2",
    renderContent: () => <MockSkillTree />,
  },
  {
    icon: Target,
    title: "Practice Mode",
    description:
      "Train in a gamified environment. Earn points, level up, and track streaks.",
    className: "bento-standard bento-item-3",
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    description:
      "Detailed performance data shows development over time. Review improvements.",
    className: "bento-standard bento-item-4",
  },
  {
    icon: Flame,
    title: "Impossible Mode",
    description:
      "Push your limits with extreme challenges to test physical and mental toughness.",
    className: "bento-wide bento-item-5",
    renderContent: () => <MockImpossibleMode />,
  },
  {
    icon: MessageSquare,
    title: "AI Chat Coach",
    description:
      "Access an always-available digital coach to answer training questions and provide strategy.",
    className: "bento-wide bento-item-6",
    renderContent: () => <MockChatUI />,
  },
];

// ----------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------

export const CoreFeature: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`core-features-section ${inView ? "is-animating" : "is-paused"}`}
    >
      <div className="core-features-container">
        <div className="core-features-header animate-fade-in-up">
          <h2 className="core-features-title">
            The Future of{" "}
            <span className="text-brand-primary">Wrestling Training</span>
          </h2>
          <p className="core-features-subtitle">
            Combines advanced artificial intelligence with proven wrestling
            methodology. An AI coach in your pocket.
          </p>
        </div>

        <div className="core-features-bento-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bento-wrapper animate-fade-in-up ${feature.className || ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rotating background gradient for the border */}
              <div className="bento-glow-border"></div>

              {/* The solid card that sits ON TOP of the border, creating the edge effect */}
              <div className="core-feature-card">
                <div className="core-feature-header-group">
                  <div className="core-feature-icon-wrapper">
                    <feature.icon
                      className="core-feature-icon"
                      size={
                        feature.className &&
                        feature.className.includes("bento-large")
                          ? 28
                          : 24
                      }
                    />
                  </div>
                  <div className="core-feature-text-content">
                    <h3 className="core-feature-card-title">{feature.title}</h3>
                    <p className="core-feature-card-desc">
                      {feature.description}
                    </p>
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
          ))}
        </div>
      </div>
    </section>
  );
};
