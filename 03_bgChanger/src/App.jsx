import { useState } from "react"

function App() {
  let [color, setColor] = useState("olive")

  return (
  
    <body style={{backgroundColor : color}}>
      <h1 className="underline">Hello</h1>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
       
       <div className="flex items-center h-full border-solid">
        
          <button className="bg-slate-500 px-4 py-2 rounded-full text-stone-50 shadow-lg">red</button>
          
          <button className="outline-none px-4 py-2 rounded-full text-stone-50 shadow-lg">blue</button>
          
          <button className="outline-none px-4 py-2 rounded-full text-stone-50 shadow-lg">green</button>
          
          <button className="outline-none px-4 py-2 rounded-full text-stone-50 shadow-lg">white</button>
          
          <button className="outline-none px-4 py-2 rounded-full text-stone-50 shadow-lg">silver</button>
          

       
       </div>
       </div>
       </body>

   
  )
}

export default App
