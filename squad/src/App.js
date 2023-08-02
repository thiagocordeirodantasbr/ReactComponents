import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const [agentes, setAgentes] = useState([])

  const aoNovoAgenteAdicionado = (agente) =>{
      console.log(agente)
      setAgentes(...agentes, agente)
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoAgenteCadastrado={agente => aoNovoAgenteAdicionado(agente)}/>
      <Time nome="Controladores"/>
      <Time nome="Duelistas"/>
      <Time nome="Iniciadores"/>
      <Time nome="Sentinelas"/>
    </div>
  );
}

export default App;
