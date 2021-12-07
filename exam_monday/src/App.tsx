import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Count} from "./Count";
import {Buttons} from "./Buttons";



function App() {

    let [numberCount, setNumber] = useState(0);

    const addNumber = () => {
        numberCount++
        setNumber(numberCount)
    }

    let [zero, setNumberZero] = useState(0);

    const helloZero = () => {
        setNumber(zero)
    }



  return (
    <div className="App">
<Count numberCount={numberCount}
       // addNumber={addNumber}
       // helloZero={helloZero}
        />
        <Buttons
            addNumber={addNumber}
            helloZero={helloZero}
            numberCount={numberCount}/>
    </div>
  );
}

export default App;
