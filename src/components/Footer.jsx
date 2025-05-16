
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:contact@example.com", label: "Email" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 w-full max-w-screen-xl">
        {/* Social links for mobile, hidden on md and up */}
        <div className="flex md:hidden justify-center space-x-6 mb-6">
          {socialLinks.map((social, index) => (
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
        
        <div className="text-center">
          <p className="font-mono text-xs text-muted-foreground">
            Designed & Built by Jasser Ben Jomaa
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            Inspired by Brittany Chiang's Portfolio
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
