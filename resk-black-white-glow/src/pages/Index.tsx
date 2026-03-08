
import React, { Suspense, lazy } from 'react';
import { Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import Hero from '@/components/Hero';
import {
  HeroSkeleton,
  AboutSkeleton,
  SkillsSkeleton,
  ProjectsSkeleton,
  CertificationsSkeleton,
  ContactSkeleton,
} from '@/components/Skeletons';

// Lazy load heavy components
const AboutMe = lazy(() => import('@/components/AboutMe'));
const Skills = lazy(() => import('@/components/Skills'));
const Projects = lazy(() => import('@/components/Projects'));
const Certifications = lazy(() => import('@/components/Certifications'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

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
      <main className="flex-1">
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<AboutSkeleton />}>
            <AboutMe />
          </Suspense>
          <Suspense fallback={<SkillsSkeleton />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<ProjectsSkeleton />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<CertificationsSkeleton />}>
            <Certifications />
          </Suspense>
        </div>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
