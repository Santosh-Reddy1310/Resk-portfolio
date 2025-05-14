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
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
            About RESK
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground md:text-lg">
            I'm a B.Tech student at SRK Institute of Technology with a passion for software development,
            AI technologies, and creating innovative solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[{
            icon: <GraduationCap className="h-6 w-6 text-primary" />,
            title: "Education",
            desc: "B.Tech student at SRK Institute of Technology with focus on computer science and engineering."
          }, {
            icon: <Briefcase className="h-6 w-6 text-primary" />,
            title: "Career Focus",
            desc: "Open to exploring roles in software development, AI, and technology industries, with a preference for full-stack development."
          }, {
            icon: <Heart className="h-6 w-6 text-primary" />,
            title: "Interests",
            desc: "Java Development, Full Stack Web Development, Data Structures and Algorithms (DSA), AI technology, and Animation Video Creation."
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-background p-6 rounded-lg border border-border shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-4">Other Roles & Involvements</h3>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>LetsUpgrade Student Ambassador (March 2025)</li>
            <li>Internshala Student Partner (Promoting on LinkedIn)</li>
            <li>Actively participates in tech events and paper presentations</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
