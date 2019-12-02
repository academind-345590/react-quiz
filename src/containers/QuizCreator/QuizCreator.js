import React from 'react';
import classes from './QuizCreator.css';
import Button from '../../components/UI/Button/Button';

export default class QuizCreator extends React.Component {

  submitHandler = event => {
    event.preventDefault()
  }

  addQuestionHandler=()=>{}

  createQuestionHandler=()=>{}

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание тестов</h1>

          <form inSubmit={this.submitHandler}>

            <input type="text" />
            <hr/>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />

            <select></select>

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
            >
              Добавить вопрос
            </Button>

            <Button
              type="success"
              onClick={this.createQuestionHandler}
            >
              Создать тест
            </Button>

          </form>
        </div>        
      </div>
    )
  }
}
