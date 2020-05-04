import React from 'react';
import ReactDOM from 'react-dom';
import { MainContainer } from './components/main-container';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './redux/store';
import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/:name?' component={MainContainer} />
    </Router>
  </Provider>,
  document.querySelector('#root')
);