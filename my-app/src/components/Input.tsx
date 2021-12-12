import React, {ChangeEvent, useState} from 'react';


export const Input = () => {

    const [parentValue, setParentValue] = useState("")


    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <div>

            <input value={parentValue}
                   onChange={changeInput}/>
            {parentValue}
        </div>)
}


export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)


    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <div>

            <input type="checkbox"
                   checked={parentValue}
                   onChange={changeInput}/>

        </div>)
}

