import React from 'react';
import './index.css';

import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {addPost, RootStateType, updateNewPostText} from "./Redux/state";


export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>

            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
        ,
        document.getElementById('root'),
    );
}





