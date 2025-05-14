
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small businesses just getting started with AI chatbots.",
    features: [
      "Up to 1,000 messages per month",
      "Basic customization",
      "Email support",
      "Website integration",
      "Basic analytics"
    ]
  },
  {
    name: "Professional",
    price: "$149",
    description: "Ideal for growing businesses with moderate customer service demands.",
    features: [
      "Up to 10,000 messages per month",
      "Advanced customization",
      "Priority email & chat support",
      "Website & social media integration",
      "Advanced analytics & reporting",
      "Custom workflows"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations with complex requirements.",
    features: [
      "Unlimited messages",
      "Complete customization",
      "Dedicated account manager",
      "All platform integrations",
      "AI training with your data",
      "Custom features development",
      "SLA guarantees"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`flex flex-col rounded-xl border ${plan.popular ? 'border-primary shadow-lg' : 'border-border'} bg-background p-6`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground py-1 px-3 rounded text-sm font-medium w-fit mx-auto mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2 text-center">{plan.name}</h3>
              <div className="text-center mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>
              
              <p className="text-center text-muted-foreground mb-6">{plan.description}</p>
              
              <div className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto">
                <Button 
                  className={`w-full ${plan.popular ? '' : 'variant-outline'}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-muted-foreground">
          <p>All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
