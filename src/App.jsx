
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      body {
        font-family: var(--font-sans);
      }
      .writing-mode-vertical-rl {
        writing-mode: vertical-rl;
      }
      /* Hide scrollbar for Chrome, Safari and Opera */
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      /* Hide scrollbar for IE, Edge and Firefox */
      .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="scroll-container bg-background text-foreground no-scrollbar flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        {/* Spacer for desktop sidebar, adjust width to match Navbar's sidebar */}
        <div className="hidden md:block md:w-20 lg:w-24 flex-shrink-0"></div>
        <main className="flex-1 overflow-y-auto"> 
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
