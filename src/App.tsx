import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function countUp() {
    setCount(count+1);
  }

  return (
    <>
      <div className='bg-cyan-200'>{count}</div>
      <button onClick={countUp}>click</button>
    </>
  )
}

export default App
