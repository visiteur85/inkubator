import {} from "./redux-store";
import {mainOfTypeOfDialog} from "./dialog-reducer";
let initialState = {
    messageForNewPost: "",
    post: [
        {id: 1, message: "Hi, how are you", likesCount: 12},
        {id: 2, message: "It is  my first post", likesCount: 11},
        {id: 3, message: "Da da da", likesCount: 13},
        {id: 4, message: "No no", likesCount: 11}

    ]
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
export type ActionsTypes = mainOfTypeOfDialog | mainOfTypeOfProfile
export const profileReducer = (state: profilePageType = initialState, action: mainOfTypeOfProfile) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            state.post.push(newPost);
            state.messageForNewPost = "";
            return state;
        }
        // this._onChange();
// сделать копии возможно!!! как на строке 29!!!!!!!!!!!!!!!!!
        case "CHANGE-NEW-TEXT": {


            return {...state,
                messageForNewPost:action.newText
            };
        }
        // this._onChange();

        default: return state
    }
};

export type mainOfTypeOfProfile = AddPostActionType | ChangeNewTextActionType

  type AddPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
};

 type ChangeNewTextActionType = ReturnType<typeof ChangeNewTextAC>
export const ChangeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText
    } as const
};



