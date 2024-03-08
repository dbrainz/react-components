import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion/index'
import RandomColorGen from './components/RandomColorGen'
<comp></comp>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomColorGen />
    </>
  )
}

export default App
