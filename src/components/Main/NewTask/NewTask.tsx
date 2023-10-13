import React, { useState } from 'react';

import './_NewTask.scss';
import { BxsUpArrow, Cross } from '../../../common/assets/icon/moduleIcon';

import { useForm } from 'react-hook-form';

import { INewTask } from '../../../common/assets/constants/interface';


const NewTask = () => {
  const {
    register,
    handleSubmit,
  } = useForm<INewTask>({ mode: 'onBlur' });

  const [value, setValue] = useState('');

  const onSubmit = (data: INewTask) => {
    console.log({ ...data, value });
  };

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
            <label htmlFor="radio-1" className={ `newtask__radio-label newtask__radio-label_n ${value === 'низкий' ? 'selected' : ''}` }>
              <Cross className="newtask__cross" />
              низкий
            </label>
            <input
              type="radio"
              id="radio-1"
              value="низкий"
              checked={ value === 'низкий' }
              onChange={ (() => setValue('низкий')) }
            />
          </div>
          <div className="newtask__radio-btn">
            <label htmlFor="radio-2" className={ `newtask__radio-label newtask__radio-label_s ${value === 'средний' ? 'selected' : ''}` }>
              <Cross className="newtask__cross" />
              средний
            </label>
            <input
              type="radio"
              id="radio-2"
              value="средний"
              checked={ value === 'средний' }
              onChange={ (() => setValue('средний')) }
            />
          </div>
          <div className="newtask__radio-btn">
            <label htmlFor="radio-3" className={ `newtask__radio-label newtask__radio-label_v ${value === 'высокий' ? 'selected' : ''}` }>
              <Cross className="newtask__cross" />
              высокий
            </label>
            <input
              type="radio"
              id="radio-3"
              value="высокий"
              checked={ value === 'высокий' }
              onChange={ (() => setValue('высокий')) }
            />
          </div>
        </div>
      </div>
      <div className="newtask__inputs">
        <div className="newtask__inputs_up">
          <article className="newtask__input-box newtask__input-box_l">
            <label htmlFor="nameNewTask" className="newtask__label">Наименование<span className="newtask__span">*</span></label>
            <input
              { ...register('nameNewTask', {
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
              { ...register('descriptionNewTask', {
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
              { ...register('dateStartNewTask', {
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
              { ...register('dateEndNewTask', {
              }) }
              id="dateEndNewTask"
              type="date"
              className="newtask__input"
              placeholder="Дата окончания"
            />
          </article>
        </div>
        <p className="newtask__star"><span className="newtask__span">*</span> - поле, обязательное для заполнения</p>
        <button type="submit" className="newtask__button">Создать</button>
      </div>
    </form>
  );
};

export default NewTask;
