import { createContext, useContext, useState } from "react"

export const PkmContext = createContext()

export const PkmProvider = ({ children }) => {

    const [activePokemon, setActivePokemon] = useState(``)

    const setPokemon = (pokemon) => {
        setActivePokemon(pokemon)
    }

    return (
        <PkmContext.Provider value={{ activePokemon, setPokemon }}>
            {children}
        </PkmContext.Provider>
    )
}

export const usePkmContext = () => {
    return useContext(PkmContext)
}