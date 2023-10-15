import React, { ChangeEvent, useEffect, useState } from 'react';

import '../_NewTask.scss';
import { Cross } from '../../../../common/assets/icon/moduleIcon';

import { useForm } from 'react-hook-form';

import { IEditTask, IProject, ITask, IUser } from '../../../../common/assets/constants/interface';

import { useLocation } from 'react-router-dom';

import { deleteTask, putTask } from '../../../../utils/Api/MainApi';
import { status } from '../../../../common/assets/constants/constants';


interface IEditTaskProps {
  thisTask: ITask | null;
  project: IProject[];
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTask: React.FC<IEditTaskProps> = ({ project, thisTask, setIsEditing }) => {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm<IEditTask>({ mode: 'onBlur' });
  const [priority, setPriority] = useState('LOW');

  const [name, setName] = useState(thisTask?.name || '');
  const [description, setDescription] = useState(thisTask?.description || '');
  const [dataStart, setDataStart] = useState(thisTask?.dataStart || '');
  const [dataFinish, setDataFinish] = useState(thisTask?.dataFinish || '');
  const [projectId, setProjectId] = useState(thisTask?.project.projectId || '');
  const [statusTask, setStatusTask] = useState(thisTask?.statusHistories[thisTask.statusHistories.length - 1].status || '');
  // const [userEmail, setUserEmail] = useState(thisTask?.user.email || '');
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleDescruptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatusTask(event.target.value);
  };
  const handleProjectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setProjectId(event.target.value);
  };
  const handleDataStartChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDataStart(event.target.value);
  };
  const handleDataFinishChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDataFinish(event.target.value);
  };
  // const handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setUserEmail(event.target.value);
  // };

  useEffect(() => {
    if (thisTask) {
      setPriority(thisTask?.priority);
    }
  }, [setIsEditing]);

  const onSubmit = (data: IEditTask) => {
    if (thisTask) {
      putTask({ ...data, priority }, thisTask?.taskId);
      setIsEditing(false);
    }
  };

  const onDeleteTask = () => {
    if (thisTask) {
      deleteTask(thisTask?.taskId);
      setIsEditing(false);
    }
  };

  const positionConst = project.map((project) => ({
    projectId: project.projectId, // Corrected
    name: project.name, // Corrected
  }));
  positionConst.unshift({
    projectId: 0,
    name: 'Без привязки к проекту',
  });

  return (
    <form
      className="newtask"
      onSubmit={ handleSubmit(onSubmit) }
    >
      <div className="newtask__checkboxs">
        <h3 className="newtask__title">Редактирование задачи</h3>
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
              value={ name || '' }
              onChange={ handleNameChange }
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
              value={ description || '' }
              onChange={ handleDescruptionChange }
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
              value={ dataStart || '' }
              onChange={ handleDataStartChange }
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
              value={ dataFinish || '' }
              onChange={ handleDataFinishChange }
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
              value={ projectId }
              onChange={ handleProjectChange }
            >
              { positionConst.map((item) => <option key={ item.projectId } value={ item.projectId }>{ item.name }</option>) }
            </select>
          </article>
          <article className="newtask__input-box newtask__input-box_m">
            <label htmlFor="" className="newtask__label">Статус задачи</label>
            <select
              { ...register('status') }
              id="employmentStatus-field"
              className="newtask__input newtask__input_select"
              value={ statusTask }
              onChange={ handleStatusChange }
            >
              { status.map((item) => <option key={ item.value } value={ item.value }>{ item.text }</option>) }
            </select>
          </article>
          <article className="newtask__input-box newtask__input-box_m">
            <label htmlFor="addToProjectEmail" className="newtask__label">Добавьте email сотрудника</label>
            <input
              { ...register('userEmail', {
                pattern: {
                  value: /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i,
                  message: 'Некорректный адрес электронной почты',
                },
              }) }
              id="addToProjectEmail"
              type="email"
              className="newtask__input"
              placeholder="email@email.com"
            />
          </article>
        </div>
        <div className="newtask__buttons">
          <button type="submit" className="newtask__button newtask__button_edit">Сохранить</button>
          <button type="button" className="newtask__button" onClick={ (() => { setIsEditing(false); }) }>Назад</button>
          <button type="button" className="newtask__button newtask__button_delete" onClick={ onDeleteTask }>Удалить</button>
        </div>
      </div>
    </form>
  );
};

export default EditTask;
