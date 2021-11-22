import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type filterType="All" | "Active" | "Completed"


function App() {

    let [tasks1,setTasks1]=useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "ReactJS", isDone: false },

    ])

const removeTask = (mId:number) => {
    setTasks1(tasks1=tasks1.filter(f=>f.id!==mId))
}

let[filter, setMyFilter] = useState<filterType>("All")

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
            />


        </div>
    );
}

export default App;
