import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {RootReducerType, store,} from "./Redux/redux-store";
// import {store,  ProfilePageType, DialogPageType, SidebarType,} from "./Redux/store";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {ProfileActionsType, ProfilePageType} from "./Redux/profile-reducer";
import {DialogPageType, DialogsActionsType} from "./Redux/dialog-reducer";
import {SidebarType} from "./Redux/sideBar-reducer";
import {Provider} from "react-redux";


// //общий тип для actions
// export type  ActionsType = ProfileActionsType | DialogsActionsType ;
//тип стэйта
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogPageType
//     sidebar: SidebarType
// };


const renderTree = (state: RootReducerType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                            dispatch={store.dispatch.bind(store)}
                            store={state}/>
        </BrowserRouter>,
        document.getElementById('root'),
    );
}

renderTree(store.getState());
store.subscribe(() => {
    let state = store.getState
    renderTree(state())
})






