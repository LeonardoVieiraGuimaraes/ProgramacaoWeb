import React from 'react'
import './contactcard.css'

export default function ContactCard ({contacts}) {

    return (
        <div className="contacts">
        {
            contacts.map(contact =>
                <div className="contact-card">
                    <img src={contact.imgUrl} />
                    <h3>{contact.name}</h3>
                    <p>Telefone: {contact.phone}</p>
                    <p>E-mail: {contact.email}</p>
                </div>
            )
        }
        </div>
    )

}