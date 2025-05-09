import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
 function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
      <h1>hello it the vite js with react</h1>
    </div>
  )
 }

 const anotherElement = (
  <a href= "https://google.com" target='_blank'>Visit google </a>
 )
 const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit google',
  anotherElement
  
 )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />

  </StrictMode>

)
