import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type propsType = {
    addTask: (title: string)=> void
}
export const Fullinput = ({addTask,...props}:propsType)=> {

    const [title, setTitle] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        // if ((event.key === 'Control')|| event.key==='Enter'){
        if (event.key==='Enter') {
            addTaskHandler()
        }
    }
    const addTaskHandler = () => {
        addTask(title)
        setTitle('')
    }
    return (
        <div>
            <div>
                <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
        </div>
    )
}