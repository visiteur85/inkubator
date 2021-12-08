import React from 'react';
import s from "./../Dialogs.module.css"

import {stringify} from "querystring";

type MessagePropsType = {
    message: string

}

export const Message = (props: MessagePropsType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();
    const addNewPost = () => {
        let text = newMessageElement.current?.value;
        alert("hello")
    }


    return <div className={s.dialog}>{props.message}
        <div>
            <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
            <button onClick={addNewPost}>Add post</button>
        </div>
    </div>
}


