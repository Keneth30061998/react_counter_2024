import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementosLista(props){
  return(
    <li>
      <a href={props.el.web}>{props.el.name}</a>
    </li>
  );
}

export class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Otoño", "Invierno", "Verano"],
    };
  }
  render() {
    console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((el,index) => (
            <li key={index}>{el}</li>
          ))}
        </ol>
        <h3>Framewors de Desarrollo: FrontEnd</h3>
        <ul>
          {
            data.frameworks.map((el,index)=>(<ElementosLista key={index} el={el}/>))
          }
        </ul>
      </div>
    );
  }
}

export default RenderizadoElementos;
