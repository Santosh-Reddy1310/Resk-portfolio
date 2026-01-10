import React from 'react';
import { Briefcase, GraduationCap, Heart } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const AboutMe = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/10">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
            About RESK
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground md:text-lg">
            I’m <strong>Reddy Santosh Kumar</strong> (aka <strong>RESK</strong>) — a full stack developer and AI/ML engineer-in-the-making, building tools that blend code, creativity, and cognition. I love solving real-world problems with AI systems, data pipelines, and interfaces that just *feel right*.
          </p>
        </div>

        {/* Grid Sections */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <GraduationCap className="h-6 w-6 text-primary" />,
              title: "Education",
              desc: "B.Tech in Computer Science @ SRK Institute of Technology (Graduating 2026). Specializing in Machine Learning, Data Structures, and Software Engineering — GPA: 8.6"
            },
            {
              icon: <Briefcase className="h-6 w-6 text-primary" />,
              title: "Experience",
              desc: "AI Intern at Mirai School (GenAI projects, LLM prompt engineering), AI/ML Intern at Edunet Foundation (TensorFlow, Transfer Learning), Frontend Dev Intern @ AICTE, and Google Cloud Skills Intern (Vertex AI & Android)."
            },
            {
              icon: <Heart className="h-6 w-6 text-primary" />,
              title: "Passions",
              desc: "LLMs & Generative AI, FastAPI backends, building with n8n, UI storytelling with Tailwind + React, open-source learning, and creating dev memes that slap."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="bg-background p-6 rounded-lg border border-border shadow-sm"
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
