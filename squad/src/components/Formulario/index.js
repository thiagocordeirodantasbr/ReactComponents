import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    const classes = [
        'Controladores',
        'Duelistas',
        'Iniciadores',
        'Sentinelas'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [classe, setClasse] = useState('');


    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoAgenteCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            classe: classe
        })
       
    }

    return (   
        <section className="formulario">
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar o card do valorant</h2>
                <CampoTexto  obrigatorio={true} label="Nome"placeholder="Digite o seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu Cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <CampoTexto  obrigatorio={true} label="Imagem" placeholder="Digite a URL da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio={true} label="Classes" itens={classes}  valor={classe} aoAlterado={valor => setClasse(valor)} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;