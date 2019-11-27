import React from 'react';
import { Link } from 'react-router-dom';

export function Project(props) {
  return (
    <Link to={`/project/${props.id}`} className="project-container content">
      {props.name}
    </Link>
  );
}
