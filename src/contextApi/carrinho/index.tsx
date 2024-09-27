import { ICarrinho } from "../../interfaces/ICarrinho";
import { createContext, ReactElement, useContext } from "react";

export interface ICarrinhoContext {
    carrinho?: ICarrinho
}

export const CarrinhoContext = createContext<ICarrinhoContext>({})

interface CarrinhoProviderProps {
    children: ReactElement
}

const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {

    const carrinho: ICarrinho = {
        itens: [],
        total: 0
    }

    return (

        <CarrinhoContext.Provider value={{ carrinho }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    return useContext<ICarrinhoContext>(CarrinhoContext)
}

export default CarrinhoProvider