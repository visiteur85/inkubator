import {ActionsTypes, DialogPageType, PostType} from "./state";


export const dialogReducer = (state: DialogPageType, action: ActionsTypes)=> {
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

