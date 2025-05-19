import React from 'react';
import './App.css';
import MyInternalHeader from './components/MyInternalHeader'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

export default function App() {
  
  const propriedade = {count: 5, calculoImposto: () => 6 - (6 * 0.02)}
  const theme = {color: "white", backgroundColor: "black"}
  const produtos = [
    {id: 1, name: "Teclado", value: 92.2},
    {id: 2, name: "CPU", value: 120.2},
    {id: 3, name: "Mouse", value: 49.9},
    {id: 4, name: "Adaptador USB", value: 22.6},
    {id: 5, name: "Impressora", value: 140.4}
  ]
  
  return (
    <div>
      <MyInternalHeader theme={theme} />
      <main>
        <div style={theme}>
          Valor: { propriedade.count } <br />
          Resultado do cálculo: { propriedade.calculoImposto() }
        </div>
        <div>
          <About />
          <Contact />
          <section>
            <h2>Produtos: </h2>
            <ol>
              {
                produtos.map(produto => <li>{produto.name}</li>)
              }
            </ol>
            <h3>Valor total: {produtos.reduce( (soma, corrente) => soma + corrente.value, 0 )}</h3>
            <h3>Produtos mais caros: </h3>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}