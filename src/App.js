import './App.css';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js';
import {useState} from 'react';
import {evaluate} from 'mathjs';
import Logo from './componentes/Logo.js';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput (input + val);
  };

  const calcularResultado = () => {
    
    const expresionValida = /^(\d+(\.\d+)?([\+\-\*\/]\d+(\.\d+)?)*?)$/;
    if (!expresionValida.test(input)) {
      alert("La expresión ingresada es inválida");
      return;
    }
  
   
    const inputCadena = typeof input === 'number' ? input.toString() : input;
  
    
    if (inputCadena) {
      setInput(evaluate(inputCadena));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos");
    } 
  };
  

  return (
    <div className="App">
      <Logo /> 
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic ={agregarInput}>1</Boton>
          <Boton manejarClic ={agregarInput}>2</Boton>
          <Boton manejarClic ={agregarInput}>3</Boton>
          <Boton manejarClic ={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic ={agregarInput}>4</Boton>
        <Boton manejarClic ={agregarInput}>5</Boton>
        <Boton manejarClic ={agregarInput}>6</Boton>
        <Boton manejarClic ={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic ={agregarInput}>7</Boton>
        <Boton manejarClic ={agregarInput}>8</Boton>
        <Boton manejarClic ={agregarInput}>9</Boton>
        <Boton manejarClic ={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic ={calcularResultado}>=</Boton>
        <Boton manejarClic ={agregarInput}>0</Boton>
        <Boton manejarClic ={agregarInput}>.</Boton>
        <Boton manejarClic ={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        
        </div>
      </div>
    </div>
  );
}

export default App;
