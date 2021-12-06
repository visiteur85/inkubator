import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let post = [
    {id: 1, message: "Hi, how are you", likesCount: 12},
    {id: 2, message: "It is  my first post", likesCount: 11},
    {id: 3, message: "Da da da", likesCount: 13},
    {id: 4, message: "No no", likesCount: 11}

]
let dialogs = [
    {id: 1, name: "Pavel"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Ivan"},
    {id: 4, name: "Olia"},
    {id: 5, name: "Serge"},
    {id: 6, name: "Tania"},
]
let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your It -kamasutra"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
    {id: 6, message: "Yo"},
]

ReactDOM.render(
    <BrowserRouter>
        <App post={post} dialogs={dialogs} messages={messages}/>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
