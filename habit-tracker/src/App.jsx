import { useState } from 'react'
import './App.css'
import { Habit } from './Habit'
import { Colours } from './colours'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className="flex items-center justify-center h-screen">
      <section className="">  
        {/* <Habit  props habitName = "Reading" streak = "2"/> */}
        <Colours />
      </section>
      
    </section>
    
    </>
  )
}

export default App
