export function Login() {
  return (
    <div className="row mt-8">
      <div className="col s12 m4 offset-m4">
        <div className="card">
          <div className="card-content p-24 black-text">
            <span className="card-title">Inicio de sesión</span>
            <form>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Correo</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Contraseña</label>
                </div>
              </div>
              <div className="row">
                <div className="col s4 offset-s4">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Entrar
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
