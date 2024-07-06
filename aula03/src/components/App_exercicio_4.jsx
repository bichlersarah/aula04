import React from 'react'
import './App.css'
import ListaDeLivros from './components/ListaDeLivros';

const App = () => {

  /*Aqui eu quero um array de livros onde cada licro é um objeto literal com titulo, autor e ano. 
  const livros = [ { tirulo: "clean code", autor: "bob", ano: 1999} ] */

  const livros = [
    {
      autor: 'O Patinho Feio', 
      autor: 'Hans Christian Andersen',
      ano: '1843'
     },
     {
      autor: 'Código Limpo', 
      autor: 'Uncle Bob',
      ano: '2012'
     }
    ];


  return (
    <div className='container'>
      {/*Importar a lista de livros*/}
      <h1>Lista de Livros</h1>
      <ListaDeLivros livros={livros}/>
      

    </div>
  )
}

export default App