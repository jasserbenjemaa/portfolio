
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 w-full max-w-screen-xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg text-primary font-mono mb-4"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3"
          >
            Jasser Ben Jomaa.
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-8"
          >
            I build things for the web.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl"
          >
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused on
            building accessible, human-centered products.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="font-mono text-primary border-primary hover:bg-primary/10 text-base px-8 py-6"
            >
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
