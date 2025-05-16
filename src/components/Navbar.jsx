
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      {/* Mobile Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:hidden ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-lg"
            : "bg-background"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-primary font-mono"
          >
            J
          </motion.a>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-primary"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-background shadow-xl z-40 p-8 flex flex-col justify-center items-center md:hidden"
      >
        <nav className="flex flex-col space-y-8 text-center">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              custom={index}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              variants={navItemVariants}
              className={`text-lg font-mono ${
                activeSection === link.id
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={() => scrollToSection(link.id)}
            >
              <span className="text-primary mr-1">0{index + 1}.</span>
              {link.label}
            </motion.button>
          ))}
          <motion.div custom={navLinks.length} initial="hidden" animate={isOpen ? "visible" : "hidden"} variants={navItemVariants}>
            <Button variant="outline" className="font-mono text-primary border-primary hover:bg-primary/10 w-full mt-8">
              Resume
            </Button>
          </motion.div>
        </nav>
      </motion.div>
      {isOpen && <div className="fixed inset-0 bg-black/30 z-30 md:hidden" onClick={toggleMenu}></div>}


      {/* Desktop Sidebar Navigation */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 50 }}
        className="hidden md:flex fixed left-0 top-0 h-screen w-20 lg:w-24 flex-col justify-between items-center py-8 bg-background z-50"
      >
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
          className="text-3xl font-bold text-primary font-mono"
          whileHover={{ scale: 1.1 }}
        >
          J
        </motion.a>
        <nav className="flex flex-col space-y-10">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`nav-link text-xs font-mono uppercase tracking-widest writing-mode-vertical-rl transform rotate-180 ${
                activeSection === link.id
                  ? "text-primary active-nav-link"
                  : "text-muted-foreground"
              }`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>
        <div className="flex flex-col space-y-6">
          {[
            { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
            { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: <Mail size={20} />, href: "mailto:contact@example.com", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground social-icon"
              aria-label={social.label}
              whileHover={{ scale: 1.2, color: "hsl(var(--primary))" }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.aside>

      {/* Desktop Top Right Resume Button */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden md:block fixed top-8 right-8 z-50"
      >
        <Button variant="outline" className="font-mono text-sm text-primary border-primary hover:bg-primary/10">
          <FileText size={16} className="mr-2"/> Resume
        </Button>
      </motion.div>
    </>
  );
};

export default Navbar;
