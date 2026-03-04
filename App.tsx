import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureSlider } from './components/FeatureSlider';
import { VideoSection } from './components/VideoSection';
import './styles/App.css';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <FeatureSlider />
        <VideoSection />
      </main>
    </div>
  );
}
