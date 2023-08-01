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

    return (   
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do valorant</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite a URL da imagem" />
                <ListaSuspensa  label="Classes" itens={classes} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;