import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {stringify} from "querystring";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {

} from "../../redux/redux-store";
import {ActionsTypes, DialogType, MessageType, SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";

// MyPostsPropsType
type DialogPageType = {

    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionsTypes)=>void
}
// DialogPageType



export const DialogsContainer = (props:DialogPageType) => {


    let dialogElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick= () => {
        props.dispatch(SendMessageAC());
    };
    const onNewMessageChange = (body:string)=> {
        // let body = e.currentTarget.value;
        props.dispatch(UpdateNewMessageBodyAC(body));


    };

    return (
        <Dialogs onNewMessageChange={onNewMessageChange}
                 onSendMessageClick={onSendMessageClick}
        dialogs={props.dialogs}
        messages={props.messages}
        newMessageBody={props.newMessageBody}
        dispatch={props.dispatch}/>
    )

}