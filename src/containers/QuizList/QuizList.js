import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './QuizList.css';
//import axios from 'axios';

export default class QuizList extends React.Component {

  renderQuizes() {
    return ['one','two','three'].map((quiz, index) =>{
      return (
        <li
          key = {index}
        >
          <NavLink to={'/quiz/'+ quiz}>
            Test {quiz}
          </NavLink>
        </li>
      )
    })
  }

  // test axios & Firebase, in fb create table quiz
  // componentDidMount() {
  //   axios.get('https://react-quiz-2d795.firebaseio.com/quiz.json')
  //     .then(response => {
  //       console.log(response);
  //     })
  // }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          <ul>
            {this.renderQuizes()}
          </ul>
        </div>        
      </div>
    )
  }
}
