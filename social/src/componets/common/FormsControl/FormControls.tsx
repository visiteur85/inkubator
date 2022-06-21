import React from 'react';
import {WrappedFieldProps} from "redux-form";
import s from "../FormsControl/FormControls.module.css"

//рефакторинг 77 выпуск 45 минута


export const Textarea = ({input, meta, ...restProps}: WrappedFieldProps) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <textarea  {...input} {...restProps}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...restProps}: WrappedFieldProps) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <input  {...input} {...restProps}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

