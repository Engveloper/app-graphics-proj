import React from "react";

export function TheHeader() {
  return (
    <nav>
      <div class="nav-wrapper grey lighten-5">
        <a href="/" class="brand-logo">
          <img width={70} src="/logo.png" alt="Company logo" />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="black-text text-darken-2">
            <a href="sass.html">Nosotros</a>
          </li>
          <li className="black-text text-darken-2">
            <a href="sass.html">Nuestro Equipo</a>
          </li>
          <li>
            <a href="badges.html">Portafolio</a>
          </li>
          <li>
            <a href="collapsible.html">Inicio de sesión</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
