import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';


import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

export type PostsPropsType = Array<PostPropsType>
;
export type PostPropsType = {
    id:number
    message:string
    likesCount:number
}

export type DialogsPropsType = Array<DialogPropsType>
export type DialogPropsType = {
    id:number
    name:string

}

export type MessagesPropsType = Array<MessagePropsType>
export type MessagePropsType = {
    id:number
    message:string

}

let posts:PostsPropsType = [
    {id: 1, message: "Hi, how are you", likesCount: 0},
    {id: 2, message: "it's my first post", likesCount: 23},
    {id: 2, message: "I m ok", likesCount: 14},
    {id: 2, message: "Great", likesCount: 43},
]

let dialogsData:DialogsPropsType = [
    {id: 1, name: "Pavel"},
    {id: 2, name: "Dima"},
    {id: 3, name: "Andrew"},
    {id: 4, name: "Olia"},
    {id: 5, name: "Sasha"}
];

let messagesData:MessagesPropsType = [
    {id: 1, message: "HI"},
    {id: 2, message: "How are you"},
    {id: 3, message: "Peace"},

];
 // export type PropsType = PostsPropsType | DialogsPropsType |  MessagesPropsType;

ReactDOM.render(
    <BrowserRouter>
        <App posts={posts} dialogs={dialogsData} messages={messagesData}/>
    </BrowserRouter>
    ,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




