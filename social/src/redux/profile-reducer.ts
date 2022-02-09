import {ActionsTypes, PostType, profilePageType} from "./state";

export const profileReducer = (state: profilePageType, action: ActionsTypes) => {
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

        case "CHANGE-NEW-TEXT": {

            state.messageForNewPost = action.newText;
            return state;
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



