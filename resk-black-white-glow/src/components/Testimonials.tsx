
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "RESK has completely transformed our customer support operations. We've reduced response times by 80% and seen a significant boost in customer satisfaction.",
    author: "Sarah Johnson",
    position: "Customer Success Manager",
    company: "TechSolutions Inc."
  },
  {
    quote: "Implementing RESK was surprisingly simple. Within days, our chatbot was handling most common inquiries, freeing our team to focus on complex customer needs.",
    author: "Michael Chen",
    position: "Director of Support",
    company: "GlobalRetail"
  },
  {
    quote: "The AI capabilities of RESK are genuinely impressive. Our customers often don't realize they're chatting with a bot until we tell them. The ROI has been incredible.",
    author: "Jessica Martinez",
    position: "COO",
    company: "Innovate Financial"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Don't just take our word for it. See what our customers have to say about RESK.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-secondary/20 border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="border-t pt-4 flex flex-col items-start">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
