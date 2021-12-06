import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import s from "./Todolist.module.css"

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus: (currentId: string, value: boolean) => void
    filter: FilterValuesType
}

export function Todolist({filter,...props}: PropsType) {

    let [title, setTitle] = useState("")
    let[error, setError] = useState(true)


    const addTask = () => {
        if(title.trim()){
        props.addTask(title);
        setTitle("");}
        setError(false)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
       setError(false)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    // const onChangeHandlerForChangeStatus = (event: ChangeEvent<HTMLInputElement>) => props.changeStatus(event.currentTarget.checked)


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? s.error : ""} value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}/>
            <button onClick={addTask}>+</button>
            {error && <div className={s.errorMessage}>Title is required</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    const onChangeHandlerForChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
                        props.changeStatus(t.id, event.currentTarget.checked)
                    }
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} onChange={onChangeHandlerForChangeStatus}/>
                        <span className={t.isDone ?s.isDone : ""}>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={filter==="all" ? s.activeFilter: ""} onClick={onAllClickHandler}>All</button>
            <button className={filter==="active" ? s.activeFilter: ""} onClick={onActiveClickHandler}>Active</button>
            <button className={filter==="completed" ? s.activeFilter: ""} onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
