import React from "react";
import '../hojas-de-estilo/Testimonio.css';


function Form (props) {
  return (
    <div className="create-activity">
                    <h1>Create opinion</h1>
                    <form>

                        <div className="element-create">
                            <label className="label">Nombre: </label>
                            <input type="text" name="Nombre"/>
                        </div>

                        <div className="element-create">
                            <label className="label">País: </label>
                            <input type="text" name="País"/>
                        </div>

                        <div className="element-create">
                            <label className="label">Imagen: </label>
                            <input type="text" name="duration" />
                        </div>

                        <div className="element-create">
                            <label className="label">Cargo: </label>
                            <input type="text" name="Cargo" />
                        </div>

                        <div className="element-create">
                            <label className="label">Empresa: </label>
                            <input type="text" name="Empresa" />
                        </div>

                        <div className="element-create">
                            <label className="label">Testimonio: </label>
                            <input type="text" name="Testimonio" />
                        </div>

                        <button type="submit" className="button-create">Create</button>

                    </form>
                </div>

  )
}

export default Form;
