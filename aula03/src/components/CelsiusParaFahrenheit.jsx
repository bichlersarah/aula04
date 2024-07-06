import React from 'react'

const CelsiusParaFahrenheit = (props) => {
    const f = (1.8 * props.valorCelcius) + 32;
  return (
    <div className="conversao">
        <h1> O valor da conversão de {props.valorCelcius} °C para °F é: {f.toFixed(2)}° </h1>
        </div>
  )
};

export default CelsiusParaFahrenheit