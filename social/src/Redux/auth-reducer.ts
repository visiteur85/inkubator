import {authApi, userApi} from "../API/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";


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
                ...state, ...action.data
            }
            return newState
        }

        default:
            return state
    }
};


export type setUserDataType = ReturnType<typeof setUserData>
export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SET-USER-DATE",
        data: {id, email, login, isAuth}
    } as const
};


export const getMeThunkCreator = () => {
    return (dispatch: Dispatch<setUserDataType>)  => {

           return authApi.me()
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(setUserData(response.data.data.id, response.data.data.email,
                        response.data.data.login, true))
                }
            })
    }

};

export const LoginTS = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {



        authApi.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getMeThunkCreator())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                    dispatch(stopSubmit("login", {_error: message}))
                }
            })
    }
};

export const Logout = () => {
    return (dispatch: Dispatch<any>) => {
        authApi.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null,
                        null, false))
                }
            })
    }
};









