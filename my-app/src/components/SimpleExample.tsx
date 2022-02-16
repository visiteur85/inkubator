import React, {useEffect, useState} from 'react';

export const SimpleExample = () => {

    const [count, setCount] = useState(1);

    useEffect(()=>{
        console.log("useEffect")
        document.title = count.toString()
    } )
    // document.title = count.toString()
    return (
        <div>
Hello, {count}
            <button onClick={()=>setCount((count + 1))}>+</button>

        </div>
    );
};

