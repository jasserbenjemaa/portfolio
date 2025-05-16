
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 w-full max-w-screen-xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center max-w-xl mx-auto"
        >
          <p className="font-mono text-base text-primary mb-2">04. What's Next?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10">
            Although I'm not currently looking for any new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>
        
        <div className="max-w-lg mx-auto">
          <ContactForm />
        </div>

      </div>
    </section>
  );
};

export default Contact;
