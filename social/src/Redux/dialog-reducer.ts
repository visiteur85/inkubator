import React from 'react';


export type DialogPageType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>

};
export type DialogPropsType = {
    id: number
    name: string

};
export type MessagePropsType = {
    id: number
    message: string

};

let initialState: DialogPageType = {
    dialogs: [
        {id: 1, name: "Pavel"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Andrew"},
        {id: 4, name: "Olia"},
        {id: 5, name: "Sasha"},
    ]
    ,
    messages: [
        {id: 1, message: "HI"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Peace"},
        {id: 4, message: "Peace"},
        {id: 5, message: "Peace"},
    ]

};


export const dialogsReducer = (state = initialState, action:DialogsActionsType)=> {
    switch(action.type) {

    case "SEND-MESSAGE": {
        let newState = {...state, messages: [ ...state.messages]}
        let body = action.newMessageBody;

        newState.messages.push({id: 6, message: body})
   return newState
    }}
    return state
}

export type DialogsActionsType =  sendMessageBodyActionType;

export type sendMessageBodyActionType = {
    type: "SEND-MESSAGE",
    newMessageBody:string
    
};

export let sendMessageBody = (newMessageBody:string):sendMessageBodyActionType => {
    return {
        type: "SEND-MESSAGE",
        newMessageBody
        
       
    }as const
};