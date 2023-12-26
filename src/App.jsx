import { useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState(0)

  return (
    <div className='conatiner'>

      <h1>Conversor binário para decimal</h1>
      <div className='display'><span className='result'>{result}</span></div>

      <input type="text" className='binary-text'/>

    </div>
  )
}

export default App
