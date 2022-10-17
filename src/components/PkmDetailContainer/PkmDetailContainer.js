import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { usePkmContext } from "../../context/PkmContext"
import { PkmDetail } from "../PkmDetail/PkmDetail"

export const PkmDetailContainer = () => {


    const { pkmId } = useParams()

    const { activePokemon, setPokemon } = usePkmContext(pkmId)

    const [pokemonSpecies, setPokemonSpecies] = useState(``)

    const [pkmToRender, setPkmToRender] = useState(``)

    useEffect(() => {

        const retrieveNewPkmn = async () => {
            const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmId ? pkmId : 1}`)
            const pokemon = await pokeResponse.json()
            return pokemon
        }
        retrieveNewPkmn()
            .then((pk) => { setPkmToRender(pk); setPokemon(pk) }
            )

        const retrievePkmData = async () => {
            const dataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pkmId ? pkmId : 1}`)
            const data = await dataResponse.json()
            return data
        }
        retrievePkmData()
            .then((data) => setPokemonSpecies(data))
    }, [pkmId])

    return (
        <div className="detailCont__container">
            {pkmToRender && pokemonSpecies && <PkmDetail pkmToRender={pkmToRender} pokemonSpecies={pokemonSpecies} />}
        </div>
    )

}