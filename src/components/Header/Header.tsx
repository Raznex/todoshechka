import React from 'react';
import { useLocation } from 'react-router-dom';

import './_Header.scss';
import { Lope } from '../../common/assets/icon/moduleIcon';


interface iHeaderProps {
  loggedIn: boolean;
}

const Header: React.FC<iHeaderProps> = ({ loggedIn }) => {
  const location = useLocation();
  return (
    <header className={ `${
      location.pathname === '/'
      || location.pathname === '/tasks'
      || location.pathname === '/projects'
      || location.pathname === '/newtask'
      || location.pathname === '/profile'
      || location.pathname === '/newproject' ? 'header' : 'header_hidden'}` }
    >
      <h1
        className={ `${location.pathname === '/' ? 'header__title' : 'header__title_hidden'}` }
      >{ `${loggedIn ? 'Дашборд' : 'Task-tracker'}` }
      </h1>
      <h1
        className={ `${location.pathname === '/tasks' || location.pathname === '/newtask' ? 'header__title' : 'header__title_hidden'}` }
      >Задачи
      </h1>
      <h1
        className={ `${location.pathname === '/projects' || location.pathname === '/newproject' ? 'header__title' : 'header__title_hidden'}` }
      >Проекты
      </h1>
      <h1 className={ `${location.pathname === '/profile' ? 'header__title' : 'header__title_hidden'}` }>Мой личный
        кабинет
      </h1>
      <input type="text" className="header__search" placeholder="Поиск" />
      <Lope className="header__lope" />
    </header>
  );
};

export default Header;
