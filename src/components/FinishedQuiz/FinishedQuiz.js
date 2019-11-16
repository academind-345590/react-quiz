import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

import classes from './FinishedQuiz.css';

const FinishedQuiz = props => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1.</strong>
          how do you do ?
          <FontAwesomeIcon icon={faTimes} className={classes.error} />
        </li>
        <li>
          <strong>1.</strong>
          how do you do ?
          <FontAwesomeIcon icon={faCheck} className={classes.success} />
        </li>
      </ul>

      <p>Правильных ответов 3 из 8</p>

      <div>
        <button>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz