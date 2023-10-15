import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { IRegister } from '../../common/assets/constants/interface';
import { OpenPage, PasswordEye, PasswordEyeOpen } from '../../common/assets/icon/moduleIcon';
import './_Register.scss';
import '../../layout/Style/Input/_Input.scss';
import { registerUser } from '../../utils/Api/MainApi';


const Register = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleRep, setIsVisibleRep] = useState(true);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegister>({ mode: 'onBlur' });

  const onSubmit = (data: IRegister) => {
    const { password, passwordRepeat } = data;
    if (password === passwordRepeat) {
      registerUser(data);
      navigate('/login', { replace: true });
    } else {
      setPasswordError('Пароли не совпадают');
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
                  { ...register('userName', {
                    required: 'Введите имя пользователя',
                    pattern: {
                      value: /^(?=.{2,40}$)[a-zA-Zа-яА-ЯёЁ]+(?: [a-zA-Zа-яА-ЯёЁ]+)*$/i,
                      message: 'Некорректное имя пользователя',
                    },
                  }) }
                  type="text"
                  id="loginRegister"
                  placeholder="Ваше имя"
                  className={ errors.userName ? 'input__input input__input_error' : 'input__input' }
                />
              </div>
              { errors !== null && (
                <span className="input__span">
                  { errors.userName?.message }
                </span>
              ) }
            </article>
            <article className="input">
              <div className="input__input-box">
                <label className="input__lable">Электронная почта
                  <span className="input__lable-span">*</span>
                </label>
                <input
                  { ...register('email', {
                    required: 'Введите адрес электронной почты',
                    pattern: {
                      value: /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i,
                      message: 'Некорректный адрес электронной почты',
                    },
                  }) }
                  type="email"
                  id="emailRegister"
                  placeholder="email@email.com"
                  className={ errors.email ? 'input__input input__input_error' : 'input__input' }
                />
              </div>
              { errors !== null && (
                <span className="input__span">
                  { errors.email?.message }
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
                    { ...register('password', {
                      required: 'Введите пароль',
                      pattern: {
                        value: /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/,
                        message: 'Пароль должен содержать не менее 8 символов',
                      },
                    }) }
                    type={ isVisible ? 'password' : 'text' }
                    id="passwordRegister"
                    placeholder="Пароль"
                    className={ errors.password ? 'input__input input__input_error' : 'input__input' }
                  />
                </div>
                { errors !== null && (
                  <span className="input__span">
                    { errors.password?.message }
                  </span>
                ) }
                { passwordError !== '' ? (
                  <span className="input__span">
                    { passwordError }
                  </span>
                ) : '' }
              </article>
              <PasswordEye
                className={ isVisible ? 'register__password-eye' : 'register__password-eye_hidden' }
                onClick={ (() => {
                  setIsVisible(false);
                }) }
              />
              <PasswordEyeOpen
                className={ isVisible ? 'register__password-eye_hidden' : 'register__password-eye' }
                onClick={ (() => {
                  setIsVisible(true);
                }) }
              />
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
                { passwordError !== '' ? (
                  <span className="input__span">
                    { passwordError }
                  </span>
                ) : '' }
              </article>
              <PasswordEye
                className={ isVisibleRep ? 'register__password-eye' : 'register__password-eye_hidden' }
                onClick={ (() => {
                  setIsVisibleRep(false);
                }) }
              />
              <PasswordEyeOpen
                className={ isVisibleRep ? 'register__password-eye_hidden' : 'register__password-eye' }
                onClick={ (() => {
                  setIsVisibleRep(true);
                }) }
              />
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
