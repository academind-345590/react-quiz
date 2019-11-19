import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import classes from './FinishedQuiz.css';

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if(props.results[key] === 'success') {
      total++
    }
    return total
  }, 0)

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        { props.quiz.map((quizItem, index) => {
          const iconStyle = props.results[quizItem.id];
          
          return (
            <li key={index}>
              <strong>{index +1}.</strong>&nbsp;
              {quizItem.question}
              <FontAwesomeIcon 
                icon={iconStyle === 'error' ? faTimes : faCheck} 
                className={classes[iconStyle]} 
              />
            </li>
          )
        })}
      </ul>

        <p>Правильных ответов {successCount} из {props.quiz.length}</p>

      <div>
        <button onClick = {props.onRetry}>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz