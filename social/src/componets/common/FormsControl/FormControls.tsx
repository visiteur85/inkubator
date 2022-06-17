import React from 'react';
import {WrappedFieldProps} from "redux-form";
import s from "../FormsControl/FormControls.module.css"


export const Textarea = ({ input, meta, ...restProps}: WrappedFieldProps) => {

    return (
        <div className={s.formControl + " " + s.error}>
            <div>
            <textarea  {...input} {...restProps}/>
            </div>
            <span>{"some error"}</span>
            </div>
    )
}

