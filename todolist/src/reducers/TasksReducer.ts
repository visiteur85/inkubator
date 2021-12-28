import React from 'react';
import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const TasksReducer = (state:Array<TaskType>, action:kingOfType) => {
switch (action.type) {
    case "REMOVE-TASK":{
        let newState = [...state];// эта строка не обязательна, просто длля примера
        return newState.filter(f=>f.id!==action.id)//action.id мы берем из 21 строки
    }
    case "ADD-TASK": {
        let newState = [...state];
return [{ id: v1(), title: action.payload.title, isDone: true },...newState]
    }
    default: return state
}
};


type kingOfType = removeTaskACType | addTaskACType

type removeTaskACType = ReturnType<typeof removeTaskAC>// типизируем объект, а не функцию
export const removeTaskAC = (id: string) => {//AC значит action creator. важно в строке ниже после ретурн {}
  return {
type: "REMOVE-TASK",
      id:id
  } as const
}

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string) => {
    return {
        type: "ADD-TASK",
        payload: {
        title:title,}
    } as const
    }
