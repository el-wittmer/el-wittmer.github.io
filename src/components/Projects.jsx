import React from "react";

const projects = [
  {
    title: "Full-Stack Development",
    subtitle: "Book Journal",
    img: "/bookjournal.png",
    description:
      "A full-stack web application for tracking, reviewing, and sharing books.",
    skills: "Node.js / PostgreSQL / AWS",
    link: "https://bookjournal.wittyswords.com",
    class: "",
    button_text: "View Project",
    alt: "UI of book journal application showing a grid containing book covers and details"
  },
  {
    title: "Data Visualization",
    subtitle: "Conference Room Utilization",
    img: "/heatmap.png",
    description:
      "Interactive dashboards showing room usage patterns and occupancy trends across office spaces. Designed to help teams optimize scheduling.",
    skills:
      "Microsoft > Power Automate, PowerBI, Azure Applications",
    link: "#",
    class: "wip",
    button_text: "View Notes",
    alt: "UI of conference room data project showing a heat map of rooms and their frequency of use"
  },
  // {
  //   title: "Data Pipeline",
  //   subtitle: "Conference Room Utilization",
  //   img: "/powerautomate.png",
  //   description:
  //     "Automated workflow to identify scheduling conflicts across multiple calendars and notify stakeholders.",
  //   skills: "Microsoft > Power Automate, Azure Applications",
  //   link: "/pipeline_notes.pdf",
  //   class: "",
  //   button_text: "View Notes"
  // },
  {
    title: "Front-End Development",
    subtitle: "Interactive Map",
    img: "/spacebrowser.png",
    description:
      "An interactive map for exploring room assignments and utilization. Added tap tools and highlighting to explore data for rooms with many desk assignments",
    skills: "Python > bokeh, pandas / Git",
    link: "https://github.com/uiuc-csid/siebel_space_browser",
    class: "",
    button_text: "Private Repository",
    alt: "UI of a facilities map with overlaying squares showing occupancy information."
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
