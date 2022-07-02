import React from "react";


import {RootReducerType} from "../../Redux/redux-store";
import {DialogPropsType, sendMessageBody} from "../../Redux/dialog-reducer";
import {compose, Dispatch} from "redux";
import {Dialogs, MessagePropsType} from "./Dialogs";
import {connect} from "react-redux";

import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


export type MapStateToPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>


}

export type MapDispatchToPropsType = {

    sendMessageBody: (newMessageBody:string) => void
}
export type  DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType;

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages



    }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {

        sendMessageBody: (newMessageBody) => {
            dispatch(sendMessageBody(newMessageBody))
        }
    }
};

// export   compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     WithAuthRedirect)(Dialogs)

// let AuthRedirectComponent = WithAuthRedirect(Dialogs)
//
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect)(Dialogs)
  





