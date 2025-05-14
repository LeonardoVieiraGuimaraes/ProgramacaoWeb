import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './Hello.jsx'
import MeuComponente from './MeuComponente.jsx'


const element = <h1>Hello World!</h1>;

createRoot(document.getElementById('app')).render(element);

function UserGreeting() {
  return <h1>Bem-vindo!</h1>;
}

function GuestGreeting() {
  return <h1>Por favor, faça login.</h1>;
}

function Greeting(props) {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

const element1 = < Greeting isLoggedIn={true}/>

createRoot(document.getElementById('root')).render(element1);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// createRoot(document.getElementById('root1')).render(
//   <StrictMode>
//     <Hello />
//   </StrictMode>,
// )

// createRoot(document.getElementById('root2')).render(
//   <StrictMode>
//     <MeuComponente />
//   </StrictMode>,
// )

// createRoot(document.getElementById('root3')).render(
//   <StrictMode>
//     <Greeting isLoggedIn={true} />
//   </StrictMode>,
// )

