import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

import {RootReducerType} from "../../Redux/redux-store";
import {DialogPropsType, sendMessageBody, updateNewMessageBodyAC} from "../../Redux/dialog-reducer";
import {Dispatch} from "redux";
import {Dialogs, MessagePropsType} from "./Dialogs";
import {connect} from "react-redux";


export type MapStateToPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
    isAuth:boolean
}

export type MapDispatchToPropsType = {
    updateNewMessageBodyAC: (body: string) => void
    sendMessageBody: () => void
}
export type  DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType;

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth:state.auth.isAuth

    }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBodyAC: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessageBody: () => {
            dispatch(sendMessageBody())
        }
    }
};
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
  





