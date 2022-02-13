import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import AppWithReducer from "./AppWithReducer";
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./state/Store";

// eslint-disable-next-line react/jsx-no-undef
ReactDOM.render(
    <Provider store={store}>
        <AppWithRedux/>
    </Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
