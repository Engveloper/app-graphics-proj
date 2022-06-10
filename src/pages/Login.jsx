export function Login() {
  return (
    <div class="row mt-8">
      <div class="col s12 m4 offset-m4">
        <div class="card">
          <div class="card-content p-24 black-text">
            <span class="card-title">Inicio de sesión</span>
            <form>
              <div class="row">
                <div class="input-field col s12">
                  <input id="email" type="email" class="validate" />
                  <label for="email">Correo</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="password" type="password" class="validate" />
                  <label for="password">Contraseña</label>
                </div>
              </div>
              <div class="row">
                <div class="col s4 offset-s4">
                  <button
                    class="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Entrar
                    <i class="material-icons right">send</i>
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
