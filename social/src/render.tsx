import {addPost, changeNewText, RootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <App state={state}
             addPostCallBack={addPost}
             changeTextCallback={changeNewText}
        />

        ,
        document.getElementById('root')
    );
}