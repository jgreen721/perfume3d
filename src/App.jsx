import { useState } from 'react'
import {Solution1, Solution2} from "./views"
import './App.css'

function App() {
  const [solution1,setSolution1] = useState(false)

  return (
    <div className="app">
      {solution1 ? <Solution1 setSolution1={setSolution1}/> : <Solution2 setSolution1={setSolution1}/>}
    </div>
  )
}

export default App
