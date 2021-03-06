import React from 'react';
import './App.css'
import Router from './Router'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <HashRouter >
        <Router />
      </HashRouter >
    </Provider>
  );
}

export default App;
