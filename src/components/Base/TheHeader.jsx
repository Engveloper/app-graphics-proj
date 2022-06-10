import React from "react";

import { Link } from "react-router-dom";

export function TheHeader() {
  return (
    <nav>
      <div class="nav-wrapper grey lighten-5">
        <Link to="/" class="brand-logo">
          <img width={70} src="/logo.png" alt="Company logo" />
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="black-text text-darken-2">
            <Link to={"/us"}>Nosotros</Link>
          </li>
          <li className="black-text text-darken-2">
            <Link to={"/team"}>Nuestro Equipo</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portafolio</Link>
          </li>
          <li>
            <Link to={"/login"}>Inicio de sesión</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
