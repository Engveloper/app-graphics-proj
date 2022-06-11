import React from "react";

import homeImage from "../resources/img/main-background.jpg";

export function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        height: "calc(100vh - 2rem)",
      }}
    >
      <div className="content p-4 row">
        <div className="col s12 m6">
          <h1>Nictech</h1>
          <p>Desarrollando tu presente para un mejor futuro</p>
        </div>
        <div className="col s12 m6 px-8">
          <div className="px-8">
            <div class="card px-8 contact-card">
              <div class="card-content black-text">
                <span class="card-title">Contáctenos</span>
                <form>
                  <div class="row">
                    <div class="input-field col s6">
                      <input id="firstname" type="text" class="validate" />
                      <label htmlFor="firstname">Nombre</label>
                    </div>
                    <div class="input-field col s6">
                      <input id="lastname" type="text" class="validate" />
                      <label htmlFor="lastname">Apellido</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate" />
                      <label htmlFor="email">Correo</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea
                        id="subject"
                        class="materialize-textarea"
                      ></textarea>
                      <label for="subject">Asunto</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col s4 offset-s4">
                      <button
                        class="btn waves-effect waves-light"
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
