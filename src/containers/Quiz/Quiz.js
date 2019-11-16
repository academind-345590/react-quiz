import React from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends React.Component {
  state = {
    quiz: [
      {
        question: 'Сколько пальцев на руке ?',
        rightAnswerId: 3,
        answers: [
          {id: 1, text: 'Один'},
          {id: 2, text: 'Три'},
          {id: 3, text: 'Пять'},
          {id: 4, text: 'Девять'},
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    console.log('Answer ID: ', answerId);
  }

  render(){
    return (
      <div className={classes.Quiz}>        
        <div className={classes.QuizWrapper}>
          <h1>Выберите правильный ответ(ы):</h1>
          <ActiveQuiz 
            answers = {this.state.quiz[0].answers}
            question = {this.state.quiz[0].question}
            onAnswerClick = {this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz