import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeatureSlider } from "./components/FeatureSlider";
import { Features } from "./components/Features";
import { VideoSection } from "./components/VideoSection";
import { HowItWorks } from "./components/HowItWorks";
import { UseCases } from "./components/UseCases";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { Cta } from "./components/Cta";
import { Benifits } from "./components/Benifits";
import { Footer } from "./components/Footer";
import "./styles/App.css";
import "./styles/animations.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-white">
          <FeatureSlider />
          <VideoSection />
          <Features />
          <HowItWorks />
          <UseCases />
          <Benifits />
          <Testimonials />
          <Faq />
          <Cta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
