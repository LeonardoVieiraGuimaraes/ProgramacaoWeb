import React, { useState } from 'react'

export default function MyInfo({color, backgroundColor}) {

    const [locais] = useState([
        {id: 1, name: 'Portugal'},
        {id: 2, name: 'Austrália'},
        {id: 3, name: 'NZ'},
        {id: 4, name: 'Índia'}
    ])

    return (
        <div>
            <h2>Fábio Ramos</h2>
            <p>Sou desenvolvedor de software...</p>
            <ol>
                {
                    locais.map(local => <li style={{color: color, backgroundColor: backgroundColor}} key={local.id}>{local.name}</li>)
                }
            </ol>
        </div>
    )

}