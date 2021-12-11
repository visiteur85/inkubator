import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType={
    [key:string]:Array<TaskType>
}

function App() {

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>(
            [
                {id: todolistID1, title: "What to learn", filter: "all"},
                {id: todolistID2, title: "What to buy", filter: "all"},
            ]
        )
    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ]});



        // let [todolists, setTodolists] = useState<Array<todolistsType>>(
    //     [
    //         {id: v1(), title: "What to learn", filter: "all"},
    //         {id: v1(), title: "What to buy", filter: "all"},
    //     ]
    // )
    //
    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);

    // let [filter, setFilter] = useState<FilterValuesType>("all");


    function removeTask(todolistID:string, id: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
        setTasks({...tasks,[todolistID]:tasks[todolistID].filter(f=>f.id!==id)})
    }

    function addTask(todolistID:string,title: string) {
        let newtask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks,[todolistID]:[newtask,...tasks[todolistID]]})
    }

    function changeStatus(todolistID: string,taskId: string, isDone: boolean) {
        setTasks({...tasks,[todolistID]:tasks[todolistID].map(m=>m.id===taskId ? {...m,isDone:isDone} : m)})
    }


    // let tasksForTodolist = tasks;
    //
    // if (filter === "active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === false);
    // }
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === true);
    // }
    //
    function changeFilter(todolistsID: string, value: FilterValuesType) {
        // setFilter(value);
        setTodolists(todolists.map(m=>m.id===todolistsID ? {...m,filter:value} : m ))

    }

    const removeTodolist = (todolistsID: string) => {
setTodolists(todolists.filter(f=>f.id!== todolistsID))
        delete tasks[todolistsID]
        setTasks({...tasks})
    }

    return (
        <div className="App">
            {todolists.map(m => {
                let tasksForTodolist = tasks[m.id];

                if (m.filter === "active") {
                    tasksForTodolist = tasks[m.id].filter(t => t.isDone === false);
                }
                if (m.filter === "completed") {
                    tasksForTodolist = tasks[m.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist
                        key={m.id}
                        title="What to learn"
                        tasks={tasksForTodolist}
                        todoListID={m.id}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={m.filter}
                        removeTodolist={removeTodolist}
                    />
                )
            })}

        </div>
    );
}

export default App;
