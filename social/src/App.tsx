import React from 'react';
import "./App.css"
import {Header} from "./componets/Header/Header";
import {Navbar} from "./componets/Navbar/Navbar";
import {Profile} from "./componets/Profile/Profile";
import {Dialogs} from "./componets/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {DialogsPropsType, MessagesPropsType, PostsPropsType} from "./index";
import {type} from "os";

// export type PostsPropsType = {
//     posts:Array<PostPropsType>
// };
// export type PostPropsType = {
//     id:number
//     message:string
//     likesCount:number
// }
//
// export type DialogsPropsType = {
//     dialogs:Array<DialogPropsType>
// };
// export type DialogPropsType = {
//     id:number
//     name:string
//
// }
//
// export type MessagesPropsType = {
//     messages:Array<MessagePropsType>
// };
// export type MessagePropsType = {
//     id:number
//     message:string
//
// }
//
// export type PropsType = PostsPropsType | DialogsPropsType |  MessagesPropsType;

type PropsType = {
    posts:PostsPropsType
    dialogs:DialogsPropsType
    messages:MessagesPropsType

}

const App = (props:PropsType) => {



    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={"/dialogs"} element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path={"/profile"} element={<Profile posts={props.posts}/>}/>


                    {/*<Route path={"/news"} element={<News/>}/>*/}
                    {/*<Route path={"/music"} element={<Music/>}/>*/}
                    {/*<Route path={"/settings"} element={<Settings/>}/>*/}
                </Routes>


            </div>


        </div>

    );
}

export default App;

