import React, { useState } from 'react'

const HookContador = () => { 

    const [contador, setContador] = useState(1)

    const incrementarContador = () => {
        setContador(contador + 1)
    }
    const decrementarContador = () =>{
        setContador(contador - 1)
    }

  return (
    <div className="container">
        <h1>Contador {contador} </h1>
        <button onclick={incrementarContador}>Incrementar Contador</button>

        <br></br>pon
        <br></br>

        <button onclick={decrementarContador}>Decrementar Contador</button>

    </div>
  )
}

export default HookContador