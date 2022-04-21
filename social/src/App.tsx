import React from "react";
import "./App.css";
import { Header } from "./componets/Header/Header";
import { Navbar } from "./componets/Navbar/Navbar";
import { Profile } from "./componets/Profile/Profile";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RootReducerType } from "./Redux/redux-store";

import { CombinedState, Dispatch } from "redux";
import { DialogsContainer } from "./componets/Dialogs/DialogsContainer";

type PropsType = {
  // // appState: RootReducerType
  // dispatch: Dispatch
  // store: RootReducerType
};

const App = (props: PropsType) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path={"/dialogs"} element={<DialogsContainer />} />
          <Route path={"/profile"} element={<Profile />} />

          {/*<Route path={"/news"} element={<News/>}/>*/}
          {/*<Route path={"/music"} element={<Music/>}/>*/}
          {/*<Route path={"/settings"} element={<Settings/>}/>*/}
        </Routes>
      </div>
    </div>
  );
};

export default App;
