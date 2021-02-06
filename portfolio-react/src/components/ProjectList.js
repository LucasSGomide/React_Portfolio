import React from 'react';
import Card from './ProjectCard';
import lProjects from '../data/projects';
import '../style/projectList.css';

function ProjectList() {
  return (
    <section className="project-list">
      { lProjects.map(item => <Card name={ item.name } thumb={ item.thumb } key={ item.name } /> ) }
    </section>
  );
}

export default ProjectList;
