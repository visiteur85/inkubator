import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, TaskType} from "./App";

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
    filter: FilterValuesType
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

function TodoList(props: PropsType) {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const addTask = () => {
        const trimmedTitle = title.trim()
            if(trimmedTitle){
                props.addTask(trimmedTitle)
            } else {
                setError(true)
            }
        setTitle("")
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            addTask();
        }
    }
    const setAllFilterValue = () =>props.changeFilter("all")
    const setActiveFilterValue = () =>props.changeFilter("active")
    const setCompletedFilterValue = () =>props.changeFilter("completed")
    const getBtnClass = (filter: FilterValuesType) => props.filter=== filter ? "active" : "" ;

    const tasksJSX = props.tasks.map(task => {
        const getClasses = () => task.isDone ? "is-done": "" ;
        const changeStatus = (e: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(task.id, e.currentTarget.checked)
        const removeTask = () => props.removeTask(task.id)
        return (
            <li key={task.id} className={getClasses()}>
                <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={changeStatus}
                />
                <span>{task.title}</span>
                <button onClick={removeTask}>x</button>
            </li>
        )
    })
    const errorClass = error ? "error" : "" ;
    const errorMessage = <div style={{color: "red"}}>Title is required!</div>

    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={changeTitle}
                    onKeyPress={onKeyPressAddTask}
                    className={errorClass}
                />
                <button onClick={addTask}>+</button>
                {error && errorMessage}
            </div>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <button
                    className={getBtnClass("all")}
                    onClick={setAllFilterValue}>All</button>
                <button
                    className={getBtnClass("active")}
                    onClick={setActiveFilterValue}>Active</button>
                <button
                    className={getBtnClass("completed")}
                    onClick={setCompletedFilterValue}>Completed</button>
            </div>
        </div>
    )
}

export default TodoList;