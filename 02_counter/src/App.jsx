import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter, setCounter] = useState(15)

  // let  counter = 15;

  const addValue = ()=>{
    // counter = counter + 1; // we can use this methods also.
    setCounter(counter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // console.log("clicked", counter);

  }
  const removeValue = () =>{
    if(counter > 0)
      setCounter(counter - 1);
    
    }
    



  return (
    <> 
    <h1>hello Kiran</h1>
    <h2>Counter Value: {counter} </h2>

    <button onClick={addValue}>Add Value{counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Value{counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
