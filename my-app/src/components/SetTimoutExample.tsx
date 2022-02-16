import React, {useEffect, useState} from 'react';

export const SetTimoutExample = () => {

    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1);



    useEffect(()=>{
        setInterval(()=>{
            setCount(count +1)
        }, 1000)

    },[])



    return (
        <div>
Hello, counter: {count} {fake}
            {/*<button onClick={()=>setCount((count + 1))}>+</button>*/}
            {/*<button onClick={()=>setFake((fake + 1))}>+</button>*/}


        </div>
    );
};

