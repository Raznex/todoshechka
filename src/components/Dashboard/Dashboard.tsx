import React, { useState } from 'react';

import Accordion from './Accordion/Accordion';
import './_Dashboard.scss';
import Projects from './Projects/Projects';


const Dashboard = () => {
  const [openIdRecCard, setOpenIdRecCard] = useState<number[]>([]);

  const cards = [
    {
      name: 'Сделать задачу',
      priority: 'низкий',
      description: 'сделать многа сделать тута',
      dateStart: '22.04.3232',
      dateEnd: '22.12.3232',
    },
    {
      name: 'Сделать задачу',
      priority: 'средний',
      description: 'сделать многа сделать тута',
      dateStart: '22.04.3232',
      dateEnd: '22.12.3232',
    },
    {
      name: 'Сделать задачу',
      priority: 'высокий',
      description: 'сделать многа сделать тута',
      dateStart: '22.04.3232',
      dateEnd: '22.12.3232',
    },
  ];

  const projects = [
    {
      name: 'Банк1',
      quantity: 1,
      dateStart: '22.04.3232',
      dateEnd: '22.12.3232',
    },
    {
      name: 'Банк2',
      quantity: 3,
      dateStart: '22.04.3232',
      dateEnd: '22.12.3232',
    },
  ];

  const handleToggle = (id: number) => {
    if (openIdRecCard.includes(id)) {
      setOpenIdRecCard(openIdRecCard.filter((openId) => openId !== id));
    } else {
      setOpenIdRecCard([...openIdRecCard, id]);
    }
  };
  return (
    <div className="dashboard">
      <div className="dashboard__task-box">
        <h2 className="dashboard__title">Мои задачи</h2>
        <ul className="dashboard__accordion">
          { cards.map((card, id) => (
            <Accordion
              key={ id }
              isOpen={ openIdRecCard.includes(id) }
              card={ card }
              onClick={ () => handleToggle(id) }
            />
          )) }
        </ul>
      </div>
      <div className="dashboard__project-box">
        <h2 className="dashboard__title">Мои проекты</h2>
        <ul className="dashboard__projects">
          { projects.map((project, id) => (
            <Projects
              key={ id }
              project={ project }
            />
          )) }
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
