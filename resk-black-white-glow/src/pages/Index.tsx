
import React from 'react';
import { Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const navItems = [
  { name: 'Home', url: '#hero', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Resume', url: '/resume', icon: FileText },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen font-outfit">
      <NavBar items={navItems} />
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
