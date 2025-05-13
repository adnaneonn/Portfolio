import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import SecuritySimulation from './sections/SecuritySimulation';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './Footer';
import SecuritySolutions from './sections/SecuritySolutions';

export const Router: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Certifications />
      <Projects />
      <SecuritySolutions />
      <SecuritySimulation />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};