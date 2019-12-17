import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import game from './reducers/index';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';

export const store = createStore(
    game,
    applyMiddleware(thunk)
)

const Game = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(<Game/>, document.getElementById('root'));
registerServiceWorker();
