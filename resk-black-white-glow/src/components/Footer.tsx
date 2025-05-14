import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">Reddy Santosh Kumar</div>
            <p className="text-muted-foreground">
              Full Stack Developer | Java Enthusiast | B.Tech Student
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Santosh-Reddy1310"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/reddy-santosh-kumar-a5b9622a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/syntax_error_sk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:reddysantosh1310@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Reddy Santosh Kumar. All rights reserved.
          </div>
          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com/Santosh-Reddy1310"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
