import React, { useState } from 'react'
import "./contact.scss";

const Contact = () => {

    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
            <div className="bg">
                <div className="middle-width center-flex">
                    <div className="flex-col">
                        <img className="logo-img" src="/logo.png" />
                        <h2>Contactate con Dóndeestudio.com</h2>
                        <p>Si tenés alguna duda, consulta o sugerencia no dudes en enviarnos un mensaje.
Nos encataría saber que opinas sobre la plataforma.</p>
                    </div>
                </div>
                <div className="middle-width white padding-white">
                    <div className="container">
                        <h2 className="label text">Nombre y apellido</h2>
                        <div className="rounded-grey text register">
                            <input className="text" placeholder="Juan perez" 
                                value={nickname} onChange={(e) => setNickname(e.target.value)}
                            />
                        </div>
                        <h2 className="label text">Dirección de correo electrónico</h2>
                        <div className="rounded-grey text register">
                            <input className="text" placeholder="nombre@mail.com" 
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <h2 className="label text">Mensaje</h2>
                        <div className="rounded-grey-text-area text register">
                            <input className="text" placeholder="nombre@mail.com" 
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex login-button">
                            <button className="blue-button text">Enviar</button>
                            <button className="white-button text">Borrar</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact