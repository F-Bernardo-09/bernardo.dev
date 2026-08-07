import styled from "styled-components";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import ProjectCard from "../ProjectCard/ProjectCard";
import pt from "../../locales/pt-br.json";

const ProjectsSection = styled.section``;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
`;

export default function Projects() {
  return (
    <ProjectsSection>
      <div className="container">
        <SectionHeader
          title={pt.projects.title}
          subtitle={pt.projects.subtitle}
        />
        <ProjectsGrid>
          {pt.projects.items.map((project: any, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
}
