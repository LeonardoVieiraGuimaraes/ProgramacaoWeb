import React, {useState} from 'react';
import './App.css';

function App() {

  const [form, setForm] = useState({firstName: "", 
        lastName: "", informed: true, details: "", 
        gender: "Feminino", cor: "red"})

  const handleChange = (event) => {
    console.log(form)
    const {name, value, type, checked} = event.target
    type === "checkbox" ? setForm( {...form, ...{[name]: checked} }) : setForm( {...form, ...{[name]: value} })
  }

  const submitForm = (event) => {
    event.preventDefault()
    console.log(form)
  }

  return (
    <form onSubmit={submitForm}>
        <input type="text" 
          name="firstName" 
          placeholder="Primeiro Nome" 
          value={form.firstName}
          onChange={handleChange} />
        <br />
        <input type="text" 
            name="lastName" 
            placeholder="Último Nome" 
            value={form.lastName}
            onChange={handleChange} />
        <br />
        <input 
          type="checkbox"
          name="informed"
          checked={form.informed} 
          onChange={handleChange}/>
        <br />
        <textarea name="details" value={form.details} onChange={handleChange}/>
        <br />

        <label>
          <input 
            type="radio"
            name="gender"
            value="Masculino"
            onChange={handleChange}
            checked={form.gender === "Masculino"}/> Masculino
        </label>
        <label>
          <input 
            type="radio"
            name="gender"
            value="Feminino"
            onChange={handleChange}
            checked={form.gender === "Feminino"}/> Feminino
        </label>
        <br />
        <label>Cor: </label>
        <select name="cor" value={form.cor} onChange={handleChange}>
          <option value="">Selecione...</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <h3>{form.firstName} {form.lastName} {form.cor} {form.informed ? "Informado" : "Desinformado"} {form.details}</h3>
        <br />
        <button>Clique aqui</button>
    </form>
  );
}

export default App;
