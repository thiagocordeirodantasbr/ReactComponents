import Agente from '../Agente';
import './Classes.css';

const Classes = (props) => {
    return (
    <section className="classe" style={ { backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="agentes">
                {props.agentes.map( agente =>  <Agente nome={agente.nome} cargo={agente.cargo} imagem={agente.imagem} />)}
            </div>
          
        </section>
    )
}


export default Classes;