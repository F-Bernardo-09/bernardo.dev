import { useMemo } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import ProjectCard from "./ProjectCard";
import type { ProjectData } from "../../types/models";
import Button from "../Button/Button";
import { localizedPath } from "../../utils/localizedPath";

const ProjectsSection = styled.section``;

const ProjectsGrid = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: var(--spacing-lg);
  min-width: 0;

  @media (max-width: 768px) {
    display: contents;
  }
`;

const CardSlot = styled.div<{ $order: number }>`
  order: ${({ $order }) => $order};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: var(--spacing-xl);
`;

const PREVIEW_COUNT = 4;
const COLUMN_COUNT = 2;

export default function ProjectsPreview() {
  const { t, i18n } = useTranslation("projects");
  const { t: tUi } = useTranslation("projectsUi");
  const items = t("items", { returnObjects: true }) as ProjectData[];

  const previewProjects = useMemo(() => {
    return [...items]
      .sort((a, b) => a.relevance - b.relevance)
      .slice(0, PREVIEW_COUNT);
  }, [items]);

  const columns = useMemo(() => {
    const result: { project: ProjectData; order: number }[][] = Array.from(
      { length: COLUMN_COUNT },
      () => [],
    );

    previewProjects.forEach((project, index) => {
      result[index % COLUMN_COUNT].push({ project, order: index });
    });

    return result;
  }, [previewProjects]);

  return (
    <ProjectsSection>
      <div className="container">
        <SectionHeader title={tUi("title")} subtitle={tUi("subtitle")} />

        <ProjectsGrid>
          {columns.map((column, columnIndex) => (
            <Column key={columnIndex}>
              {column.map(({ project, order }) => (
                <CardSlot key={project.id} $order={order}>
                  <ProjectCard project={project} />
                </CardSlot>
              ))}
            </Column>
          ))}
        </ProjectsGrid>

        <ButtonWrapper>
          <Button
            as={Link}
            to={localizedPath("/projects", i18n.language)}
            aria-label={tUi("viewAllButton.ariaLabel")}
          >
            {tUi("viewAllButton.label")}
          </Button>
        </ButtonWrapper>
      </div>
    </ProjectsSection>
  );
}
