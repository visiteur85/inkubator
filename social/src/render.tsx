import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store} from "./redux/redux-store";


export const renderTree = () => {
  ReactDOM.render(<React.StrictMode>
      <App />
  </React.StrictMode>,
      document.getElementById("root"))

}