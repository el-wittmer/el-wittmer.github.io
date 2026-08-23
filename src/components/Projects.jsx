import React from "react";

const projects = [
  {
    title: "Full-Stack Development",
    subtitle: "Book Journal",
    img: "/images/bookjournal.png",
    description:
      "A full-stack web application for tracking, reviewing, and sharing books.",
    skills: "Node.js, PostgreSQL, AWS",
    link: "https://bookjournal.wittyswords.com",
    class: "",
    button_text: "View Project",
    alt: "UI of book journal application showing a grid containing book covers and details"
  },
  {
    title: "Full-Stack Development / Data Science",
    subtitle: "Enrollment Predictions",
    img: "/",
    description:
      "Projecting future enrollment in CS courses to optimize resource allocation.",
    skills: "Python / React.js",
    link: "",
    class: "wip",
    button_text: "Notes in Progress",
    alt: ""
  },
    {
    title: "Full-Stack Development",
    subtitle: "Interactive Building Map",
    img: "/images/spacebrowser.png",
    description:
      "Designed and built public-facing map interface for navigational use within the CS building at Illinois.",
    skills: "Python > pandas, React Router, GitHub Actions, AWS",
    link: "https://spaces.siebelschool.illinois.edu/kiosk",
    class: "",
    button_text: "View Project",
    alt: "Floor plan for Thomas M. Siebel Center for Computer Science"
  },
  {
    title: "Feature Development",
    subtitle: "Live Event Name Display",
    img: "/",
    description:
      "",
    skills: "Python WebSockets, HTML/CSS, AWS",
    link: "#",
    class: "wip",
    button_text: "Notes in Progress",
    alt: "Landing page for name display application showing instructions for use"
  },
  {
    title: "Data Visualization",
    subtitle: "Conference Room Utilization",
    img: "/images/heatmap.png",
    description:
      "Interactive dashboards showing room usage patterns and occupancy trends across office spaces. Designed to help teams optimize scheduling.",
    skills:
      "Microsoft > Power Automate, PowerBI, Azure Applications",
    link: "/pipeline_notes.pdf",
    class: "",
    button_text: "View Notes",
    alt: "UI of conference room data project showing a heat map of rooms and their frequency of use"
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Recent Projects</h2>
      <div className="project-list">
        <div class="project-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.subtitle}</h3>
              <h4>{project.title}</h4>
              <img src={project.img} alt={project.alt}/>
              <p>{project.description}</p>
              <p>
                <b>Tech Stack:</b> {project.skills}
              </p>
              <a href={project.link}>
                <button className={`secondary-button ${project.class}`} >{project.button_text}</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
