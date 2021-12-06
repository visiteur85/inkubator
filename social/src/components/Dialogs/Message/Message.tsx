import React from 'react';
import s from "./../Dialogs.module.css"

import {stringify} from "querystring";

type MessagePropsType = {
    message: string

}

export const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}


