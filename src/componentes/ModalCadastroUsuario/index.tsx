import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import imagemPrincipal from './assets/login.png';
import { useState } from "react";

const ModalCadastroUsuario = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');


    return (<AbModal 
    titulo="Cadastrar" 
    aberta={true}
    aoFechar={() => console.log('Fechar')}
    >
        <figure>
            <img src={imagemPrincipal} alt="Monitor com fechadura e uma pessoa com uma chave"/> 
        </figure>
        <form>
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
        </form>
        <footer>
            <AbBotao texto='Cadastrar' />
        </footer>
    </AbModal>)
}

export default ModalCadastroUsuario;