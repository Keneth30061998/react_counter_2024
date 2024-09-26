import React from "react";
import PropTypes, { number } from "prop-types";

export default function Propiedades(props){
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero" : "Falso"}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
                <li>{props.numero}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}

Propiedades.defaultProps={
    porDefecto: "Las Props",
};

Propiedades.propTypes={
    numero: PropTypes.number,
};