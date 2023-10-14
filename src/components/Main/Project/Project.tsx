import React, { useState } from 'react';

import './_Project.scss';
import { Arrow } from '../../../common/assets/icon/moduleIcon';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { IAddONProject } from '../../../common/assets/constants/interface';

import { Simulate } from 'react-dom/test-utils';

import reset = Simulate.reset;


const Project = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
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
  } = useForm<IAddONProject>({ mode: 'onBlur' });

  const onSubmit = (data: IAddONProject) => {
    console.log({ ...data });
    setIsEditing(false);
  };

  return (
    <div className="project">
      <div className="project__left">
        <div className="project__space_1">
          <h2 className="project__chapter">Проекты</h2>
          <article className="project__card">
            <div className="project__bank">
              <img src="#" alt="Bank" className="project__photo" />
              <div className="project__description">
                <p className="project__title">Банк ВТБ</p>
                <div className="project__task">
                  <p className="project__quantity">20 задач&nbsp;</p>
                </div>
              </div>
            </div>
            <div className="project__right-side">
              <img src="#" alt="Photos" className="project__img" />
              <p className="project__deadlines">5 октября - 10 октября</p>
            </div>
          </article>
          <article className="project__card project__card_active">
            <div className="project__bank">
              <img src="#" alt="Bank" className="project__photo" />
              <div className="project__description">
                <p className="project__title project__title_active">Ренессанс Банк</p>
                <div className="project__task">
                  <p className="project__quantity">9 задач&nbsp;</p>
                  <p className="project__quantity">&#8226; 0 просрочено</p>
                </div>
              </div>
            </div>
            <div className="project__right-side">
              <img src="#" alt="Photos" className="project__img" />
              <p className="project__deadlines">5 октября - 10 октября</p>
            </div>
          </article>
        </div>
        <button type="button" className="project__add-card" onClick={ (() => navigate('/newproject', { replace: true })) }>+ Создать проект</button>
      </div>
      <div className="project__right">
        <div className="project__space_2">
          <div>
            <h3 className="project__chapter">Проект Ренессанс Банк</h3>
            <p className="project__text">Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований однозначно фиксирует.
            </p>
            <div className="project__box">
              <div className="project__string">
                <p className="project__pos1">Клиент</p>
                <p className="project__pos2">Neoflex</p>
              </div>
              <div className="project__string">
                <p className="project__pos1">Дата начала</p>
                <p className="project__pos2">12.10.2023</p>
              </div>
              <div className="project__string">
                <p className="project__pos1">Дата окончания</p>
                <p className="project__pos2">16.10.2023</p>
              </div>
              <div className="project__string">
                <p className="project__pos1">Участники</p>
                <div className="project__worker">
                  <img src="#" alt="Photos" className="project__img" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="project__tasks">
              <h2 className="project__chapter">Задачи</h2>
              <p className="project__review">посмотреть все</p>
            </div>
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
        </div>
        <form className="project__form" onSubmit={ handleSubmit(onSubmit) }>
          <article className={ isEditing ? 'project__input-box' : 'project__input-box_hidden' }>
            <label htmlFor="dateEndNewTask" className="project__label">Дата окончания</label>
            <input
              { ...register('addNewOnTask', {
              }) }
              type="email"
              placeholder="email@email.com"
              className="project__input"
            />
          </article>
          <div className="project__buttons">
            <button type="submit" className={ isEditing ? 'project__add-card' : 'project__add-card_hidden' }>Добавить участника</button>
            <button type="button" className="project__add-card" onClick={ handleClick }>{ !isEditing ? 'Добавить участника' : 'Отмена' }</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Project;
