import React from "react";

const Hero: React.FC = () => (
  <section className="hero">
    <div className="hero-left">
      <h1>
        Hi there, I’m
        <br />
        <span>Chandra Sekhar</span>
      </h1>

      <h2>Full Stack Developer</h2>

      <p>
        I build scalable web applications and stunning user interfaces using
        modern technologies like React, Node.js, and SpringBoot.
      </p>

      <div className="hero-buttons">
        <a href="#contact" className="btn-primary">Reach Out To Me</a>
        <a href="#projects" className="btn-secondary">See My Work</a>
      </div>
    </div>

    <div className="hero-right">
      <img src="/avatar.png" alt="avatar" />
    </div>
  </section>
);

export default Hero;
