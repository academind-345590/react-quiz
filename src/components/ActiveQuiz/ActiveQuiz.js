import React from 'react';
import classes from './ActiveQuiz.css';

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Questions}>
      <span>
        <strong>2.2.</strong>&nbsp;
        How do you do?
      </span>
      <small>5 from 5</small>
    </p>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
)

export default ActiveQuiz