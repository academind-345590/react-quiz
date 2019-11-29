import React from 'react';
import classes from './Auth.css';
import Button from '../../components/UI/Button/Button';
import Imput from '../../components/UI/Input/Input';

export default class Auth extends React.Component {

  loginHandler =() => {

  }

  registerHandler=() => {

  }

  submitHandler= event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>

          <form 
            onSubmit={this.submitHandler}
            className={classes.AuthForm}
          >
            <Imput label="Email" />
            <Imput label="Пароль" />

            <Button 
              type="success" 
              onClick={this.loginHandler}
            >Войти</Button>
            <Button 
              type="primary" 
              onClick={this.registerHandler}
            >Зарегистрироваться</Button>
          </form>
        </div>
      </div>
    )
  }
}

