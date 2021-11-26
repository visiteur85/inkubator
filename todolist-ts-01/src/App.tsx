import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

export type filterType="All" | "Active" | "Completed"


function App() {

    let [tasks1,setTasks1]=useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Rest Api", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false }

    ])

const removeTask = (mId:string) => {
    setTasks1(tasks1=tasks1.filter(f=>f.id!==mId))

}
const addTask = (title:string) => {

    let newTask= { id: v1(), title: title, isDone: false }
    setTasks1([newTask,...tasks1])

    }

let [filter, setMyFilter] = useState<filterType>("All")

const setFilter = (value: filterType) => {

    setMyFilter(value)

}
let newTask = tasks1;

     if(filter==="Active") {
         newTask = tasks1.filter(f=>f.isDone)
    }
    else if (filter==="Completed"){
         newTask = tasks1.filter(f=>!f.isDone)
}
// newTask = tasks1.filter(f=>f.isDone);


    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={newTask}
                remove={removeTask}
                setFilter={setFilter}
                addTask={addTask}
            />


        </div>
    );
}

export default App;
