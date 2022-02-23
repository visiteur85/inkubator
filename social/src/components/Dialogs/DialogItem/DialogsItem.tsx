import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {stringify} from "querystring";
import {DialogType} from "../../../redux/dialog-reducer";


type DialogItemPropsType = DialogType


export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


