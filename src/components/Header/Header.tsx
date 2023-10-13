import React from 'react';

import './_Header.scss';
import { Lope } from '../../common/assets/icon/moduleIcon';


const Header = () => (
  <header className="header">
    <h1 className="header__title">Дашборд</h1>
    <input type="text" className="header__search" placeholder="Поиск" />
    <Lope className="header__lope" />
  </header>
);

export default Header;
