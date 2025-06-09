import React from 'react';
import './App.css';
import Calculadora from './components/Calculadora'

function App() {
  return (
    <div>
      <Header />
      <div>
        <Calculadora valor1={4}/>
      </div>
    </div>
  );
}

export default App;

function Header() {
  return (
    <div>
      <header>
        <h1>Título da página</h1>
      </header>
    </div>
  )
}