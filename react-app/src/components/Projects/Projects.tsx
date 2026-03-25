import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-grid">
          <article className="project-card">
            <a href="#" className="project-link">
              <img
                className="project-image"
                src="#"
                alt="Description project"
              />
            </a>
            <div className="project-info">
              <h3 className="project-title">Project Name</h3>
              <p className="project-tech">Developed with React, Node.js</p>
              <p className="project-view" style={{ display: "none" }}>
                View project
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
