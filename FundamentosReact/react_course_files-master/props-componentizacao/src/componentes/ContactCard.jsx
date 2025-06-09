import React from 'react'
import './contactcard.css'

export default function ContactCard ({name, imgUrl, phone, email}) {

    return (
        <div className="contact-card">
            <img src={imgUrl} />
            <h3>{name}</h3>
            <p>Telefone: {phone}</p>
            <p>E-mail: {email}</p>
        </div>
    )

}