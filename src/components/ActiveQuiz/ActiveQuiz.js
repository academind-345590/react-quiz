import React from 'react';
import classes from './ActiveQuiz.css';
import AnswerList from './AnswerList/AnswerList';

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Questions}>
      <span>
        <strong>2.</strong>&nbsp;
        Как дела ?
      </span>
      <small>5 из 5</small>
    </p>

    <AnswerList 
      answers = {props.answers}
    />
  </div>
)

export default ActiveQuiz