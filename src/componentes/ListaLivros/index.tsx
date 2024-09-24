import { ICategoria } from "../../interfaces/ICategoria"
import CardLivro from "../CardLivro"
import './ListaLivros.css'
import { ILivro } from "../../interfaces/ILivro"
import { AbBotao, AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"
import { useLivros } from "../../graphql/livros/hooks"
import { useReactiveVar } from "@apollo/client"
import { FiltroDeLivrosVar, livrosVar } from "../../graphql/livros/state"

interface ListaLivroProps {
    categoria: ICategoria
}

const ListaLivros = ({ categoria } : ListaLivroProps) => {

    const [textoBusca, setTextoDaBusca] = useState('')

    FiltroDeLivrosVar({
        categoria,
    })

    const livros = useReactiveVar(livrosVar);
    
    useLivros()

    return <section>
        <form style={{maxWidth: '80%', margin: '0 auto', textAlign: 'center'}}>
            <AbCampoTexto value={textoBusca} onChange={setTextoDaBusca} placeholder="Digite o título" />
            <div style={{marginTop: '16px'}}>
                <AbBotao texto="Buscar"/>
            </div>
        </form>
        <div className="livros">
            {livros.map(livro => <CardLivro livro={livro} key={livro.id}/>)}
        </div>
    </section>
}

export default ListaLivros