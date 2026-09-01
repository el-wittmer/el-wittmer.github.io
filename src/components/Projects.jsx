
const projects = [
  {
    category: "Full-Stack Development",
    title: "Book Journal",
    description:
      "A full-stack web application for tracking, reviewing, and sharing books.",
    skills: "Node.js · PostgreSQL · AWS",
    link: "https://bookjournal.wittyswords.com",
    linkText: "View Project",
  },
  {
    category: "Full-Stack Development · Data Science",
    title: "Enrollment Predictions",
    description:
      "A data-driven tool for projecting future enrollment in computer science courses and supporting resource planning.",
    skills: "Python · React · Pandas",
    link: "",
    linkText: "Notes in Progress",
    wip: true,
  },
  {
    category: "Full-Stack Development",
    title: "Interactive Building Map",
    description:
      "A public-facing interactive map designed to support navigation and wayfinding within the Siebel Center for Computer Science.",
    skills: "React · Python · Pandas · AWS · GitHub Actions",
    link: "https://spaces.siebelschool.illinois.edu/kiosk",
    linkText: "View Project",
  },
  {
    category: "Feature Development",
    title: "Live Event Name Display",
    description:
      "A real-time event management application for displaying and managing attendee names during large-scale events.",
    skills: "Python · WebSockets · React · AWS",
    link: "",
    linkText: "Notes in Progress",
    wip: true,
  },
  {
    category: "Data Visualization",
    title: "Conference Room Utilization",
    description:
      "Interactive dashboards visualizing room usage patterns and occupancy trends to support more effective scheduling and space planning.",
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

                <a
                  href={project.link}
                  className={`project-link ${project.class}`}
                >
                  {project.button_text} <span>→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
