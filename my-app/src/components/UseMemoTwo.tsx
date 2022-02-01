import React, {useMemo, useState} from 'react';

const UseMemoTwo = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{
        let tempResultA=1;
        for (let i= 1; i<=a; i++) {
            let fake=0;
            while(fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA*i

        }
        return tempResultA},[a]);
    return (
        <div>

            </div>
    );
};

export default UseMemoTwo;