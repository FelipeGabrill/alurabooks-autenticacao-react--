import { makeVar } from "@apollo/client";
import { ILivro } from "../../interfaces/ILivro";
import { ICategoria } from "../../interfaces/ICategoria";

interface FiltroDeLivros {
    categoria?: ICategoria,
    titulo?: string
}

export const FiltroDeLivrosVar= makeVar<FiltroDeLivros>({})

export const livrosVar = makeVar<ILivro[]>([])