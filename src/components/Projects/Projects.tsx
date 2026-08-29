import { useMemo, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import ProjectCard from "./ProjectCard";
import type { ProjectData } from "../../types/models";
import ProjectFilter from "./ProjectFilter";

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
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <ProjectFilter
          categories={categories}
          selected={selectedCategories}
          onToggle={handleToggleCategory}
          onClear={handleClearCategories}
          allLabel={t("filterAllLabel")}
        />

        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
}
