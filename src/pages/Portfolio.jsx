import { useEffect, useRef, useState } from "react";
import M from "materialize-css/dist/js/materialize";

export function Portfolio() {
  const modalRef = useRef(null);
  const [projects, setProjects] = useState([
    {
      name: "Nictech",
      techs: "React, Materialize, NodeJS, Express, MongoDB",
      url: "https://nictech.herokuapp.com/",
    },
  ]);
  const [name, setName] = useState("");
  const [techs, setTechs] = useState("");
  const [url, setUrl] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    M.Modal.init(modalRef.current, {});
  }, []);

  const saveProject = () => {
    const modal = M.Modal.getInstance(modalRef.current);

    if (name.length === 0) {
      M.toast({ html: "El nombre del proyecto es requerido" });
      return;
    }
    if (techs.length === 0) {
      M.toast({ html: "Las tecnologias son requeridas" });
      return;
    }
    if (url.length === 0) {
      M.toast({ html: "La url del proyecto es requerida" });
      return;
    }

    if (isEditing) {
      const newProjects = [...projects];
      newProjects[projects.indexOf(currentProject)] = { name, techs, url };
      setProjects(newProjects);
      setIsEditing(false);
      setCurrentProject(null);
    } else {
      setProjects([...projects, { name, techs, url }]);
    }

    setName("");
    setTechs("");
    setUrl("");

    modal.close();
  };

  const deleteProject = (project) => {
    if (
      !window.confirm(`¿Estas seguro de eliminar el proyecto ${project.name}?`)
    ) {
      return;
    }
    const newProjects = projects.filter((p) => p.name !== project.name);
    setProjects(newProjects);
  };

  const editProject = (project) => {
    setIsEditing(true);
    setCurrentProject(project);
    setName(project.name);
    setTechs(project.techs);
    setUrl(project.url);
    const modal = M.Modal.getInstance(modalRef.current);
    modal.open();
  };

  return (
    <>
      <h1>Portafolio</h1>
      <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
        Añadir proyecto
      </a>

      <div className=""></div>
      {projects.map((project, index) => (
        <div key={index} className="row">
          <div className="col s12 m4 offset-m4">
            <div className="card">
              <div className="card-content">
                <h3>{project.name}</h3>
                <p>{project.techs}</p>
                <a href={project.url} target="_blank">
                  Ver proyecto
                </a>
                <div>
                  <button
                    className="btn-floating btn-small waves-effect waves-light red mr-2"
                    onClick={() => deleteProject(project)}
                  >
                    <i className="material-icons">delete</i>
                  </button>
                  <button
                    className="btn-floating btn-small waves-effect waves-light green"
                    onClick={() => editProject(project)}
                  >
                    <i className="material-icons">edit</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div ref={modalRef} id="modal1" className="modal">
        <div className="modal-content">
          <h4>Añadir proyecto</h4>
          <form>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="name"
                  type="text"
                  className="validate"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Nombre</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="techs"
                  type="text"
                  className="validate"
                  value={techs}
                  onChange={(e) => setTechs(e.target.value)}
                />
                <label htmlFor="techs">Tecnologías</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="url"
                  type="text"
                  className="validate"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <label htmlFor="url">URL</label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            className="waves-effect waves-green btn-flat"
            onClick={saveProject}
          >
            Guardar
          </button>
        </div>
      </div>
    </>
  );
}
