import { useQuery } from "@tanstack/react-query"
import { ICategoria } from "../../interfaces/ICategoria"
import { obterProdutosPorCategoria } from "../../http"
import CardLivro from "../CardLivro"

interface ListaLivroProps {
    categoria: ICategoria
}

const ListaLivros = ({ categoria } : ListaLivroProps) => {

    const { data: produtos } = useQuery({queryKey: ['buscaLivrosPorCategoria', categoria], queryFn: () => obterProdutosPorCategoria(categoria)})

    return <>
        {produtos?.map(livro => <CardLivro livro={livro} key={livro.id}/>)}
    </>
}

export default ListaLivros