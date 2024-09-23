import { ICategoria } from "../../interfaces/ICategoria"
import CardLivro from "../CardLivro"
import './ListaLivros.css'
import { ILivro } from "../../interfaces/ILivro"
import { gql, useQuery } from "@apollo/client"

interface ListaLivroProps {
    categoria: ICategoria
}

const OBTER_LIVROS = gql`
    query ObterLivros($categoriaId: Int) {
        livros(categoriaId: $categoriaId) {
            id,
            slug,
            titulo,
            imagemCapa,
            opcoesCompra {
                id, 
                preco
            }
        }
    }
`

const ListaLivros = ({ categoria } : ListaLivroProps) => {

    // const { data: produtos } = useQuery({queryKey: ['buscaLivrosPorCategoria', categoria], queryFn: () => obterProdutosDaCategoria(categoria)})

    const { data } = useQuery<{livros : ILivro[]}>(OBTER_LIVROS, {
        variables: {
            categoriaId: categoria.id
        }
    })

    return <section className="livros">
        {data?.livros.map((livro: ILivro) => <CardLivro livro={livro} key={livro.id}/>)}
    </section>
}

export default ListaLivros