import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Instagram,
} from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container px-4 md:px-6 text-center text-foreground">
        <div className="max-w-2xl mx-auto">
          <div className="relative px-6 py-8">
            <div
              className="absolute inset-0 -translate-y-3 translate-x-3 rounded-[32px] bg-gradient-to-br from-slate-900/10 via-slate-900/5 to-slate-900/0 opacity-90 blur-3xl pointer-events-none"
              aria-hidden
            />
            <div className="relative space-y-6 backdrop-blur-sm bg-white/80 dark:bg-slate-950/70 p-6 rounded-[32px] border border-border shadow-[0_25px_80px_rgba(15,23,42,0.15)]">
              {/* Profile Image */}
              <img
                src="/Profile.jpg"
                alt="Reddy Santosh Kumar"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary mx-auto shadow-lg object-cover"
              />

              {/* Tagline - centered */}
              <div className="flex justify-center mt-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                  Full Stack Developer | AI Enthusiast
                </div>
              </div>

              {/* Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Reddy Santosh Kumar
              </h1>

              {/* Bio */}
              <p className="text-muted-foreground md:text-xl max-w-xl mx-auto">
                I blend ML magic ✨ with full stack finesse ⚙️ — building real-time dashboards, medical AI tools, and more.
              </p>

              {/* Location */}
              <div className="flex justify-center items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Vijayawada, Andhra Pradesh, India</span>
              </div>

              {/* CTA Buttons */}
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
              <div className="flex justify-center items-center gap-4 pt-4 text-muted-foreground">
                <a
                  href="https://github.com/Santosh-Reddy1310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/reddy-santosh-kumar-a5b9622a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/klyn.am/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="mailto:reddysantosh1310@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
