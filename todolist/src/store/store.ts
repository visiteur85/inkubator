import {combineReducers, createStore} from "redux";

let rootReducer = combineReducers({
    tasks: TasksReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>;

export let store=createStore(rootReducer)