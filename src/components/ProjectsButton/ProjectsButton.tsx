import pt from "../../locales/pt-br.json";

export default function ProjectsButton() {
  return (
    <div className="projects-button-wrapper">
      <a
        href={pt.projects.viewAllButton.link}
        className="btn-primary"
        aria-label={pt.projects.viewAllButton.ariaLabel}
      >
        {pt.projects.viewAllButton.label}
      </a>
    </div>
  );
}
