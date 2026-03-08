import React from "react";
import { CheckCircle2 } from "lucide-react";
import "../styles/Benifits.css";
import "../styles/animations.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface BenefitItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const benefits: BenefitItem[] = [
  {
    icon: CheckCircle2,
    title: "Fix Mistakes Faster",
    description: "AI highlights technique errors for targeted improvement.",
  },
  {
    icon: CheckCircle2,
    title: "Train With a Plan",
    description: "Personalized drills remove guesswork to focus your sessions.",
  },
  {
    icon: CheckCircle2,
    title: "Improve Match IQ",
    description: "Learn advanced setups, reactions, and chain attacks.",
  },
];

const BenefitCard: React.FC<{ benefit: BenefitItem; index: number }> = ({
  benefit,
  index,
}) => {
  const [ref, inView] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`benefit-item ${inView ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${(index + 2) * 100}ms` }}
    >
      <div className="benefit-icon-wrapper">
        <benefit.icon className="benefit-icon" size={24} />
      </div>
      <div className="benefit-item-content">
        <h3 className="benefit-item-title">{benefit.title}</h3>
        <p className="benefit-item-desc">{benefit.description}</p>
      </div>
    </div>
  );
};

export const Benifits: React.FC = () => {
  const [headerRef, headerInView] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [mockupRef, mockupInView] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="benefits-section">
      <div className="benefits-bg">
        <div className="benefits-container">
          <div className="benefits-content-grid">
            {/* Left Content Column */}
            <div ref={headerRef} className="benefits-text-column">
              <span
                className={`section-label inline-block ${headerInView ? "animate-fade-in" : "opacity-0"}`}
              >
                Benefits
              </span>
              <h2
                className={`benefits-title ${headerInView ? "animate-fade-in delay-100" : "opacity-0"}`}
              >
                Benefits of Training with{" "}
                <span className="text-brand-primary">Wrestle AI</span>
              </h2>
              <p
                className={`benefits-subtitle ${headerInView ? "animate-fade-in delay-200" : "opacity-0"}`}
              >
                Train smarter with AI feedback and personalized drills to
                sharpen technique and build match IQ.
              </p>

              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <BenefitCard key={index} benefit={benefit} index={index} />
                ))}
              </div>
            </div>
            {/* Right Mockup Column */}
            <div
              ref={mockupRef}
              className={`benefits-mockup-column ${mockupInView ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "800ms" }}
            >
              <div className="benefits-mockup-wrapper">
                <img
                  src="/bento-5.png"
                  alt="App Interface Mockup"
                  className="benefits-mockup-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
