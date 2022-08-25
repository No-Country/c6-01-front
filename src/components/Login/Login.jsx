import React, { useState } from 'react'
import "./login.scss";

const Login = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="bg">
                <div className="middle-width center-flex">
                    <div className="flex-col">
                        <img className="logo-img" src="/logo.png" />
                        <h2>Iniciá sesión en Dóndeestudio.com</h2>
                        <p>En este sitio encontrarás todas las universidades y sus respectivas calificaciones en base a lo que los usuarios opinen.</p>
                    </div>
                </div>
                <div className="middle-width white padding-white">
                    <div className="container">
                        <div className="rounded-grey text">
                            <img className="img-auth" src="/google.png" />
                            <p>Iniciá sesión en Google</p>
                        </div>
                        <div className="rounded-grey text">
                            <img className="img-auth" src="/facebook.png" />
                            <p>Iniciá sesión en Facebook</p>
                        </div>
                        <div className='line'>
                            <hr />
                            <p>O</p>
                            <hr />
                        </div>
                        <h2 className="label text">Dirección de correo electrónico</h2>
                        <div className="rounded-grey text register">
                            <input className="text" placeholder="nombre@mail.com" 
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <h2 className="label text">Contraseña</h2>
                        <div className="rounded-grey text register">
                            <input className="text" placeholder="8 caracteres (1 mayúscula - 1 número)" 
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="forgot-password">
                            <p>Olvidaste la contraseña?</p>
                        </div>
                        <div className="flex remember-div">
                            <input className="remember" type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(!isChecked)} />
                            <label className="text">Recordame</label>
                        </div>
                        <div className="flex login-button">
                            <button className="blue-button text">Iniciar sesión</button>
                            <button className="white-button text">Registrarme</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login