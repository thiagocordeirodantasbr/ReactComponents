import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {

    const classes = [
        'Controladores',
        'Duelistas',
        'Iniciadores',
        'Sentinelas'
    ]

    const aoSalvar = (event) => {
        console.log('oi');
        event.preventDefault()
        
    }

    return (   
        <section className="formulario">
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar o card do valorant</h2>
                <CampoTexto  obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu Cargo" />
                <CampoTexto  obrigatorio={true} label="Imagem" placeholder="Digite a URL da imagem" />
                <ListaSuspensa obrigatorio={true} label="Classes" itens={classes} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;