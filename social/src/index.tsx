import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {store, StoreType, RootStateType} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "./App";





 const renderTree = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>

            <App appState={state}
                            dispatch={store.dispatch.bind(store)}
                            store={store}/>
        </BrowserRouter>
        ,
        document.getElementById('root'),
    );
}
renderTree(store.getState());
 store.subscribe(renderTree)






