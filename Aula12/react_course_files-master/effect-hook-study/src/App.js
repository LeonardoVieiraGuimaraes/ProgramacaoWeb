import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [estados, setEstados] = useState([])
  const [cidades, setCidades] = useState([])
  const [idEstados, setIdEstados] = useState(1)

  useEffect(() => console.log("Executou o efeito quando o componente carregou..."), [])
  useEffect(() => console.log("Executou o efeito com a alteração do nome..."), [name])
  useEffect(() => {
    setEstados([
      {id: 1, name: "Bahia"},
      {id: 2, name: "São Paulo"},
      {id: 3, name: "Rio de Janeiro"},
    ])
  } , [])
  useEffect(() => {
    if (parseInt(idEstados) === 1) {
      setCidades(["Salvador", "Aracajú"])
    } else if (parseInt(idEstados) === 2) {
      setCidades(["São Paulo", "Barueri"])
    } else if (parseInt(idEstados) === 3) {
      setCidades(["Rio de Janeiro", "Guarujá"])
    }
  } , [idEstados])

  const handleChange = event => {
    setIdEstados(event.target.value) 
  }

  return (
    <div>
        <input type="text" value={count} />
        <button onClick={()=> setCount(count + 1)}>Incrementa</button>
        <br />
        <input type="text" value={name} />
        <button onClick={()=> setName(count + 1)}>Altera Name</button>
        <br />
        <select onChange={handleChange}>
          {estados.map(estado => <option value={estado.id}>{estado.name}</option>)}
        </select> <br />
        <select>
          {cidades.map(cidade => <option>{cidade}</option>)}
        </select>
    </div>
  )
}

export default App;
