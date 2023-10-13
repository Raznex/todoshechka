import React from 'react';

import '../Page/_Page.scss';
import '../../layout/Style/Content/_Content.scss';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';


const App = () => (
  <div className="page">
    <Menu />
    <main className="content">
      <Header />
      <Main />
    </main>
    { /* <Login /> */ }
    { /* <Register /> */ }
  </div>
);

export default App;
