import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 items-center">
          <div className="space-y-4 backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20 max-w-2xl mx-auto">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              Full Stack Developer
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Reddy Santosh Kumar
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              B.Tech student with a passion for Java Development, Full Stack Web Development, and AI technology.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Vijayawada, Andhra Pradesh, India</span>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/reddy-santosh-kumar-a5b9622a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2">
                  Contact Me <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#projects">
                <Button size="lg" variant="outline" className="gap-2">
                  View Projects
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/Santosh-Reddy1310"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/reddy-santosh-kumar-a5b9622a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/syntax_error_sk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:reddysantosh1310@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;