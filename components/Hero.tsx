import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { Star, QrCode } from 'lucide-react';
import '../styles/Hero.css';

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
          
          {/* Main Headline */}
          <h1 className="hero-title">
            Exploring the best <br className="break-sm" />
            shopping apps in 2024
          </h1>

          {/* Social Proof / QR Section */}
          <div className="social-proof">
            
            {/* Left: QR Code */}
            <div className="qr-block group">
              <div className="qr-icon-wrapper">
                <QrCode size={40} className="text-brand-dark" />
              </div>
              <div className="qr-text">
                <span className="qr-title">Scan to</span>
                <span className="qr-subtitle">download the<br/>Flixpay app</span>
              </div>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Right: Ratings */}
            <div className="rating-block">
              <div className="rating-logo">
                 <span>FP</span>
              </div>
              <div>
                <div className="rating-score">
                  <span className="score-num">4.5</span>
                  <div className="stars">
                    {[1,2,3,4].map(i => <Star key={i} size={16} fill="currentColor" className="star-filled" />)}
                    <Star size={16} fill="currentColor" className="star-empty" />
                  </div>
                </div>
                <p className="rating-text">
                  Join 78+ million of <br/> shoppers worldwide.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Visuals Area */}
        <div className="visuals-container">
           <div className="visuals-inner">
             <PhoneMockup />
           </div>
        </div>

      </div>
    </section>
  );
};
