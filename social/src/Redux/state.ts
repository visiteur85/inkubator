export type PostPropsType = {
    id: number
    message: string
    likesCount: number
};
export type DialogPropsType = {
    id: number
    name: string

};
export type MessagePropsType = {
    id: number
    message: string

};
export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string
};
export type DialogPageType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody:string
}
export type SidebarType = {};
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType

};
export type StoreType = {
    _state: RootStateType
    _onChange: (state: RootStateType) => void
       subscribe: (callback: (_state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch:(action: ActionsType)=>void

}
export type AddPostActionType = {
      type: "ADD-POST"
  };
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST"
    newText: string

};
export type updateNewMessageBodyActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body:string
};
export type sendMessageBodyActionType = {
    type: "SEND-MESSAGE"
    
};
//типы наших AC
export type ActionsType = AddPostActionType | UpdateNewPostTextActionType |
updateNewMessageBodyActionType | sendMessageBodyActionType;


export const addPostActionCreator = ():AddPostActionType=> {
    return {
        type: "ADD-POST"
    }as const
};

export let updateNewPostAC = (text:string):UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST",
        newText:text
    }as const
};
//экшн добавляет сообщение в dialogs
export let updateNewMessageBodyAC = (body:string):updateNewMessageBodyActionType => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body:body
       
    }as const
};
//экшн отправляет сообщение в dialogs
export let sendMessageBody = ():sendMessageBodyActionType => {
    return {
        type: "SEND-MESSAGE",
        
       
    }as const
};

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 0},
                {id: 2, message: "it's my first post", likesCount: 23},
                {id: 3, message: "I m ok", likesCount: 14},
                {id: 4, message: "Great", likesCount: 43},
            ],
            newPostText: ""
        },
        dialogsPage: {
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
            ],
            newMessageBody:""

        },
        sidebar: {}

    },

    getState() {
        return this._state
    },
    _onChange(state: RootStateType) {
        console.log("asdf")
    },

    subscribe(callback) {
        this._onChange = callback
    },


    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost: PostPropsType = {id: 5, message: this._state.profilePage.newPostText, likesCount: 15};

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ""
            this._onChange(this._state);
        }
        else if (action.type === "UPDATE-NEW-POST") {
            this._state.profilePage.newPostText = action.newText;
            this._onChange(this._state)
        }
        else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBody = action.body;
            this._onChange(this._state)
        }
        else if (action.type === "SEND-MESSAGE") {

            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._onChange(this._state)
        }
    },

};
