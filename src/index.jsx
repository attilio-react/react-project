import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import ruletteApp from './redux/Reducers.jsx'

import {App} from './App.jsx'

const store = createStore(ruletteApp)

render(
      <Provider store={store}>
        <App />
      </Provider>,
    document.getElementById('app'));

