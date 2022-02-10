import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {stringify} from "querystring";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    ActionsTypes,
    DialogType,
    MessageType,
    StoreType,
} from "../../redux/store";
import {SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/dialog-reducer";

// MyPostsPropsType
type DialogPageType = {

    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionsTypes)=>void
}
// DialogPageType



export const Dialogs = (props:DialogPageType) => {


    let dialogElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick= () => {
        props.dispatch(SendMessageAC());
    };
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>)=> {
        let body = e.currentTarget.value;
        props.dispatch(UpdateNewMessageBodyAC(body));


    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={"Enter your message"}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )

}