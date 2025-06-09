import React from 'react'

const varA = "Valor para o feeedback"

export default function CalculoImposto({valorA, valorB, cbFunction}) {

    const calculaImposto = () => 
        {
            console.log(varA)
            cbFunction()
            return valorA + valorB 
        }
    return (
        <div>Resultado do cálculo: {calculaImposto()}</div>
    )
}

function enviaFeedback() {
    console.log(varA)
}