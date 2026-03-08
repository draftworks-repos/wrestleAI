import React, { useRef } from "react";
import {
  ArrowUp,
  Instagram,
  Twitter,
  Youtube,
  MonitorPlay,
  Shield,
  FileText,
} from "lucide-react";
import "../styles/Footer.css";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      {/* Scroll To Top Button (Bouncing Pill) */}
      <button
        className="footer-scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span className="scroll-top-text">Back to Top</span>
        <ArrowUp size={18} className="scroll-arrow" />
      </button>

      <div className="footer-container">
        {/* Top Row: Mission & Links Grid */}
        <div className="footer-grid">
          {/* Brand & Mission */}
          <div className="footer-brand-col">
            <div className="footer-logo-container" onClick={scrollToTop}>
              <div className="footer-logo-icon-wrapper">
                <img
                  src="/site-logo.png"
                  alt="Wrestle AI Logo"
                  className="footer-logo-icon-img"
                />
              </div>
              <span className="footer-logo-text-base">WRESTLE</span>
              <span className="footer-logo-ai-blue">AI</span>
            </div>
            <p className="footer-mission">
              The first dedicated AI-powered wrestling training platform
              designed to help athletes at every level improve technique,
              conditioning, and mindset.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram" className="social-link">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Features</h4>
            <ul className="footer-link-list">
              <li>
                <a href="#" className="footer-link">
                  AI Video Analysis
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Gamified Practice Mode
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Skill Tree Progression
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Pricing & Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-link-list">
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-link-list">
              <li>
                <a href="#" className="footer-link">
                  <MonitorPlay size={14} className="link-icon" /> Training
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <Shield size={14} className="link-icon" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <FileText size={14} className="link-icon" /> Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* The Massive Background Text */}
        <div className="footer-giant-text-wrapper">
          <span className="footer-giant-text">
            WRESTLE <span className="brand-blue">AI</span>
          </span>
        </div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Wrestle AI. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <span className="divider">•</span>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
