import React from 'react';
import s from "./Dialogs.module.css"

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    Pavel
                </div>
                <div className={s.dialog}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Andrew
                </div>
                <div className={s.dialog}>
                    Olia
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Peace</div>
            </div>
        </div>
    );
};

