import React, { useState } from 'react';

export default function ListaComponent() {

    const [listagem, setListagem] = useState([
        {id: 1, name: "React com Hooks"},
        {id: 2, name: "React Native"},
        {id: 3, name: "Java com GraphQl"},
        {id: 4, name: "Node.js"},
        {id: 5, name: "Python"}
    ])

    const displayName = (event, itemId) => {
        listagem.forEach(item => {
            if (item.id === itemId)
                console.log(item.name)
        })
    }

    return (
        <div>
            <ul>{
                listagem.map(item => <li onClick={(event) => displayName(event, item.id)} key={item.id}>{item.name}</li>)
            }</ul>
        </div>
    )

}