import React from 'react';

type ButtonsPropsType = {
    numberCount: number
    addNumber: ()=> void
    helloZero: ()=> void
}


export const Buttons = ({numberCount, addNumber,helloZero,...props}:ButtonsPropsType) => {
    const addNumberHandler = () => {
        addNumber()
    }

    const helloZeroHandler = () => {
        helloZero()
    }


    return (
      <div>
          <button disabled={numberCount === 5} onClick={addNumberHandler}>inc</button>
          <button disabled={numberCount === 0} onClick={helloZeroHandler}>reset</button>
      </div>
  )
}