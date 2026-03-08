import React from "react";
import { Apple, Play, Mail, Phone, MapPin } from "lucide-react";
import "../styles/Cta.css";

export const Cta: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-glass-card">
          {/* Top Edge Highlight */}
          <div className="cta-glass-edge"></div>

          {/* Floating Phone Mockup Erupting from inside the card */}
          <div className="cta-mockup-wrapper">
            {/* We reuse mockup-1 just for visual impact, or a generic placeholder if needed. Assuming mockup-1.png exists based on earlier context */}
            <img
              src="/bento-1.png"
              alt="Wrestle AI App"
              className="cta-mockup-img"
            />

            {/* Floating UI Elements around the phone */}
            <div className="cta-float-pill float-left">
              <div className="float-icon-wrapper success">
                <Play size={14} fill="currentColor" />
              </div>
              <span>Analysis Complete</span>
            </div>

            <div className="cta-float-pill float-right">
              <div className="float-icon-wrapper brand">
                <Apple size={14} fill="currentColor" />
              </div>
              <span>+500 XP Earned</span>
            </div>
          </div>

          {/* Core Content Layer */}
          <div className="cta-content-layer">
            <span className="cta-epic-badge">Join the Elite</span>

            <h2 className="cta-title">
              Ready to <span className="cta-text-gradient">Dominate?</span>
            </h2>

            <p className="cta-desc">
              Download Wrestle AI today. Gain instant access to elite coaching,
              real-time video breakdowns, and gamified mastery. Your podium
              awaits.
            </p>

            <div className="cta-store-badges">
              <a href="#" className="store-badge-link">
                <img
                  src="/app-store.png"
                  alt="Download on the App Store"
                  className="store-badge-img"
                />
              </a>
              <a href="#" className="store-badge-link">
                <img
                  src="/play-store.png"
                  alt="Get it on Google Play"
                  className="store-badge-img"
                />
              </a>
            </div>

            {/* Minimalist Contact Strip below badges */}
            <div className="cta-minimal-contact">
              <a
                href="mailto:support@wrestleai.com"
                className="minimal-contact-link"
              >
                <Mail size={16} /> Email Support
              </a>
              <span className="contact-divider">•</span>
              <a
                href="mailto:ideas@wrestleai.com?subject=Feature%20Idea"
                className="minimal-contact-link"
              >
                <Play size={16} style={{ transform: "rotate(-45deg)" }} />{" "}
                Feature Ideas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
