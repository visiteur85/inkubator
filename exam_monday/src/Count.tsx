import React from 'react';
import s from "./Count.module.css";

type CountPropsType = {
    numberCount: number
    // addNumber: ()=> void
    // helloZero: ()=> void
}

export const Count = ({numberCount,...props}:CountPropsType) => {





    return (
        <div className={numberCount === 5 ? s.tableFinish : s.table}>
            {numberCount}
        </div>
    )

}