import React from 'react';
import { ActionsType, DialogPageType} from './state';

export const dialogsReducer = (state: DialogPageType, action:ActionsType)=> {
    switch(action.type) {
     case "UPDATE-NEW-MESSAGE-BODY": {
        state.newMessageBody = action.body;
       return state
    }
    case "SEND-MESSAGE": {

        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messages.push({id: 6, message: body})
   return state
    }}
    return state
}
export type updateNewMessageBodyActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body:string
};
export type sendMessageBodyActionType = {
    type: "SEND-MESSAGE"
    
};
export let updateNewMessageBodyAC = (body:string):updateNewMessageBodyActionType => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body:body
       
    }as const
};
export let sendMessageBody = ():sendMessageBodyActionType => {
    return {
        type: "SEND-MESSAGE",
        
       
    }as const
};