import { useMemo } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import ProjectCard from "../ProjectCard/ProjectCard";
import type { ProjectData } from "../../types/models";
import Button from "../Button/Button";

const ProjectsSection = styled.section``;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: var(--spacing-xl);
`;

const PREVIEW_COUNT = 4;

export default function ProjectsPreview() {
  const { t } = useTranslation("projects");
  const items = t("items", { returnObjects: true }) as ProjectData[];

  const previewProjects = useMemo(() => {
    return [...items]
      .sort((a, b) => a.relevance - b.relevance)
      .slice(0, PREVIEW_COUNT);
  }, [items]);

  return (
    <ProjectsSection>
      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <ProjectsGrid>
          {previewProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid>

        <ButtonWrapper>
          <Button
            as={Link}
            to="/projects"
            aria-label={t("viewAllButton.ariaLabel")}
          >
            {t("viewAllButton.label")}
          </Button>
        </ButtonWrapper>
      </div>
    </ProjectsSection>
  );
}
