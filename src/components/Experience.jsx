const projects = [
  {
    title: "Senior Instructional Designer",
    organization:
      "University of Illinois Urbana-Champaign, Siebel School of Computing and Data Science",
    description: [
      "Design and maintain internal and public-facing applications supporting event operations, building navigation, enrollment planning, and space utilization.",
      "Own projects across requirements gathering, application architecture, integrations, testing, deployment, documentation, and support.",
      "Translate stakeholder needs into accessible, maintainable technical solutions.",
    ],
    skills: "Aug 2026 - Present",
  },
  {
    title: "Instructional Designer & AV Specialist",
    organization:
      "University of Illinois Urbana-Champaign, Siebel School of Computing and Data Science",
    description: [
      "Developed web applications and data tools using React, Node.js, Python, AWS, Azure, and Microsoft Graph.",
      "Collaborated with Communications, Facilities, instructional staff, and IT teams to improve academic and operational workflows.",
      "Provided testing, troubleshooting, documentation, and live technical support for classrooms and public events.",
    ],
    skills: "Nov 2023 - Aug 2026",
  },
  {
    title: "Teaching Assistant: Introduction to Programming",
    organization:
      "University of Illinois Urbana-Champaign, Siebel School of Computing and Data Science",
    description: [
      "Reviewed Python and Java code for 30 students, providing individualized feedback on correctness, structure, and problem-solving strategies.",
      "Led twice-weekly online office hours and study sessions, helping students debug assignments and understand procedural and object-oriented programming concepts.",
    ],
    skills: "Aug 2022 - May 2023",
  },
  {
    title: "Research Assistant: Data Visualization & Analytics",
    organization:
      "University of Illinois Urbana-Champaign, Siebel School of Computing and Data Science",
    description: [
      "Conducted independent data-science research using Python, PostgreSQL, and cluster computing to analyze and manage datasets containing more than one million records.",
      "Created visualizations, project reports, presentations, and technical documentation to communicate findings and support future research.",
    ],
    skills: "May 2022 - Aug 2022",
  },
];


function Projects() {
  return (
    <section id="experience" className="projects">
      <h2>Experience</h2>

      <div className="project-cards">
        {projects.map((project, index) => (
          <article key={index} className="project-card">

            <div className="project-content">
              <div className="project-heading">
                <h3>{project.title}</h3>
                <p className="experience-organization">
                  {project.organization}
                </p>
              </div>

              {project.description && (
                <ul className="experience-list">
                  {project.description.map((item) => (
                    <li key={item} className="project-description">{item}</li>
                  ))}
                </ul>
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
