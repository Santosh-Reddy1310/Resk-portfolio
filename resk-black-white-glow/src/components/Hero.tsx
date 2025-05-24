import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";
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
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#E3E3E3]">
      <div className="container relative z-10 px-4 md:px-6 dark:text-white">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="space-y-4 backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              Full Stack Developer
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Reddy Santosh Kumar
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              B.Tech student with a passion for Java Development, Full Stack Web Development, and AI technology.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
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

          {/* Spline 3D Model */}
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Suspense fallback={<div className="text-center text-white">Loading 3D...</div>}>
              <Spline scene="https://prod.spline.design/hXmAL42wdfOe77Nr/scene.splinecode" />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
