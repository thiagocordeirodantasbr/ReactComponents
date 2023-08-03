import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Classes from './components/Classe';


function App() {

  const classes =  [
    {
      nome: 'Controladores',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Duelistas',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Iniciadores',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Sentinelas',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
  ]



  const [agentes, setAgentes] = useState([])

  const aoNovoAgenteAdicionado = (agente) =>{
      console.log(agente)
      setAgentes([...agentes, agente])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario classes={ classes.map(classes => classes.nome)} aoAgenteCadastrado={agente => aoNovoAgenteAdicionado(agente)}/>
     
      {classes.map(classe => <Classes key={classe.nome} nome={classe.nome} corPrimaria={classe.corPrimaria} corSecundaria={classe.corSecundaria}
      agentes={agentes.filter(agente => agente.classe === classe.nome)} />)}
      
    </div>
  );
}

export default App;
