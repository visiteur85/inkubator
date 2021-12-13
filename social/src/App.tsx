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


// type statePropsType = {
//         // state: RootStateType
//     addPostCallBack: (postText:string)=>void
//     changeTextCallback:(newText: string)=>void
//
// }

function App() {

    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs" element={<Dialogs dialogs={state.dialogPage.dialogs}
                                                             messages={state.dialogPage.messages}/>}/>
                    <Route path="/profile" element={<Profile post={state.profilePage.post}
                                                             addPostCallBack={addPost}
                                                             message={state.profilePage.messageForNewPost
                                                             }
                                                             changeTextCallback={changeNewText}
                    />}/>
                </Routes>
            </div>
        </div>
            </BrowserRouter>
    );
}

export default App;
