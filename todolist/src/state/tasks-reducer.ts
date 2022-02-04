import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {RemoveTodolistActionType} from "./todolists-reducer";

export type RemoveTaskActionType = {
    type: "REMOVE-TASK"
    taskId:string
    todolistId: string

}
export type SecondTaskActionType = {
    type: ''

}


type ActionsType = RemoveTaskActionType | SecondTaskActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {...state, [action.todolistId]: state[action.todolistId].filter(task=>task.id ! == action.taskId)}
        }
        case '':
            return state

        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return { type: "REMOVE-TASK", taskId, todolistId}
}
export const AddTodolistAC = (title: string): SecondTaskActionType => {
    return { type:""}
}




// export type FirstTaskActionType = {
//     type: ""
//
// }
// export type SecondTaskActionType = {
//     type: ''
//
// }
//
//
// type ActionsType = FirstTaskActionType | SecondTaskActionType
//
// export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
//     switch (action.type) {
//         case '':
//             return state
//         case '':
//             return state
//
//         default:
//             throw new Error("I don't understand this type")
//     }
// }
//
// export const RemoveTodolistAC = (todolistId: string): FirstTaskActionType => {
//     return { type: ""}
// }
// export const AddTodolistAC = (title: string): SecondTaskActionType => {
//     return { type:""}
// }


