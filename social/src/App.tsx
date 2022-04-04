import React from 'react';
import "./App.css"
import {Header} from "./componets/Header/Header";
import {Navbar} from "./componets/Navbar/Navbar";
import {Profile} from "./componets/Profile/Profile";
import {Dialogs} from "./componets/Dialogs/Dialogs";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {RootStateType} from "./Redux/state";


type PropsType = {
    appState: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void

}

const App = (props: PropsType) => {


    return (
        // <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={"/dialogs"} element={<Dialogs dialogs={props.appState.dialogsPage.dialogs}
                                                               messages={props.appState.dialogsPage.messages}/>}/>
                    <Route path={"/profile"} element={<Profile profilePage={props.appState.profilePage}
                                                               addPost={props.addPost}
                                                               updateNewPostText={props.updateNewPostText}
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

