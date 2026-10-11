import { useMemo, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import ProjectCard from "./ProjectCard";
import type { ProjectData } from "../../types/models";
import ProjectFilter from "./ProjectFilter";

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

const COLUMN_COUNT = 2;

export default function Projects() {
  const { t } = useTranslation("projects");
  const { t: tUi } = useTranslation("projectsUi");
  const items = t("items", { returnObjects: true }) as ProjectData[];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = useMemo(() => {
    const unique = new Set<string>();
    items.forEach((project) => {
      project.categories?.forEach((category) => unique.add(category));
    });
    return Array.from(unique);
  }, [items]);

  const filteredProjects = useMemo(() => {
    const filtered =
      selectedCategories.length === 0
        ? items
        : items.filter((project) =>
            project.categories?.some((category) =>
              selectedCategories.includes(category),
            ),
          );

    return [...filtered].sort((a, b) => a.relevance - b.relevance);
  }, [items, selectedCategories]);

  const columns = useMemo(() => {
    const result: { project: ProjectData; order: number }[][] = Array.from(
      { length: COLUMN_COUNT },
      () => [],
    );

    filteredProjects.forEach((project, index) => {
      result[index % COLUMN_COUNT].push({ project, order: index });
    });

    return result;
  }, [filteredProjects]);

  function handleToggleCategory(category: string) {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  }

  function handleClearCategories() {
    setSelectedCategories([]);
  }

  return (
    <ProjectsSection>
      <div className="container">
        <SectionHeader title={tUi("title")} subtitle={tUi("subtitle")} />

        <ProjectFilter
          categories={categories}
          selected={selectedCategories}
          onToggle={handleToggleCategory}
          onClear={handleClearCategories}
          allLabel={tUi("filterAllLabel")}
        />

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
      </div>
    </ProjectsSection>
  );
}
