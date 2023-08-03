import './Agente.css';

const Agente = (props) => {
    return (
            <div className="agente">
                <div className="cabecalho">
                <img src={props.imagem} alt={props.nome}/>
                </div>
                <div className="rodape">
                    <h4>{props.nome}</h4>
                    <h5>{props.cargo}</h5>
                </div>
            </div>
        )
}

export default Agente;