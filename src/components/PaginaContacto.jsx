import React, { useState } from "react";
import {  } from "../css/PaginaContacto.css";

export const PaginaContacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario, como hacer una solicitud a un servidor o enviar los datos a través de un correo electrónico.
    // Por ejemplo:
    // console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
  };

  return (
    
    <div className="formulario-container">
      <p>Joyeria personalizada ¡te ayudamos!</p>
      <br />
      {/* <h2>Contacto</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
