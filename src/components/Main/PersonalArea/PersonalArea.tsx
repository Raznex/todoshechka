import React from 'react';

import './_PersonalArea.scss';


const PersonalArea = () => (
  <div className="personal-area">
    <h2 className="personal-area__title">Личные данные пользователя</h2>
    <form className="personal-area__container">
      <img src="#" alt="Ваше фото" className="personal-area__photo" />
      <div className="personal-area__data">
        <input type="text" className="personal-area__name" />
        <input type="email" className="personal-area__name" />
        <button type="button" className="personal-area__change-photo">Изменить фото профиля</button>
      </div>
      <div className="personal-area__buttons">
        <button type="button" className="personal-area__edit">Редактировать</button>
        <button type="submit" className="personal-area__save">Сохранить</button>
      </div>
      { /* <form className="personal-area__data"> */ }
      { /*  <input type="password" className="personal-area__name" /> */ }
      { /*  <button type="submit" className="personal-area__button-password">Сбросить пароль</button> */ }
      { /* </form> */ }
    </form>
  </div>
);

export default PersonalArea;
