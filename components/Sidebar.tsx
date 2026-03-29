"use client";

import { useState, useEffect } from "react";
import { Menu, X, Play, Zap, Info, Briefcase, Headphones, Lightbulb } from "lucide-react";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  // Body Scroll Lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  const navLinks = [
    { name: "Showcase", icon: <Play size={20} />, selector: ".video-section" },
    { name: "Features", icon: <Zap size={20} />, selector: ".core-features-section" },
    { name: "About Us", icon: <Info size={20} />, selector: ".how-it-works-section" },
    { name: "Careers", icon: <Briefcase size={20} />, selector: ".footer-section" },
  ];

  return (
    <>
      {/* Toggle Button (Hamburger) - Visible in Navbar */}
      <button
        className={`${styles.toggle} ${open ? styles.hidden : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={28} strokeWidth={1.5} />
      </button>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.show : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar Panel */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        {/* Header: Logo and Close Icon */}
        <div className={styles.header}>
          <div className={styles.logoContainer} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setOpen(false); }}>
            <img src="/site-logo.png" alt="Logo" className={styles.logoImg} />
            <span className={styles.logoText}>WRESTLE <span className={styles.blueText}>AI</span></span>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Middle: Navigation Links (Icon + Name) */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.selector)}
              className={styles.navLink}
            >
              <span className={styles.navIcon}>{link.icon}</span>
              {link.name}
            </button>
          ))}
        </nav>

        {/* Footer: Action Buttons */}
        <div className={styles.footer}>
          <button
            className={styles.actionBtn}
            onClick={() => scrollToSection(".cta-section")}
          >
            <Headphones size={18} /> Support
          </button>
          <button
            className={styles.actionBtnOutline}
            onClick={() => scrollToSection(".cta-section")}
          >
            <Lightbulb size={18} /> Feature Idea
          </button>
        </div>
      </aside>
    </>
  );
}
