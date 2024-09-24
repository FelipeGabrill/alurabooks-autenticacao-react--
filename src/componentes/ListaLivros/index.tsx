import { ICategoria } from "../../interfaces/ICategoria"
import CardLivro from "../CardLivro"
import './ListaLivros.css'
import { ILivro } from "../../interfaces/ILivro"
import { AbBotao, AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"
import { useLivros } from "../../graphql/livros/hooks"
import { useReactiveVar } from "@apollo/client"
import { livrosVar } from "../../graphql/livros/state"

interface ListaLivroProps {
    categoria: ICategoria
}



const ListaLivros = ({ categoria } : ListaLivroProps) => {

    // const { data: produtos } = useQuery({queryKey: ['buscaLivrosPorCategoria', categoria], queryFn: () => obterProdutosDaCategoria(categoria)})

    const [textoBusca, setTextoDaBusca] = useState('')

    const livros = useReactiveVar(livrosVar);
    console.log('Livros - ', livros)

    const { data, refetch } = useLivros(categoria)

    if (data?.livros) {
        livrosVar(data.livros)
    }

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