import {usersReducer} from './users-reducer';
import {applyMiddleware, combineReducers,createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialog-reducer";
import {sideBarReducer} from "./sideBar-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import {appReducer} from "./app-reducer";

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
export type RootReducerType = ReturnType<typeof rootReducer>
export type StoreType = typeof store

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware) );



