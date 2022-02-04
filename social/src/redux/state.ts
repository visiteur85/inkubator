//
// export type postPropsType = {
//     id: number
//     message: string
//     likesCount: number
// }
// export type dialogsPropsType = {
//     id: number
//     name: string
// }
// export type MyMessagesPropsType = {
//     id: number
//     message: string
// }
//
//
// export type profilePage = {
//     post: postPropsType
//     dialogs: dialogsPropsType
//     messages: MyMessagesPropsType
// }

import {renderTree} from "../render";


export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type profilePageType = {
    post: Array<PostType>
    messageForNewPost: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type Sidebar = {}
export type RootStateType = {
    profilePage: profilePageType
    dialogPage: DialogPageType
    sidebar: Sidebar

}


export type addPostPropsType = {
    addPost: (postText: string) => void
}


export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = AddPostActionType | ChangeNewTextActionType

export type AddPostActionType = {
    type: "ADD-POST"
    postText: string
}

export type ChangeNewTextActionType = {
    type: "CHANGE-NEW-TEXT"
    newText: string
}

export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            post: [
                {id: 1, message: "Hi, how are you", likesCount: 12},
                {id: 2, message: "It is  my first post", likesCount: 11},
                {id: 3, message: "Da da da", likesCount: 13},
                {id: 4, message: "No no", likesCount: 11}

            ]
        },
        dialogPage: {
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
                ]
        },
        sidebar: {}
    },
    _onChange() {
        console.log("state changed ")
    },

    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            this._state.profilePage.post.push(newPost);
            this._state.profilePage.messageForNewPost = ""
            this._onChange();
        } else if (action.type === "CHANGE-NEW-TEXT") {
            this._state.profilePage.messageForNewPost = action.newText;
            this._onChange();
        }

    }
}

export const addPostAC = (postText: string): AddPostActionType=> {
    return {
        type: "ADD-POST",
        postText: postText
    }
}

export const ChangeNewTextAC = (newText:string): ChangeNewTextActionType=> {
    return {
        type: "CHANGE-NEW-TEXT",
        newText
    }
}