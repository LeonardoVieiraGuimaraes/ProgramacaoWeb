import React from 'react'
import './search-box.styles.css'

export default function SearchBox({updateFunction, placeholder}) {

    return (
        <div>
            <input 
                type="text" 
                className="search-bar"
                name="searchQueryTemp" 
                placeholder={placeholder}
                onChange={updateFunction} />
            <button className="search-button">
                <i className="fas fa-search" />
            </button>
        </div>
    )

}