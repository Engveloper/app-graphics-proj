import React, { useState } from "react";

import homeImage from "../resources/img/main-background.jpg";
import M from "materialize-css/dist/js/materialize";

export function Home() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length === 0) {
      M.toast({ html: "El nombre es requerido" });
      return;
    }
    if (lastName.length === 0) {
      M.toast({ html: "El apellido es requerido" });
      return;
    }
    if (email.length === 0) {
      M.toast({ html: "El email es requerido" });
      return;
    }
    if (subject.length === 0) {
      M.toast({ html: "El asunto es requerido" });
      return;
    }

    M.toast({ html: "Mensaje enviado, pronto le estaremos respondiendo" });
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        height: "calc(100vh - 2rem)",
      }}
    >
      <div className="content p-4 row m-content-flex">
        <div className="col s12 m6">
          <div>
            <h1>Nictech</h1>
            <p>Desarrollando tu presente para un mejor futuro</p>
          </div>
        </div>
        <div className="col s12 m6 px-8">
          <div className="px-8">
            <div className="card px-8 contact-card">
              <div className="card-content black-text">
                <span className="card-title">Contáctenos</span>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="input-field col s6">
                      <input
                        id="firstname"
                        type="text"
                        className="validate"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="firstname">Nombre</label>
                    </div>
                    <div className="input-field col s6">
                      <input
                        id="lastname"
                        type="text"
                        className="validate"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label htmlFor="lastname">Apellido</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="email"
                        type="email"
                        className="validate"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Correo</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        id="subject"
                        className="materialize-textarea"
                        onChange={(e) => setSubject(e.target.value)}
                      ></textarea>
                      <label htmlFor="subject">Asunto</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s4 offset-s4">
                      <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        name="action"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
