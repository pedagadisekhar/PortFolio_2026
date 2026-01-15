import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com",
      image: "/project1.png",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      tags: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
      link: "https://github.com",
      image: "/project2.png",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather forecasting app with location-based services and interactive charts.",
      tags: ["React", "API Integration", "Chart.js", "CSS3"],
      link: "https://github.com",
      image: "/project3.png",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics dashboard for tracking social media metrics and generating insights reports.",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      link: "https://github.com",
      image: "/project4.png",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="btn-project">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
