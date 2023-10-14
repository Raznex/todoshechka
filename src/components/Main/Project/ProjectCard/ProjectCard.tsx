import React from 'react';

import { IProjectTasks } from '../../../../common/assets/constants/interface';


interface IProjectCardProps {
  project: IProjectTasks;
  isActive: boolean;
  onProjectClick: (projectData: IProjectTasks) => void;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project, isActive, onProjectClick }) => {
  const onClick = (project: IProjectTasks) => {
    onProjectClick(project);
  };
  return (
    <article className="project__card">
      <div className="project__bank">
        <img src="#" alt="Bank" className="project__photo" />
        <div className="project__description">
          <p className="project__title">{ project.name }</p>
          <div className="project__task">
            <p className="project__quantity">{ project.tasks } задач&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="project__right-side">
        <img src="#" alt="Photos" className="project__img" />
        <p className="project__deadlines">{ project.dateStart } - { project.dateEnd }</p>
      </div>
    </article>
  );
};

export default ProjectCard;
