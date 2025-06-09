import React, { useState } from 'react'

export default function Home() {

    const [name, setName] = useState('')

    return (
        <main>
            <p>Aqui viriam as informações relacionadas com o cadastro seguinte</p>
            <p>
                <label>Nome: </label>
                <input type="text" value={name} placeholder="Nome completo"/>
            </p>
            <p>
                <label>Interesses:</label><br />
                <input type="checkbox" name="interesses"/>Futebol<br />
                <input type="checkbox" name="interesses"/>Sexo<br />
                <input type="checkbox" name="interesses"/>Tecnologia
            </p>
            <button>Inserir</button>
        </main>
    )

}