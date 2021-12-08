import React, {ChangeEvent, useState} from 'react';


export const Input = () => {

    const [parentValue, setParentValue] = useState("")


    const changeInput =(e:ChangeEvent<HTMLInputElement>) => {
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


    const changeInput =(e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <div>

            <input type="checkbox"
                   checked={parentValue}
                   onChange={changeInput}/>

        </div>)
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("1")


    const changeInput =(e:ChangeEvent<HTMLSelectElement>) => {
         setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={changeInput}>
            <option>none</option>
            <option value={"1"}>minsk</option>
            <option value={"2"}>kiev</option>
        </select>

        )}