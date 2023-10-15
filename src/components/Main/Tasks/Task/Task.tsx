import React from 'react';

import '../_Tasks.scss';
import { Arrow } from '../../../../common/assets/icon/moduleIcon';
import { ITask } from '../../../../common/assets/constants/interface';


interface ITaskProps {
  task: ITask;
  onTaskClick: (taskData: ITask) => void;
  isActive: boolean;
}


const Task: React.FC<ITaskProps> = ({ task, onTaskClick, isActive }) => {
  const onClick = (task: ITask) => {
    onTaskClick(task);
  };

  return (
    <button type="button" className={ `task__card ${isActive ? 'task__card_active' : ''}` } onClick={ () => onClick(task) }>
      <p className={ `task__title ${isActive ? 'task__title_active' : ''}` }>{ task.name }</p>
      <div className="task__worker" />
      <p className={ `task__priority ${task.priority === 'низкий' ? 'task__priority_n' : 'task__priority_hidden'}` }>{ task.priority }</p>
      <p className={ `task__priority ${task.priority === 'средний' ? 'task__priority_s' : 'task__priority_hidden'}` }>{ task.priority }</p>
      <p className={ `task__priority ${task.priority === 'высокий' ? 'task__priority_v' : 'task__priority_hidden'}` }>{ task.priority }</p>
      <p className={ `task__deadlines ${isActive ? 'task__deadlines_active' : ''}` }>{ task.dataStart } - { task.dataFinish }</p>
      <Arrow className="task__arrow" />
    </button>
  );
};

export default Task;
