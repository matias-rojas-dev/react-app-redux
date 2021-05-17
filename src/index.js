import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/styles.scss';
import App from './routes/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './redux/reducers';
import "core-js/stable";
import "regenerator-runtime/runtime";

const initialState = {
  favoriteBooks: [],
  sectionActive: 'Search',
  changeName: ''
}

const store = createStore (reducer, initialState);


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
