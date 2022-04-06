import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {addPost, RootStateType, state, subscribe, updateNewPostText} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "./App";





 const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>

            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
        ,
        document.getElementById('root'),
    );
}
renderTree(state);
 subscribe(renderTree)






