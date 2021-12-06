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

    let dialogData = [
        {id: 1, name: "Pavel"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Ivan"},
        {id: 4, name: "Olia"},
        {id: 5, name: "Serge"},
        {id: 6, name: "Tania"},
    ]

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your It -kamasutra"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogItem name={dialogData[0].name} id={0}/>
                <DialogItem name={dialogData[1].name} id={1}/>
                {/*<DialogItem name={"Ivan"} id={3}/>*/}
                {/*<DialogItem name={"Olia"} id={4}/>*/}
                {/*<DialogItem name={"Serge"} id={5}/>*/}
                {/*<DialogItem name={"Tania"} id={6}/>*/}

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                {/*<Message message={"Yo"}/>*/}
                {/*<Message message={"Yo"}/>*/}
                {/*<Message message={"Yo"}/>*/}

            </div>

        </div>
    )

}