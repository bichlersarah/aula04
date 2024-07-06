import React from 'react'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit'
import './App.css'

const App = () => {

  return (
    <div className='container'>
      <CelsiusParaFahrenheit valorCelcius={30.0}/>
    </div>
  )
};

export default App