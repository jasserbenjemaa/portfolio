
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Software Engineer",
      duration: "Jan 2022 - Present",
      location: "San Francisco, CA",
      tasks: [
        "Led development of a new client-facing dashboard using React, Redux, and TypeScript, improving data visualization and user engagement by 25%.",
        "Architected and implemented a scalable microservices backend with Node.js and Express, handling over 1 million daily requests.",
        "Mentored junior engineers, conducted code reviews, and established best practices for a team of 5 developers.",
        "Collaborated with product managers and designers to define project requirements and deliver features on time.",
      ],
    },
    {
      company: "Web Innovators Co.",
      role: "Full Stack Developer",
      duration: "Jun 2019 - Dec 2021",
      location: "Boston, MA",
      tasks: [
        "Developed and maintained full-stack web applications for various clients using MERN stack.",
        "Integrated third-party APIs for payment processing, mapping services, and social media authentication.",
        "Improved application performance by optimizing database queries and implementing server-side rendering with Next.js.",
        "Participated in agile development cycles, including sprint planning, daily stand-ups, and retrospectives.",
      ],
    },
    {
      company: "Digital Creations Agency",
      role: "Junior Web Developer",
      duration: "May 2018 - May 2019",
      location: "Remote",
      tasks: [
        "Assisted in building responsive websites for small businesses using HTML, CSS, JavaScript, and WordPress.",
        "Contributed to frontend development tasks, focusing on UI/UX improvements and cross-browser compatibility.",
        "Learned and applied version control (Git) and project management tools (Jira).",
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 w-full max-w-screen-xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="numbered-heading text-foreground"
        >
          Where I've Worked
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Tabs defaultValue={experiences[0].company} className="flex flex-col md:flex-row gap-8">
            <TabsList className="flex md:flex-col md:items-start md:w-auto h-auto bg-transparent p-0 shrink-0">
              {experiences.map((exp) => (
                <TabsTrigger
                  key={exp.company}
                  value={exp.company}
                  className="w-full md:w-auto justify-start px-4 py-3 text-left font-mono text-sm whitespace-normal
                             data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none
                             hover:bg-primary/5 hover:text-primary
                             md:border-l-2 md:border-border md:data-[state=active]:border-primary"
                >
                  {exp.company}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-grow">
              {experiences.map((exp) => (
                <TabsContent key={exp.company} value={exp.company} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-medium text-foreground mb-1">
                      {exp.role}{" "}
                      <span className="text-primary">@ {exp.company}</span>
                    </h3>
                    <p className="font-mono text-sm text-muted-foreground mb-4">
                      {exp.duration} &bull; {exp.location}
                    </p>
                    <ul className="space-y-3">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-3 mt-1">▹</span>
                          <p className="text-muted-foreground text-base">
                            {task}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
