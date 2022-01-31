import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {DialogType, MessageType, PostType, RootStateType, StoreType} from "./redux/state";



// type statePropsType = {
//         // state: RootStateType
//     addPostCallBack: (postText:string)=>void
//     changeTextCallback:(newText: string)=>void
//
// }
type PropsType = {
    store: StoreType
}
const App: React.FC<PropsType>=(props)=> {
    const state = props.store.getState()

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
                                                             addPostCallBack={props.store.addPost.bind(props.store)}
                                                             message={state.profilePage.messageForNewPost
                                                             }
                                                             changeTextCallback={props.store.changeNewText.bind(props.store)}
                    />}/>
                </Routes>
            </div>
        </div>
            </BrowserRouter>
    );
}

export default App;
