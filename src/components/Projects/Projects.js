import React from 'react';
import Project from './Project';

function Projects(props) {
  let projects = props.projects.map(project => {
    return <Project name={project.name} />
  })
  return (
    <div className="projects-container">
      {projects}
    </div>
  );
}

export default Projects;
