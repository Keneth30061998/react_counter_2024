import React,{Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0,
        };
        //Para pooder usar this debo hacer un binding
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e){
        console.log("sumando");
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar(e){
        this.setState({ 
            contador: this.state.contador - 1,
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                
                <nav>
                    <button type="button" className="btn btn-outline-primary" onClick={this.sumar}>+</button>
                    <button type="button" className="btn btn-outline-light"onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}


//Properties Initializer
export class EventosES7 extends Component{
   
        state={
            contador:0,
        };
        
    //Para no bindear usamor arrow function
    sumar = (e) => {
        console.log("sumando");
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar = (e) => {
        this.setState({ 
            contador: this.state.contador - 1,
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                
                <nav>
                    <button type="button" className="btn btn-outline-primary" onClick={this.sumar}>+</button>
                    <button type="button" className="btn btn-outline-light"onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }  
}

//Eventos Nativos, Sinteticos y personalizados
export class MasSobreEventos extends Component{

    handleCLick = (e)=>{
        console.log(e);
    }

    render(){
        return(
            <div>
                <h2>Más Sobre Eventos</h2>
                <button className="btn btn-outline-info" onClick={this.handleCLick}>Saludar</button>
            </div>
        );
    }
}