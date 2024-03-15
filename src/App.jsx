import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion/index'
import RandomColorGen from './components/RandomColorGen'
import StarRating from './components/StarRating'
import ImageSlider from './components/ImageSlider'
<comp></comp>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageSlider url="https://picsum.photos/v2/list?page=1&limit=10" />
    </>
  )
}

export default App
