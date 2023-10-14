import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { IRegister } from '../../common/assets/constants/interface';
import { OpenPage, PasswordEye, PasswordEyeOpen } from '../../common/assets/icon/moduleIcon';
import './_Register.scss';
import '../../layout/Style/Input/_Input.scss';


const Register = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleRep, setIsVisibleRep] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegister>({ mode: 'onBlur' });

  const onSubmit = (data: IRegister) => {
    const { passwordRegister, passwordRepeat } = data;
    if (passwordRegister === passwordRepeat) {
      console.log(data);
      navigate('/login', { replace: true });
    } else {
      alert('пароли не совпадают');
    }
  };

  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__title">Добро пожаловать!</h2>
        <p className="register__text">Мы рады приветствовать вас</p>
        <form
          noValidate
          className="register__form"
          onSubmit={ handleSubmit(onSubmit) }
        >
          <div className="register__inputs">
            <article className="input">
              <div className="input__input-box">
                <label className="input__lable">Имя пользователя
                  <span className="input__lable-span">*</span>
                </label>
                <input
                  { ...register('loginRegister', {
                    required: 'Введите имя пользователя',
                    pattern: {
                      value: /^(?=.{2,40}$)[a-zA-Zа-яА-ЯёЁ]+(?: [a-zA-Zа-яА-ЯёЁ]+)*$/i,
                      message: 'Некорректное имя пользователя',
                    },
                  }) }
                  type="text"
                  id="loginRegister"
                  placeholder="Ваше имя"
                  className={ errors.loginRegister ? 'input__input input__input_error' : 'input__input' }
                />
              </div>
              { errors !== null && (
                <span className="input__span">
                  { errors.loginRegister?.message }
                </span>
              ) }
            </article>
            <article className="input">
              <div className="input__input-box">
                <label className="input__lable">Электронная почта
                  <span className="input__lable-span">*</span>
                </label>
                <input
                  { ...register('emailRegister', {
                    required: 'Введите адрес электронной почты',
                    pattern: {
                      value: /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i,
                      message: 'Некорректный адрес электронной почты',
                    },
                  }) }
                  type="email"
                  id="emailRegister"
                  placeholder="email@email.com"
                  className={ errors.emailRegister ? 'input__input input__input_error' : 'input__input' }
                />
              </div>
              { errors !== null && (
                <span className="input__span">
                  { errors.emailRegister?.message }
                </span>
              ) }
            </article>
            <div className="register__input-password">
              <article className="input">
                <div className="input__input-box">
                  <label className="input__lable">Пароль
                    <span className="input__lable-span">*</span>
                  </label>
                  <input
                    { ...register('passwordRegister', {
                      required: 'Введите пароль',
                      pattern: {
                        value: /^.{8,}$/,
                        message: 'Пароль должен содержать не менее 8 символов',
                      },
                    }) }
                    type={ isVisible ? 'password' : 'text' }
                    id="passwordRegister"
                    placeholder="Пароль"
                    className={ errors.passwordRegister ? 'input__input input__input_error' : 'input__input' }
                  />
                </div>
                { errors !== null && (
                  <span className="input__span">
                    { errors.passwordRegister?.message }
                  </span>
                ) }
              </article>
              <PasswordEye className={ isVisible ? 'register__password-eye' : 'register__password-eye_hidden' } onClick={ (() => { setIsVisible(false); }) } />
              <PasswordEyeOpen className={ isVisible ? 'register__password-eye_hidden' : 'register__password-eye' } onClick={ (() => { setIsVisible(true); }) } />
            </div>
            <div className="register__input-password">
              <article className="input">
                <div className="input__input-box">
                  <label className="input__lable">Повторите пароль
                    <span className="input__lable-span">*</span>
                  </label>
                  <input
                    { ...register('passwordRepeat', {
                      required: 'Введите пароль еще раз',
                    }) }
                    type={ isVisibleRep ? 'password' : 'text' }
                    id="passwordRegisterRepeat"
                    placeholder="Пароль"
                    className={ errors.passwordRepeat ? 'input__input input__input_error' : 'input__input' }
                  />
                </div>
                { errors !== null && (
                  <span className="input__span">
                    { errors.passwordRepeat?.message }
                  </span>
                ) }
              </article>
              <PasswordEye className={ isVisibleRep ? 'register__password-eye' : 'register__password-eye_hidden' } onClick={ (() => { setIsVisibleRep(false); }) } />
              <PasswordEyeOpen className={ isVisibleRep ? 'register__password-eye_hidden' : 'register__password-eye' } onClick={ (() => { setIsVisibleRep(true); }) } />
            </div>
          </div>
          <button type="submit" className="register__button">Зарегистрироваться</button>
          <a href="/login" className="register__pass">Уже зарегистрированы? Войти</a>
        </form>
      </div>
      <OpenPage className="register__image" />
    </div>
  );
};

export default Register;
