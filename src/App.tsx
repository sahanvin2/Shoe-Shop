import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;