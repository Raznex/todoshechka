import React from 'react';

import { Arrow } from '../../../../common/assets/icon/moduleIcon';
import { IProject } from '../../../../common/assets/constants/interface';
import ProjectCard from '../ProjectCard/ProjectCard';
import UserName from './UserName/UserName';


interface IProjectBoxProps {
  thisProject: IProject;
}

const ProjectBox: React.FC<IProjectBoxProps> = ({ thisProject }) => (
  <div className="project__space_2">
    <h3 className="project__chapter">{ thisProject?.name }</h3>
    <p className="project__text">Разнообразный и богатый опыт говорит нам, что высокое качество позиционных
      исследований однозначно фиксирует.
    </p>
    <div className="project__box">
      <div className="project__string">
        <p className="project__pos1">Клиент</p>
        <p className="project__pos2">{ thisProject.customer }</p>
      </div>
      <div className="project__string">
        <p className="project__pos1">Дата начала</p>
        <p className="project__pos2">{ thisProject?.dataStart }</p>
      </div>
      <div className="project__string">
        <p className="project__pos1">Дата окончания</p>
        <p className="project__pos2">{ thisProject?.dataFinish }</p>
      </div>
    </div>
    <div className="project__tasks">
      <h2 className="project__chapter">Задачи</h2>
      <p className="project__review">посмотреть все</p>
    </div>
    <div className="project__containers">
      <div className="project__container">
        <h3 className="project__to-do">Сделать описание сервиса</h3>
        <div className="project__priorities">
          <p className="project__priority">средний</p>
          <Arrow className="project__arrow" />
        </div>
      </div>
      <div className="project__container">
        <h3 className="project__to-do">Сделать диаграмму классов</h3>
        <div className="project__priorities">
          <p className="project__priority">низкий</p>
          <Arrow className="project__arrow" />
        </div>
      </div>
    </div>
    <div className="project__column">
      <p className="project__chapter">Участники</p>
      <div className="project__worker">
        { thisProject.users.map((user, id) => (
          <UserName
            key={ id }
            user={ user }
          />
        )) }
      </div>
    </div>
  </div>
);

export default ProjectBox;
