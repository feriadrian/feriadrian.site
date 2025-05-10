"use client";

import { motion } from "framer-motion";
// import { useTranslations } from "next-intl";

import ProjectCard from "./ProjectCard";
import EmptyState from "@/common/components/elements/EmptyState";
import { ProjectItem } from "@/common/types/projects";
import { staticProjects } from "@/common/constants/projects";

const Projects = () => {
  // const t = useTranslations("ProjectsPage");

  const filteredProjects: ProjectItem[] = staticProjects
    .filter((item: ProjectItem) => item?.is_show)
    .sort((a: ProjectItem, b: ProjectItem) => {
      if (a.is_featured && !b.is_featured) return -1;
      if (!a.is_featured && b.is_featured) return 1;
      if (a.is_featured && b.is_featured) return a.id - b.id;
      return b.id - a.id;
    });

  if (filteredProjects.length === 0) {
    return <EmptyState message={("no_data")} />;
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
