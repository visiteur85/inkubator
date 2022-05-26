import React from "react";
import s from "./Dialogs.module.css";
import {NavLink, Redirect} from "react-router-dom";

import {DialogsPropsType,} from "./DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map((dialog, index) => (
        <DialogItem key={index} name={dialog.name} id={dialog.id}/>
    ));

    let messageElements = props.messages.map((message, index) => (
        <Message key={index} message={message.message}/>
    ));

    let newMessageBody = props.newMessageBody;
//функция отправляет сообщеине в dialogs
    let onSendMessageClick = () => {

        props.sendMessageBody()

    };

    let onNewMessageChange = (e: any) => {
        let body = e.target.value;
// props.dispatch(updateNewMessageBodyAC(body))
        props.updateNewMessageBodyAC(body)

    }

    // if (!props.isAuth) return <Redirect to={"./login"}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
            <textarea value={newMessageBody} placeholder="Введите Ваше сообщение" onChange={onNewMessageChange}>
             
            </textarea>
                    </div>
                    <div>
                        <button
                            onClick={onSendMessageClick}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export type DialogItemPropsType = {
    name: string;
    id: number;
};

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink className={s.Navlink} to={"/dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    );
};

export type MessagePropsType = {
    message: string;
};
export const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>;
};
