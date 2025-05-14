import React from 'react';
import { Award, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const certifications = [
  { title: "Java DSA Course", issuer: "CodeSignal" },
  { title: "Java Full Stack Short-Term Training", issuer: "Braniovision & AICTE" },
  { title: "HTML, CSS, JavaScript for Beginners", issuer: "Coddy.tech" },
  { title: "Python Essentials 1 & 2", issuer: "Cisco Net Academy" },
  { title: "SQL", issuer: "HackerRank" },
  { title: "Web Design: Beginner to Advanced", issuer: "Udemy" },
  { title: "Full Stack MERN Internship", issuer: "AICTE & EY GDS" },
  { title: "Google Cloud Generative AI", issuer: "EduSkills & APSCHE" },
  { title: "Google Android Development", issuer: "EduSkills & APSCHE" },
  { title: "Power BI for Beginners", issuer: "Simplilearn" },
  { title: "Excel with Microsoft", issuer: "Simplilearn" },
  { title: "Postman API Fundamentals Student Expert", issuer: "Postman" },
  { title: "Software Engineer Intern", issuer: "HackerRank" },
  { title: "Software Engineering Job Simulation", issuer: "Electronic Arts via Forage" },
  { title: "Coding: Development and Advanced Engineering", issuer: "Accenture via Forage" }
];

const achievements = [
  "5-Star in Java , Python and SQL on HackerRank",
  "Rank: 1 on HackerRank",
  "Completed SQL , Java and Python journey's on HackerRank"
];

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
            Certifications & Achievements
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground md:text-lg">
            My professional certifications and achievements in the tech industry.
          </p>
        </div>

        {/* Animated certification cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
            >
              <Card className="bg-background hover:bg-secondary/5 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <CardTitle className="text-base">{cert.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Issued by {cert.issuer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Animated achievements section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-6">HackerRank Achievements</h3>
          <div className="max-w-[600px] mx-auto bg-background p-6 rounded-lg border border-border">
            {achievements.map((achievement, i) => (
              <div key={i} className="flex items-start gap-3 mb-4">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
