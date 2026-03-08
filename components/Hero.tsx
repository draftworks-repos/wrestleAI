import React from "react";
import { PhoneMockup } from "./PhoneMockup";
import { Star, UserStar } from "lucide-react";
import "../styles/Hero.css";
import "../styles/animations.css";

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Background Blobs */}
      <div className="bg-blobs">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Announcement Pill */}
          <div className="hero-announcement animate-pop-in">
            <span className="announcement-badge">New</span>
            <span className="announcement-text">
              Personalized AI Training Plans
            </span>
          </div>

          {/* Main Headline */}
          <div className="hero-title-wrapper animate-text-reveal delay-100">
            <h1 className="hero-title">
              <span className="hero-title-text">
                WRESTLE <span className="hero-title-blue">AI</span>
              </span>
            </h1>
            <p className="hero-subtitle-text">Wrestle Harder, Train Smarter.</p>
          </div>

          {/* Social Proof / Badges Section */}
          <div className="social-proof animate-text-reveal delay-200">
            {/* Left: Store Badges */}
            <div className="store-badges">
              <a
                href="#"
                className="store-badge-link"
                aria-label="Download on the App Store"
              >
                <img
                  src="/app-store.png"
                  alt="Download on the App Store"
                  className="store-badge-img"
                />
              </a>
              <a
                href="#"
                className="store-badge-link"
                aria-label="Get it on Google Play"
              >
                <img
                  src="/play-store.png"
                  alt="Get it on Google Play"
                  className="store-badge-img"
                />
              </a>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Right: Ratings */}
            <div className="rating-block group">
              <div className="rating-icon">
                <UserStar size={18} />
              </div>
              <div className="rating-content">
                <div className="rating-top-row">
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                        className="star-filled"
                      />
                    ))}
                  </div>
                  <span className="score-num">4.9/5</span>
                </div>
                <p className="rating-text">
                  Based on <strong>10,000+</strong> reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visuals Area */}
        <div className="visuals-container animate-fade-up delay-300">
          <div className="visuals-inner">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
