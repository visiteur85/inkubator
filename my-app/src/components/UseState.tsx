import React, {useMemo, useState} from 'react';

const generateData = () => {
    return 1

}


export const UseState = () => {

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData);

    const changer = (state: number) => { return state +1}


    return (
        <div>
<button onClick={()=>setCounter(changer)}>+</button>
            {counter}
        </div>
    );
};
