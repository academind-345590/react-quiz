import React from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends React.Component {
  state = {
    results: {},//{[id]: 'success' or 'error'}
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // info by current click {[id]: 'success' or 'error'}
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
    //fix bug double click
    if (this.state.answerState){
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success'){
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;
    
    if(question.rightAnswerId === answerId) {
      
      if(! results[question.id]){
        results[question.id] = 'success'
      }
      this.setState({
        answerState: {[answerId]: 'success'},
        results: results
      })

      const timeout = window.setTimeout(()=>{
        if(this.isQuizFinished()){
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout);
      }, 1000)      
    } else {
      results[question.id] = 'error';

      this.setState({
        answerState: {[answerId]: 'error'},
        results: results
      })
    }    
  }

  isQuizFinished(){
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null, 
    })
  }

  componentDidMount(){
    console.log('Quiz ID = ', this.props.match.params.id);
  }

  render(){
    return (
      <div className={classes.Quiz}>        
        <div className={classes.QuizWrapper}>
          <h1>Выберите правильный ответ(ы):</h1>
          {
            this.state.isFinished
              ? <FinishedQuiz 
                  results = {this.state.results}
                  quiz = {this.state.quiz}
                  onRetry = {this.retryHandler}
              />
              : <ActiveQuiz 
                  answers = {this.state.quiz[this.state.activeQuestion].answers}
                  question = {this.state.quiz[this.state.activeQuestion].question}
                  onAnswerClick = {this.onAnswerClickHandler}
                  quizLength = {this.state.quiz.length}
                  answerNumber = {this.state.activeQuestion + 1}
                  state = {this.state.answerState}
                />
          }          
        </div>
      </div>
    )
  }
}

export default Quiz