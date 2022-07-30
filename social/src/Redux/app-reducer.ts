import {authApi, userApi} from "../API/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {getMeThunkCreator} from "./auth-reducer";


export type AuthInitialStateType = {
    initialized: boolean
}


const initialState: AuthInitialStateType = {
    initialized: false,


}


export const appReducer = (state = initialState, action: setAppIniType) => {
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


export type setAppIniType = ReturnType<typeof initializedSuccessAC>
export const initializedSuccessAC = () => {
    return {
        type: "app/INITIALIZED_success",

    } as const
};


export const initializeAppTC = () => {
    return async (dispatch: Dispatch<any>) => {
        let promise = dispatch(getMeThunkCreator());

        await Promise.all([promise])
        dispatch(initializedSuccessAC());
     }
};










