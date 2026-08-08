import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsSection = styled.section``;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function Projects() {
  const { t } = useTranslation("projects");
  const items = t("items", { returnObjects: true }) as any[];

  return (
    <ProjectsSection>
      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <ProjectsGrid>
          {items.map((project: any, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
}
