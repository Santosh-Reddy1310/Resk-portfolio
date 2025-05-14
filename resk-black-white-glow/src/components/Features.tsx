
import React from 'react';
import { Bot, Brain, Zap, Shield, Code, Repeat } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Bot className="h-8 w-8" />,
    title: "Conversational AI",
    description: "Natural language processing that understands context and provides human-like responses."
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Continuous Learning",
    description: "Our AI gets smarter with every interaction, constantly improving responses based on feedback."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Instant Responses",
    description: "24/7 availability with lightning-fast response times to keep your customers engaged."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with full GDPR compliance and data protection measures."
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Easy Integration",
    description: "Simple API and pre-built widgets to integrate with your website, app, or CRM in minutes."
  },
  {
    icon: <Repeat className="h-8 w-8" />,
    title: "Seamless Handoffs",
    description: "Smooth transition to human agents when complex issues require personal attention."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 max-w-[800px] mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Powerful Features for Exceptional Support</h2>
          <p className="text-muted-foreground md:text-lg">
            RESK combines cutting-edge AI technology with practical features designed to enhance your customer experience.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Card key={i} className="bg-background border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="p-2 w-fit rounded-md bg-secondary mb-3">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
