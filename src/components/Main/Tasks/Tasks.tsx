import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './_Tasks.scss';
import Task from './Task/Task';
import TaskBox from './TaskBox/TaskBox';
import { IProject, ITask, IUser } from '../../../common/assets/constants/interface';
import EditTask from '../NewTask/EditTask/EditTask';
import { status } from '../../../common/assets/constants/constants';


interface ITaskProps {
  tasks: ITask[];
  project: IProject[];
  user: IUser | null;
}

const Tasks: React.FC<ITaskProps> = ({ tasks, project, user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [thisTask, setThisTask] = useState<ITask | null>(null);
  const [selectedStatus, setSelectedStatus] = useState('');
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
  };

  // Фильтрация задач по выбранному статусу
  const filteredTasks = selectedStatus
    ? tasks.filter((task) => task.statusHistories[task.statusHistories.length - 1].status === selectedStatus)
    : tasks;

  const navigate = useNavigate();
  const handleTaskClick = (taskData: ITask) => {
    setThisTask(taskData);
  };

  return (
    <> { !isEditing ? (
      <div className="task">
        <div className="task__left">
          <label htmlFor="" className="newtask__label">Статус задачи</label>
          <select
            name="status"
            id="employmentStatus-field"
            className="task__input-select"
            value={ selectedStatus }
            onChange={ handleStatusChange }
          >
            { status.map((item) => <option key={ item.value } value={ item.value }>{ item.text }</option>) }
          </select>
          <div className="task__space">
            <div className="task__container">
              { filteredTasks.map((task, id) => (
                <Task
                  key={ id }
                  task={ task }
                  isActive={ thisTask?.name === task.name }
                  onTaskClick={ handleTaskClick }
                />
              )) }
            </div>
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
          <button type="button" className={ `task__add-card ${thisTask ? '' : 'task__add-card_hidden'}` } onClick={ (() => setIsEditing(true)) }>Редактировать задачу</button>
        </div>
      </div>
    )
      : <EditTask thisTask={ thisTask } project={ project } user={ user } setIsEditing={ setIsEditing } /> }

    </>
  );
};

export default Tasks;
