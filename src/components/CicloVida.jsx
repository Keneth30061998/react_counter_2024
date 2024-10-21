import React, { Component } from 'react'; //imrc

// Ciclo de Vida 
// -Montaje
//     *constructo()
//     *render()
//     *componentDidMount()
// -Actualizacion
//     *render()
//     *componentDidUpdate()
// -Desmontaje
//     *componentWillUnmount()

class Reloj extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <h3>{this.props.hora}</h3>
    }
    componentWillUnmount(){
        console.log(3,"El componente ha sido eliminado del DOM");
    }

}

export default class CicloVida extends Component{
    constructor(props){
        super(props);
        console.log(0,"El componente se inicializa, aun NO está en el DOM");

        this.state={//es necesario ya que tengo un constructor
            hora: new Date().toLocaleTimeString(),
            visible: false
        };

        this.temporizador = null;
    }
    componentDidMount(){
        console.log(1,"El componente ya se encuentra en el DOM")
        //cargar datos de una api
    }

    componentDidUpdate(prevProps, prevState){
        console.log(2,"El estado o las props del componente han cambiado");
        console.log(prevProps);
        console.log(prevState);
    }

  
    //metodos asociados al boton
    //Para evitar el bindeo usamor arrow function
    iniciar=()=>{
        this.tictac();
        this.setState({
            visible: true,
        });
    }
    deter=()=>{
        clearInterval(this.temporizador);
        this.setState({
            visible: false,
        });
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
                {/* <h3>{this.state.hora}</h3> */}
                {this.state.visible&&<Reloj hora={this.state.hora}/>} 
                <button className='btn btn-light' onClick={this.iniciar}>Iniciar</button>
                <button className='btn btn-light' onClick={this.deter}>Detener</button>
            </>
        );
    }
}

