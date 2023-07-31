import './App.css';
import Banner from './components/Banner';
import CampoTexto from './components/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite o seu nome" />
      <CampoTexto label="Cargo" placeholder="Digite o seu Cargo" />
      <CampoTexto label="Imagem" placeholder="Digite a URL da imagem" />
    </div>
  );
}

export default App;
