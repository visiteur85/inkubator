import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

import {RootReducerType} from "../../Redux/redux-store";
import { sendMessageBody, updateNewMessageBodyAC } from "../../Redux/dialog-reducer";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type PropsType = {
  // dispatch: Dispatch
  // store: RootReducerType
};
export const DialogsContainer = (props: PropsType) => {





  return (
      <StoreContext.Consumer>{
          (store)=> {
            let state = store.getState()
            //достаем диалогпЭйдж из стора

            let newMessageBody = state.dialogsPage.newMessageBody;
            //функция отправляет сообщеине в dialogs
            let onSendMessageClick = () => {
              store.dispatch(sendMessageBody())

            };
            let onNewMessageChange = (body:string) => {

              store.dispatch(updateNewMessageBodyAC(body))

            };



            return (
            <Dialogs
                // dispatch={}
                //      store={}
                sendMessageBody={onSendMessageClick}
                updateNewMessageBodyAC={onNewMessageChange}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                newMessageBody={newMessageBody}


            />
            )}}</StoreContext.Consumer>
  );
};




