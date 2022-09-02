import React, { useState } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="bg">
        <div className="middle-width center-flex">
          <div className="flex-col">
            <img className="logo-img" src="/logo.png" />
            <h2>Registrate en Dóndeestudio.com</h2>
            <p>para poder calificar y opinar sobre carreras y universidades.</p>
            <p>
              En este sitio encontrarás todas las universidades y sus
              respectivas calificaciones en base a lo que los usuarios opinen.{" "}
            </p>
          </div>
        </div>
        <div className="middle-width white padding-white">
          <div className="container">
            <h2 className="label text">Nombre y apellido</h2>
            <div className="rounded-grey text register">
              <input
                className="text"
                placeholder="Juan Perez"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <h2 className="label text">Dirección de correo electrónico</h2>
            <div className="rounded-grey text register">
              <input
                className="text"
                placeholder="nombre@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <h2 className="label text">Nombre de usuario</h2>
            <div className="rounded-grey text register">
              <input
                className="text"
                placeholder="Juan"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <h2 className="label text">Contraseña</h2>
            <div className="rounded-grey text register">
              <input
                className="text"
                placeholder="8 caracteres (1 mayúscula - 1 número)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <h2 className="label text">Confirmar contraseña</h2>
            <div className="rounded-grey text register">
              <input
                className="text"
                placeholder="8 caracteres (1 mayúscula - 1 número)"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            <div className="flex login-button">
              <button className="white-button text">Iniciar sesión</button>
              <button className="blue-button text">Registrarme</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
