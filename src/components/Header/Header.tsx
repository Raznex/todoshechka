import React from 'react';

import './_Header.scss';
import { Lope } from '../../common/assets/icon/moduleIcon';

import { useLocation } from 'react-router-dom';


const Header = () => {
  const location = useLocation();
  return (
    <header className={ `${
      location.pathname === '/dashboard'
    || location.pathname === '/tasks'
    || location.pathname === '/projects'
      || location.pathname === '/newtask'
      || location.pathname === '/profile'
      || location.pathname === '/newproject' ? 'header' : 'header_hidden'}` }
    >
      <h1 className={ `${location.pathname === '/dashboard' ? 'header__title' : 'header__title_hidden'}` }>Дашборд</h1>
      <h1 className={ `${location.pathname === '/tasks' || location.pathname === '/newtask' ? 'header__title' : 'header__title_hidden'}` }>Задачи</h1>
      <h1 className={ `${location.pathname === '/projects' || location.pathname === '/newproject' ? 'header__title' : 'header__title_hidden'}` }>Проекты</h1>
      <h1 className={ `${location.pathname === '/profile' ? 'header__title' : 'header__title_hidden'}` }>Мой личный кабинет</h1>
      <input type="text" className="header__search" placeholder="Поиск" />
      <Lope className="header__lope" />
    </header>
  );
};

export default Header;
