import React from "react";
import { projects } from '../../assets/manifest';
import About from "../../components/About/About";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Projects from "../../components/Projects/Projects";

function HomePage() {
  return (
    <div className="main-container">
      <About />
      <SocialMedia />
      <Projects projects={projects} />
    </div>
  );
}

export default HomePage;
