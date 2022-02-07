import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {RemoveTodolistActionType} from "./todolists-reducer";
import {TaskType} from "../Todolist";

export type RemoveTaskActionType = {
    type: "REMOVE-TASK"
    taskId:string
    todolistId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}

type ActionsType = RemoveTaskActionType | AddTaskActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {...state, [action.todolistId]: state[action.todolistId].filter(task=>task.id ! == action.taskId)}
        }
        case 'ADD-TASK': {
            const newTask: TaskType = {id: v1(), title: action.title, isDone: false}
            return {...state, [action.todolistId]: [newTask, ...state[action.todolistId]]}
        }


        default:
            throw new Error("I don't understand this type")
    }
}
export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return { type: "REMOVE-TASK", taskId, todolistId}
}
export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return { type:"ADD-TASK", title, todolistId }
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


