import React, { useState } from 'react'
import './App.css'
import MyInternalHeader from './components/MyInternalHeader'
import Home from './pages/Home'
import CalculoImposto from './components/CalculoImposto'
import ItensCompra from './ItensCompraData'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

export default function App () {

  const myCbFunctionAfterCalc = () => console.log('Realizou a operação de CB')

  const[quantidade, setQuantidade] = useState(1)
  const[itensCompra] = useState(ItensCompra)
  const[valorTotalCompras] = useState(itensCompra.reduce( (prev, current) => prev + current.valor, 0 ))
  
  return (
    <div>
      <MyInternalHeader />
      <main>
        <Home />
        <section id="contact">
          <h2>Contact</h2>
          <main>
            <p>Contato: 99999-9999</p>
          </main>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <main>
            <p>Nossa empresa...</p>
          </main>
        </section>
      </main>

      <CalculoImposto valorA={quantidade} valorB={valorTotalCompras} cbFunction={myCbFunctionAfterCalc}/> <br />
      <div>
        <ol>
        {
          itensCompra.map(item => {
            return <li key={item.id}>{item.name}</li>
        })
        }
        </ol>
      </div>
      
      <button onClick={() => setQuantidade(quantidade + 1)}>Calcula</button>
    </div>
  )
}