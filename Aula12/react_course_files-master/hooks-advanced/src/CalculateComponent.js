import React, {useMemo} from 'react'

export default function CalculateComponent ({pointA, pointB, cbFunction}) {

    const complexCalc = () => {
        return pointA + pointB
    }

    const resultComplexCalc = useMemo(complexCalc, [pointA, pointB])

    cbFunction()

    return (
        <div>Resultado do meu cálculo complexo: {resultComplexCalc}</div>
    )

}