import React from 'react'

export default function SpecificNew ({match}) {

    console.log(match)

    return (
        <div>
            <h2>Notícia específica id {match.params.id} </h2>
        </div>
    )

}