
const projects = [
  {
    category: "Full-Stack Development",
    title: "Book Journal",
    description:
      "Designed and built a full-stack book-tracking application, including its PostgreSQL data model, authentication workflow, and AWS deployment.",
    skills: "Node.js · PostgreSQL · AWS",
    link: "https://bookjournal.wittyswords.com",
    linkText: "View Project",
  },
  {
    category: "Full-Stack Development · Data Science",
    title: "Enrollment Predictions",
    description:
      "Processed four years of enrollment data in Python and built a React interface for exploring historical patterns and comparing forecasting approaches.",
    skills: "Python · React · Pandas",
  },
  {
    category: "Full-Stack Development",
    title: "Interactive Building Map",
    description:
      "Rebuilt a limited Bokeh prototype in React, integrated live room data through Microsoft Graph, and automated AWS deployments with GitHub Actions.",
    skills: "React · Python · Pandas · AWS · GitHub Actions",
    link: "https://spaces.siebelschool.illinois.edu/kiosk",
    linkText: "View Project",
  },
  {
    category: "Feature Development",
    title: "Live Event Name Display",
    description:
      "Re-architected an inherited event tool as a reusable React and Express application with Entra ID authentication, queue recovery, roster search, and event check-in.",
    skills: "React · Express · Entra ID · REST APIs",
  },
  {
    category: "Data Visualization",
    title: "Conference Room Utilization",
    description:
      "Created an Azure-authenticated Power Automate pipeline that retrieves room-calendar data through Microsoft Graph, stores it in SharePoint, and supplies Power BI dashboards.",
    skills: "Power Automate · Power BI · Azure",
    link: "/pipeline_notes.pdf",
    linkText: "View Notes",
  },
];


function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Selected Work</h2>

      <div className="project-cards">
        {projects.map((project, index) => (
          <article key={index} className="project-card">

            <div className="project-content">
              <div className="project-heading">
                <h4>{project.title}</h4>
              </div>

              {project.description && (
                <p className="project-description">
                  {project.description}
                </p>
              )}

              <div className="project-footer">
                <span className="project-meta">
                  {project.skills}
                </span>
                <br />
                {project.link && (
                  <a
                    href={project.link}
                    className={`project-link ${project.class}`}
                  >
                    → {project.linkText}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
