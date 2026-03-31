import { SectionHeader } from "../SectionHeader/SectionHeader";
import ProjectCard from "../ProjectCard/ProjectCard";
import pt from "../../locales/pt-br.json";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <SectionHeader
          title={pt.projects.title}
          subtitle={pt.projects.subtitle}
        />
        <div className="projects-grid">
          {pt.projects.items.map((project: any, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
