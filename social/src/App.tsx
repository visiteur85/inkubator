import React from "react";
import "./App.css";
import {Header} from "./componets/Header/Header";
import {Navbar} from "./componets/Navbar/Navbar";


import {Route} from "react-router-dom";



import {UsersContainer} from "./componets/Users/UsersContainer";
import {ProfileContainer} from "./componets/Profile/ProfileContainer";
import {HeaderContainer} from "./componets/Header/HeaderContainer";
import {Login} from "./componets/Login/Login";
import {DialogsContainer} from "./componets/Dialogs/DialogsContainer";


const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">


                <Route exact path={"/dialogs"} render={() => <DialogsContainer/>}/>
                <Route exact path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                <Route exact path={"/users"} render={() => <UsersContainer/>}/>
                <Route exact path={"/login"} render={() => <Login/>}/>


                {/*<Route path={"/news"} element={<News/>}/>*/}
                {/*<Route path={"/music"} element={<Music/>}/>*/}
                {/*<Route path={"/settings"} element={<Settings/>}/>*/}

            </div>
        </div>
    );
};

export default App;
