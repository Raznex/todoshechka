import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import './_Login.scss';
import '../../layout/Style/Input/_Input.scss';
import { ILogin } from '../../common/assets/constants/interface';
import { OpenPage, PasswordEye, PasswordEyeOpen } from '../../common/assets/icon/moduleIcon';


const Login = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILogin>({ mode: 'onChange' });

  const onSubmit = (data: ILogin) => {
    console.log({ ...data });
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__title">Добро пожаловать!</h2>
        <p className="login__text">Мы рады приветствовать вас</p>
        <form
          noValidate
          className="login__form"
          onSubmit={ handleSubmit(onSubmit) }
        >
          <div className="login__inputs">
            <article className="input">
              <div className="input__input-box">
                <label className="input__lable">Электронная почта
                </label>
                <input
                  { ...register('email', {
                    required: 'Введите адрес электронной почты',
                  }) }
                  type="email"
                  id="emailLogin"
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
            <div className="login__input-password">
              <article className="input">
                <div className="input__input-box">
                  <label className="input__lable">Пароль
                  </label>
                  <input
                    { ...register('password', {
                      required: 'Введите пароль',
                    }) }
                    type={ isVisible ? 'password' : 'text' }
                    id="passwordLogin"
                    placeholder="Пароль"
                    className={ errors.email ? 'input__input input__input_error' : 'input__input' }
                  />
                </div>
                { errors !== null && (
                  <span className="input__span">
                    { errors.email?.message }
                  </span>
                ) }
              </article>
              <PasswordEye className={ isVisible ? 'login__password-eye' : 'login__password-eye_hidden' } onClick={ (() => { setIsVisible(false); }) } />
              <PasswordEyeOpen className={ isVisible ? 'login__password-eye_hidden' : 'login__password-eye' } onClick={ (() => { setIsVisible(true); }) } />
            </div>
          </div>
          <a href="/" className="login__pass">Забыли пароль?</a>
          <button type="submit" className="login__button">Войти</button>
          <a href="/register" className="login__button login__button_register">Зарегистрироваться</a>
        </form>
      </div>
      <OpenPage className="login__image" />
    </div>
  );
};

export default Login;
