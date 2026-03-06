import React, { useState, useRef, useEffect } from "react";
import "../styles/FeatureSlider.css";

interface FeatureItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    category: "ss1",
    title: "Analyze your video",
    description: "AI analyzes your video and provides deep insights",
    image: "/ss1.webp",
  },
  {
    id: 2,
    category: "ss2",
    title: "Improvement you can make",
    description: "AI suggests improvements based on your video",
    image: "/ss3.webp",
  },
  {
    id: 3,
    category: "ss3",
    title: "Challange of the Day",
    description: "New challange everyday, based on your analysis",
    image: "/ss5.webp",
  },
  {
    id: 4,
    category: "ss4",
    title: "Stance Mode",
    description: "Check your stance and movements live, Get live intructions",
    image: "/ss4.webp",
  },
  {
    id: 5,
    category: "ss5",
    title: "Training Schedule",
    description: "Let AI decide your training schedule based on your analysis",
    image: "/ss2.webp",
  },
];

// Cubic easing for smoother finish than quad
const easeOutCubic = (t: number) => --t * t * t + 1;

export const FeatureSlider: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(3);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Drag State
  const isDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  // Animation Refs
  const updateStateRafId = useRef<number>(0);
  const scrollRafId = useRef<number | null>(null);

  // Initialize scroll position to center item on mount
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const middleIndex = features.findIndex((f) => f.id === 3);

      // Wait for layout to settle
      setTimeout(() => {
        const card = container.querySelector(`[data-id="3"]`) as HTMLElement;
        if (card) {
          // Determine precise position
          const scrollPos =
            card.offsetLeft - container.clientWidth / 2 + card.offsetWidth / 2;
          container.scrollLeft = scrollPos;
        }
      }, 100);
    }
  }, []);

  // Calculate active ID based on center position
  const updateActiveState = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    const cards = container.querySelectorAll(".feature-card");

    let closestId = -1;
    let minDistance = Infinity;

    cards.forEach((card: Element) => {
      const htmlCard = card as HTMLElement;
      const cardCenter = htmlCard.offsetLeft + htmlCard.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        const idAttr = htmlCard.getAttribute("data-id");
        if (idAttr) closestId = parseInt(idAttr);
      }
    });

    if (closestId !== -1) {
      setActiveId(closestId);
    }
  };

  // Passive scroll listener for state updates
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let timeoutId: number;

    const handleScroll = () => {
      // If user is dragging, updateActiveState is called in onMouseMove loop
      if (isDown.current) return;

      window.clearTimeout(timeoutId);
      // Small debounce for scroll events
      timeoutId = window.setTimeout(() => {
        updateActiveState();
      }, 30);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timeoutId);
    };
  }, []);

  // Custom Smooth Scroll Animation
  const animateScrollTo = (target: number, duration: number = 500) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (scrollRafId.current) {
      cancelAnimationFrame(scrollRafId.current);
      scrollRafId.current = null;
    }

    const start = container.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    // Ensure native smooth behavior doesn't interfere
    container.style.scrollBehavior = "auto";
    // Disable snap prevents browser fighting the JS scroll
    container.style.scrollSnapType = "none";

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      if (elapsed < duration) {
        const progress = easeOutCubic(elapsed / duration);
        container.scrollLeft = start + change * progress;
        scrollRafId.current = requestAnimationFrame(animate);
      } else {
        container.scrollLeft = target;
        scrollRafId.current = null;
        // Re-enable snap only after we land exactly on target
        container.style.scrollSnapType = "x mandatory";
      }
    };

    scrollRafId.current = requestAnimationFrame(animate);
  };

  // Mouse Drag Handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;

    // Stop any ongoing auto-scroll
    if (scrollRafId.current) {
      cancelAnimationFrame(scrollRafId.current);
      scrollRafId.current = null;
    }

    isDown.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = scrollContainerRef.current.scrollLeft;

    const container = scrollContainerRef.current;
    container.style.scrollSnapType = "none";
    container.style.scrollBehavior = "auto";
    container.style.cursor = "grabbing";
  };

  const stopDrag = () => {
    if (!isDown.current || !scrollContainerRef.current) return;
    isDown.current = false;
    cancelAnimationFrame(updateStateRafId.current);

    const container = scrollContainerRef.current;
    const endScrollLeft = container.scrollLeft;
    const distanceMoved = endScrollLeft - startScrollLeft.current;

    // Determine Stride
    const cards = Array.from(
      container.querySelectorAll(".feature-card"),
    ) as HTMLElement[];
    if (cards.length === 0) return;

    // Use actual distance between card centers for accuracy
    const stride =
      cards.length > 1
        ? cards[1].offsetLeft - cards[0].offsetLeft
        : cards[0].offsetWidth + 32;

    const startIndex = Math.round(startScrollLeft.current / stride);
    const nearestIndex = Math.round(endScrollLeft / stride);

    const swipeThreshold = 50;
    let targetIndex = startIndex;

    // Smart Navigation Logic
    if (nearestIndex !== startIndex) {
      // Dragged far enough to skip or change cards
      targetIndex = nearestIndex;
    } else {
      // Short drag (flick) handling
      if (distanceMoved > swipeThreshold) {
        targetIndex = Math.min(features.length - 1, startIndex + 1);
      } else if (distanceMoved < -swipeThreshold) {
        targetIndex = Math.max(0, startIndex - 1);
      }
    }

    targetIndex = Math.max(0, Math.min(features.length - 1, targetIndex));

    // Calculate Target Pixel
    const targetCard = container.querySelector(
      `[data-id="${features[targetIndex].id}"]`,
    ) as HTMLElement;

    if (targetCard) {
      const scrollPos =
        targetCard.offsetLeft -
        container.clientWidth / 2 +
        targetCard.offsetWidth / 2;
      // Use custom animation instead of native scrollTo
      animateScrollTo(scrollPos);
    }

    container.style.cursor = "grab";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollContainerRef.current) return;

    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX.current;

    scrollContainerRef.current.scrollLeft = startScrollLeft.current - walk;

    // Smooth active state update while dragging
    cancelAnimationFrame(updateStateRafId.current);
    updateStateRafId.current = requestAnimationFrame(updateActiveState);
  };

  // Helper for Dots click
  const scrollToId = (id: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const targetCard = container.querySelector(
      `[data-id="${id}"]`,
    ) as HTMLElement;

    if (targetCard) {
      const scrollPos =
        targetCard.offsetLeft -
        container.clientWidth / 2 +
        targetCard.offsetWidth / 2;
      animateScrollTo(scrollPos);
    }
  };

  return (
    <section className="feature-section">
      <div className="feature-container">
        <div className="feature-header">
          <h2 className="feature-title">
            Showcasing the <span className="text-brand-primary">Future</span> of
            Mobile Commerce
          </h2>
          <p className="feature-subtitle">
            Experience a fluid interface built for modern needs. Swipe to
            explore the ecosystem.
          </p>
        </div>

        <div className="slider-relative-wrapper">
          <div
            className="slider-track no-scrollbar"
            ref={scrollContainerRef}
            style={{ position: "relative" }} // Ensures offsetLeft is relative to track if needed
            onMouseDown={onMouseDown}
            onMouseLeave={stopDrag}
            onMouseUp={stopDrag}
            onMouseMove={onMouseMove}
          >
            {features.map((feature) => (
              <div
                key={feature.id}
                data-id={feature.id}
                className={`feature-card ${activeId === feature.id ? "active" : ""}`}
              >
                <div className="card-visual-container">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="card-image"
                    loading="lazy"
                    draggable="false"
                  />
                  <div className="card-shine"></div>
                </div>

                <div className="card-info">
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-desc">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="slider-dots">
          {features.map((f) => (
            <button
              key={f.id}
              className={`slider-dot ${activeId === f.id ? "active" : ""}`}
              onClick={() => scrollToId(f.id)}
              aria-label={`Go to slide ${f.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
