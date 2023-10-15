import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { Cross } from '../../../common/assets/icon/moduleIcon';
import { INewTask, IProject } from '../../../common/assets/constants/interface';
import { getUserTask, postNewTask } from '../../../utils/Api/MainApi';


interface INewTaskProps {
  project: IProject[];
}

const NewTask: React.FC<INewTaskProps> = ({ project }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm<INewTask>({ mode: 'onBlur' });

  const [priority, setPriority] = useState('LOW');

  const onSubmit = (data: INewTask) => {
    postNewTask({ ...data, priority });
    navigate('/tasks');
  };

  const positionConst = project.map((project) => ({
    projectId: project.projectId, // Corrected
    name: project.name, // Corrected
  }));
  positionConst.unshift({
    projectId: 0,
    name: 'Без привязки к проекту',
  });
  console.log(positionConst);

  return (
    <form
      className="newtask"
      onSubmit={ handleSubmit(onSubmit) }
    >
      <div className="newtask__checkboxs">
        <h3 className="newtask__title">Создание задачи</h3>
        <div className="newtask__radio-box">
          <p className="newtask__radio-text">Приоритет задачи</p>
          <div className="newtask__radio-btn">
            <label htmlFor="radio-1" className={ `newtask__radio-label newtask__radio-label_n ${priority === 'LOW' ? 'selected' : ''}` }>
              <Cross className="newtask__cross" />
              низкий
            </label>
            <input
              type="radio"
              id="radio-1"
              value="LOW"
              checked={ priority === 'LOW' }
              onChange={ (() => setPriority('LOW')) }
            />
          </div>
          <div className="newtask__radio-btn">
            <label htmlFor="radio-2" className={ `newtask__radio-label newtask__radio-label_s ${priority === 'MEDIUM' ? 'selected' : ''}` }>
              <Cross className="newtask__cross" />
              средний
            </label>
            <input
              type="radio"
              id="radio-2"
              value="MEDIUM"
              checked={ priority === 'MEDIUM' }
              onChange={ (() => setPriority('MEDIUM')) }
            />
          </div>
          <div className="newtask__radio-btn">
            <label htmlFor="radio-3" className={ `newtask__radio-label newtask__radio-label_v ${priority === 'HIGH' ? 'selected' : ''}` }>
              <Cross className="newtask__cross" />
              высокий
            </label>
            <input
              type="radio"
              id="radio-3"
              value="HIGH"
              checked={ priority === 'HIGH' }
              onChange={ (() => setPriority('HIGH')) }
            />
          </div>
        </div>
      </div>
      <div className="newtask__inputs">
        <div className="newtask__inputs_up">
          <article className="newtask__input-box newtask__input-box_l">
            <label htmlFor="nameNewTask" className="newtask__label">Наименование<span className="newtask__span">*</span></label>
            <input
              { ...register('name', {
                required: 'Введите название проекта',
              }) }
              id="nameNewTask"
              type="text"
              className="newtask__input"
              placeholder="Наименование задачи"
            />
          </article>
          <article className="newtask__input-box newtask__input-box_l">
            <label htmlFor="descriptionNewTask" className="newtask__label">Описание</label>
            <input
              { ...register('description', {
              }) }
              id="descriptionNewTask"
              type="text"
              className="newtask__input"
              placeholder="Описание задачи"
            />
          </article>
        </div>
        <div className="newtask__inputs_down">
          <article className="newtask__input-box newtask__input-box_m">
            <label htmlFor="dateStartNewTask" className="newtask__label">Дата начала</label>
            <input
              { ...register('dataStart', {
              }) }
              id="dateStartNewTask"
              type="date"
              className="newtask__input"
              placeholder="Дата начала"
            />
          </article>
          <article className="newtask__input-box newtask__input-box_m">
            <label htmlFor="dateEndNewTask" className="newtask__label">Дата окончания</label>
            <input
              { ...register('dataFinish', {
              }) }
              id="dateEndNewTask"
              type="date"
              className="newtask__input"
              placeholder="Дата окончания"
            />
          </article>
          <article className="newtask__input-box newtask__input-box_m">
            <label htmlFor="" className="newtask__label">Проект</label>
            <select
              { ...register('projectId', {
                required: 'Select one of the options',
              }) }
              id="employmentStatus-field"
              className="newtask__input newtask__input_select"
            >
              { positionConst.map((item) => <option key={ item.projectId } value={ item.projectId }>{ item.name }</option>) }
            </select>
          </article>
        </div>
        <p className="newtask__star"><span className="newtask__span">*</span> - поле, обязательное для заполнения</p>
        <button type="submit" className="newtask__button">Создать</button>
      </div>
    </form>
  );
};

export default NewTask;
