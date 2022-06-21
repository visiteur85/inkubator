import React, {Dispatch} from 'react';
import {authApi, userApi} from "../API/api";
import {setUserProfile} from "./profile-reducer";


export type AuthFromServerType = {
    data: dataAuthType
    resultCode: number
    messages: string[]

};
export type dataAuthType = {
    id: number
    email: string
    login: string

}
export type AuthInitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
}


let initialState: AuthInitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false

}


export const authReducer = (state = initialState, action: setUserDataType) => {
    switch (action.type) {

        case "SET-USER-DATE": {
            let newState = {
                ...state, ...action.data, isAuth: true
            }
            return newState
        }

        default:
            return state
    }
};


export type setUserDataType = ReturnType<typeof setUserData>
export const setUserData = (id: number, email: string, login: string) => {
    return {
        type: "SET-USER-DATE",
        data: {id, email, login}
    } as const
};



export const getMeThunkCreator = () => {
    return (dispatch: Dispatch<any>) => {
        authApi.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(response.data.data.id, response.data.data.email,
                        response.data.data.login))
                }
            })
    }
};

export const Login = (email:string, password: string, rememberMe:boolean ) => {
    return (dispatch: Dispatch<any>) => {
        authApi.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {

                }
            })
    }
};









