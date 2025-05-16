
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Skills = () => {
  const skillsList = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "HTML & (S)CSS",
    "Tailwind CSS",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "Git & GitHub",
    "Docker",
    "AWS (EC2, S3, Lambda)",
    "CI/CD (GitHub Actions, Jenkins)",
    "Jest & React Testing Library",
    "Cypress",
    "Figma",
    "Agile Methodologies",
    "RESTful APIs",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 w-full max-w-screen-xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="numbered-heading text-foreground"
        >
          My Tech Stack
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="max-w-3xl"
        >
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            I've worked with a variety of technologies in the web development world,
            from back-end to front-end. I'm always eager to learn new things and
            expand my skillset. Here are some of the tools and technologies I use regularly:
          </p>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-3">
            {skillsList.map((skill, i) => (
              <motion.li
                key={skill}
                custom={i}
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center text-sm font-mono text-muted-foreground"
              >
                <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
