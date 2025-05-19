import React from 'react'
import './components.css'

import { Link } from 'react-router-dom'

export default function MyNav() {

    return (
        <nav>
            <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li style={{float: "right"}}> <Link to="/about"> About </Link></li>
            </ol>
        </nav>
    )

}