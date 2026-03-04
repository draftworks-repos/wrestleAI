import React from 'react';
import { Play, Zap, ShieldCheck, Coins } from 'lucide-react';
import '../styles/VideoSection.css';

export const VideoSection: React.FC = () => {
  return (
    <section className="video-section">
      <div className="video-bg-decoration">
        <div className="decoration-blob"></div>
      </div>

      <div className="video-container">
        
        {/* Header */}
        <div className="video-header">
            <span className="video-label">See it in action</span>
            <h2 className="video-title">Experience the <span className="text-brand-primary">future</span> of shopping</h2>
            <p className="video-subtitle">
              Watch how Flixpay transforms your daily transactions into a seamless, rewarding journey with just a single tap.
            </p>
        </div>

        {/* Video Wrapper */}
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
                    <Play size={32} fill="currentColor" className="play-icon" />
                </div>
            </div>

            {/* Floating Info Badge - Left */}
            <div className="video-floating-badge badge-left">
                <div className="badge-icon">
                    <Zap size={24} fill="currentColor" />
                </div>
                <div>
                    <span className="badge-text">Instant Checkout</span>
                    <span className="badge-sub">Powered by AI</span>
                </div>
            </div>

            {/* Floating Info Badge - Right */}
            <div className="video-floating-badge badge-right">
                <div className="badge-icon" style={{color: '#4ade80'}}>
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <span className="badge-text">Secure Payment</span>
                    <span className="badge-sub">Bank-grade security</span>
                </div>
            </div>

            {/* Floating Info Badge - Bottom Right */}
            <div className="video-floating-badge badge-bottom-right">
                <div className="badge-icon" style={{color: '#facc15'}}>
                    <Coins size={24} />
                </div>
                <div>
                    <span className="badge-text">5% Cashback</span>
                    <span className="badge-sub">On every purchase</span>
                </div>
            </div>
        </a>

      </div>
    </section>
  );
};
