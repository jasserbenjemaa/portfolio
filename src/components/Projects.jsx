
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Halcyon Theme",
      description:
        "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      imageAlt: "Halcyon Theme Preview",
      imageQuery: "Dark blue code editor theme",
      tags: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      liveLink: "https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode",
      githubLink: "https://github.com/bchiang7/halcyon-site",
    },
    {
      title: "Spotify Profile",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your listening history and more.",
      imageAlt: "Spotify Profile App Screenshot",
      imageQuery: "Spotify data visualization web application",
      tags: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
      liveLink: "https://spotify-profile.herokuapp.com/",
      githubLink: "https://github.com/bchiang7/spotify-profile",
    },
  ];

  const otherProjects = [
    {
      title: "Integrating Algolia Search with WordPress Multisite",
      description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia.",
      tags: ["Algolia", "WordPress", "PHP"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      title: "Time to Have More Fun",
      description: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS.",
      tags: ["Next.js", "Tailwind CSS", "Firebase"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      title: "Building a Headless Mobile App with React Native and WordPress",
      description: "A proof-of-concept app using React Native to build a cross-platform mobile interface for a WordPress backend.",
      tags: ["React Native", "WordPress", "JavaScript"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
     {
      title: "OctoProfile",
      description: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
      tags: ["Next.js", "Chart.js", "GitHub API"],
      githubLink: "https://github.com/bchiang7/octoprofile",
      liveLink: "https://octoprofile.now.sh",
    },
    {
      title: "Google Keep Clone",
      description: "A simple Google Keep clone built with Vue and Firebase. Allows users to create, edit, and delete notes, with real-time synchronization.",
      tags: ["Vue", "Firebase", "Vuetify"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      title: "Personal Portfolio V3",
      description: "Third iteration of my personal website. Built with Jekyll and hosted on GitHub Pages.",
      tags: ["Jekyll", "SCSS", "JavaScript"],
      githubLink: "https://github.com/bchiang7/v3",
      liveLink: "https://brittanychiang.com/v3/",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 w-full max-w-screen-xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="numbered-heading text-foreground"
        >
          Some Things I've Built
        </motion.h2>

        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <p className="font-mono text-sm text-primary mb-2">Featured Project</p>
                <h3 className="text-2xl font-semibold text-foreground hover:text-primary transition-colors mb-4">
                  <a href={project.liveLink || project.githubLink} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <div className="bg-background md:bg-secondary shadow-lg p-6 rounded-md mb-4">
                  <p className="text-muted-foreground text-base">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-muted-foreground mb-4">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link" className="text-muted-foreground hover:text-primary social-icon">
                      <Github size={22} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="External Link" className="text-muted-foreground hover:text-primary social-icon">
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
              <div className={`md:col-span-5 relative group ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <a href={project.liveLink || project.githubLink} target="_blank" rel="noopener noreferrer" className="block aspect-[16/10] overflow-hidden rounded-md">
                  <div className="absolute inset-0 bg-primary rounded-md opacity-40 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                  <img 
                    class="w-full h-full object-cover rounded-md shadow-xl filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                    alt={project.imageAlt} src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="text-center mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Other Noteworthy Projects</h3>
          <a href="https://github.com/bchiang7" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-primary hover:underline">
            view the archive
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
                }),
              }}
              className="bg-secondary p-6 rounded-md shadow-lg project-card flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Folder size={36} className="text-primary" />
                  <div className="flex space-x-3">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link" className="text-muted-foreground hover:text-primary social-icon">
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="External Link" className="text-muted-foreground hover:text-primary social-icon">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground hover:text-primary transition-colors mb-2">
                  <a href={project.liveLink || project.githubLink} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              </div>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
