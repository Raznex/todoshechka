import React, { useState } from 'react';

import './_Tasks.scss';
import { Arrow } from '../../../common/assets/icon/moduleIcon';
import Task from './Task/Task';
import TaskBox from './TaskBox/TaskBox';
import { IDashboardTask } from '../../../common/assets/constants/interface';

import { useNavigate } from 'react-router-dom';


const Tasks = () => {
  const [thisTask, setThisTask] = useState<IDashboardTask | null>(null);
  const navigate = useNavigate();
  const handleTaskClick = (taskData: IDashboardTask) => {
    setThisTask(taskData);
  };
  const tasksBack = [
    {
      name: 'Сделать задачу',
      priority: 'низкий',
      description: 'сделать многа сделать тута',
      dateStart: '22 окт',
      dateEnd: '22 окт',
    },
    {
      name: 'Сделать задачу дважды за день и еще разок на сдачу',
      priority: 'средний',
      description: 'сделать многа сделать тута',
      dateStart: '22 окт',
      dateEnd: '22 окт',
    },
  ];

  return (
    <div className="task">
      <div className="task__left">
        <h2 className="task__chapter">Backlog</h2>
        <div className="task__container">
          { tasksBack.map((task, id) => (
            <Task
              key={ id }
              task={ task }
              isActive={ thisTask?.name === task.name }
              onTaskClick={ handleTaskClick }
            />
          )) }
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
        <button type="button" className="task__add-card" onClick={ (() => navigate('/newtask', { replace: true })) }>+ Создать задачу</button>
      </div>
      <div className="task__right">
        <div>
          <h3 className="task__details">Детали задачи</h3>
          { thisTask !== null
            ? <TaskBox task={ thisTask } />
            : '' }
        </div>
        <button type="button" className="task__add-card">Редактировать задачу</button>
      </div>
    </div>
  );
};

export default Tasks;
