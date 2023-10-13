import React from 'react';

import { ITask } from '../../common/assets/constants/interface';


interface TaskInterface {
  task: ITask;
}

const Task: React.FC<TaskInterface> = ({ task }) => (
  <div className="task">
    <h3 className="task__title">{ task.name }</h3>
    <p className="task__status">{ task.status }</p>
  </div>
);

export default Task;
