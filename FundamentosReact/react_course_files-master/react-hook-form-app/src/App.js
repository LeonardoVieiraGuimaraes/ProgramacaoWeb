import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form'

function App() {

  const { register, handleSubmit, errors } = useForm()
  const submitForm = (data) => console.log (data)

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <label>Primeiro Nome: </label>
        <input type="text" name="firstName" ref={register({required: true, minLength: 3})}/>
        { errors.firstName && errors.firstName.type === "required" && <span>Campo Obrigatório</span> } 
        { errors.firstName && errors.firstName.type === "minLength" && <span>Mínimo de 3 caracteres</span> } 
        <br/>
        <label>Segundo Nome: </label>
        <input type="text" name="lastName" ref={register}/><br/>
        <select name="cor" ref={register}>
          <option value="">Selecione</option>
          <option value="p">Preto</option>
          <option value="b">Branco</option>
          <option value="a">Amarelo</option>
        </select><br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
