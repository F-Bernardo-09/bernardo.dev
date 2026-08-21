import { useState } from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaGoogleDrive,
} from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  period: {
    start: string;
    end: string | null;
    label: string;
  };
  context: string;
  relevance: number;
  featured: boolean;
  status: string;
  categories: string[];
  description: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
  };
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

const ICONS_BY_TYPE: Record<string, React.ElementType> = {
  video: FaYoutube,
  youtube: FaYoutube,
  github: FaGithub,
  instagram: FaInstagram,
  drive: FaGoogleDrive,
  behance: SiBehance,
};

function getIconForType(type: string) {
  return ICONS_BY_TYPE[type] ?? HiOutlineExternalLink;
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

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-card) var(--radius-card) 0 0;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      160deg,
      color-mix(in srgb, var(--accent-green) 16%, transparent),
      transparent 65%
    );
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.45s ease-out;
    z-index: 1;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition:
    transform 0.5s ease-out,
    filter 0.45s ease-out;

  ${ImageWrapper}:hover & {
    transform: scale(1.02);
    filter: brightness(0.92);
  }
`;

const LinksOverlay = styled.div<{ $visible: boolean }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  background: color-mix(in srgb, var(--accent-green) 10%, transparent);
  backdrop-filter: blur(1px);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition: opacity 0.3s ease-out;
  z-index: 2;

  ${ImageWrapper}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: var(--radius-circle);
  background-color: color-mix(in srgb, var(--bg-dark) 60%, transparent);
  color: var(--text-primary);
  transition:
    transform 0.25s ease-out,
    color 0.25s ease-out,
    background-color 0.25s ease-out;

  &:hover {
    background-color: var(--accent-green);
    color: var(--text-dark);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-green);
    outline-offset: 3px;
  }

  svg {
    width: 19px;
    height: 19px;
    opacity: 1;
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
  font-size: var(--font-size-md);
  color: var(--text-primary);
  transition: color 0.3s ease-out;

  ${ProjectCardWrapper}:hover & {
    color: var(--accent-green);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-base);
  }
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  padding: 0;
  margin: 0;
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

  transition:
    border-color 0.3s ease-out,
    color 0.3s ease-out;

  ${ProjectCardWrapper}:hover & {
    border-color: var(--accent-green);
    color: var(--text-primary);
  }

  @media (max-width: 480px) {
    padding: 3px 10px;
    font-size: 0.7rem;
  }
`;

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showLinks, setShowLinks] = useState(false);
  const hasLinks = project.links.length > 0;

  return (
    <ProjectCardWrapper>
      <ImageWrapper
        onClick={() => hasLinks && setShowLinks((visible) => !visible)}
        onMouseLeave={() => setShowLinks(false)}
      >
        <ProjectImage src={project.image.src} alt={project.image.alt} />

        {hasLinks && (
          <LinksOverlay $visible={showLinks}>
            {project.links.map((link) => {
              const Icon = getIconForType(link.type);

              return (
                <IconLink
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  onClick={(event) => event.stopPropagation()}
                >
                  <Icon aria-hidden="true" />
                </IconLink>
              );
            })}
          </LinksOverlay>
        )}
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
