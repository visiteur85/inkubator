import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

import {DialogPropsType} from "../../Redux/state";


type PropsType = {

    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>

}
export const Dialogs = (props:PropsType) => {



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogs.map((dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map((message, index) => <Message key={index} message={message.message}/>)}

            </div>
        </div>
    );
};

export type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {


    return (
        <div className={s.dialog}>
            <NavLink className={s.Navlink} to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export type MessagePropsType = {
    message: string
}
export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )

}