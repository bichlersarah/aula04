import React from 'react'

const Subtracao = () => {
    const resultado = props.num1 - props.num2;

    return (
      <div className="operacao">
          <h1>O resultado de {props.num1} - {props.num2} = {resultado}</h1>
      </div>
    )
};

export default Subtracao