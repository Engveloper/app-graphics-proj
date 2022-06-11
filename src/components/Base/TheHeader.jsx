import React, { useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize";

export function TheHeader() {
  const sidenavRef = useRef(null);

  useEffect(() => {
    M.Sidenav.init(sidenavRef.current, {});
  }, []);

  return (
    <>
      <nav>
        <div className="nav-wrapper grey lighten-5">
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <Link to="/" className="brand-logo">
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
      <ul className="sidenav" id="mobile-demo" ref={sidenavRef}>
        <li>
          <Link to={"/us"}>Nosotros</Link>
        </li>
        <li>
          <Link to={"/team"}>Nuestro Equipo</Link>
        </li>
        <li>
          <Link to={"/portfolio"}>Portafolio</Link>
        </li>
        <li>
          <Link to={"/login"}>Inicio de sesión</Link>
        </li>
      </ul>
    </>
  );
}
