import React from "react";
import "./App.css";
import { Header } from "./componets/Header/Header";
import { Navbar } from "./componets/Navbar/Navbar";


import { Routes, Route, BrowserRouter } from "react-router-dom";



import { DialogsContainer } from "./componets/Dialogs/DialogsContainer";
import {  UsersContainer } from "./componets/Users/UsersContainer";
import {ProfileContainer} from "./componets/Profile/ProfileContainer";



const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path={"/dialogs"} element={<DialogsContainer />} />
          <Route path={"/profile"} element={<ProfileContainer />} />
          <Route path={"/users"} element={<UsersContainer/>} />

          {/*<Route path={"/news"} element={<News/>}/>*/}
          {/*<Route path={"/music"} element={<Music/>}/>*/}
          {/*<Route path={"/settings"} element={<Settings/>}/>*/}
        </Routes>
      </div>
    </div>
  );
};

export default App;
