import React from "react";
import {
  User,
  GraduationCap,
  Trophy,
  Target,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import "../styles/UseCases.css";
import "../styles/animations.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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

const UseCaseCard: React.FC<{ useCase: UseCaseProps; index: number }> = ({
  useCase,
  index,
}) => {
  const [ref, inView] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`use-case-card ${inView ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="use-case-icon-wrapper">
        <useCase.icon className="use-case-icon" size={28} />
      </div>
      <h3 className="use-case-card-title">{useCase.title}</h3>
      <p className="use-case-card-desc">{useCase.description}</p>
    </div>
  );
};

export const UseCases: React.FC = () => {
  const [headerRef, headerInView] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="use-cases-section">
      <div className="use-cases-container">
        <div ref={headerRef} className="use-cases-header">
          <span
            className={`section-label inline-block ${headerInView ? "animate-fade-in" : "opacity-0"}`}
          >
            Audience
          </span>
          <h2
            className={`use-cases-title ${headerInView ? "animate-fade-in delay-100" : "opacity-0"}`}
          >
            Who Wrestle AI <span className="text-brand-primary">Is For</span>
          </h2>
          <p
            className={`use-cases-subtitle ${headerInView ? "animate-fade-in delay-200" : "opacity-0"}`}
          >
            A modern training ecosystem built for everyone on the mat—from
            beginners to champions.
          </p>
        </div>

        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
