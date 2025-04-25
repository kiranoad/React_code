import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "Kiran",
    age : 21
  }
  let newArr =[1,3,4]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>``
    <br />
    <Card username="Kiran Kumar" btnText="click me" textline="hi iam devloper"/>
    <Card username="Harish Oad" btnText="visit me" textline="hi iam system designer"/>
    <Card username="Dinesh Oad" btnText="Call Me" textline="hi iam system designer"/>

    
    
    </>
  )
}

export default App
