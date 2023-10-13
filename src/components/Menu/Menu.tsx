import React from 'react';

import './_Menu.scss';
import { OpenPage } from '../../common/assets/icon/moduleIcon';


const Menu = () => (
  <div className="menu">
    <div className="menu__logo">
      <OpenPage className="menu__image" />
      <p className="menu__logo-text">Task-tracker</p>
    </div>
    <nav className="menu__menu">
      <ul className="menu__container">
        <li className="menu__link menu__link_active"><p>Дашборд</p></li>
        <li className="menu__link"><p>Задачи</p></li>
        <li className="menu__link"><p>Проекты</p></li>
      </ul>
      <div className="menu__profile">
        <img src="#" alt="profile" className="menu__photo" />
        <div className="menu__profile_container">
          <p className="menu__name">Фамилия Имя</p>
          <p className="menu__position">Front</p>
        </div>
      </div>
    </nav>
  </div>
);

export default Menu;
