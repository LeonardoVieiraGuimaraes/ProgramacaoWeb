import React, { useState, useRef, useCallback } from 'react';
import CalculateComponent from './CalculateComponent'
import Paint from './components/Paint'
import './App.css';

function App() {

  const [value, setValue] = useState(1)

  const inputRef = useRef()

  const updateRef = () => {
    inputRef.current.value ="Valor qualquer"
    setValue(value + 1)
  }

  const cbAfterComplexCalc = useCallback(()=> {
    console.log("Executou o Callback...")
  }, [])

  return (
    <Paint />
  )
}

export default App;

