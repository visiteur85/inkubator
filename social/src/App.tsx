import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {dialogsPropsType, MyMessagesPropsType, postPropsType, state} from "./redux/state";


type statePropsType = {
   state: {
       post: Array<postPropsType>
       dialogs: Array<dialogsPropsType>
       messages: Array<MyMessagesPropsType>
   }
}


function App(props:statePropsType) {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs" element={<Dialogs dialogs={props.state.dialogs}
                                                             messages={props.state.messages}/>}/>
                    <Route path="/profile" element={<Profile post={props.state.post}/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
