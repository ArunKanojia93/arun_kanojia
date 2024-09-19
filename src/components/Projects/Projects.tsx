import Info from "../User";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col py-10 px-32 items-center">
      <div className="text-5xl font-bold text-primary pb-10">Projects</div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8">
        {Info.projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
