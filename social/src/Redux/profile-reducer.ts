
import  {Dispatch} from 'react';
import {profileApi, userApi} from "../API/api";



export type ProfilePageType = {
    posts: Array<PostPropsType>
    profile: ProfileFromServerType | null
    status: string
};
export type PostPropsType = {
    id: number
    message: string
    likesCount: number
};

export type ProfileFromServerType = {
    aboutMe: string
    contacts: ContactsForProfileType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosForProfileType

};
export type ContactsForProfileType = {
    facebook: string
    website: null | string
    vk: string
    twitter: string
    instagram: string
    youtube: null | string
    github: string
    mainLink: null | string
};
export type PhotosForProfileType = {
    small: string
    large: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 0},
        {id: 2, message: "it's my first post", likesCount: 23},
        {id: 3, message: "I m ok", likesCount: 14},
        {id: 4, message: "Great", likesCount: 43},
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case "ADD-POST": {

            let newPost: PostPropsType = {id: 5, message: action.newPostText, likesCount: 15};
            let newState = {...state};
            newState.posts = [...state.posts];
            newState.posts.push(newPost);
            // newState.newPostText = "";


            return newState
        }

        case "Set_USER_PROFILE": {
            let newState = {...state, profile: action.profile};
            return newState;
        }

        case "SET-STATUS": {
            return {...state, status: action.status}

        }
    }
    return state
}

export type ProfileActionsType = AddPostActionType |  SetUserProfileType | SetStatusType

export type AddPostActionType = {
    type: "ADD-POST"
    newPostText:string
};


export type SetUserProfileType = {
    type: "Set_USER_PROFILE"
    profile: any

};


export const addPost = (newPostText:string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
};



export let setUserProfile = (profile: any): SetUserProfileType => {
    return {
        type: "Set_USER_PROFILE",
        profile

    }
};

type SetStatusType = ReturnType<typeof setStatusAC>
export let setStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}


export const getProfileThunkCreator = (userId: number) => {
    return (dispatch: Dispatch<any>) => {
        userApi.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))

            })
    }
};


export const getUserStatusThunkCreator = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setStatusAC(response.data))

            })
    }
};

export const updateStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }

            })
    }
};











