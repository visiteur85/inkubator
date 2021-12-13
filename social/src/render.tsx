import {addPost, changeNewText, RootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {state} from "./redux/state";

export const renderTree = () => {
  ReactDOM.render(<React.StrictMode>
      <App/>
  </React.StrictMode>,
      document.getElementById("root"))

}