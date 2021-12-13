import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {DialogType, MessageType, PostType, RootStateType, state} from "./redux/state";
import{addPost, changeNewText} from "./redux/state";


type statePropsType = {
        state: RootStateType
    addPostCallBack: (postText:string)=>void
    changeTextCallback:(newText: string)=>void

}

function App(props:statePropsType) {

    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs" element={<Dialogs dialogs={props.state.dialogPage.dialogs}
                                                             messages={props.state.dialogPage.messages}/>}/>
                    <Route path="/profile" element={<Profile post={props.state.profilePage.post}
                                                             addPostCallBack={props.addPostCallBack}
                                                             message={props.state.profilePage.messageForNewPost
                                                             }
                                                             changeTextCallback={props.changeTextCallback}
                    />}/>
                </Routes>
            </div>
        </div>
            </BrowserRouter>
    );
}

export default App;
