import { ICategoria } from "../../interfaces/ICategoria"
import CardLivro from "../CardLivro"
import './ListaLivros.css'
import { AbCampoTexto } from "ds-alurabooks"
import { useEffect, useState } from "react"
import { useLivros } from "../../graphql/livros/hooks"
import { useReactiveVar } from "@apollo/client"
import { filtroDeLivrosVar, livrosVar } from "../../graphql/livros/state"

interface ListaLivroProps {
    categoria: ICategoria
}

const ListaLivros = ({ categoria }: ListaLivroProps) => {

    const [textoBusca, setTextoDaBusca] = useState('')

    useEffect(() => {
        filtroDeLivrosVar({
            ...filtroDeLivrosVar(),
            titulo: textoBusca.length >= 3 ? textoBusca : ''
        })
    }, [textoBusca])

    useEffect(() => {
        filtroDeLivrosVar({
            ...filtroDeLivrosVar(),
            categoria,
        })
    }, [categoria])

    const livros = useReactiveVar(livrosVar);

    useLivros()

    return <section>
        <form style={{ maxWidth: '80%', margin: '0 auto', textAlign: 'center' }}>
            <AbCampoTexto value={textoBusca} onChange={setTextoDaBusca} placeholder="Digite o título" />
        </form>
        <div className="livros">
            {livros.map(livro => <CardLivro livro={livro} key={livro.id} />)}
        </div>
    </section>
}

export default ListaLivros