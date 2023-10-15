import React from 'react';

import '../_Tasks.scss';
import { ITask } from '../../../../common/assets/constants/interface';


interface ITaskBox {
  task: ITask;
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
        <p className="task__pos2">{ task.statusHistories[task.statusHistories.length - 1].status }</p>
      </div>
      <div className="task__string">
        <p className="task__pos1">Дата изменения статуса</p>
        <p className="task__pos2">{ task.statusHistories[task.statusHistories.length - 1].dateTimeChange }</p>
      </div>
      <div className="task__string">
        <p className="task__pos1">Приоритет</p>
        <p className={ `task__priority ${task.priority === 'LOW' ? 'task__priority_n' : 'task__priority_hidden'}` }>Низкий</p>
        <p className={ `task__priority ${task.priority === 'MEDIUM' ? 'task__priority_s' : 'task__priority_hidden'}` }>Средний</p>
        <p className={ `task__priority ${task.priority === 'HIGH' ? 'task__priority_v' : 'task__priority_hidden'}` }>Высокий</p>
      </div>
      <div className="task__string">
        <p className="task__pos1">Выполняет</p>
        <div className="task__worker">
          { task.user ? <p className="task__photo">{ task.user.email }</p>
            : <p className="task__photo">Не определен</p> }
        </div>
      </div>
      <div className="task__string">
        <p className="task__pos1">Дата начала</p>
        <p className="task__pos2">{ task.dataStart }</p>
      </div>
      <div className="task__string">
        <p className="task__pos1">Дата окончания</p>
        <p className="task__pos2">{ task.dataFinish }</p>
      </div>
    </div>
  </>
);

export default TaskBox;
