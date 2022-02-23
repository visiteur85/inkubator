import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";

import {Route, Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {AppStoreType, store,} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Newss} from "./components/News/Newss";



// type PropsType = {
//     store: AppStoreType //взяли из редакс строка 13
// }
const App = () => {
    const state = store.getState()

    return (
        // <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer

                            // dialogs={state.dialogPage.dialogs}
                            // messages={state.dialogPage.messages}
                            // newMessageBody={state.dialogPage.newMessageBody}
                            // dispatch={props.store.dispatch.bind(props.store)}

                         />}/>
                        <Route path="/profile" element={<Profile
                            // post={state.profilePage.post}
                            // dispatch={props.store.dispatch.bind(props.store)}
                            // store={props.store}
                            // message={state.profilePage.messageForNewPost
                            // }

                        />}/>
                        {/*<Route path="/news" element={<News />}/>*/}

                    </Routes>

                </div>
            </div>
        // </BrowserRouter>
    );
}

export default App;
