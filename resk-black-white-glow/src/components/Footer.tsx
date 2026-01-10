import React from 'react';
import { Github, Linkedin, Mail, Instagram, Sparkles } from "lucide-react";
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Santosh-Reddy1310',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/reddy-santosh-kumar-a5b9622a2/',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/klyn.am/',
      icon: Instagram,
    },
    {
      name: 'Email',
      url: 'mailto:reddysantosh1310@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/20 border-t border-border/50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-4"
          >
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-lg">RESK</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              AI-centric full stack engineer crafting intelligent solutions and beautiful experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-semibold text-sm uppercase tracking-wider">Navigation</h3>
            <div className="flex flex-col gap-2">
              <a href="/#hero" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Home</a>
              <a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</a>
              <a href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Projects</a>
              <a href="/resume" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Resume</a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-semibold text-sm uppercase tracking-wider">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    aria-label={link.name}
                    className="h-10 w-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-muted-foreground">
          <p>© {currentYear} Reddy Santosh Kumar. All rights reserved.</p>
          <p>Designed & Built with <span className="text-primary">✨</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
