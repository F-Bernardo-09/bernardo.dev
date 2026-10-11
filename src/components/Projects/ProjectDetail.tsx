import { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaGoogleDrive,
} from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import { HiArrowLeft, HiOutlineExternalLink } from "react-icons/hi";
import type { ProjectData, ProjectContentBlock } from "../../types/models";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import LazyImage from "../LazyImage/LazyImage";
import ProjectContent from "./ProjectContent";
import { localizedPath } from "../../utils/localizedPath";

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

const DetailSection = styled.section``;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-lg);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);

  &:hover,
  &:focus-visible {
    color: var(--accent-green);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-green);
    outline-offset: 3px;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);

  && > * {
    margin-bottom: 0;
  }

  && h1,
  && h2 {
    text-align: left;
  }
`;

const Summary = styled.p`
  font-size: var(--font-size-md);
`;

const LinksList = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
`;

const LinkName = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.35em;
  text-decoration-color: currentColor;
  transition: text-decoration-color var(--transition-fast);
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);

  padding: 0.65rem 1.2rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-color);

  font-size: var(--font-size-sm);
  line-height: 1.2;
  color: var(--text-secondary);
  background-color: var(--bg-dark-accent);

  text-decoration: none;

  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);

  svg {
    font-size: var(--font-size-base);
    flex-shrink: 0;
    color: var(--text-secondary);
    transition: color var(--transition-fast);
  }

  &:hover,
  &:focus-visible {
    color: var(--accent-green);
    border-color: var(--accent-green);
    text-decoration: none;

    svg {
      color: var(--accent-green);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--accent-green);
    outline-offset: 3px;
  }
`;

const HeroImage = styled(LazyImage)`
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: var(--spacing-lg);
  border-radius: var(--radius-card);
  background-color: var(--bg-dark-accent);
`;

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-md);
`;

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation("projects");
  const { t: tUi } = useTranslation("projectsUi");
  const items = t("items", { returnObjects: true }) as ProjectData[];

  const project = useMemo(
    () => items.find((item) => String(item.id) === id),
    [items, id],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const projectsPath = localizedPath("/projects", i18n.language);

  const backLink = (
    <BackLink to={projectsPath}>
      <HiArrowLeft aria-hidden="true" />
      {tUi("detail.back")}
    </BackLink>
  );

  if (!project) {
    return (
      <DetailSection>
        <div className="container">
          <NotFound>
            <p>{tUi("detail.notFound")}</p>
            {backLink}
          </NotFound>
        </div>
      </DetailSection>
    );
  }

  const blocks: ProjectContentBlock[] = project.content?.length
    ? project.content
    : project.description
      ? [{ type: "paragraph", text: project.description }]
      : [];

  const primaryIndex = project.primaryLink;
  const links =
    primaryIndex != null && project.links[primaryIndex]
      ? [
          project.links[primaryIndex],
          ...project.links.filter((_, index) => index !== primaryIndex),
        ]
      : project.links;

  const heading = project.subtitle
    ? `${project.title} — ${project.subtitle}`
    : project.title;

  return (
    <DetailSection>
      <div className="container">
        {backLink}

        <Header>
          <TitleGroup>
            <SectionHeader title={heading} />
            {project.summary && <Summary>{project.summary}</Summary>}
          </TitleGroup>

          {links.length > 0 && (
            <LinksList aria-label={tUi("detail.linksTitle")}>
              {links.map((link) => {
                const Icon = getIconForType(link.type);

                return (
                  <ProjectLink
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon aria-hidden="true" />
                    <LinkName>{link.label}</LinkName>
                  </ProjectLink>
                );
              })}
            </LinksList>
          )}
        </Header>

        <HeroImage
          src={project.image.src}
          alt={project.image.alt}
          width={1600}
          height={900}
          loading="eager"
          fetchPriority="high"
        />

        {blocks.length > 0 && <ProjectContent blocks={blocks} />}
      </div>
    </DetailSection>
  );
}
