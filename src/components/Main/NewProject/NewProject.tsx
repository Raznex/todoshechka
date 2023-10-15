import React from 'react';

import './_NewProject.scss';

import { useForm } from 'react-hook-form';

import { INewProject } from '../../../common/assets/constants/interface';
import { postNewProject } from '../../../utils/Api/MainApi';

import { useNavigate } from 'react-router-dom';


interface INewProjectProps {
  loggedIn: boolean;
}


const NewProject: React.FC<INewProjectProps> = ({ loggedIn }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm<INewProject>({ mode: 'onBlur' });


  const onSubmit = (data: INewProject) => {
    postNewProject(data);
    navigate('/projects');
  };

  return (
    <form
      className="newproject"
      onSubmit={ handleSubmit(onSubmit) }
    >
      <div className="newproject__checkboxs">
        <h3 className="newproject__title">Создание проекта</h3>
      </div>
      <div className="newproject__inputs">
        <div className="newproject__inputs_up">
          <article className="newproject__input-box newproject__input-box_l">
            <label htmlFor="nameNewProject" className="newproject__label">Наименование<span className="newproject__span">*</span></label>
            <input
              { ...register('name', {
                required: 'Введите название проекта',
              }) }
              id="nameNewProject"
              type="text"
              className="newproject__input"
              placeholder="Наименование задачи"
            />
          </article>
          <article className="newproject__input-box newproject__input-box_l">
            <label htmlFor="descriptionNewProject" className="newproject__label">Описание</label>
            <input
              { ...register('description', {
              }) }
              id="descriptionNewProject"
              type="text"
              className="newproject__input"
              placeholder="Описание задачи"
            />
          </article>
        </div>
        <div className="newproject__inputs_down">
          <article className="newproject__input-box newproject__input-box_m">
            <label htmlFor="dateStartNewProject" className="newproject__label">Дата начала</label>
            <input
              { ...register('dataStart', {
              }) }
              id="dateStartNewProject"
              type="date"
              className="newproject__input"
              placeholder="Дата начала"
            />
          </article>
          <article className="newproject__input-box newproject__input-box_m">
            <label htmlFor="dateEndNewProject" className="newproject__label">Дата окончания</label>
            <input
              { ...register('dataFinish', {
              }) }
              id="dateEndNewProject"
              type="date"
              className="newproject__input"
              placeholder="Дата окончания"
            />
          </article>
          <article className="newproject__input-box newproject__input-box_m">
            <label htmlFor="clientNewProject" className="newproject__label">Клиент</label>
            <input
              { ...register('customer', {
              }) }
              id="clientNewProject"
              type="text"
              className="newproject__input"
              placeholder="Клиент"
            />
          </article>
        </div>
        <p className="newproject__star"><span className="newproject__span">*</span> - поле, обязательное для заполнения</p>
        <button type="submit" className="newproject__button">Создать</button>
      </div>
    </form>
  );
};

export default NewProject;
