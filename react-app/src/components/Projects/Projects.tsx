import { SectionHeader } from "../SectionHeader/SectionHeader";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <SectionHeader />
        <div className="projects-grid">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
