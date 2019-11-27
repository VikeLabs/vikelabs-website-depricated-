import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../assets/manifest";

function ProjectPage() {
  let { id } = useParams();
  let project = projects.find(proj => proj.id.toString() === id);
  return (
    <div className="main-container">
      <div className="project-name content">
        <h3>{project.name}</h3>
      </div>
      <div className="project-about content">
        <span>About the project</span>
      </div>
      <div className="project-grid">
        <div className="content progress">
          <span>Progress/Status</span>
        </div>
        <div className="content tech-stack">
          <span>Tech Stack</span>
        </div>
        <div className="content team-member">
          <span>Team Member List</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
