import React from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends React.Component {
  state = {
    activeQuestion: 0,
    answerState: null, // info by current click {[id]: 'succes' or 'error'}
    quiz: [
      {
        id: 1,
        question: 'Сколько пальцев на руке ?',
        rightAnswerId: 3,
        answers: [
          {id: 1, text: 'Один'},
          {id: 2, text: 'Три'},
          {id: 3, text: 'Пять'},
          {id: 4, text: 'Девять'},
        ]
      },
      {
        id: 2,
        question: 'Как называется спутник Земли ?',
        rightAnswerId: 4,
        answers: [
          {id: 1, text: 'Таллос'},
          {id: 2, text: 'Иа'},
          {id: 3, text: 'Фобос'},
          {id: 4, text: 'Луна'},
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {

    const question = this.state.quiz[this.state.activeQuestion];
    if(question.rightAnswerId === answerId) {

      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeout = window.setTimeout(()=>{
        if(this.isQuizFinished()){
          console.log('Finished');
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout);
      }, 1000)      
    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }    
  }

  isQuizFinished(){
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render(){
    return (
      <div className={classes.Quiz}>        
        <div className={classes.QuizWrapper}>
          <h1>Выберите правильный ответ(ы):</h1>
          <ActiveQuiz 
            answers = {this.state.quiz[this.state.activeQuestion].answers}
            question = {this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick = {this.onAnswerClickHandler}
            quizLength = {this.state.quiz.length}
            answerNumber = {this.state.activeQuestion + 1}
            state = {this.state.answerState}
          />
        </div>
      </div>
    )
  }
}

export default Quiz