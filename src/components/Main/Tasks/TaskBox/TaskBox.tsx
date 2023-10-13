import React from 'react';

import '../_Tasks.scss';
import { IDashboardTask } from '../../../../common/assets/constants/interface';


interface ITaskBox {
  task: IDashboardTask;
}

const TaskBox: React.FC<ITaskBox> = ({ task }) => (
  <>
    <p className="task__text">Разнообразный и богатый опыт говорит нам, что
      высокое качество позиционных исследований однозначно фиксирует.
    </p>
    <div className="task__box">
      <div className="task__string">
        <p className="task__pos1">Название</p>
        <p className="task__pos2">{ task.name }</p>
      </div>
      <div className="task__string">
        <p className="task__pos1">Статус</p>
        <p className="task__pos2">Backlog</p>
      </div>
      <div className="task__string">
        <p className="task__pos1">Приоритет</p>
        <p className={ `task__priority ${task.priority === 'низкий' ? 'task__priority_n' : 'task__priority_hidden'}` }>{ task.priority }</p>
        <p className={ `task__priority ${task.priority === 'средний' ? 'task__priority_s' : 'task__priority_hidden'}` }>{ task.priority }</p>
        <p className={ `task__priority ${task.priority === 'высокий' ? 'task__priority_v' : 'task__priority_hidden'}` }>{ task.priority }</p>
      </div>
      <div className="task__string">
        <p className="task__pos1">Название</p>
        <div className="task__worker">
          <img src="#" alt="Photos" className="task__photo" />
        </div>
      </div>
      <div className="task__string">
        <p className="task__pos1">Дата начала</p>
        <p className="task__pos2">{ task.dateStart }</p>
      </div>
      <div className="task__string">
        <p className="task__pos1">Дата окончания</p>
        <p className="task__pos2">{ task.dateEnd }</p>
      </div>
    </div>
  </>
);

export default TaskBox;
