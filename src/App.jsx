
import Home from './pages/Home'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
        <Home/>
    </>
  )
}

export default App
