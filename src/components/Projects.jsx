import React from "react";

const projects = [
  {
    title: "Full-Stack Development",
    subtitle: "Book Journal",
    img: "/src/assets/bookjournal.png",
    description:
      "A full-stack web application for tracking, reviewing, and sharing books.",
    skills: "Node.js+Express / PostgreSQL / AWS",
    link: "https://bookjournal.wittyswords.com",
  },
  {
    title: "Data Visualization",
    subtitle: "Conference Room Utilization",
    img: "/src/assets/heatmap.png",
    description:
      "Interactive dashboards showing room usage patterns and occupancy trends across office spaces. Designed to help teams optimize scheduling.",
    skills:
      "Microsoft > Power Automate, PowerBI, Azure Applications",
    link: "#",
  },
  {
    title: "Data Pipeline",
    subtitle: "Scheduling Conflict Detection",
    img: "/src/assets/powerautomate.png",
    description:
      "Automated workflow to identify scheduling conflicts across multiple calendars and notify stakeholders.",
    skills: "Microsoft > Power Automate, Azure Applications",
    link: "#",
  },
  {
    title: "Front-End Development",
    subtitle: "Interactive Map",
    img: "/src/assets/spacebrowser.png",
    description:
      "An interactive map for exploring room assignments and utilization. Added tap tools and highlighting to explore data for rooms with many desk assignments",
    skills: "Python > bokeh, pandas / Git",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div class="project-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.subtitle}</h3>
              <h4>{project.title}</h4>
              <img src={project.img} />
              <p>{project.description}</p>
              <p>
                <b>Skills:</b> {project.skills}
              </p>
              <a href={project.link}>
                <button className="secondary-button">Demo Coming Soon</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
