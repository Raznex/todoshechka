import React from 'react';

import './_PersonalArea.scss';


const PersonalArea = () => (
  <div className="personal-area">
    <h2 className="personal-area__title">Личные данные пользователя</h2>
    <form className="personal-area__form">
      <div className="personal-area__container">
        <img src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663115153_50-mykaleidoscope-ru-p-zlaya-kapibara-krasivo-56.jpg" alt="Фото" className="personal-area__photo" />
        <div className="personal-area__data">
          <div className="personal-area__input">
            <label htmlFor="nameProfile" className="personal-area__label">Имя пользователя</label>
            <input
              disabled
              id="nameProfile"
              type="text"
              className="personal-area__name personal-area__name_disabled"
              value="My Name"
            />
          </div>
          <div className="personal-area__input">
            <label htmlFor="emailProfile" className="personal-area__label">Адрес электронной почты</label>
            <input
              disabled
              id="emailProfile"
              type="email"
              className="personal-area__name personal-area__name_disabled"
              value="Email@email.com"
            />
          </div>
          <button type="button" className="personal-area__change-photo">Изменить фото профиля</button>
        </div>
      </div>
      <div className="personal-area__buttons">
        <button type="button" className="personal-area__edit personal-area__edit_active">Редактировать</button>
        <button type="submit" className="personal-area__edit">Сохранить</button>
      </div>
      { /* <form className="personal-area__data"> */ }
      { /*  <input type="password" className="personal-area__name" /> */ }
      { /*  <button type="submit" className="personal-area__button-password">Сбросить пароль</button> */ }
      { /* </form> */ }
    </form>
  </div>
);

export default PersonalArea;
