import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { name, email, subject, message } = formData;

      const { data, error } = await supabase.functions.invoke('send-email', {
        body: { name, email, subject, message }
      });

      if (error) throw error;

      toast.success("Message sent successfully! I'll get back to you soon.");

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground md:text-lg">
            Feel free to contact me for any work or suggestions.
          </p>
        </div>

        <div className="max-w-[600px] mx-auto">
          <div className="bg-background p-6 rounded-lg border border-border shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-secondary/20 border-border"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="bg-secondary/20 border-border"
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="bg-secondary/20 border-border"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="bg-secondary/20 border-border min-h-[120px]"
                  required
                />
              </div>
              <a href="mailto:reddysantosh1310@gmail.com">
                <Button  type="submit" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="h-4 w-4" />
              </Button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;