import { ICategoria } from "../../interfaces/ICategoria"
import CardLivro from "../CardLivro"
import './ListaLivros.css'
import { ILivro } from "../../interfaces/ILivro"
import { AbBotao, AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"
import { useLivros } from "../../graphql/livros/hooks"

interface ListaLivroProps {
    categoria: ICategoria
}



const ListaLivros = ({ categoria } : ListaLivroProps) => {

    // const { data: produtos } = useQuery({queryKey: ['buscaLivrosPorCategoria', categoria], queryFn: () => obterProdutosDaCategoria(categoria)})

    const [textoBusca, setTextoDaBusca] = useState('')

    const { data, refetch } = useLivros(categoria)

    const buscarLivros = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (textoBusca) {
            refetch({
                categoriaId: categoria.id,
                titulo: textoBusca
            })
        }
    }

    return <section>
        <form onSubmit={buscarLivros} style={{maxWidth: '80%', margin: '0 auto', textAlign: 'center'}}>
            <AbCampoTexto value={textoBusca} onChange={setTextoDaBusca} placeholder="Digite o título" />
            <div style={{marginTop: '16px'}}>
                <AbBotao texto="Buscar"/>
            </div>
        </form>
        <div className="livros">
            {data?.livros.map((livro: ILivro) => <CardLivro livro={livro} key={livro.id}/>)}
        </div>
    </section>
}

export default ListaLivros