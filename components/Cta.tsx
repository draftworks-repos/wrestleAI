import React from "react";
import { Apple, Play, Mail, Phone, MapPin } from "lucide-react";
import "../styles/Cta.css";

export const Cta: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card">
          {/* Left Pane: Pitch & Action */}
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to experience{" "}
              <span className="text-brand-primary">AI?</span>
            </h2>
            <p className="cta-desc">
              Download now and start using smarter technology to accelerate your
              wrestling training. Join thousands of athletes dominating on the
              mat.
            </p>

            <div className="cta-buttons">
              <button className="cta-btn cta-btn-primary">
                <Apple size={20} className="cta-btn-icon" />
                <span>App Store</span>
              </button>
              <button className="cta-btn cta-btn-secondary">
                <Play size={20} className="cta-btn-icon" />
                <span>Google Play</span>
              </button>
            </div>
          </div>

          {/* Right Pane: Contact Info */}
          <div className="cta-contact">
            <h3 className="cta-contact-title">Get in Touch</h3>

            <div className="cta-contact-list">
              <a
                href="mailto:support@wrestleai.com"
                className="cta-contact-item"
              >
                <div className="cta-contact-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="cta-contact-text">
                  <span className="cta-contact-label">Email Support</span>
                  <span className="cta-contact-value">
                    support@wrestleai.com
                  </span>
                </div>
              </a>

              <a href="tel:+15551234567" className="cta-contact-item">
                <div className="cta-contact-icon-wrapper">
                  <Phone size={18} />
                </div>
                <div className="cta-contact-text">
                  <span className="cta-contact-label">Call Us</span>
                  <span className="cta-contact-value">+1 (555) 123-4567</span>
                </div>
              </a>

              <div className="cta-contact-item">
                <div className="cta-contact-icon-wrapper">
                  <MapPin size={18} />
                </div>
                <div className="cta-contact-text">
                  <span className="cta-contact-label">Location</span>
                  <span className="cta-contact-value">New York, NY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
