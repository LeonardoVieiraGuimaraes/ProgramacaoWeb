import React, { useState } from 'react';
import './components.css'

export default function ItensComponent() {

    const [itens, setItens] = useState([
        {id: 1, name: "Teclado"},
        {id: 2, name: "Mesa"},
        {id: 3, name: "CPU"},
        {id: 4, name: "Mouse"},
        {id: 5, name: "Fonte"},
    ])

    const deleteRow = (event, itemId) => {
        console.log(event)
        console.log(itemId)
    }

    return (
        <div>
            <table><tbody>{itens.map(item => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><button onClick={event => deleteRow(event, item.id)}>-</button></td>
                    </tr>
                )
            })}</tbody></table>
        </div>
    )

}