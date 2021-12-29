import {TaskType} from "../Todolist";
import {v1} from "uuid"
import {TasksStateType} from "../App";

export const TasksReducer = (state: TasksStateType, action: firstOfType) => {
    switch (action.type) {
        case "REMOVE-TASK": {

            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].filter(f => f.id !== action.payload.id)

            }
        }
        case "ADD- TASK": {
            return {...state, [action.payload.todolistId]: [{id: v1(), title: action.payload.title, isDone: true},...state[action.payload.todolistId]]}
            // ,...state[action.payload.todolistId]]}
        }
        case "CHANGE-STATUS": {
            let todolistTasks = state[action.payload.todolistId];
            let task = todolistTasks.find(t => t.id === action.payload.id);
            if (task) {task.isDone = action.payload.IsDone}
            return {...state}
        }
        case "CHANGE-TASK-TITLE": {
            let todolistTasks = state[action.payload.todolistId];
            let task = todolistTasks.find(t => t.id === action.payload.id);
            if (task) {task.title = action.payload.newTitle}
            return {...state}
        }
        case "REMOVE-TODOLIST":{

             delete state[action.payload.id]
            return{...state}
        }

        case "ADD-TODOLIST": {
            let newID = v1();
            return {...state,[newID]:[]}
        }
        default:
            return state
    }

};


type firstOfType = removeTaskACType | addTaskACType | changeStatusACType | changeTaskTitleACType | removeTodolistACType
| addTodolistACType

type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string, todoListId: string) => {
    return {
        type: "REMOVE-TASK",
        payload: {
            id: id,
            todolistId: todoListId
        }
    } as const
}
type addTaskACType = ReturnType<typeof AddTaskAC>
export const AddTaskAC = (title: string, todolistId: string) => {
    return {
        type: "ADD- TASK",
        payload: {
            title: title,
            todolistId: todolistId
        }
    } as const
}

type changeStatusACType = ReturnType<typeof changeStatusAC>
export const changeStatusAC = (id: string, isDone: boolean, todolistId: string) => {
    return {
        type: "CHANGE-STATUS",
        payload: {
            id:id,
            IsDone: isDone,
            todolistId: todolistId
        }
    } as const
}

type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (id: string, newTitle: string, todolistId: string) => {
    return {
        type: "CHANGE-TASK-TITLE",
        payload: {
            id:id,
            newTitle: newTitle,
            todolistId: todolistId
        }
    } as const
}

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (id: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {
            id
        }
    } as const
}

type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: "ADD-TODOLIST",
        payload: {
            title:title
        }
    } as const
}