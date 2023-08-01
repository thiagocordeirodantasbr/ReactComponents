import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';

function App() {

  const [agentes, setAgentes] = useState([])

  const aoNovoAgenteAdicionado = (agente) =>{
      console.log(agente)
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoAgenteCadastrado={agente => aoNovoAgenteAdicionado(agente)}/>
    </div>
  );
}

export default App;
