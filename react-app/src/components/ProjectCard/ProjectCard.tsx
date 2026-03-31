import "./ProjectCard.css";

interface ProjectData {
  title: string;
  description: string;
  link: string;
  image: string;
  alt: string;
  tech: string[];
  linkLabel: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <a href={project.link} className="project-link">
        <img className="project-image" src={project.image} alt={project.alt} />
      </a>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tech">{project.tech.join(", ")}</p>
        <p className="project-view" style={{ display: "none" }}>
          {project.linkLabel}
        </p>
      </div>
    </article>
  );
}
