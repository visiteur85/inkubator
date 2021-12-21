import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, TaskType} from "./App";
import AddItemForm from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Button, ButtonGroup, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    filter: FilterValuesType
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
    changeTodoListTitle: (title: string, todoListID: string) => void
}

function TodoList(props: PropsType) {


    const setAllFilterValue = () => props.changeFilter("all", props.id)
    const setActiveFilterValue = () => props.changeFilter("active", props.id)
    const setCompletedFilterValue = () => props.changeFilter("completed", props.id)
    const getBtnClass = (filter: FilterValuesType) => props.filter=== filter ? "active" : "" ;
    const changeTodoListTitle = (newTitle: string) => props.changeTodoListTitle(newTitle, props.id)

    const tasksJSX = props.tasks.map(task => {
        const getClasses = () => task.isDone ? "is-done": "" ;
        const changeStatus = (e: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(task.id, e.currentTarget.checked, props.id)
        const changeTaskTitle = (newTitle: string) => {
            props.changeTaskTitle(task.id, newTitle, props.id)
        }
        const removeTask = () => props.removeTask(task.id, props.id)
        return (
            <li key={task.id} className={getClasses()}>

                <Checkbox checked={task.isDone}
                          onChange={changeStatus}
                          size={"medium"}
                            color={"primary"}/>



                <EditableSpan title={task.title} changeTitle={changeTaskTitle}/>
                <IconButton onClick={removeTask}>
                    <Delete/>
                </IconButton>
                {/*<button onClick={removeTask}>x</button>*/}
            </li>
        )
    })

    const addTask = (title: string) => props.addTask(title, props.id)
    return(
        <div style={{display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            minHeight:"300px"
        }}>
            <h3>
                <EditableSpan title={props.title} changeTitle={changeTodoListTitle} />
                <button onClick={()=>props.removeTodoList(props.id)}>x</button>
            </h3>
            <AddItemForm addItem={addTask} />
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <ButtonGroup size={"small"} variant={"contained"} color={"primary"} disableElevation>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                <Button
                    className={getBtnClass("all")}
                    onClick={setAllFilterValue}>All</Button>
                <Button
                    className={getBtnClass("active")}
                    onClick={setActiveFilterValue}>Active</Button>
                <Button
                    className={getBtnClass("completed")}
                    onClick={setCompletedFilterValue}>Completed</Button>
            </ButtonGroup>
            </div>
        </div>
    )
}

export default TodoList;