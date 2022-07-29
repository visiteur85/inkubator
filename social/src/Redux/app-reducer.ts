import {authApi, userApi} from "../API/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";



export type AuthInitialStateType = {
    initialized: boolean
}


let initialState: AuthInitialStateType = {
    initialized: false,


}


export const appReducer = (state = initialState, action: setUserDataType) => {
    switch (action.type) {
        case "app/INITIALIZED_success": {
            let newState = {
                ...state,
                initialized: true
            }
            return newState
        }
        default:
            return state
    }
};


export type setUserDataType = ReturnType<typeof initializedSuccessAC>
export const initializedSuccessAC = () => {
    return {
        type: "app/INITIALIZED_success",

    } as const
};


export const initializeTC = () => {
    return (dispatch: Dispatch<any>) => {

}};
//
// export const LoginTS = (email: string, password: string, rememberMe: boolean) => {
//     return (dispatch: Dispatch<any>) => {
//
//
//
//         authApi.login(email, password, rememberMe)
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     dispatch(getMeThunkCreator())
//                 } else {
//                     let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
//                     dispatch(stopSubmit("login", {_error: message}))
//                 }
//             })
//     }
// };
//
// export const Logout = () => {
//     return (dispatch: Dispatch<any>) => {
//         authApi.logout()
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     dispatch(setUserData(null, null,
//                         null, false))
//                 }
//             })
//     }
// };









