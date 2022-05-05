import { usersReducer } from './users-reducer';
import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialog-reducer";
import {sideBarReducer} from "./sideBar-reducer";

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer,
    usersPage:usersReducer
})
export type RootReducerType = ReturnType<typeof rootReducer>
export type StoreType = typeof store
export let store  = createStore(rootReducer);

