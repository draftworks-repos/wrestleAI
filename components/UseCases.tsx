import React, { useEffect, useRef, useState } from "react";
import {
  User,
  GraduationCap,
  Trophy,
  Target,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import "../styles/UseCases.css";

interface UseCaseProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const useCases: UseCaseProps[] = [
  {
    icon: User,
    title: "Youth Wrestlers",
    description:
      "Build a strong foundation. Develop core techniques and learn the fundamentals of the sport correctly from day one.",
  },
  {
    icon: ShieldCheck,
    title: "High School Athletes",
    description:
      "Prepare for duals, tournaments, and state championships with advanced drilling and tactical feedback.",
  },
  {
    icon: Trophy,
    title: "College Wrestlers",
    description:
      "Refine elite techniques and edge out the competition. Designed for athletes working toward national-level success.",
  },
  {
    icon: Target,
    title: "MMA Fighters",
    description:
      "Sharpen your wrestling base for MMA. Master takedowns, cage control, and elite scrambling and defense.",
  },
  {
    icon: GraduationCap,
    title: "Coaches",
    description:
      "Equip your team with powerful tools to monitor performance, assign drills, and track athlete improvement over the season.",
  },
  {
    icon: HeartHandshake,
    title: "Parents",
    description:
      "Provide structured, safe, and measurable guidance for your children as they grow through the sport of wrestling.",
  },
];

export const UseCases: React.FC = () => {
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
        threshold: 0.2,
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
      className={`use-cases-section ${inView ? "is-animating" : "is-paused"}`}
    >
      <div className="use-cases-container">
        <div className="use-cases-header">
          <h2 className="use-cases-title">
            Who Wrestle AI <span className="text-brand-primary">Is For</span>
          </h2>
          <p className="use-cases-subtitle">
            A modern training ecosystem built for everyone on the mat—from
            beginners to champions.
          </p>
        </div>

        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="use-case-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="use-case-icon-wrapper"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <useCase.icon className="use-case-icon" size={28} />
              </div>
              <h3 className="use-case-card-title">{useCase.title}</h3>
              <p className="use-case-card-desc">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
