import { useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState(0);
  const [textValue, setTextValue] = useState("");

  const handleText = (e) => {

    const text = e.target.value;
    //Verifica se a string é maior que 8.
    if(text.length > 8){

      alert("Comprimento do número a ser convertido não pode ser superior a 8.");
    }else{

      setTextValue(text);
      converter();
    }
  }
 
  const converter = (e) => {

    const numberToConverter = textValue;
    
    
  } 

  return (
    <div className='conatiner'>

      <h1>Conversor binário para decimal</h1>
      <div className='display'><span className='result'>{result}</span></div>

      <input type="text" value={textValue} className='binary-text' onChange={handleText}/>

    </div>
  )
}

export default App
