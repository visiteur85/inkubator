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

let onChange = () => {
console.log("Hello ")
}

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
export const state: RootStateType = {
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
}


export type addPostPropsType = {
    addPost: (postText: string) => void
}

export const addPost = (postText: string) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    };
    state.profilePage.post.push(newPost);
    state.profilePage.messageForNewPost=""
    onChange();
};

export const changeNewText = (newText: string)=> {
state.profilePage.messageForNewPost = newText;
    onChange();
};

export const subscribe = (callback:()=>void) => {
    onChange = callback
}