import React,{Component} from "react";

export default class Eventos extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0,
        };
        //Para pooder usar this debo hacer un bind
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
                <h2>Eventos en Componentes de Clase</h2>
                
                <nav>
                    <button type="button" className="btn btn-outline-primary" onClick={this.sumar}>+</button>
                    <button type="button" className="btn btn-outline-primary"onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}