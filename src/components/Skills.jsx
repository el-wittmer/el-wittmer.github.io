
function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "SQL", "HTML/CSS"],
    },
    {
      category: "Web Development",
      skills: [
        "React",
        "Node.js",
        "Express",
        "REST APIs",
        "WebSockets",
        "React Router",
        "Vite",
      ],
    },
    {
      category: "Data & Applications",
      skills: [
        "PostgreSQL",
        "Pandas",
        "Data Visualization",
        "Power BI",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        "AWS",
        "Azure",
        "GitHub Actions",
        "CI/CD",
        "Microsoft Graph",
        "Entra ID",
      ],
    },
    {
      category: "Professional Practice",
      skills: [
        "Requirements Gathering",
        "Stakeholder Collaboration",
        "User-Centered Development",
        "Accessibility / WCAG",
        "Testing & Debugging",
        "Technical Documentation",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Technical Index</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>

            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
