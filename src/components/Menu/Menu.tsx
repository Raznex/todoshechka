import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './_Menu.scss';
import { OpenPage } from '../../common/assets/icon/moduleIcon';
import telegram from '../../common/assets/image/telegram.png';


const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={ `${
      location.pathname === '/dashboard'
      || location.pathname === '/tasks'
      || location.pathname === '/projects'
      || location.pathname === '/newtask'
      || location.pathname === '/profile'
      || location.pathname === '/newproject' ? 'menu' : 'menu_hidden'}` }
    >
      <div className="menu__logo">
        <OpenPage className="menu__image" />
        <p className="menu__logo-text">Task-tracker</p>
      </div>
      <nav className="menu__menu">
        <ul className="menu__container">
          <li><a href="/dashboard" className={ `menu__link ${location.pathname === '/dashboard' ? 'menu__link_active' : ''}` }>Дашборд</a></li>
          <li><a href="/tasks" className={ `menu__link ${location.pathname === '/tasks' || location.pathname === '/newtask' ? 'menu__link_active' : ''}` }>Задачи</a></li>
          <li><a href="/projects" className={ `menu__link ${location.pathname === '/projects' || location.pathname === '/newproject' ? 'menu__link_active' : ''}` }>Проекты</a></li>
          <li><a href="https://t.me/Just_For_Junior_Support_bot" target="_blank" rel="noreferrer" className="menu__link"><img src={ telegram } alt="telegram" className="menu__telegram" /> Техническая поддержка</a></li>
        </ul>
        <div className="menu__profile-box">
          <button type="button" className="menu__profile" onClick={ (() => navigate('/profile', { replace: true })) }>
            <img src="#" alt="profile" className="menu__photo" />
            <div className="menu__profile_container">
              <p className="menu__name">Фамилия Имя</p>
              <p className="menu__position">Front</p>
            </div>
          </button>
          <button type="button" className="menu__exit" onClick={ (() => navigate('/login', { replace: true })) }>Выйти из аккаунта</button>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
