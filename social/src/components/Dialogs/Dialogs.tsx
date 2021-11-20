import React from 'react';
import  s from "./Dialogs.module.css"

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + " " + s.active}>Pavel</div>
                <div className={s.dialog}>Andrew</div>
                <div className={s.dialog}>Sasha</div>
                <div className={s.dialog}>Viktor</div>
                <div className={s.dialog}>Denis</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Yo</div>
            </div>

        </div>
    )

}