import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {filterType} from "./App";


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    remove: (mId: string) => void
    setFilter: (value: filterType) => void
    addTask: (title: string) => void


}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState('')

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle("")
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }

    }

    // const setFilterAllHandler =()=> {
    //     props.setFilter("All")
    // }
    //
    // const setFilterActiveHandler =()=> {
    //     props.setFilter("Active")
    // }
    // const setFilterCompleteHandler =()=> {
    //     props.setFilter("Completed")
    // }

    const tsarChangeFilterHandler = (value: filterType) => {
        props.setFilter(value)
    }

    const removeTaskHandler = (tID: string) => {
        props.remove(tID)

    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
            {props.tasks.map(m => {
                debugger
                return (

                    <li key={m.id}>
                        <button onClick={() => removeTaskHandler(m.id)}>x</button>
                        <input type="checkbox"
                               checked={m.isDone}/>
                        <span>{m.title}</span>
                    </li>)
            })}

        </ul>
        <div>
            <button onClick={() => tsarChangeFilterHandler("All")}>All</button>
            <button onClick={() => tsarChangeFilterHandler("Active")}>Active</button>
            <button onClick={() => tsarChangeFilterHandler("Completed")}>Completed</button>


            {/*<button onClick={setFilterAllHandler}>All</button>*/}
            {/*/!*<button onClick={() => props.setFilter("Active")}>Active</button>*!/*/}
            {/*<button onClick={setFilterActiveHandler}>Active</button>*/}
            {/*/!*<button onClick={() => props.setFilter("Completed")}>Completed</button>*!/*/}
            {/*<button onClick={setFilterCompleteHandler}>Completed</button>*/}
        </div>
    </div>
}
