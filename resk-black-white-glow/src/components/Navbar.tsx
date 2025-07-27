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
          <a href="/" className="text-2xl font-bold tracking-tight">RESK</a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {["about", "skills", "projects", "experience"].map((item, i) => (
            <a
              key={i}
              href={`#${item}`}
              className="text-sm font-medium hover:text-primary hover:scale-105 transition-all"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a
            href="mailto:reddysantosh1310@gmail.com"
            className="text-sm font-medium hover:text-primary hover:scale-105 transition-all"
          >
            Contact
          </a>
          <Button
            variant="outline"
            className="ml-2 gap-2 hover:scale-105 transition-all"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1nxL_oPNnJ_6z2BYLqH9hBQKy6Wl7xOYa/view?usp=sharing"
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
            className="ml-2 hover:scale-110 transition-all"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="hover:scale-110 transition-all"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-t border-border z-40 shadow-md animate-slideDown">
          <div className="container py-6 px-4 flex flex-col space-y-4">
            {["about", "skills", "projects", "experience"].map((item, i) => (
              <a
                key={i}
                href={`#${item}`}
                className="text-sm font-medium py-2 hover:text-primary hover:scale-105 transition-all"
                onClick={toggleMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a
              href="mailto:reddysantosh1310@gmail.com"
              className="text-sm font-medium py-2 hover:text-primary hover:scale-105 transition-all"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button
              variant="outline"
              className="w-full justify-center gap-2 hover:scale-105 transition-all"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1nxL_oPNnJ_6z2BYLqH9hBQKy6Wl7xOYa/view?usp=sharing"
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
