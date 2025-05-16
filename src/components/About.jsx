
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 w-full max-w-screen-xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="numbered-heading text-foreground"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="md:col-span-3 space-y-6 text-base md:text-lg text-muted-foreground"
          >
            <p>
              Hello! I'm Jasser, a software engineer based in San Francisco, CA.
              I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
              My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>
            <p>
              Shortly after graduating from <a href="#" className="text-primary hover:underline">Northeastern University</a>, I joined the engineering team at <a href="#" className="text-primary hover:underline">Upstatement</a> where I work on a wide variety of interesting and meaningful projects on a daily basis.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm text-muted-foreground">
              {skills.map((skill, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: (i) => ({
                      opacity: 1,
                      x: 0,
                      transition: { delay: i * 0.1 + 0.3, duration: 0.4 },
                    }),
                  }}
                  className="flex items-center"
                >
                  <span className="text-primary mr-2">▹</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="md:col-span-2 relative group"
          >
            <div className="relative w-full max-w-xs mx-auto md:mx-0 aspect-square rounded">
              <div className="absolute inset-0 bg-primary rounded transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <img 
                class="absolute inset-0 w-full h-full object-cover rounded grayscale transition-all duration-300 group-hover:grayscale-0"
                alt="Jasser Ben Jomaa professional headshot" src="https://images.unsplash.com/photo-1544212408-c711b7c19b92" />
              <div className="absolute inset-0 border-2 border-primary rounded transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
