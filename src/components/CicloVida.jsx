import React, { Component } from 'react'; //imrc

export default class CicloVida extends Component{
    constructor(props){
        super(props);
        console.log(0,"El componente se inicializa, aun NO está en el DOM");

        this.state={//es necesario ya que tengo un constructor
            hora: new Date().toLocaleTimeString()
        };

        this.temporizador = null;
    }

    //metodos asociados al boton
    //Para evitar el bindeo usamor arrow function
    iniciar=()=>{
        this.tictac();
    }
    deter=()=>{
        clearInterval(this.temporizador);
    }
    tictac=()=>{
        this.temporizador=setInterval(() => {
           this.setState({
            hora: new Date().toLocaleTimeString()
           }); 
        }, 1000);
    }

    render(){
        console.log(4, "El componente se dibuja o redibuja por algun cambio en el DOM");
        return(
            <>
                <h2>Ciclo de vida de los componentes de clase</h2>
                <h3>{this.state.hora}</h3>
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.deter}>Detener</button>
            </>
        );
    }
}

