import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map(m => {
            debugger
            return (

                <li key={m.id}>
                    <button onClick={()=>alert("Hey")}>x</button>
                <input type="checkbox"
                       checked={m.isDone}/>
                <span>{m.title}</span>
            </li>)
            })}



        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
}
