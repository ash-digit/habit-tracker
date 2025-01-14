import { useState } from 'react'
import './App.css'
import { Habit } from './Habit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section class="flex items-center justify-center h-screen bg-green-400">
      <section class="border-2 rounded border-black bg-blue-500 text-cyan-100 p-9">  
        <Habit  props habitName = "Reading" streak = "2"/>
      </section>
    </section>
    
    </>
  )
}

export default App
