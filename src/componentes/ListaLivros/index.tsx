import { useQuery } from "@tanstack/react-query"
import { ICategoria } from "../../interfaces/ICategoria"
import CardLivro from "../CardLivro"
import { obterProdutosDaCategoria } from "../../http"
import './ListaLivros.css'
import { ILivro } from "../../interfaces/ILivro"

interface ListaLivroProps {
    categoria: ICategoria
}

const ListaLivros = ({ categoria } : ListaLivroProps) => {

    const { data: produtos } = useQuery({queryKey: ['buscaLivrosPorCategoria', categoria], queryFn: () => obterProdutosDaCategoria(categoria)})

    return <section className="livros">
        {produtos?.map((livro: ILivro) => <CardLivro livro={livro} key={livro.id}/>)}
    </section>
}

export default ListaLivros