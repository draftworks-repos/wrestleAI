import React, { useState } from "react";
import { Menu, X, Lightbulb, Headphones } from "lucide-react";
import "../styles/Navbar.css";
import "../styles/animations.css";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
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

          {/* Mobile menu button */}
          <div className="mobile-toggle">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="toggle-btn"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="mobile-nav-link"
                onClick={() => scrollToSection(link.selector)}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
