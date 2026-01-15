import React from "react";

const About: React.FC = () => (
  <section className="about" id="about">
    <div className="container">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate full-stack developer with 3+ years of experience building web applications.
            I specialize in creating responsive, user-friendly interfaces and robust backend solutions.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source
            projects, or sharing knowledge with the developer community.
          </p>
          <p>
            I'm always excited to collaborate on innovative projects and help businesses achieve their
            digital transformation goals.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>30+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
