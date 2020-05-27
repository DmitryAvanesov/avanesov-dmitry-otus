import React from 'react';
import ReactDOM from 'react-dom';
import { MainContainer } from './components/main-container';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store, persistor } from './redux/store';
import './styles/index.scss';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Route path='/:name?' component={MainContainer} />
      </Router>
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);