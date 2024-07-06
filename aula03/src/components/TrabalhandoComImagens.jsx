import React from 'react'
import lírio_branco from '../assets/lírio_branco'

const TrabalhandoComImagens = () => {
  return (
    <div className='container'>
        <h1>Trabalhando com Imagens</h1>
        <div className='imagens'>
          <div className='imagem'>
            <h2>Imagem da pasta public</h2>
            <img src="/lirio-azul.png" alt="Imagem da pasta public" />
          </div>
          <div className='imagem'>
            <h2>Imagem da pasta assests</h2>
            <img src={lírio_branco} alt="imagem da pasta assets"/>
          </div>
        </div>
    </div>
  )
}

export default TrabalhandoComImagens