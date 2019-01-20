import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'


import rouletteApp from './redux/Reducers.jsx'
import {App} from './App.jsx'

const loggerMiddleware = createLogger()

const store = createStore(rouletteApp,  
    applyMiddleware(thunkMiddleware, loggerMiddleware))

render(
      <Provider store={store}>
        <App />
      </Provider>,
    document.getElementById('app'));

