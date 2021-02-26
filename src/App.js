import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Main from './components/MainComponent'
import { applyMiddleware, createStore } from 'redux';
import reducers from './store/reducers/reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  )
}

export default App
