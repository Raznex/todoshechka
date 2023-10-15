import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './_Tasks.scss';
import Task from './Task/Task';
import TaskBox from './TaskBox/TaskBox';
import { IProject, ITask, IUser } from '../../../common/assets/constants/interface';
import EditTask from '../NewTask/EditTask/EditTask';


interface ITaskProps {
  tasks: ITask[];
  project: IProject[];
  user: IUser | null;
}

const Tasks: React.FC<ITaskProps> = ({ tasks, project, user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [thisTask, setThisTask] = useState<ITask | null>(null);
  const navigate = useNavigate();
  const handleTaskClick = (taskData: ITask) => {
    setThisTask(taskData);
  };

  return (
    <> { !isEditing ? (
      <div className="task">
        <div className="task__left">
          <h2 className="task__chapter">Backlog</h2>
          <div className="task__space">
            <div className="task__container">
              { tasks.map((task, id) => (
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
