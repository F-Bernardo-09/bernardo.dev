import "./ProjectCard.css";

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

export default function ProjectCard({ project }: ProjectCardProps) {
  const projectLink =
    project.primaryLink !== null && project.links[project.primaryLink]
      ? project.links[project.primaryLink].url
      : "#";

  return (
    <article className="project-card">
      <a href={projectLink} className="project-link" aria-label={project.title}>
        <img
          className="project-image"
          src={project.image.src}
          alt={project.image.alt}
        />
      </a>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tech">{project.tags.join(", ")}</p>
      </div>
    </article>
  );
}
