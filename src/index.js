import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

// from https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(
    rootReducer, 
    composeEnhancers(
      applyMiddleware(thunk)
    )
  );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();
