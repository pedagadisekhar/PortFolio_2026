import React from "react";

const Hero: React.FC = () => (
  <section className="hero">
    <div className="hero-left">
      <h1>
        Hi there, I’m
        <br />
        <span>Your Name</span>
      </h1>

      <h2>Software Engineer</h2>

      <p>
        I build scalable web applications and clean user interfaces using
        modern technologies.
      </p>

      <button className="btn-primary">Reach Out To Me</button>
    </div>

    <div className="hero-right">
      <img src="/avatar.png" alt="avatar" />
      <button className="btn-secondary">See My Work</button>
    </div>
  </section>
);

export default Hero;
