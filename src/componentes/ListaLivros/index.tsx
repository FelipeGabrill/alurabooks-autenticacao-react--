import { ICategoria } from "../../interfaces/ICategoria"

interface ListaLivroProps {
    categoria: ICategoria
}

const ListaLivros = ({ categoria } : ListaLivroProps) => {

    console.log(categoria)

    return <></>
}

export default ListaLivros