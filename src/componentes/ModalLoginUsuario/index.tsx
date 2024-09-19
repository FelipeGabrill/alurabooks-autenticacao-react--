import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import imagemPrincipal from './assets/login.png';
import { useState } from "react";
import axios from "axios";
import './ModalLoginUsuario.css';

interface PropsModalCadastroUsuario {
    aberta: boolean
    aoFechar: () => void
    aoEfetuarLogin: () => void
}

const ModalLoginUsuario = ({aberta, aoFechar, aoEfetuarLogin} : PropsModalCadastroUsuario) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            email,
            senha
        }

        axios.post('http://localhost:8000/public/login', usuario)
            .then(resposta => {
                sessionStorage.setItem('token', resposta.data.access_token)
                setEmail('')
                setSenha('')
                aoFechar()
            }) .catch(erro => {
                if (erro?.response?.data?.message) {
                    alert(erro.response.data.message)
                } else {
                    alert('Aconteceu um erro inesperado ao efetuar o login! Entre em contato com o suporte!')
                }
            })
        }

    return (<AbModal
        titulo="Login"
        aberta={aberta}
        aoFechar={aoFechar}
    >
        <section className='corpoModalCadastro'>
            <figure>
                <img src={imagemPrincipal} alt="Monitor com fechadura e uma pessoa com uma chave" />
            </figure>
            <form onSubmit={aoSubmeterFormulario}>
                <AbCampoTexto
                    value={email}
                    label='Email'
                    onChange={setEmail}
                    type='email'
                />
                <AbCampoTexto
                    value={senha}
                    label='Senha'
                    onChange={setSenha}
                    type='password'
                />
                <div className="acoes">
                    <AbBotao texto='Fazer Login' />
                </div>
            </form>
        </section>
    </AbModal>)
}

export default ModalLoginUsuario;