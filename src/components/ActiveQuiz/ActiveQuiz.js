import React from 'react';
import classes from './ActiveQuiz.css';
import AnswerList from './AnswerList/AnswerList';

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Questions}>
      <span>
        <strong>2.</strong>&nbsp;
        {props.question}
      </span>
      <small>5 из 5</small>
    </p>

    <AnswerList 
      answers = {props.answers}
      onAnswerClick = {props.onAnswerClick}
    />
  </div>
)

export default ActiveQuiz