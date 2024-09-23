import { useQuery } from "@tanstack/react-query"
import { ICategoria } from "../../interfaces/ICategoria"
import { obterProdutosPorCategoria } from "../../http"
import CardLivro from "../CardLivro"
import './ListaLivros.css'

interface ListaLivroProps {
    categoria: ICategoria
}

const ListaLivros = ({ categoria } : ListaLivroProps) => {

    const { data: produtos } = useQuery({queryKey: ['buscaLivrosPorCategoria', categoria], queryFn: () => obterProdutosPorCategoria(categoria)})

    return <section className="livros">
        {produtos?.map(livro => <CardLivro livro={livro} key={livro.id}/>)}
    </section>
}

export default ListaLivros