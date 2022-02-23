import React, {ChangeEvent} from 'react';
import {
    AppStateType, AppStoreType
} from "../../redux/redux-store";
import {
    DialogPageType,
    dialogReducer,
    DialogType, MessageType, SendMessageAC, UpdateNewMessageBodyAC,
} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {Dispatch} from "redux";

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




type MapStateToPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

type mapDispatchToPropsType = {
    onSendMessageClick:()=>void
    onNewMessageChange:(body:string)=>void

}

const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    console.log(state)
  return {
      dialogs: state.dialogPage.dialogs,
      messages: state.dialogPage.messages,
      newMessageBody:state.dialogPage.newMessageBody

  }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        onNewMessageChange:(body:string)=>{
            dispatch(UpdateNewMessageBodyAC(body))
            // dispatch(UpdateNewMessageBodyAC(body));
        },
        onSendMessageClick:()=>{
           dispatch(SendMessageAC())
        }
    }
}

export const DialogsContainer = connect<MapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);