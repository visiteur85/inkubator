import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {stringify} from "querystring";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string

}

export const Dialogs = () => {

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
    let dialogElements = dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )

}