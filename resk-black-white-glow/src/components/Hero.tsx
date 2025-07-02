import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6 dark:text-white">
        <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20 max-w-2xl mx-auto text-center">
            
            {/* Profile Image */}
            <div className="flex justify-center">
              <img
                src="/Profile.jpg"
                alt="Reddy Santosh Kumar"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary object-cover shadow-lg"
              />
            </div>

            {/* Tagline */}
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mt-2">
              Full Stack Developer | AI Enthusiast
            </div>

            {/* Name */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Reddy Santosh Kumar
            </h1>

            {/* Bio */}
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
              I craft intelligent digital experiences — blending ML magic ✨ with full stack finesse ⚙️.
              Currently building real-time dashboards, medical AI tools, and e-waste classifiers.
              Let’s innovate with code and curiosity.
            </p>

            {/* Location */}
            <div className="flex justify-center items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Vijayawada, Andhra Pradesh, India</span>
            </div>

            {/* Buttons */}
            <div className="flex justify-center flex-wrap gap-4 pt-2">
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

            {/* Social Icons */}
            <div className="flex justify-center items-center gap-4 pt-4">
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
