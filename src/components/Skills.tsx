import React from "react";

interface Skill {
  category: string;
  items: string[];
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "Node.js", "MongoDB", "MySQL", "REST APIs", "SqlServer"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "PostMan", "AWS", "C-Panel", "VS Code", "Firebase"],
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Team Collaboration", "Communication", "Project Management", "Mentoring"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-badge">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
