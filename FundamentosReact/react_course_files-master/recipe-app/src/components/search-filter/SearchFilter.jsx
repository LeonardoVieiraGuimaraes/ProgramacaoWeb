import React from 'react'
import './search-filter.styles.css'

export default function SearchFilter({filterLogic}) {
    return (
        <div>
            <ul className="filters">
                <li className="filter" onClick={filterLogic}>Chicken</li>
                <li className="filter" onClick={filterLogic}>Bread</li>
                <li className="filter" onClick={filterLogic}>Soup</li>
                <li className="filter" onClick={filterLogic}>Risoto</li>
                <li className="filter" onClick={filterLogic}>Pasta</li>
            </ul>
        </div>
    )
}