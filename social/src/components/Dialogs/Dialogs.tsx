import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {stringify} from "querystring";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsPropsType, MyMessagesPropsType} from "../../redux/state";

// MyPostsPropsType
type DialogsPropsType = {

    dialogs: Array<dialogsPropsType>
    messages:Array<MyMessagesPropsType>
}



export const Dialogs = (props:DialogsPropsType) => {


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