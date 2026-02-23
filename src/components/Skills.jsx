import React from "react";

const skills = {
  "Data Science": ["Python > pandas", "PostgreSQL"],
  "HCI / UX": ["Usability Testing"],
  "Visualization": ["PowerBI"],
  "Other": ["Git"]
};

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      {Object.entries(skills).map(([category, list], index) => (
        <div key={index}>
          <h3>{category}</h3>
          <ul>
            {list.map((skill, idx) => <li key={idx}>{skill}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;