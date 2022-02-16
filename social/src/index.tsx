import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider, StoreContext} from "./StoreContext";


export const renderTree = () => {
    ReactDOM.render(<React.StrictMode>
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App/>
                </StoreContext.Provider>
        </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root"))

}
store.subscribe(renderTree)
renderTree()
// ReactDOM.render(<React.StrictMode>
//         <App store={store}/>
//     </React.StrictMode>,
//     document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
