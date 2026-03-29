import React from "react";
import { Headphones, Lightbulb } from "lucide-react";
import Sidebar from "./Sidebar";
import "../styles/Navbar.css";
import "../styles/animations.css";

export const Navbar: React.FC = () => {
  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const navHeight = 80; // Fixed navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "Showcase", selector: ".video-section" },
    { name: "Features", selector: ".core-features-section" },
    { name: "About Us", selector: ".how-it-works-section" },
    { name: "Careers", selector: ".footer-section" },
  ];

  return (
    <nav className="navbar animate-slide-down">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Brand Logo */}
          <div
            className="logo-container"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="logo-icon-wrapper">
              <img
                src="/site-logo.png"
                alt="Wrestle AI Logo"
                className="logo-icon-img"
              />
            </div>
            <span className="logo-text-base">WRESTLE</span>
            <span className="logo-ai-blue">AI</span>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="desktop-menu">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="nav-link"
                onClick={() => scrollToSection(link.selector)}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right Action */}
          <div className="navbar-actions">
            <button
              className="nav-action-btn"
              onClick={() => scrollToSection(".cta-section")}
            >
              <Headphones size={16} />
              Support
            </button>
            <button
              className="nav-action-btn-outline"
              onClick={() => scrollToSection(".cta-section")}
            >
              <Lightbulb size={16} />
              Feature Idea
            </button>
          </div>

          {/* Mobile Sidebar */}
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};
