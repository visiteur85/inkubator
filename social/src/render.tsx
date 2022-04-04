import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {addPost, RootStateType} from "./Redux/state";


export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>

            <App appState={state} addPost={addPost}/>
        </BrowserRouter>
        ,
        document.getElementById('root'),
    );
}





