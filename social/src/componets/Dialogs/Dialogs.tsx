import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogItem name={"Pavel"} id={"1"}/>
                <DialogItem name={"Dima"} id={"2"}/>
                <DialogItem name={"Andrew"} id={"3"}/>
                <DialogItem name={"Olia"} id={"4"}/>
                <DialogItem name={"Sasha"} id={"5"}/>

            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How are you"}/>
                <Message message={"Peace"}/>

            </div>
        </div>
    );
};

export type DialogItemPropsType = {
    name:string
    id:string
}

export const DialogItem = (props: DialogItemPropsType)=> {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export type MessagePropsType = {
    message:string
}
export const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )

}