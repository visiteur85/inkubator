import React from 'react';
import "./App.css"
import {Header} from "./componets/Header/Header";
import {Navbar} from "./componets/Navbar/Navbar";
import {Profile} from "./componets/Profile/Profile";
import {Dialogs} from "./componets/Dialogs/Dialogs";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {RootReducerType,} from "./Redux/redux-store";
// import {ActionsType} from "./index";
import {StoreType} from "./Redux/store";
import {CombinedState, Dispatch} from "redux";
import {ProfilePageType} from "./Redux/profile-reducer";
import {DialogPageType} from "./Redux/dialog-reducer";
import {SidebarType} from "./Redux/sideBar-reducer";


type PropsType = {
    // appState: RootReducerType
    dispatch: Dispatch
    store:  RootReducerType
}

const App = (props: PropsType) => {

    return (
        // <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={"/dialogs"} element={<Dialogs
                        dispatch={props.dispatch}
                                                               store={props.store}/>}
                                                               
                                                               />
                    <Route path={"/profile"} element={<Profile profilePage={props.store.profilePage}

                                                               dispatch={props.dispatch}
                    />}/>


                    {/*<Route path={"/news"} element={<News/>}/>*/}
                    {/*<Route path={"/music"} element={<Music/>}/>*/}
                    {/*<Route path={"/settings"} element={<Settings/>}/>*/}
                </Routes>
            </div>


        </div>
        // </BrowserRouter>
    );
}

export default App;

