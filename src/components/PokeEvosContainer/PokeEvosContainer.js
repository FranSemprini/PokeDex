import { useState } from "react"
import { PokeEvos } from "../PokeEvos/PokeEvos"

export const PokeEvosContainer = ({ evos }) => {

    const [evolutions, setEvolutions] = useState(``)

    useState(() => {
        const retrieveNewPkmn = async () => {
            const pokeResponse = await fetch(evos.url)
            const pokemon = await pokeResponse.json()
            return pokemon
        }
        retrieveNewPkmn().then((resp) => setEvolutions(resp))
    }, [evos])

    return (
        <div>
            { evolutions && <PokeEvos evolutions={evolutions} />}
        </div>
    )
}