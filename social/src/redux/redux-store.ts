import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,

});

export const store = createStore(reducers);
export type AppStateType = ReturnType<typeof reducers>;
export type AppStoreType = typeof store;