import "./Projects.css";

export default function Projects() {
  return (
    <section class="projects-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Personal Projects</h2>
          <p class="section-subtitle">A selection of my favorite projects</p>
        </div>

        <div class="projects-grid">
          <article class="project-card">
            <a href="src/page/" class="project-link">
              <img
                class="project-image"
                src="src/img/project-name.jpg"
                alt="Description project"
              />
            </a>
            <div class="project-info">
              <h3 class="project-title">Project Name</h3>
              <p class="project-tech">Developed with React, Node.js</p>
              <p class="project-view" style="display: none">
                View project
              </p>
            </div>
          </article>

          <article class="project-card">
            <a href="src/page/" class="project-link">
              <img
                class="project-image"
                src="src/img/project-name.jpg"
                alt="Description project"
              />
            </a>
            <div class="project-info">
              <h3 class="project-title">Project Name</h3>
              <p class="project-tech">Developed with React, Node.js</p>
              <p class="project-view" style="display: none">
                View project
              </p>
            </div>
          </article>

          <article class="project-card">
            <a href="src/page/" class="project-link">
              <img
                class="project-image"
                src="src/img/project-name.jpg"
                alt="Description project"
              />
            </a>
            <div class="project-info">
              <h3 class="project-title">Project Name</h3>
              <p class="project-tech">Developed with React, Node.js</p>
              <p class="project-view" style="display: none">
                View project
              </p>
            </div>
          </article>
        </div>

        <div class="projects-button-wrapper">
          <a href="src/page/projects.html" class="btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
