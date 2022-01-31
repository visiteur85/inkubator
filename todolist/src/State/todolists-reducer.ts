import {FilterValuesType, TodolistType} from "../App";

export const todolistsReducer = (state: Array<TodolistType>, action: mainType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST":{
            let newState=[...state];
            return newState.filter(f=>f.id!==action.payload.id)
        }
        case "ADD-TODOLIST":{

            return [...state,{id: action.payload.todolistId3,title:action.payload.title, filter:"all" as FilterValuesType}]
        }
        case "CHANGE-TODOLIST-TITLE": {
            let newState=[...state];
            return newState.map(m=>m.id===action.payload.id ? {...m, title:action.payload.title}: m)
        }
        case "CHANGE-TODOLIST-FILTER":{
            let newState=[...state];
            return newState.map(st=>st.id===action.payload.id ? {...st, filter: action.payload.filter} : st)
        }
        default:
            return state
    }
}

type mainType = RemoveTodolistACType | AddTodolistACType | ChangeTodolistTitleACType | ChangeTodolistFilterACACType;

type RemoveTodolistACType = ReturnType<typeof RemoveTodolistAC>;

export const RemoveTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            id: id
        }
    } as const
}


type AddTodolistACType = ReturnType<typeof AddTodolistAC>;
export const AddTodolistAC = (title: string,todolistId3:string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title, todolistId3
        }
    } as const
}

type ChangeTodolistTitleACType = ReturnType<typeof ChangeTodolistTitleAC>;

export const ChangeTodolistTitleAC = (todolistId2:string, newTodolistTitle: string ) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload:{
        id: todolistId2,
        title: newTodolistTitle}
    } as const
}

export type ChangeTodolistFilterACACType = ReturnType<typeof ChangeTodolistFilterAC>;

export const ChangeTodolistFilterAC = (id:string, filter: FilterValuesType ) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload:{
            id,
            filter}
    } as const
}