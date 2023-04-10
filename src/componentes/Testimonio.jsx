import React from "react";
import '../hojas-de-estilo/Testimonio.css';


function Testimonio (props) {
  return (
    <div className="contenedor-testimonio">
      <img
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt="Imagen de Emma"
        className="testimonio__image" />
      <div className="testimonio__texto-container">
        <p className="texto__nombre">{props.nombre} en {props.pais}</p>
        <p className="texto__cargo">{props.cargo} en {props.empresa}</p>
        <p className="texto__testimonio">"{props.testimonio}"</p>
      </div>
    </div>

  );  
}

export default Testimonio;
