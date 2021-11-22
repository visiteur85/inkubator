import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {stringify} from "querystring";


type DialogItemPropsType = {
    name: string
    id: number
}


const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string

}

const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogItem name={"Pavel"} id={1}/>
                <DialogItem name={"Alex"} id={2}/>
                <DialogItem name={"Ivan"} id={3}/>
                <DialogItem name={"Olia"} id={4}/>
                <DialogItem name={"Serge"} id={5}/>
                <DialogItem name={"Tania"} id={6}/>

            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How are you"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>

            </div>

        </div>
    )

}