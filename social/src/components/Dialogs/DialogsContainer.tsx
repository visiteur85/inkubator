import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {stringify} from "querystring";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    store

} from "../../redux/redux-store";
import {ActionsTypes, DialogType, MessageType, SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

// MyPostsPropsType
// type DialogPageType = {
//
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessageBody: string
//     dispatch: (action: ActionsTypes)=>void
// }
// DialogPageType
// props:DialogPageType


export const DialogsContainer = () => {




    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState();


                let dialogElements = state.dialogPage.dialogs.map((d) =>
                    <DialogItem name={d.name} id={d.id}/>);

                let messagesElements = state.dialogPage.messages.map(m => <Message message={m.message}/>);
                let newMessageBody = state.dialogPage.newMessageBody;

                let onSendMessageClick = () => {
                    store.dispatch(SendMessageAC());
                };
                const onNewMessageChange = (body: string) => {
                    // let body = e.currentTarget.value;
                    store.dispatch(UpdateNewMessageBodyAC(body))};

                return <Dialogs onNewMessageChange={onNewMessageChange}
                                onSendMessageClick={onSendMessageClick}
                                dialogs={state.dialogPage.dialogs}
                                messages={state.dialogPage.messages}
                                newMessageBody={state.dialogPage.newMessageBody}
                                dispatch={store.dispatch}/>
            }
        }
        </StoreContext.Consumer>
    )

}