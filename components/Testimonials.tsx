import React, { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/Testimonials.css";

interface TestimonialProps {
  id: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    quote:
      "My son's technique has improved massively since using Wrestle AI. The step-by-step breakdowns and gamification keep him engaged and excited to practice every day. It's like having a private coach available 24/7.",
    name: "Michael T.",
    role: "Parent of Youth Wrestler",
    initials: "MT",
  },
  {
    id: 2,
    quote:
      "I use the video analysis tool to break down all my tournament matches. Seeing my balance shifts and stance errors highlighted by AI instantly helped me fix leaks in my defense before the state championships.",
    name: "Elijah B.",
    role: "High School State Qualifier",
    initials: "EB",
  },
  {
    id: 3,
    quote:
      "At the collegiate level, the margins are razor thin. The dynamic training programs have helped me optimize my conditioning and focus specifically on my high-crotch setups. An absolute game changer for high-level athletes.",
    name: "Marcus J.",
    role: "D1 College Wrestler",
    initials: "MJ",
  },
  {
    id: 4,
    quote:
      "As an MMA fighter, maintaining a strong wrestling base is critical for cage control. The Impossible Mode drills have pushed my scrambling and endurance past what I thought was my limit.",
    name: "Sarah C.",
    role: "Pro MMA Fighter",
    initials: "SC",
  },
  {
    id: 5,
    quote:
      "It allows me to assign customized drills to my athletes and monitor their progress. It takes the guesswork out of off-season training and ensures my wrestlers are actually improving when I'm not in the room.",
    name: "Coach Davis",
    role: "Head Wrestling Coach",
    initials: "CD",
  },
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // 6s per slide

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Helper to determine the CSS class based on the card's relative position to the active index
  const getCardPositionClass = (index: number) => {
    const lastIndex = testimonials.length - 1;

    if (index === activeIndex) return "test-card-active";

    if (
      index === activeIndex - 1 ||
      (activeIndex === 0 && index === lastIndex)
    ) {
      return "test-card-prev";
    }

    if (
      index === activeIndex + 1 ||
      (activeIndex === lastIndex && index === 0)
    ) {
      return "test-card-next";
    }

    return "test-card-hidden";
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="section-label">Testimonials</span>
          <h2 className="testimonials-title">
            Real <span className="text-brand-primary">Results</span>
          </h2>
          <p className="testimonials-subtitle">
            See how athletes, coaches, and parents are transforming their
            training with Wrestle AI.
          </p>
        </div>

        <div className="testimonials-slider-wrapper">
          {/* Main 3D Stage */}
          <div className="testimonials-stage">
            {testimonials.map((test, index) => {
              const positionClass = getCardPositionClass(index);

              return (
                <div
                  key={test.id}
                  className={`testimonial-card ${positionClass}`}
                  onClick={() => {
                    // Make clicking the side cards automatically focus them
                    if (positionClass === "test-card-prev") handlePrev();
                    if (positionClass === "test-card-next") handleNext();
                  }}
                >
                  <Quote className="test-quote-icon" size={48} />

                  <div className="test-content">
                    <p className="test-quote-text">"{test.quote}"</p>
                  </div>

                  <div className="test-author-row">
                    <div className="test-avatar">
                      <div className="test-avatar-glow"></div>
                      <span className="test-initials">{test.initials}</span>
                    </div>
                    <div className="test-author-info">
                      <h4 className="test-author-name">{test.name}</h4>
                      <p className="test-author-role">{test.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="testimonials-controls">
            <button
              className="test-nav-btn prev"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="test-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`test-dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="test-nav-btn next"
              onClick={handleNext}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
