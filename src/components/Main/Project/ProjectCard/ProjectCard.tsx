import React from 'react';

import { IProject } from '../../../../common/assets/constants/interface';


interface IProjectCardProps {
  project: IProject;
  isActive: boolean;
  onProjectClick: (projectData: IProject) => void;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project, isActive, onProjectClick }) => {
  const onClick = (project: IProject) => {
    onProjectClick(project);
  };
  return (
    <button type="button" className={ `project__card ${isActive ? 'project__card_active' : ''}` } onClick={ () => onClick(project) }>
      <div className="project__bank">
        <div className="project__description">
          <p className={ `project__title ${isActive ? 'project__title_active' : ''}` }>{ project.name }</p>
          <div className="project__task">
            { /* <p className="project__quantity">{ project.tasks } задач&nbsp;</p> */ }
          </div>
        </div>
      </div>
      <div className="project__right-side">
        <p className="project__deadlines">{ project.dataStart } - { project.dataFinish }</p>
      </div>
    </button>
  );
};

export default ProjectCard;
