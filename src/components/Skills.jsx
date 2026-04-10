import React from "react";

function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "SQL languages"]
    },
    {
      category: "Data & Visualization",
      skills: ["Pandas", "PostgreSQL", "MongoDB"]
    },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React",
      "Node.js",
      "Express"
    ]
  },
    {
      category: "Tools & Platforms",
      skills: ["Git & GitHub", "AWS", "Azure"]
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
