import React, { useState } from 'react';
import { Menu, X, ChevronDown, ShoppingBag } from 'lucide-react';
import '../styles/Navbar.css';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo-container">
            <div className="logo-icon">
              <ShoppingBag size={20} fill="currentColor" />
            </div>
            <span className="logo-text">Flixpay</span>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <a href="#" className="nav-link">How to use</a>
            <a href="#" className="nav-link">Deals & Rewards</a>
            <div className="relative group">
              <button className="nav-link">
                Shop <ChevronDown size={16} />
              </button>
            </div>
            <a href="#" className="nav-link">Help</a>
          </div>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <button className="btn btn-primary">
              Sign Up
            </button>
            <button className="btn btn-outline">
              Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-toggle">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="toggle-btn"
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
            <a href="#" className="mobile-nav-link">How to use</a>
            <a href="#" className="mobile-nav-link">Deals & Rewards</a>
            <a href="#" className="mobile-nav-link">Shop</a>
            <a href="#" className="mobile-nav-link">Help</a>
            <div className="mobile-auth">
              <button className="btn btn-primary btn-full">
                Sign Up
              </button>
              <button className="btn btn-outline btn-full">
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
