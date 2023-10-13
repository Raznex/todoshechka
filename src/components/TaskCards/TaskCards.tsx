import React from 'react';

import Task from '../Task/Task';
import { ITask } from '../../common/assets/constants/interface';


const TaskCards = () => {
  const tasks: ITask[] = [
    {
      id: 1,
      name: 'task',
      status: 'employed',
    },
    {
      id: 2,
      name: 'task2',
      status: 'employed2',
    },
  ];

  return (
    <div className="loan-offer">
      { tasks.map((task) => <Task key={ task.id } task={ task } />) }
    </div>
  );
};

export default TaskCards;
