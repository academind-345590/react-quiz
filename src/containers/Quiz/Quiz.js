import React from 'react';
import classes from './Quiz.css';

class Quiz extends React.Component {
  state = {
    quiz: []
  }

  render(){
    return (
      <div className={classes.Quiz}>
        <h1>Quiz work</h1>
      </div>
    )
  }
}

export default Quiz