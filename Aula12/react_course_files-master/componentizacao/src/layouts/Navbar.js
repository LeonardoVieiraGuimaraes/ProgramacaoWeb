import React, { useState, useEffect } from 'react'
import './layouts.css'

export default function Navbar () {

    const [saudacaoRule, setSaudacaoRule] = useState({})

    useEffect(
        () => {
            const data = new Date(2019, 12, 26, 19)
            const hora = data.getHours()
            let saudacaoTemp
            let saudacaoStyleTemp

            if (hora < 12) {
                saudacaoTemp = "Bom dia"
                saudacaoStyleTemp = "blue"
            } else if (hora > 12 && hora < 18) {
                saudacaoTemp = "Boa tarde"
                saudacaoStyleTemp = "green"
            } else {
                saudacaoTemp = "Boa noite"
                saudacaoStyleTemp = "red"
            }
            setSaudacaoRule({saudacao: saudacaoTemp, style: saudacaoStyleTemp})
        } , [])

    return (
        <nav>
            <h1 className="navbar">Componentização</h1>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>ContactUs</li>
                <li>Logout</li>
            </ul>
            <h3 style={{color: saudacaoRule.style}}>{saudacaoRule.saudacao} Fábio Ramos</h3>
        </nav>
    )

}