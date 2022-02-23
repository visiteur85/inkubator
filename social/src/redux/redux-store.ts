import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,

});

export const store = createStore(rootReducer);
export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;