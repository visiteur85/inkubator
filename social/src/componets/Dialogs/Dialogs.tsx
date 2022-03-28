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
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>

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
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
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