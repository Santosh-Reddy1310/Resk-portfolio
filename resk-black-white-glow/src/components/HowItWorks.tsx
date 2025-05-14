
import React from 'react';
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Setup Your Account",
    description: "Create your RESK account and define your business needs, industry, and target audience."
  },
  {
    number: "02",
    title: "Train Your Chatbot",
    description: "Upload your FAQs, knowledge base, and specific responses to tailor the AI to your brand voice."
  },
  {
    number: "03",
    title: "Integrate & Deploy",
    description: "Add RESK to your website, mobile app, or messaging platforms with our simple embedding options."
  },
  {
    number: "04",
    title: "Monitor & Improve",
    description: "Analyze performance metrics, customer satisfaction, and continuously enhance your chatbot's capabilities."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              Simple Implementation, Powerful Results
            </h2>
            <p className="text-muted-foreground md:text-lg mb-8">
              Get started with RESK in just a few steps and transform your customer interactions immediately.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary font-semibold">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-secondary/30 p-8 rounded-xl border">
            <h3 className="text-xl font-semibold mb-6">Why Businesses Choose RESK</h3>
            
            <div className="space-y-4">
              {[
                "Reduce support costs by up to 70%",
                "Increase customer satisfaction by 35%",
                "Handle 80% of common inquiries automatically",
                "Available 24/7 across all time zones",
                "Multilingual support for global audience",
                "Detailed analytics and performance tracking"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
