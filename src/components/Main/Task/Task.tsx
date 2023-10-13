import React from 'react';

import './_Task.scss';
import { Arrow } from '../../../common/assets/icon/moduleIcon';


const Task = () => {
  const cs = 1;
  return (
    <div className="task">
      <div className="task__left">
        <h2 className="task__chapter">Backlog</h2>
        <div className="task__container">
          <article className="task__card">
            <p className="task__title">Сделать описание сервиса</p>
            <div className="task__worker">
              <img src="#" alt="Photos" className="task__photo" />
            </div>
            <p className="task__priority">низкий</p>
            <p className="task__deadlines">23 окт - 29 окт</p>
            <Arrow className="task__arrow" />
          </article>
        </div>
        <h2 className="task__chapter">To do</h2>
        <div className="task__container">
          <article className="task__card">
            <p className="task__title">Сделать описание сервиса</p>
            <div className="task__worker">
              <img src="#" alt="Photos" className="task__photo" />
            </div>
            <p className="task__priority">низкий</p>
            <p className="task__deadlines">23 окт - 29 окт</p>
            <Arrow className="task__arrow" />
          </article>
        </div>
        <h2 className="task__chapter">In progress</h2>
        <div className="task__container">
          <article className="task__card task__card_active">
            <p className="task__title task__title_active">Сделать описание сервиса</p>
            <div className="task__worker">
              <img src="#" alt="Photos" className="task__photo" />
            </div>
            <p className="task__priority">низкий</p>
            <p className="task__deadlines task__deadlines_active">23 окт - 29 окт</p>
            <Arrow className="task__arrow" />
          </article>
        </div>
        <h2 className="task__chapter">Done</h2>
        <div className="task__container">
          <article className="task__card">
            <p className="task__title">Сделать описание сервиса</p>
            <div className="task__worker">
              <img src="#" alt="Photos" className="task__photo" />
            </div>
            <p className="task__priority">низкий</p>
            <p className="task__deadlines">23 окт - 29 окт</p>
            <Arrow className="task__arrow" />
          </article>
        </div>
        <button type="button" className="task__add-card">+ Создать задачу</button>
      </div>
      <div className="task__right">
        <div>
          <h3 className="task__details">Детали задачи</h3>
          <p className="task__text">Разнообразный и богатый опыт говорит нам, что
            высокое качество позиционных исследований однозначно фиксирует.
          </p>
          <div className="task__box">
            <div className="task__string">
              <p className="task__pos1">Название</p>
              <p className="task__pos2">Сделать описание сервиса</p>
            </div>
            <div className="task__string">
              <p className="task__pos1">Статус</p>
              <p className="task__pos2">Backlog</p>
            </div>
            <div className="task__string">
              <p className="task__pos1">Приоритет</p>
              <p className="task__priority">низкий</p>
            </div>
            <div className="task__string">
              <p className="task__pos1">Название</p>
              <div className="task__worker">
                <img src="#" alt="Photos" className="task__photo" />
              </div>
            </div>
            <div className="task__string">
              <p className="task__pos1">Дата начала</p>
              <p className="task__pos2">20.10.2020</p>
            </div>
            <div className="task__string">
              <p className="task__pos1">Дата окончания</p>
              <p className="task__pos2">20.10.2020</p>
            </div>
          </div>
        </div>
        <button type="button" className="task__add-card">Редактировать задачу</button>
      </div>
    </div>
  );
};

export default Task;
