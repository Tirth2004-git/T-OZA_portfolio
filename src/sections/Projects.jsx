import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/portfolioData";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <SectionTitle
          label="FEATURED WORK"
          title="Selected"
          highlight="Projects"
        />

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10"
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
