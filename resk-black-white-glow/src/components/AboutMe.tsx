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
            I’m Reddy Santosh Kumar (a.k.a. RESK) — a passionate full stack developer and AI/ML enthusiast from SRK Institute of Technology. I love crafting intelligent systems, building web apps, and blending design with logic to bring powerful ideas to life.
          </p>
        </div>

        {/* Grid Sections */}
        <div className="grid gap-8 md:grid-cols-3">
          {[{
            icon: <GraduationCap className="h-6 w-6 text-primary" />,
            title: "Education",
            desc: "Final-year B.Tech student in CSE at SRKIT, Vijayawada. Specializing in Artificial Intelligence, Full Stack Development, and Data-Driven Systems."
          }, {
            icon: <Briefcase className="h-6 w-6 text-primary" />,
            title: "Career Focus",
            desc: "Aiming for roles in AI/ML, GenAI Engineering, and Full Stack Web Development. I enjoy solving real-world problems using clean UI and smart backend logic."
          }, {
            icon: <Heart className="h-6 w-6 text-primary" />,
            title: "Interests",
            desc: "Java Development, Next.js + Tailwind UI, LLM Prompt Engineering, n8n Automation, DALL·E & Midjourney Creation, Tech Blogging, and Dev Memes."
          }].map((item, i) => (
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

        {/* Side Involvements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-background p-6 rounded-lg border border-border shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-4">Other Roles & Involvements</h3>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>LetsUpgrade Student Ambassador (Mar 2025)</li>
            <li>Internshala Student Partner — promoted internships on LinkedIn</li>
            <li>Presented papers and participated in tech events & meetups</li>
            <li>Creating dev content, tutorials, and short-form tech videos</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
