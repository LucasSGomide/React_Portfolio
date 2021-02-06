import React from 'react';
import '../style/projectCard.css';

function ProjectCard({ name, thumb }) {
  return (
    <div className="project-card">
      <h2 className="project-title">{ name }</h2>
      <img src={ thumb } alt={ name } className="project-image" />
      { console.log(thumb) }
    </div>
  );
}

export default ProjectCard;
