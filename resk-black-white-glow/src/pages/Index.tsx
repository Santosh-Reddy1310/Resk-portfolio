
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen font-outfit">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
