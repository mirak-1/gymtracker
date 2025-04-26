import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/tailwind.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p className='text-red-400'>test tailwind css</p>
    </div>
  )
}

export default App
