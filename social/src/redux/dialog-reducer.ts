import { } from "./redux-store";
import {mainOfTypeOfProfile} from "./profile-reducer";

let initialState:DialogPageType = {
        dialogs: [
            {id: 1, name: "Pavel"},
            {id: 2, name: "Alex"},
            {id: 3, name: "Ivan"},
            {id: 4, name: "Olia"},
            {id: 5, name: "Serge"},
            {id: 6, name: "Tania"},
        ],
        messages:
            [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your It -kamasutra"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
                {id: 6, message: "Yo"},
            ],
        newMessageBody: ""
    }
export type ActionsTypes = mainOfTypeOfDialog | mainOfTypeOfProfile;
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}

export const dialogReducer = (state: DialogPageType = initialState, action: mainOfTypeOfDialog)=> {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY": {
            state.newMessageBody = action.body;
            return state;
        }
        // this._onChange();

        case "SEND_MESSAGE": {
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 7, message: body})
            return state;
        }
        // this._onChange();

        default: return state
    }
};


export type mainOfTypeOfDialog = UpdateNewMessageBodyActionType | SendMessageActionType

export type UpdateNewMessageBodyActionType = ReturnType<typeof UpdateNewMessageBodyAC>
export const UpdateNewMessageBodyAC = (body: string)=> {
    return {
        type: "UPDATE_NEW_MESSAGE_BODY",
        body
    } as const
}

 type SendMessageActionType = ReturnType<typeof SendMessageAC>
export const SendMessageAC = ()=> {
    return {
        type: "SEND_MESSAGE"

    } as const
}

