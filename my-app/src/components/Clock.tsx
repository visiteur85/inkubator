import React, {useEffect, useState} from 'react';


type PropsType = {}
export const Clock: React.FC<PropsType> = (props) => {


    const [date, setDate] = useState(new Date())

    useEffect(() => {


        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return ()=>{
            clearInterval(intervalID)
        }
    }, [])

    const twoNumbers = (num: number) => num < 10 ? "0" + num : num

    ;


    return (
        <div>
            <span>{twoNumbers(date.getHours())}</span>
            :
            <span>{twoNumbers(date.getMinutes())}</span>
            :
            <span>{twoNumbers(date.getSeconds())}</span>
        </div>
    );
};

