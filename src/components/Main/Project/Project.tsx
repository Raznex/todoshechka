import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { IAddONProject, IProject } from '../../../common/assets/constants/interface';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectBox from './ProjectBox/ProjectBox';
import { addOnProject } from '../../../utils/Api/MainApi';
import './_Project.scss';


interface IProjectProps {
  project: IProject[];
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [thisProject, setThisProject] = useState<IProject | null>(null);
  const handleClick = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<IAddONProject>({ mode: 'onBlur' });

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '' });
    }
  }, [formState, reset]);

  const onSubmit = (data: IAddONProject) => {
    if (thisProject) {
      addOnProject(data, thisProject.projectId);
    }
    setIsEditing(false);
  };

  const handleTProjectClick = (projectData: IProject) => {
    setThisProject(projectData);
  };

  return (
    <div className="project">
      <div className="project__left">
        <div className="project__space_1">
          <h2 className="project__chapter">Проекты</h2>
          { project.map((project, id) => (
            <ProjectCard
              key={ id }
              project={ project }
              isActive={ thisProject?.projectId === project.projectId }
              onProjectClick={ handleTProjectClick }
            />
          )) }
        </div>
        <button type="button" className="project__add-card" onClick={ (() => navigate('/newproject', { replace: true })) }>+
          Создать проект
        </button>
      </div>
      <div className="project__right">
        { thisProject !== null
          ? <ProjectBox thisProject={ thisProject } />
          : '' }
        <form noValidate className="project__form" onSubmit={ handleSubmit(onSubmit) }>
          <article className={ isEditing ? 'project__input-box' : 'project__input-box_hidden' }>
            <label htmlFor="dateEndNewTask" className="project__label">Дата окончания</label>
            <input
              { ...register('email', {
                required: 'Введите email адрес',
                pattern: {
                  value: /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i,
                  message: 'Некорректный адрес электронной почты',
                },
              }) }
              type="email"
              placeholder="email@email.com"
              className="project__input"
            />
            { errors !== null && (
              <span className="input__span">
                { errors.email?.message }
              </span>
            ) }
          </article>
          { thisProject !== null
            ? (
              <div className="project__buttons">
                <button type="submit" className={ isEditing ? 'project__add-card' : 'project__add-card_hidden' }>Добавить
                  участника
                </button>
                <button
                  type="button"
                  className="project__add-card"
                  onClick={ handleClick }
                >{ !isEditing ? 'Добавить участника' : 'Отмена' }
                </button>
              </div>
            )
            : '' }
        </form>
      </div>
    </div>
  );
};


export default Project;
