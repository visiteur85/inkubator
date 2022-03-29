import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Pavel"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Andrew"},
        {id: 4, name: "Olia"},
        {id: 5, name: "Sasha"}
    ];

    let messagesData = [
        {id: 1, message: "HI"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Peace"},

    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsData.map((dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.messages}>
                {messagesData.map((message, index) => <Message key={index} message={message.message}/>)}

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