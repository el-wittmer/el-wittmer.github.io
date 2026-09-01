
const projects = [
  {
    title: "Senior Instructional Designer",
    description:
      "University of Illinois Urbana-Champaign, Siebel Center for Computer Science.",
    skills: "Aug 2026 - Present",
  },
  {
    title: "Instructional Designer & AV Specialist",
    description:
      "University of Illinois Urbana-Champaign, Siebel Center for Computer Science.",
    skills: "Nov 2023 - Aug 2026",
    link: "",
    linkText: "",
  },
  {
    title: "Teaching Assistant: Introduction to Programming (Python & Java)",
    description:
      "University of Illinois Urbana-Champaign, Siebel Center for Computer Science.",
    skills: "Aug 2022 - May 2023",
    link: "",
    linkText: "",
  },
    {
    title: "Research Assistant: Data Visualization & Analytics",
    description:
      "University of Illinois Urbana-Champaign, Siebel Center for Computer Science.",
    skills: "May 2022 - Aug 2022",
    link: "",
    linkText: "",
  },
];


function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Experience</h2>

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
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
