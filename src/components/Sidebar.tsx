import React from "react";

const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <div className="sidebar-name">YOUR NAME</div>

    <nav className="sidebar-menu">
      <a href="#work">WORK</a>
      <a href="#about">ABOUT</a>
      <a href="#contact">CONTACT</a>
    </nav>

    <div className="sidebar-socials">
      <a href="#linkedin" aria-label="LinkedIn">
        in
      </a>
      <a href="#github" aria-label="GitHub">
        gh
      </a>
    </div>
  </aside>
);

export default Sidebar;
