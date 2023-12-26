import { useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState(0);
  const [textValue, setTextValue] = useState("");

  //Bit mais significativo.
  
  const handleText = (e) => {

    const textDigitedByUser = e.target.value;
    //Verifica se a string é maior que 8.
    if(textDigitedByUser.length > 8){

      alert("Comprimento do número a ser convertido não pode ser superior a 8.");

    }else{
      
      converter(textDigitedByUser);
    }
  }
 
  const converter = ( numberToConverter ) => {

    //Verifica se a string digitada está no formato esperado. ^[0-1]+$
    if(numberToConverter.match(/^[0-1]+$/g) === null){

      //Considera o caso do usuário digitar algo na última posição.
      if(numberToConverter === "" && numberToConverter.length === 0){

        setResult(0);
        setTextValue(numberToConverter);
        
      }else{

        alert("Números binários só podem ser formados por 0 ou 1.");
      }
      
    }else{

      setTextValue(numberToConverter);

      let numberConverted = 0;

      const numberReverted = numberToConverter.split("").reverse().join("");

      for(let i = 0; i < numberReverted.length; i++){

        if(numberReverted[i] === "1") numberConverted += Math.pow(2, i);
      }

      setResult(numberConverted);
    }
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
