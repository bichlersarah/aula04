import React from 'react'

const Divisao = (props) => {
    const resultado = props.num1 / props.num2;

  return (
    <div className="operacao">
        <h1>O resultado da divisão entre {props.num1} / {props.num2} = {resultado}</h1>
    </div>
  )
};

export default Divisao