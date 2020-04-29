import React from 'react';
import ReactDOM from 'react-dom';
import { MainContainer } from './components/main-container';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.querySelector('#root')
);