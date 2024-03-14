import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion/index'
import RandomColorGen from './components/RandomColorGen'
import StarRating from './components/StarRating'
<comp></comp>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StarRating />
    </>
  )
}

export default App
