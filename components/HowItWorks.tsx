import React from "react";
import { UploadCloud, BrainCircuit, Trophy } from "lucide-react";
import "../styles/HowItWorks.css";
import "../styles/animations.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/HowItWorks.css";

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: StepProps[] = [
  {
    number: "1",
    icon: UploadCloud,
    title: "Upload & Analyze",
    description:
      "Simply upload your practice clips or match footage to the app. Our advanced AI instantly analyzes your stance, footwork, balance, and execution.",
  },
  {
    number: "2",
    icon: BrainCircuit,
    title: "Train & Correct",
    description:
      "Receive dynamic training programs tailored to your exact weaknesses. Focus on precise drills to correct errors and build better wrestling habits.",
  },
  {
    number: "3",
    icon: Trophy,
    title: "Track & Dominate",
    description:
      "Watch your skills evolve with detailed progress tracking and earn points in Gamified Practice Mode. Climb the ranks and dominate on the mat.",
  },
];

const StepCard: React.FC<{ step: StepProps; index: number }> = ({
  step,
  index,
}) => {
  const [ref, inView] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`how-step-card ${inView ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="how-step-card-accent"></div>

      <div className="how-step-header">
        <div className="how-step-icon-wrapper">
          <step.icon className="how-step-icon" size={24} />
        </div>
        <div className="how-step-badge">Phase 0{step.number}</div>
      </div>

      <div className="how-step-content">
        <h3 className="how-step-title">{step.title}</h3>
        <p className="how-step-desc">{step.description}</p>
      </div>

      {/* Large watermark number */}
      <div className="how-step-watermark">{step.number}</div>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  const [headerRef, headerInView] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <div ref={headerRef} className="how-it-works-header">
          <span
            className={`section-label inline-block ${headerInView ? "animate-fade-in" : "opacity-0"}`}
          >
            Process
          </span>
          <h2
            className={`how-it-works-title ${headerInView ? "animate-fade-in delay-100" : "opacity-0"}`}
          >
            How <span className="text-brand-primary">It Works</span>
          </h2>
          <p
            className={`how-it-works-subtitle ${headerInView ? "animate-fade-in delay-200" : "opacity-0"}`}
          >
            Repetition, consistency, and correction. Wrestle AI ensures that you
            are not just drilling, but drilling correctly.
          </p>
        </div>

        <div className="how-steps-grid">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
