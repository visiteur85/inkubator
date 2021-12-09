import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {dialogsPropsType, MyMessagesPropsType, postPropsType, state} from "./redux/state";
import{addPost} from "./redux/state";


type statePropsType = {

          post: Array<postPropsType>
       dialogs: Array<dialogsPropsType>
       messages: Array<MyMessagesPropsType>
    addPostCallBack: (postText:string)=>void
   }



function App(props:statePropsType) {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs" element={<Dialogs dialogs={props.dialogs}
                                                             messages={props.messages}/>}/>
                    <Route path="/profile" element={<Profile post={props.post} addPostCallBack={props.addPostCallBack}/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
