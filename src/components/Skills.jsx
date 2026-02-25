import React from "react";

function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "PostgreSQL"]
    },
    {
      category: "Data & Visualization",
      skills: ["Pandas", "PowerBI"]
    },
    {
      category: "Frontend",
      skills: ["React", "Bootstrap", "HTML/CSS"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "AWS", "Azure", "Power Automate"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
