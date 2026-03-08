import React from "react";
import { Play, Zap, ShieldCheck, Coins, ChevronsRight } from "lucide-react";
import "../styles/VideoSection.css";
import "../styles/animations.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const VideoSection: React.FC = () => {
  const [headerRef, headerInView] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [videoRef, videoInView] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="video-section">
      <div className="video-bg-decoration">
        <div className="decoration-blob"></div>
      </div>

      <div className="video-container">
        {/* Header */}
        <div ref={headerRef} className="video-header">
          <span
            className={`section-label inline-block ${headerInView ? "animate-fade-in" : "opacity-0"}`}
          >
            See it in action
          </span>
          <h2
            className={`video-title ${headerInView ? "animate-fade-in delay-100" : "opacity-0"}`}
          >
            Experience the <span className="text-brand-primary">future</span> of
            shopping
          </h2>
          <p
            className={`video-subtitle ${headerInView ? "animate-fade-in delay-200" : "opacity-0"}`}
          >
            Watch how Flixpay transforms your daily transactions into a
            seamless, rewarding journey with just a single tap.
          </p>
        </div>

        {/* Video Entrance Animation Wrapper */}
        <div
          ref={videoRef}
          className={`video-entrance-wrapper ${videoInView ? "animate-fade-up delay-300" : "opacity-0"}`}
        >
          <a
            href="https://www.youtube.com/watch?v=g6c9dTj2Etc"
            target="_blank"
            rel="noopener noreferrer"
            className="video-wrapper"
          >
            <div className="video-inner">
              <img
                src="https://img.youtube.com/vi/g6c9dTj2Etc/maxresdefault.jpg"
                alt="Flixpay Demo Thumbnail"
                className="video-thumbnail"
              />

              {/* Center Play Button */}
              <div className="play-btn-container">
                <div className="play-btn-bg">
                  <Play size={32} fill="currentColor" className="play-icon" />
                </div>
              </div>
            </div>

            {/* Floating Info Badge - Left */}
            <div
              className={`absolute-badge badge-left ${videoInView ? "animate-pop-in delay-400" : "opacity-0"}`}
            >
              <div className="video-floating-badge">
                <div className="badge-icon">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <span className="badge-text">Instant Checkout</span>
                  <span className="badge-sub">Powered by AI</span>
                </div>
              </div>
            </div>

            {/* Floating Info Badge - Right */}
            <div
              className={`absolute-badge badge-right ${videoInView ? "animate-pop-in delay-500" : "opacity-0"}`}
            >
              <div className="video-floating-badge">
                <div className="badge-icon" style={{ color: "#4ade80" }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <span className="badge-text">Secure Payment</span>
                  <span className="badge-sub">Bank-grade security</span>
                </div>
              </div>
            </div>

            {/* Floating Info Badge - Bottom Right */}
            <div
              className={`absolute-badge badge-bottom-right ${videoInView ? "animate-pop-in delay-500" : "opacity-0"}`}
            >
              <div className="video-floating-badge">
                <div className="badge-icon" style={{ color: "#facc15" }}>
                  <Coins size={24} />
                </div>
                <div>
                  <span className="badge-text">5% Cashback</span>
                  <span className="badge-sub">On every purchase</span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <a
          href="#"
          className={`video-text ${videoInView ? "animate-fade-in delay-500" : "opacity-0"}`}
        >
          Watch Full Demo <ChevronsRight size={24} className="video-arrow" />
        </a>
      </div>
    </section>
  );
};
