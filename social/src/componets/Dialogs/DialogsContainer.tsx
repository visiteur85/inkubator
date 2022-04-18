import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

import {RootReducerType} from "../../Redux/redux-store";
import { sendMessageBody, updateNewMessageBodyAC } from "../../Redux/dialog-reducer";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";

type PropsType = {
  dispatch: Dispatch
  store: RootReducerType
};
export const DialogsContainer = (props: PropsType) => {
//достаем диалогпЭйдж из стора


  let newMessageBody = props.store.dialogsPage.newMessageBody;
//функция отправляет сообщеине в dialogs
  let onSendMessageClick = () => {
    props.dispatch(sendMessageBody())

  }

  let onNewMessageChange = (body:string) => {

props.dispatch(updateNewMessageBodyAC(body))

  }

  return (
    <Dialogs
        // dispatch={}
        //      store={}
             sendMessageBody={onSendMessageClick}
             updateNewMessageBodyAC={onNewMessageChange}
             dialogs={props.store.dialogsPage.dialogs}
             messages={props.store.dialogsPage.messages}
             newMessageBody={newMessageBody}


    />
  );
};




