import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import imagemPrincipal from './assets/login.png';
import { useState } from "react";
import axios from "axios";
import './ModalCadastroUsuario.css';

const ModalCadastroUsuario = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            nome,
            email,
            senha,
            endereco,
            cep,
            complemento
        }

        axios.post('http://localhost:8000/public/registrar', usuario)
            .then(() => {
                alert('Usuário foi cadastrado com sucesso!')
                setNome('')
                setEmail('')
                setEndereco('')
                setComplemento('')
                setCep('')
                setSenha('')
                setConfirmarSenha('')
            }).catch(() => {
                alert('OPS, algo deu errado!')
            })
    }

    return (<AbModal
        titulo="Cadastrar"
        aberta={true}
        aoFechar={() => console.log('Fechar')}
    >
        <div className='corpoModalCadastro'>
            <figure>
                <img src={imagemPrincipal} alt="Monitor com fechadura e uma pessoa com uma chave" />
            </figure>
            <form onSubmit={aoSubmeterFormulario}>
                <AbCampoTexto
                    value={nome}
                    label='Nome'
                    onChange={setNome}
                />
                <AbCampoTexto
                    value={email}
                    label='Email'
                    onChange={setEmail}
                />
                <AbCampoTexto
                    value={endereco}
                    label='Endereco'
                    onChange={setEndereco}
                />
                <AbCampoTexto
                    value={complemento}
                    label='Complemento'
                    onChange={setComplemento}
                />
                <AbCampoTexto
                    value={cep}
                    label='CEP'
                    onChange={setCep}
                />
                <AbCampoTexto
                    value={senha}
                    label='Senha'
                    onChange={setSenha}
                />
                <AbCampoTexto
                    value={confirmarSenha}
                    label='Confirmar Senha'
                    onChange={setConfirmarSenha}
                />
                <footer>
                    <AbBotao texto='Cadastrar' />
                </footer>
            </form>
        </div>
    </AbModal>)
}

export default ModalCadastroUsuario;