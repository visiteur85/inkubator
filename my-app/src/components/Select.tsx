import React, {ChangeEvent, useState} from "react";
import s from "Select.module.css"

type itemPropsType = {
    value: string
    title: string
}

type itemsPropsType = {
    items:Array<itemPropsType>
}
export const Select = (props:itemsPropsType) => {

    return (
        <select>
            <option>none</option>
            {props.items.map(m=><option value={m.value}>{m.title}</option> )

            }
        </select>

    )
}