import {usersReducer} from './users-reducer';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialog-reducer";
import {sideBarReducer} from "./sideBar-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer

})
export type RootReducerType = ReturnType<typeof rootReducer>
export type StoreType = typeof store

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

