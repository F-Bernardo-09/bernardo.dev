import styled from "styled-components";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  tags: string[];
  primaryLink: number | null;
  links: Array<{
    label: string;
    url: string;
    type: string;
  }>;
}

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCardWrapper = styled.article`
  border-radius: var(--radius-card);
  overflow: hidden;
  background-color: transparent;
`;

const ProjectLink = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;
`;

const ProjectImage = styled.img`
  object-fit: cover;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-card) var(--radius-card) 0 0;
`;

const ProjectInfo = styled.div`
  padding: var(--spacing-md);
  background-color: var(--border-color);
  border-radius: 0 0 var(--radius-card) var(--radius-card);
`;

const ProjectTitle = styled.h3`
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-xs);
`;

const ProjectTech = styled.p`
  color: var(--text-secondary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
`;

export default function ProjectCard({ project }: ProjectCardProps) {
  const projectLink =
    project.primaryLink !== null && project.links[project.primaryLink]
      ? project.links[project.primaryLink].url
      : "#";

  return (
    <ProjectCardWrapper>
      <ProjectLink href={projectLink} aria-label={project.title}>
        <ProjectImage src={project.image.src} alt={project.image.alt} />
      </ProjectLink>
      <ProjectInfo>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectTech>{project.tags.join(", ")}</ProjectTech>
      </ProjectInfo>
    </ProjectCardWrapper>
  );
}
