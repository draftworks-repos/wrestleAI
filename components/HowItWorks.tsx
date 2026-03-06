import React, { useEffect, useRef, useState } from "react";
import { UploadCloud, BrainCircuit, Trophy } from "lucide-react";
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

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`how-it-works-section ${inView ? "is-animating" : "is-paused"}`}
    >
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">
            How <span className="text-brand-primary">It Works</span>
          </h2>
          <p className="how-it-works-subtitle">
            Repetition, consistency, and correction. Wrestle AI ensures that you
            are not just drilling, but drilling correctly.
          </p>
        </div>

        <div className="how-steps-grid">
          {steps.map((step, index) => (
            <div
              key={index}
              className="how-step-card"
              style={{ animationDelay: `${index * 1.5}s` }}
            >
              {/* Process Step Indicator Badge */}
              <div className="how-step-badge">Step {step.number}</div>

              {/* Large watermark number */}
              <div
                className="how-step-watermark"
                style={{ animationDelay: `${index * 1.5}s` }}
              >
                {step.number}
              </div>

              <div className="how-step-content">
                <div
                  className="how-step-icon-wrapper"
                  style={{ animationDelay: `${index * 1.5}s` }}
                >
                  <step.icon className="how-step-icon" size={28} />
                </div>
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
