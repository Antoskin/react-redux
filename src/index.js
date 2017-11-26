import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

const store = createStore(reducer);


ReactDOM.render( <Provider store={store}>
            <App />
    </Provider>, document.querySelector('#root') );