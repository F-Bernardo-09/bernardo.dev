import pt from "../../locales/pt-br.json";

export default function ProjectsButton() {
  return (
    <div className="projects-button-wrapper">
      <a href={pt.projects.button.link} className="btn-primary">
        {pt.projects.button.label}
      </a>
    </div>
  );
}
