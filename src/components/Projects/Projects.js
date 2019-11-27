import React from 'react';
import { Project } from './Project';

function Projects(props) {
  let projects = props.projects.map((project, i) => {
    return <Project id={project.id} name={project.name} key={'project-' + i}/>
  })
  return (
    <div className="projects-container">
      {projects}
    </div>
  );
}

export default Projects;
