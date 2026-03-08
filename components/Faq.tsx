import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "../styles/Faq.css";

interface FaqItemProps {
  question: string;
  answer: string;
}

const faqs: FaqItemProps[] = [
  {
    question: "What is Wrestle AI?",
    answer:
      "It is the first dedicated AI-powered wrestling training platform designed to help athletes at every level improve technique, conditioning, and mindset through video analysis and dynamic programming.",
  },
  {
    question: "How does the AI Video Analysis work?",
    answer:
      "Simply upload your practice clips or match footage, and our advanced AI instantly analyzes your stance, footwork, balance, and execution to provide actionable feedback.",
  },
  {
    question: "Who can benefit from Wrestle AI?",
    answer:
      "Everyone on the mat! It's built for youth wrestlers, high school/college athletes, MMA fighters, and even coaches and parents looking to guide their athletes.",
  },
  {
    question: "Is there a gamified Practice Mode?",
    answer:
      "Yes. You can earn points, level up, and track streaks while working on fundamentals like shots, sprawls, and escapes in our Gamified Practice Mode.",
  },
  {
    question: "Can coaches use this platform for their teams?",
    answer:
      "Absolutely. Coaches can use Wrestle AI to monitor athlete performance, assign specific drills, and track improvement over the course of the season.",
  },
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="section-label">FAQ</span>
          <h2 className="faq-title">
            Frequently Asked{" "}
            <span className="text-brand-primary">Questions</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about the Wrestle AI platform.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <h3 className="faq-question-text">{faq.question}</h3>
                  <div className="faq-icon-wrapper">
                    <ChevronDown size={20} className="faq-chevron" />
                  </div>
                </button>

                <div className="faq-answer-wrapper">
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
