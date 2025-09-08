import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/config/projects";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
