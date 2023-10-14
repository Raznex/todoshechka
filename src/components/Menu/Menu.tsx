import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './_Menu.scss';
import { OpenPage } from '../../common/assets/icon/moduleIcon';
import telegram from '../../common/assets/image/telegram.png';


interface IMenuProps {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<IMenuProps> = ({ loggedIn, setLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/login', { replace: true });
  };
  return (
    <div className={ `${
      location.pathname === '/'
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
        <ul className={ `menu__container ${loggedIn ? '' : 'menu__profile-box_hidden'}` }>
          <li><a href="/" className={ `menu__link ${location.pathname === '/' ? 'menu__link_active' : ''}` }>Дашборд</a></li>
          <li><a href="/tasks" className={ `menu__link ${location.pathname === '/tasks' || location.pathname === '/newtask' ? 'menu__link_active' : ''}` }>Задачи</a></li>
          <li><a href="/projects" className={ `menu__link ${location.pathname === '/projects' || location.pathname === '/newproject' ? 'menu__link_active' : ''}` }>Проекты</a></li>
          <li><a href="https://t.me/Just_For_Junior_Support_bot" target="_blank" rel="noreferrer" className="menu__link"><img src={ telegram } alt="telegram" className="menu__telegram" /> Техническая поддержка</a></li>
        </ul>
        <button type="button" className={ `${!loggedIn ? 'menu__button-login' : 'menu__button-login_hidden'}` } onClick={ (() => navigate('/login', { replace: true })) }>Авторизоваться</button>
        <div className={ `menu__profile-box ${loggedIn ? '' : 'menu__profile-box_hidden'}` }>
          <button type="button" className="menu__profile" onClick={ (() => navigate('/profile', { replace: true })) }>
            <img src="#" alt="profile" className="menu__photo" />
            <div className="menu__profile_container">
              <p className="menu__name">Фамилия Имя</p>
              <p className="menu__position">Front</p>
            </div>
          </button>
          <button type="button" className="menu__exit" onClick={ onLogout }>Выйти из аккаунта</button>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
