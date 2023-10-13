import React from 'react';

import './_Projects.scss';
import { IDashboardProject } from '../../../common/assets/constants/interface';


interface ProjectProps {
  project: IDashboardProject;
}

const Projects: React.FC <ProjectProps> = ({ project }) => (
  <li className="projects">
    <img src="#" alt="Лого" className="projects__image" />
    <div className="projects__container">
      <p className="projects__name">{ project.name }</p>
      <p className="projects__task">{ project.quantity } задач</p>
    </div>
    <p className="projects__date">{ project.dateStart } - { project.dateEnd }</p>
  </li>
);

export default Projects;
