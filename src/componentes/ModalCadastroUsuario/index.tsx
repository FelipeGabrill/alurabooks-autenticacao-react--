import { AbModal } from "ds-alurabooks";

const ModalCadastroUsuario = () => {
    return (<AbModal 
    titulo="Cadastrar" 
    aberta={true}
    aoFechar={() => console.log('Fechar')}
    >
        <h1>Olá mundo</h1>
    </AbModal>)
}

export default ModalCadastroUsuario;