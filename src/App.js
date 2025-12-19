import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        {/* Add more sections here */}
      </main>
    </div>
  );
}

export default App;
