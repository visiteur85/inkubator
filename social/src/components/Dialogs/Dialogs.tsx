import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {stringify} from "querystring";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";


type MyPostsPropsType = {

    dialogs: Array<MyDialogsPropsType>
    messages:Array<MyMessagesPropsType>
}
type MyDialogsPropsType = {
    id: number
    name: string
}

type MyMessagesPropsType = {
    id: number
    message: string
}


export const Dialogs = (props:MyPostsPropsType) => {


    let dialogElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

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