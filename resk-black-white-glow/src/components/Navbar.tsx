import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AlignJustify, X, Download, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">RESK</span>
          </a>
        </div>

        <div className="hidden md:flex md:items-center md:gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary hover:scale-105 transform transition-all duration-200">
            About
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-primary hover:scale-105 transform transition-all duration-200">
            Skills
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary hover:scale-105 transform transition-all duration-200">
            Projects
          </a>
          <a href="#certifications" className="text-sm font-medium hover:text-primary hover:scale-105 transform transition-all duration-200">
            Certifications
          </a>
          <a href="mailto:reddysantosh1310@gmail.com" className="text-sm font-medium hover:text-primary hover:scale-105 transform transition-all duration-200">
            Contact
          </a>
          <Button
            variant="outline"
            className="ml-2 gap-2 hover:scale-105 transform transition-all duration-200"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1Ml6DoOUUwrl0NFfC25K-cM9iC759lfmj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="ml-2 transition-all duration-300 transform hover:scale-110"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="transition-all duration-300 transform hover:scale-110"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu with Slide-In Animation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border transform translate-x-full transition-all duration-500 ease-in-out">
          <div className="container py-4 px-4 flex flex-col space-y-4">
            <a href="#about" className="text-sm font-medium py-2 hover:text-primary hover:scale-105 transform transition-all duration-200" onClick={toggleMenu}>
              About
            </a>
            <a href="#skills" className="text-sm font-medium py-2 hover:text-primary hover:scale-105 transform transition-all duration-200" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium py-2 hover:text-primary hover:scale-105 transform transition-all duration-200" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#certifications" className="text-sm font-medium py-2 hover:text-primary hover:scale-105 transform transition-all duration-200" onClick={toggleMenu}>
              Certifications
            </a>
            <a href="mailto:reddysantosh1310@gmail.com" className="text-sm font-medium py-2 hover:text-primary hover:scale-105 transform transition-all duration-200" onClick={toggleMenu}>
              Contact
            </a>
            <Button
              variant="outline"
              className="w-full justify-center gap-2 hover:scale-105 transform transition-all duration-200"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1Ml6DoOUUwrl0NFfC25K-cM9iC759lfmj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;