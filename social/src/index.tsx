import React from "react";
import "./index.css";
import ReactDOM from "react-dom";

// import {store,  ProfilePageType, DialogPageType, SidebarType,} from "./Redux/store";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {ProfileActionsType, ProfilePageType} from "./Redux/profile-reducer";
import {DialogPageType, DialogsActionsType} from "./Redux/dialog-reducer";
import {SidebarType} from "./Redux/sideBar-reducer";
import {Provider} from "react-redux";

import {RootReducerType, store} from "./Redux/redux-store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
