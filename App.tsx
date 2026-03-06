import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeatureSlider } from "./components/FeatureSlider";
import { CoreFeature } from "./components/CoreFeature";
import { VideoSection } from "./components/VideoSection";
import { HowItWorks } from "./components/HowItWorks";
import { UseCases } from "./components/UseCases";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";
import "./styles/App.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <FeatureSlider />
        <VideoSection />
        <HowItWorks />
        <CoreFeature />
        <UseCases />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
