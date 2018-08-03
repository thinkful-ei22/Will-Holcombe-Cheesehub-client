import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import  CheeseList  from './components/cheese-list';
import { createStore, applyMiddleware } from 'redux';
import  cheeseReducer  from './reducers/cheese';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store =  createStore(
    cheeseReducer,
     applyMiddleware(thunk)
    );

ReactDOM.render(
    //<App />
    <Provider store={store}>
    <CheeseList  />
    </Provider>,
          document.getElementById('root'));
registerServiceWorker();
