import { 
  FETCH_QUIZES_START, 
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZES_SUCCESS, 
  FETCH_QUIZES_ERROR } from "../actions/actionTypes"

const initialState = {
  loading: false,
  error: null,
  // component QuizList
  quizes: [],  
  // component Quiz
  results: {},
  isFinished: false,
  activeQuestion: 0,
  answerState: null, 
  quiz: null,
}

export default function quizReduser(state= initialState, action){

  switch (action.type){
    case FETCH_QUIZES_START:
      return {
        ...state, loading: true
      }
    case FETCH_QUIZES_SUCCESS:
      return {
        ...state, loading: false, quizes: action.quizes
      }
    case FETCH_QUIZES_ERROR:
      return {
        ...state, loading: false, error: action.error
      }
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state, loading: false, quiz: action.quiz
      }
    default:
      return state
  }

}