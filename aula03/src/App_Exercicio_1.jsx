import React from 'react'
import Adicao from './components/Adicao'
import './App.css'
import Divisao from './components/Divisao';
import Subtracao from './components/Subtracao';

const App = () => {
  return (
    <div className="container">
      <Adicao num1={2} num2={3}/>
      <Subtracao num1={2} num2={3}/>
      <Divisao num1={8} num2={2}/>
    </div>
  )
};


export default App