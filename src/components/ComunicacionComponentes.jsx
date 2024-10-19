import React,{Component} from "react";

//aun trabajamos componentes de clases
export default class Padre extends Component{

    //componentes de clases con estructura de property initializer
    state = {
        contador: 0,
    };

    incrementarContador = (e)=>{ //este metodo lo va a ejecutar el componente hijo
        this.setState({
            contador:  this.state.contador+1
        })
    }

    render(){
        return(
            <>
                <h2>Comunicacion entre componentes</h2>
                <p>Contador <b>{this.state.contador}</b></p>
                <Hijo mensaje="Mesaje para el hijo 1"></Hijo>
                <Hijo incrementarContador={this.incrementarContador} mensaje="Mesaje para el hijo 2"></Hijo>
            </>
        );
    }
}

function Hijo(props){
    return(
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}> + </button>
        </>
    );
}