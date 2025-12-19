import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandSection from './components/BrandSection';
import ServicesGrid from './components/ServicesGrid';
import InfrastructureTimeline from './components/InfrastructureTimeline';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <BrandSection />
        <ServicesGrid />
        <InfrastructureTimeline />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
