import React, { useRef } from "react";
import {
  ChevronLeft,
  CheckCircle2,
  PlayCircle,
  Clock,
  Dumbbell,
  Target,
  BarChart2,
  CheckCircle,
  Home,
  Apple,
  User,
  Camera,
  Play,
  Signal,
  Wifi,
  BatteryFull,
} from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import "../styles/PhoneMockup.css";

export const PhoneMockup: React.FC = () => {
  const mockupRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(mockupRef, { threshold: 0.1 });

  // CSS class to pause animations when out of view to save CPU cycles
  const animationClass = isVisible ? "" : "animation-paused";

  return (
    <div className={`mockup-wrapper ${animationClass}`} ref={mockupRef}>
      {/* --- Left Floating Card (Analysis Results) --- */}
      <div className={`floating-card card-left`}>
        <div className="card-header-center">
          <div className="text-meta-caps">Analysis Results</div>
        </div>

        <div className="analysis-icon-wrapper">
          <div className="analysis-icon-inner">
            <CheckCircle2 size={24} />
          </div>
        </div>

        <h3 className="analysis-title">Analysis Complete</h3>
        <p className="analysis-desc">
          Neural network has processed your wrestling performance.
        </p>

        <div className="score-box">
          <div className="score-header">
            <BarChart2 size={14} className="icon-blue" />
            <span>Performance Score</span>
          </div>
          <div className="score-value-row">
            <span className="score-big">7.4</span>
            <span className="score-small">/10</span>
          </div>

          <div className="progress-wrapper">
            <div className="progress-fill pw-74"></div>
          </div>

          <div className="confidence-wrapper">
            <span className="confidence-tag">AI Confidence: 94.7%</span>
          </div>
        </div>
      </div>

      {/* --- Right Floating Card (Training Plan) --- */}
      <div className={`floating-card card-right`}>
        <div className="plan-header-row">
          <div className="icon-btn-dark">
            <ChevronLeft size={16} />
          </div>
          <span className="plan-title">Training Plan</span>
        </div>

        <div className="plan-day-section">
          <h4 className="plan-day">Monday</h4>
          <span className="plan-day-tag">Offense Day</span>
        </div>

        <div className="drill-list">
          <div className="drill-list-title">Neutral & Takedowns</div>

          <div className="drill-card">
            <div>
              <div className="drill-title">Tie Clearing Drill</div>
              <div className="drill-tag">Neutral</div>
            </div>
            <ChevronLeft size={16} className="icon-flip" />
          </div>

          <div className="drill-card">
            <div>
              <div className="drill-title">Single Leg Finishes</div>
              <div className="drill-tag">Neutral</div>
            </div>
            <ChevronLeft size={16} className="icon-flip" />
          </div>

          <div className="drill-card">
            <div>
              <div className="drill-title">Mat Return Series</div>
              <div className="drill-tag">Top</div>
            </div>
            <ChevronLeft size={16} className="icon-flip" />
          </div>
        </div>
      </div>

      {/* --- Central Phone Mockup (Dark Theme App View) --- */}
      <div className="phone-frame">
        <div className="notch">
          <div className="camera-wrapper">
            <span className="camera"></span>
            <span className="beside-camera"></span>
          </div>
        </div>
        <div className="mobile-header">
          <div className="header-time">9:41</div>
          <div className="header-icons">
            <Signal size={14} />
            <Wifi size={14} />
            <BatteryFull size={14} />
          </div>
        </div>
        {/* Scrollable App Context */}
        <div className="app-screen no-scrollbar">
          <div className="mockup-scroll-inner">
            {/* Header */}
            <div className="app-header-dark">
              <div>
                <p className="welcome-text">Welcome back</p>
                <h2 className="brand-title">
                  WRESTLE AI <span className="beta-tag">BETA</span>
                </h2>
              </div>
              <div className="user-avatar-dark">
                <User size={16} />
              </div>
            </div>

            {/* Main Scroll Content */}
            <div className="app-content-scroll">
              {/* Challenge of the Day */}
              <section className="app-section">
                <div className="section-header">
                  <h3 className="section-title">Challenge of the Day</h3>
                </div>

                <div className="challenge-card">
                  <div className="challenge-header">
                    <div className="challenge-icon-box">
                      <Target size={20} />
                    </div>
                    <div>
                      <h4 className="challenge-title">Shot Clock Challenge</h4>
                      <div className="challenge-tags">
                        <span className="adv-tag">ADVANCED</span>
                        <span className="pts-tag">★ 140 pts</span>
                      </div>
                    </div>
                  </div>

                  <p className="challenge-desc">
                    35 perfect shot changes in 90 seconds. Focus on level
                    changes and burst speed.
                  </p>

                  <button className="record-btn">
                    <Camera size={18} /> Record Challenge
                  </button>

                  <div className="stats-grid">
                    <div className="stat-box">
                      <div className="stat-val">1,240</div>
                      <div className="stat-label">Total Points</div>
                    </div>
                    <div className="stat-box">
                      <div className="stat-val">4</div>
                      <div className="stat-label">Day Streak</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Coach AI Horizontal Scroll */}
              <section className="app-section">
                <h3 className="section-title mb-sm">Coach AI</h3>
                <div className="coach-carousel no-scrollbar">
                  <div className="coach-card">
                    <div className="coach-icon blue">
                      <PlayCircle size={18} />
                    </div>
                    <h4 className="coach-title">Get Instant Breakdown</h4>
                    <p className="coach-desc">Upload any set</p>
                  </div>
                  <div className="coach-card">
                    <div className="coach-icon purple">
                      <Clock size={18} />
                    </div>
                    <h4 className="coach-title">Impossible Mode</h4>
                    <p className="coach-desc">Stamina test</p>
                  </div>
                  <div className="coach-card opacity-50">
                    <div className="coach-icon green">
                      <Dumbbell size={18} />
                    </div>
                    <h4 className="coach-title">S&C Circuit</h4>
                    <p className="coach-desc">Coming soon</p>
                  </div>
                </div>
              </section>

              {/* Library Highlights list */}
              <section className="app-section">
                <div className="section-header">
                  <h3 className="section-title">Recent Drills</h3>
                  <span className="see-all-link">See all</span>
                </div>

                <div className="recent-drills-card">
                  <div className="recent-drill-item border-bottom">
                    <div className="drill-thumb">
                      <img
                        src="https://images.unsplash.com/photo-1544256683-938b81ceebbc?auto=format&fit=crop&q=80&w=100&h=100"
                        alt="Wrestling"
                      />
                      <div className="drill-overlay">
                        <Play size={16} fill="currentColor" />
                      </div>
                    </div>
                    <div className="drill-info">
                      <h4 className="drill-name">High Crotch Setup</h4>
                      <p className="drill-meta">Neutral • 2 min left</p>
                    </div>
                    <div className="icon-circle">
                      <CheckCircle size={14} className="text-zinc-600" />
                    </div>
                  </div>

                  <div className="recent-drill-item">
                    <div className="drill-thumb">
                      <img
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=100&h=100"
                        alt="Workout"
                      />
                      <div className="drill-overlay">
                        <Play size={16} fill="currentColor" />
                      </div>
                    </div>
                    <div className="drill-info">
                      <h4 className="drill-name">Granby Roll Escape</h4>
                      <p className="drill-meta">Bottom • Start</p>
                    </div>
                    <div className="icon-circle">
                      <Play size={12} className="text-zinc-400 play-offset" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Floating App Navigation Bar */}
        <div className="nav-bar">
          <div className="nav-item">
            <Camera size={16} className="nav-icon" />
            <div className="nav-text">Analyze</div>
          </div>
          <div className="nav-item">
            <Dumbbell size={16} className="nav-icon" />
            <div className="nav-text">Training</div>
          </div>
          <div className="nav-item active">
            <Home size={16} className="nav-icon active" />
            <div className="nav-text active">Home</div>
          </div>
          <div className="nav-item">
            <Apple size={16} className="nav-icon" />
            <div className="nav-text">Nutrition</div>
          </div>
          <div className="nav-item">
            <User size={16} className="nav-icon" />
            <div className="nav-text">Profile</div>
          </div>
        </div>

        {/* iOS Home Indicator */}
        <div className="home-indicator"></div>
      </div>
    </div>
  );
};
