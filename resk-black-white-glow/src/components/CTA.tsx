import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Whether it's web development, UI design, or full-stack apps — I'm open for internships, collaborations, or freelance opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={() => navigate("/contact")}
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 hover:bg-white/10"
              onClick={() => navigate("/projects")}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
