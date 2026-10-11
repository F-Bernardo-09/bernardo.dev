import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { ProjectData } from "../../types/models";
import LazyImage from "../LazyImage/LazyImage";
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import { localizedPath } from "../../utils/localizedPath";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCardWrapper = styled.article`
  border: 1px solid transparent;
  border-radius: var(--radius-card);
  overflow: hidden;
  background-color: transparent;

  transition:
    transform 0.4s ease-out,
    box-shadow 0.4s ease-out,
    border-color 0.4s ease-out;

  &:hover {
    border-color: var(--accent-green);
    transform: translateY(-3px);
    box-shadow: 0 6px 14px
      color-mix(in srgb, var(--accent-green) 4%, transparent);
  }
`;

const ImageWrapper = styled(LazyImage)`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-card) var(--radius-card) 0 0;
`;

const DetailLink = styled(Link)`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: var(--radius-circle);
  background-color: color-mix(in srgb, var(--bg-dark) 60%, transparent);
  backdrop-filter: blur(4px);
  color: var(--text-primary);
  overflow: hidden;

  transition:
    background-color 0.25s ease-out,
    color 0.25s ease-out;

  &:hover,
  &:focus-visible {
    background-color: var(--accent-green);
    color: var(--text-dark);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-green);
    outline-offset: 3px;
  }
`;

const ProjectInfo = styled.div`
  padding: var(--spacing-md);
  background-color: var(--bg-dark-accent);
  border-radius: 0 0 var(--radius-card) var(--radius-card);

  @media (max-width: 480px) {
    padding: var(--spacing-sm);
  }
`;

const ProjectTitle = styled.h2`
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-h3);
  color: var(--text-primary);
  transition: color 0.3s ease-out;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  padding: 0;
  margin: 0 0 var(--spacing-xs) 0;
  list-style: none;
`;

const Tag = styled.li`
  padding: 4px 12px;
  border: 1px solid var(--text-secondary);
  border-radius: var(--radius-pill);
  color: var(--text-secondary);
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  white-space: nowrap;

  @media (max-width: 480px) {
    padding: 3px 10px;
    font-size: 0.7rem;
  }
`;

export default function ProjectCard({ project }: ProjectCardProps) {
  const { i18n } = useTranslation();
  const { t: tUi } = useTranslation("projectsUi");

  const detailPath = localizedPath(`/projects/${project.id}`, i18n.language);

  return (
    <ProjectCardWrapper>
      <ImageWrapper
        src={project.image.src}
        alt={project.image.alt}
        width={1600}
        height={900}
      >
        <DetailLink
          to={detailPath}
          className="arrow-trigger"
          aria-label={tUi("learnMoreButton.ariaLabel", {
            title: project.title,
          })}
        >
          <AnimatedArrow size={16} />
        </DetailLink>
      </ImageWrapper>

      <ProjectInfo>
        <ProjectTitle>{project.title}</ProjectTitle>

        <TagList>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagList>
      </ProjectInfo>
    </ProjectCardWrapper>
  );
}
