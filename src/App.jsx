import { useState } from "react";

//importar componente creado
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";

import "./App.css";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import {EventosES6,EventosES7, MasSobreEventos} from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";

const App = () => {
  
  return (
    <>
      <>
        <div className="container">
          <section>
            <Componente msg="Hola soy un componente desde una prop y arrow function"/>
            <br />
            <br />
            <Propiedades 
            cadena ="Esto es una cadena" 
            numero={1998} 
            booleano={true}
            objeto={{nombre: "Keneth", correo: "kenetknd@gmail.com"}}
            elementoReact={<i>Esto es un elememento React</i>}
            componenteReact = {<Componente msg="Soy un componente pasado como Prop"/>}
            />
            <hr />
            <Estado/>
            <hr />
            <RenderizadoCondicional/>
            <hr />
            <RenderizadoElementos/>
            <hr />
            <EventosES6/>
            <hr />
            <EventosES7/>
            <hr />
            <MasSobreEventos/>
            <hr />
            <ComunicacionComponentes/>
            <hr />
            <CicloVida></CicloVida>
            <hr />
            <AjaxApis></AjaxApis>
          </section>
        </div>
      </>
    </>
  );
};

export default App;
