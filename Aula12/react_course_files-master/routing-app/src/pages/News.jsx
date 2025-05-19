import React from 'react'
import { Link } from 'react-router-dom'

export default function News () {

    const newsData = [
        {id: 1, name:"Notíticas sobre o Brasil"},
        {id: 2, name:"Notíticas sobre o EUA"},
        {id: 3, name:"Notíticas sobre o Argentina"},
        {id: 4, name:"Notíticas sobre o Afeganistão"}
    ]

    return (
        <div>
            <h2>News of the day: </h2>
            {
                newsData.map(data => (
                    <h3>
                        <Link to={`/news/${data.id}`}>{data.name}</Link>
                    </h3>
                ))
            }
        </div>
    )

}